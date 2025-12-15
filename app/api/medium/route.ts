import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const rssUrl = 'https://medium.com/feed/@pariharkamlesh576';
    const res = await fetch(rssUrl);
    if (!res.ok) {
      return NextResponse.json({ items: [] });
    }
    const text = await res.text();

    // Simple parse: split by <item> entries
    const parts = text.split('<item');
    const items: Array<{ title: string; link: string; thumbnail?: string }> = [];

    for (let i = 1; i < Math.min(parts.length, 8); i++) {
      const part = parts[i];
      const titleMatch = part.match(/<title>(.*?)<\/title>/i);
      const linkMatch = part.match(/<link>(.*?)<\/link>/i);
      const descMatch = part.match(/<description>([\s\S]*?)<\/description>/i);
      let thumbnail: string | undefined = undefined;

      if (descMatch && descMatch[1]) {
        const desc = descMatch[1];
        const imgMatch = desc.match(/<img[^>]+src="([^"]+)"/i);
        if (imgMatch) thumbnail = imgMatch[1];
      }

      const title = titleMatch ? titleMatch[1] : `Post ${i}`;
      const link = linkMatch ? linkMatch[1] : '#';

      items.push({ title, link, thumbnail });
    }

    return NextResponse.json({ items });
  } catch (e) {
    return NextResponse.json({ items: [] });
  }
}
