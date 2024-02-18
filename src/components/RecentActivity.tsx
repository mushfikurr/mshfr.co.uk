import humanizeDuration from "humanize-duration";
import { GitBranch, GitBranchPlus } from "lucide-react";
import {
    useGitHubActivity
} from "../utils/hooks/useGithubActivity";
import Card from "./Card";
import { PrimaryButton } from "./PrimaryButton";

interface IconMap {
  [key: string]: () => JSX.Element | null;
}

export const RecentActivity: React.FC = () => {
  const { data } = useGitHubActivity();
  const EVENT_TO_ICON: IconMap = {
    PushEvent: () => <GitBranchPlus className={iconClassnames} />,
  };

  const iconToRender = (type: string) => {
    const IconComponent = EVENT_TO_ICON[type];
    return IconComponent ? (
      IconComponent()
    ) : (
      <GitBranch className={iconClassnames} /> // Fallback icon
    );
  };

  const iconClassnames = "h-5 w-5";

  return (
    <div className="h-full flex flex-col gap-4 grow">
      <h2 className="font-medium text-text-100 text-lg">Recent Activity</h2>
      <div className="grid grid-auto-fit-lg w-full gap-6 h-full grow pb-12">
        {data?.slice(0, 3).map((a) => {
          const today = new Date();
          const createdAt = new Date(a.createdAt);
          const difference = today.getTime() - createdAt.getTime(); 
          const formattedCreatedAt = humanizeDuration(difference, {
            units: ["d", "h", "m"],
            round: true,
          });
          return (
            <Card key={a.id} className="flex flex-col justify-between">
              <div>
                <div className="flex gap-3 w-full items-center">
                  {iconToRender(a.type)}
                  <p className="leading-none">{a.repoName}</p>
                </div>
                <div className="pl-8 text-text-100/60 text-sm">
                  <p>{formattedCreatedAt}</p>
                </div>
              </div>
              <div className="flex w-full justify-end">
                <PrimaryButton>Open</PrimaryButton>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};
