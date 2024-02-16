import { useQuery } from "@tanstack/react-query";

export interface Track {
  active?: boolean;
  title: string;
  artist: string;
  thumbnailUrl: string;
}

function parseTrack(currentTrack: any) {
  const FALLBACK_IMAGE_URL = "";
  const FALLBACK_TITLE = "Unidentified Title";
  const FALLBACK_ARTIST = "Unidentified Artist";

  const active = !!currentTrack["@attr"]?.nowplaying;
  const title = currentTrack["name"] ?? FALLBACK_TITLE;
  const artist = currentTrack.artist["#text"] ?? FALLBACK_ARTIST;
  const thumbnailUrl = currentTrack.image[2]["#text"] ?? FALLBACK_IMAGE_URL;

  const parsedTrack: Track = { active, title, artist, thumbnailUrl };
  return parsedTrack;
}

async function fetchCurrentTrack() {
  const req = await fetch("/api");
  if (!req.ok) {
    throw Error(await req.json());
  }

  const json = await req.json();
  const currentTrack = json.recenttracks.track[0];
  return parseTrack(currentTrack);
}

export function useTrack() {
  const STALE_TIME = 40000;
  const REFETCH_INTERVAL = 10000;

  return useQuery<Track, Error>({
    queryKey: ["currentTrack", "mvshy"],
    queryFn: fetchCurrentTrack,
    staleTime: STALE_TIME,
    refetchInterval: REFETCH_INTERVAL,
  });
}
