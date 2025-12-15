import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const username = 'pariharkamal9829';
    const res = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`);
    if (!res.ok) return NextResponse.json({ repos: [] });
    const data = await res.json();
    const repos = (data || [])
      .sort((a: any, b: any) => b.stargazers_count - a.stargazers_count)
      .slice(0, 8)
      .map((r: any) => ({
        name: r.name,
        url: r.html_url,
        description: r.description,
        language: r.language,
        stars: r.stargazers_count,
      }));

    return NextResponse.json({ repos });
  } catch (e) {
    return NextResponse.json({ repos: [] });
  }
}
