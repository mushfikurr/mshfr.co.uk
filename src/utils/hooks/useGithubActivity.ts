import { useQuery } from "@tanstack/react-query";

export interface GitHubActivity {
  id: string;
  type: string;
  repoName: string;
  createdAt: string;
}

async function fetchGitHubActivity() {
  const GITHUB_USERNAME = "mushfikurr";
  const response = await fetch(
    `https://api.github.com/users/${GITHUB_USERNAME}/events`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch GitHub activity");
  }

  const data = await response.json();
  const recentActivity = data.map((event: any) => ({
    id: event.id,
    type: event.type,
    repoName: event.repo.name,
    createdAt: event.created_at,
  }));

  return recentActivity;
}

export function useGitHubActivity() {
  const STALE_TIME = 5000;
  const REFETCH_INTERVAL = 300000;

  return useQuery<GitHubActivity[], Error>({
    queryKey: ["githubActivity"],
    queryFn: fetchGitHubActivity,
    staleTime: STALE_TIME,
    refetchInterval: REFETCH_INTERVAL,
  });
}
