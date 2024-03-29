import { ChevronRight, FileWarning, Headphones, Loader2 } from "lucide-react";
import { Dispatch, SetStateAction, useState } from "react";
import { Track, useTrack } from "../utils/hooks/useTrack";
import { cn } from "../utils/utils";

interface NowPlayingProps extends React.HTMLAttributes<HTMLDivElement> {}

export const NowPlaying: React.FC<NowPlayingProps> = ({ className }) => {
  const [expanded, setExpanded] = useState(false);
  const trackQuery = useTrack();

  const renderImage = () => {
    if (trackQuery.data) {
      const { title, artist, thumbnailUrl } = trackQuery.data;

      if (!trackQuery.data.thumbnailUrl) {
        return <Empty />;
      }
      return (
        <img
          src={thumbnailUrl}
          alt={`${artist} - ${title} Cover Art`}
          className="object-cover"
        />
      );
    } else if (trackQuery.isFetching) {
      return <Loading />;
    } else {
      return <Empty showFileIcon={true} />;
    }
  };

  return (
    <div
      className={cn(
        "flex items-center gap-3 z-50 top-4 left-4 max-sm:hidden",
        className
      )}
    >
      <div
        className={cn(
          "relative rounded-full border-2 border-text-100/10 h-12 w-12 overflow-clip",
          trackQuery.data?.active && "border-primary",
          trackQuery.isFetching && "animate-pulse",
          trackQuery.isError && "border-0"
        )}
      >
        {renderImage()}
      </div>
      {trackQuery.data && (
        <TrackDetails
          expanded={expanded}
          aria-disabled={trackQuery.isFetching}
          setExpanded={setExpanded}
          track={trackQuery.data}
        />
      )}
    </div>
  );
};

interface TrackDetailsProps extends React.HTMLAttributes<HTMLButtonElement> {
  expanded: boolean;
  setExpanded: Dispatch<SetStateAction<boolean>>;
  track: Track;
}

export const TrackDetails: React.FC<TrackDetailsProps> = ({
  expanded,
  setExpanded,
  track,
  className,
  ...props
}: TrackDetailsProps) => {
  return (
    <div>
      <button
        className={cn(
          "group flex items-center gap-1 text-text-100 h-full pb-0.5 bg-transparent",
          "transition-all duration-300 ease-in-out",
          expanded && "gap-3 bg-background-950/60 backdrop-blur-sm",
          className
        )}
        {...props}
        onClick={() => setExpanded(!expanded)}
      >
        <Headphones
          className={cn(
            "h-4 w-4 text-text-400 group-hover:text-text-100",
            "transition-all duration-500 ease-in-out"
          )}
        />

        <div
          className={cn(
            "text-sm max-w-0 opacity-0 overflow-hidden h-full text-start whitespace-nowrap",
            "transition-all duration-300 ease-in-out",
            expanded && "max-w-xs opacity-100"
          )}
        >
          <h1 className="text-xs tracking-wider text-text-400 ">
            {track.artist}
          </h1>
          <p className="leading-none pb-0.5">{track.title}</p>
        </div>

        <ChevronRight
          className={cn(
            "h-4 w-4 text-text-400 group-hover:text-text-100 group-hover:translate-x-1",
            expanded && "group-hover:-translate-x-1",
            expanded && "rotate-180",
            "transition-translate duration-300 ease-in-out"
          )}
        />
      </button>
    </div>
  );
};

interface EmptyProps extends React.HTMLAttributes<HTMLDivElement> {
  showFileIcon?: boolean;
}

export const Empty: React.FC<EmptyProps> = ({
  showFileIcon,
  ...props
}: EmptyProps) => {
  return (
    <div
      className="object-cover bg-background inline-flex items-center justify-center w-full h-full"
      {...props}
    >
      {showFileIcon && <FileWarning className="text-text-400 h-4 w-4" />}
    </div>
  );
};

interface LoadingProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Loading: React.FC<LoadingProps> = (props: LoadingProps) => {
  return (
    <div
      className="object-cover bg-secondary inline-flex items-center justify-center w-full h-full"
      {...props}
    >
      <Loader2
        className="animate-spin text-text-400 h-5 w-5"
        strokeWidth={0.9}
      />
    </div>
  );
};
