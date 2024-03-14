import humanizeDuration from "humanize-duration";
import {
  ExternalLink,
  GitBranch,
  GitBranchPlus,
  Loader2,
  Star,
} from "lucide-react";
import React from "react";
import {
  GitHubActivity,
  useGitHubActivity,
} from "../utils/hooks/useGithubActivity";
import Card from "./ui/Card";
import { SecondaryButton } from "./ui/SecondaryButton";
import { cn } from "../utils/utils";

interface IconObject {
  title: string;
  icon: () => JSX.Element | null;
}
interface IconMap {
  [key: string]: IconObject;
}

export const RecentActivity: React.FC = () => {
  const { data, isLoading, isFetching } = useGitHubActivity();

  const renderActivityCardList = () => {
    if (isLoading) {
      return <Loading />;
    } else {
      return data
        ?.slice(0, 3)
        .map((a, idx) => <ActivityCard key={a.id} activity={a} idx={idx} />);
    }
  };

  return (
    <>
      <h2 className="font-medium text-text-100 text-lg inline-flex items-center gap-3">
        Recent Activity
        {isFetching && (
          <span>
            <Loader2 className="text-text-400 h-4 w-4" />
          </span>
        )}
      </h2>
      <div className="grid grid-auto-fit-lg w-full gap-6 grow pb-16">
        {renderActivityCardList()}
      </div>
    </>
  );
};

function Loading() {
  return (
    <div className="h-full w-full flex items-center justify-center">
      <Loader2 className="h-5 animate-pulse ease-in-out" />
    </div>
  );
}

function ActivityCard({
  activity,
  idx,
}: {
  activity: GitHubActivity;
  idx: number;
}) {
  const EVENT_TO_ICON: IconMap = {
    PushEvent: {
      title: "Commit to",
      icon: () => <GitBranchPlus className={iconClassnames} />,
    },
    WatchEvent: {
      title: "Took interest in",
      icon: () => <Star className={iconClassnames} />,
    },
  };

  const today = new Date();
  const createdAt = new Date(activity.createdAt);
  const difference = today.getTime() - createdAt.getTime();
  const eventTitle = EVENT_TO_ICON[activity.type].title ?? "";
  const formattedCreatedAt = humanizeDuration(difference, {
    units: ["d", "h", "m"],
    round: true,
  });

  const iconToRender = (type: string) => {
    const IconComponent = EVENT_TO_ICON[type].icon;
    return IconComponent ? (
      IconComponent()
    ) : (
      <GitBranch className={iconClassnames} /> // Fallback icon
    );
  };

  const githubUrl = `https://github.com/${activity.repoName}`;

  const handleOpen = () => {
    window.open(githubUrl, "_blank");
  };

  const iconClassnames = "h-5 w-5";
  const delayTime = idx * 75 + "ms";
  return (
    <Card
      key={activity.id}
      className={cn(
        "flex flex-col justify-between gap-6 animate-in fade-in slide-in-from-bottom-16 duration-500 ease-in-out shadow-md"
      )}
      style={{ animationDelay: delayTime }}
    >
      <div className="space-y-1">
        <div className="flex gap-3 w-full items-center">
          {iconToRender(activity.type)}
          <div className="space-y-1">
            <p className="leading-tight -mt-0.5 line-clamp-3 text-ellipsis text-text-100">
              {eventTitle} {activity.repoName}
            </p>
          </div>
        </div>
        <p className="text-text-400 text-sm">{formattedCreatedAt}</p>
      </div>
      <div className="flex w-full justify-end">
        <SecondaryButton onClick={handleOpen}>
          <span className="inline-flex items-center gap-2">
            <p className="h-full leading-none mt-[2.6px]">Visit</p>
            <ExternalLink className="h-4 w-4" />
          </span>
        </SecondaryButton>
      </div>
    </Card>
  );
}
