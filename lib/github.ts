export type GithubRepo = { id:number; name:string; html_url:string; description:string|null; language:string|null; stargazers_count:number; homepage:string|null; updated_at:string; fork:boolean; archived:boolean };
const excluded = new Set(["config", ".github"]);
export async function getGithubRepos(username: string): Promise<GithubRepo[]> {
  if (!username) return [];
  try {
    const response = await fetch(`https://api.github.com/users/${encodeURIComponent(username)}/repos?sort=updated&per_page=30`, { headers:{ Accept:"application/vnd.github+json" }, next:{ revalidate:3600 } });
    if (!response.ok) return [];
    const repos = await response.json() as GithubRepo[];
    return repos.filter(r => !r.fork && !r.archived && !excluded.has(r.name.toLowerCase()));
  } catch { return []; }
}
