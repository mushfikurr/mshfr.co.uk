import { useQuery } from "@tanstack/react-query";

const ENDPOINT = `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=mvshy&api_key=${process.env.REACT_APP_LASTFM_KEY}&format=json`;

async function fetchCurrentTrack() {
  return await fetch(ENDPOINT);
}

interface NowPlayingProps extends React.HTMLAttributes<HTMLDivElement> {}

export function NowPlaying({ className, ...props }: NowPlayingProps) {
  const STALE_TIME = 4000;

  const currentTrack = useQuery({
    queryKey: ["currentTrack", "mvshy"],
    queryFn: fetchCurrentTrack,
    staleTime: STALE_TIME,
  });

  console.log(currentTrack.data);
}
