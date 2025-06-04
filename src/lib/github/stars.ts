export async function getRepoStars(repoName: string): Promise<number> {
	const username = "mushfikurr";
	const url = `https://api.github.com/repos/${username}/${repoName}`;

	const res = await fetch(url, {
		next: { revalidate: 86400 }
	});

	if (!res.ok) {
		throw new Error(`Failed to fetch repository data: ${res.statusText}`);
	}

	const data = await res.json();
	return data.stargazers_count ?? 0;
}
