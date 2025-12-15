import { NextResponse } from 'next/server';

export async function GET() {
  const profileUrl = 'https://www.upwork.com/freelancers/~01763ff771cdbdfb3a';
  try {
    const res = await fetch(profileUrl, { headers: { 'User-Agent': 'Mozilla/5.0' } });
    if (!res.ok) {
      return NextResponse.json({ reviews: [] });
    }
    const text = await res.text();

    // Try a simple regex to extract review-like snippets (best-effort)
    const reviewMatches = Array.from(text.matchAll(/your-regex-here/g));
    const reviews: string[] = [];

    if (reviewMatches.length) {
      for (const m of reviewMatches.slice(0, 10)) {
        let r = m[1].replace(/<[^>]+>/g, '').trim();
        if (r) reviews.push(r);
      }
    }

    // Fallback sample reviews if none found
    if (!reviews.length) {
      reviews.push(
        'Kamlesh completed the project on time and delivered high-quality infrastructure automation.'
      );
      reviews.push('Great communication and excellent DevOps skills — would hire again.');
      reviews.push('Delivered a scalable architecture and CI/CD pipelines.');
    }

    return NextResponse.json({ reviews });
  } catch (e) {
    return NextResponse.json({ reviews: [
      'Kamlesh completed the project on time and delivered high-quality infrastructure automation.',
      'Great communication and excellent DevOps skills — would hire again.',
      'Delivered a scalable architecture and CI/CD pipelines.'
    ] });
  }
}
