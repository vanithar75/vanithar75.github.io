/**
 * One-time importer: fetch LinkedIn Pulse articles (guest view) and save as markdown + images.
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const BLOGS_DIR = path.join(ROOT, 'src/content/blogs');
const IMAGES_DIR = path.join(ROOT, 'public/images/blogs');

const ARTICLES = [
  { slug: 'navigating-nuances-saas-pricing', path: 'navigating-nuances-saas-pricing-subscriber-vs-vanitha-ramaswami-3i01c', date: '2025-10-03' },
  { slug: 'lean-ai-implementation-model', path: 'lean-ai-implementation-model-vanitha-ramaswami-ejpnc', date: '2025-07-24' },
  { slug: 'two-speed-edge-real-time-ai', path: 'two-speed-edge-from-store-and-forward-real-time-ai-vanitha-ramaswami-s9u0c', date: '2025-06-17' },
  { slug: 'trusted-boot-device-management', path: 'trusted-boot-nuances-device-management-vanitha-ramaswami-4wyqc', date: '2025-04-07' },
  { slug: 'crowdstrike-geo-redundancy-cloud', path: 'what-crowdstrike-teaches-us-geo-redundancy-public-cloud-ramaswami-10itc', date: '2025-01-12' },
  { slug: 'data-sovereignty-domain-driven-design', path: 'navigating-data-sovereignty-edge-cloud-systems-domain-ramaswami-mk8ac', date: '2024-11-21' },
  { slug: 'sovereign-cloud-vs-public-cloud', path: 'sovereign-cloud-vs-public-balancing-control-agility-vanitha-ramaswami-fdpdc', date: '2024-10-16' },
  { slug: 'sensor-deployment-efficiency', path: 'enhancing-sensor-deployment-efficiency-scaling-vanitha-ramaswami-ws3bc', date: '2024-08-15' },
  { slug: 'connected-devices-security-ipr', path: 'managing-connected-devices-navigating-security-ipr-vanitha-ramaswami-pstrc', date: '2024-07-17' },
  { slug: 'modernizing-enterprise-x-plane', path: 'modernizing-enterprise-infrastructure-x-plane-vanitha-ramaswami-oaxcc', date: '2024-05-22' },
  { slug: 'decoding-enterprise-ai-platforms', path: 'decoding-enterprise-ai-platforms-stakeholder-vanitha-ramaswami-l6k3c', date: '2024-04-15' },
  { slug: 'distributing-intelligence-part-2', path: 'optimally-distributing-intelligence-prioritizing-part-ramaswami-xncdf', date: '2024-03-20' },
  { slug: 'distributing-intelligence-part-1', path: 'optimally-distributing-intelligence-prioritizing-video-ramaswami-6zbnc', date: '2024-03-13' },
  { slug: 'edge-computing-singapore', path: 'exploring-dynamic-landscape-edge-computing-singapore-ramaswami-ouhqc', date: '2024-02-01' },
  { slug: 'extending-cellular-connectivity-multicloud', path: 'extending-cellular-connectivity-4g5g-securely-vanitha-ramaswami', date: '2023-08-30' },
  { slug: 'mec-vs-edge-platforms-part-2', path: 'mec-vs-edge-multi-cloud-management-platforms-what-sets-ramaswami-1f', date: '2023-08-23' },
  { slug: 'mec-vs-edge-platforms-part-1', path: 'mec-vs-edge-multi-cloud-management-platforms-what-sets-ramaswami', date: '2023-08-22' },
  { slug: 'iot-device-management-part-3', path: 'iot-device-management-solution-design-value-chain-part-ramaswami', date: '2023-08-19' },
  { slug: 'iot-device-management-part-2', path: 'iot-device-management-solution-design-valuechain-part-ramaswami', date: '2023-05-27' },
  { slug: 'iot-device-management-part-1', path: 'iot-device-management-solution-design-valuechain-vanitha-ramaswami', date: '2023-05-20' },
  { slug: 'edge-platforms-global-infrastructure', path: 'edge-platforms-new-global-digital-infrastructure-vanitha-ramaswami', date: '2023-04-22' },
  { slug: '5g-ott-vs-mec-applications', path: '5g-ott-vs-mec-applications-differentiators-vanitha-ramaswami', date: '2023-06-24' },
  { slug: 'multi-vendor-open-5g-ecosystem', path: 'multi-vendor-open-ecosystem-accelerator-5g-service-ramaswami', date: '2023-06-01' },
  { slug: 'brownfield-telecom-modernization-part-1', path: 'design-considerations-brownfield-telecom-network-vanitha-ramaswami', date: '2023-05-01' },
  { slug: 'brownfield-telecom-modernization-part-2', path: 'design-considerations-brownfield-telecom-network-part-ramaswami', date: '2023-05-15' },
];

const UA =
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';

function decodeHtml(s) {
  return s
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, ' ');
}

function stripTags(html) {
  return decodeHtml(html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim());
}

function extractTitle(html) {
  const og = html.match(/<meta\s+property="og:title"\s+content="([^"]+)"/i);
  if (og) return decodeHtml(og[1].trim());
  const h1 = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
  if (h1) return stripTags(h1[1]);
  return null;
}

function extractPublishedDate(html) {
  const m = html.match(/Published\s+([A-Za-z]+\s+\d{1,2},\s+\d{4})/i);
  if (!m) return null;
  const d = new Date(m[1]);
  if (Number.isNaN(d.getTime())) return null;
  return d.toISOString().slice(0, 10);
}

function extractCoverImage(html) {
  const og = html.match(/<meta\s+property="og:image"\s+content="([^"]+)"/i);
  if (og) return decodeHtml(og[1]);
  const img = html.match(/article-cover_image[^"]*"[^>]*src="([^"]+)"/i);
  if (img) return decodeHtml(img[1]);
  const shrink = html.match(/(https:\/\/media\.licdn\.com\/dms\/image\/[^"'\s]+article-cover[^"'\s]+)/i);
  return shrink ? decodeHtml(shrink[1]) : null;
}

function extractBodyParagraphs(html) {
  const paragraphs = [];
  const articleMatch = html.match(/<article[\s\S]*?<\/article>/i);
  const scope = articleMatch ? articleMatch[0] : html;

  const pRegex = /<p[^>]*>([\s\S]*?)<\/p>/gi;
  let match;
  while ((match = pRegex.exec(scope)) !== null) {
    const text = stripTags(match[1]);
    if (!text || text.length < 20) continue;
    if (/sign in|join linkedin|cookie policy|user agreement/i.test(text)) continue;
    if (/^my opinions are my own/i.test(text)) continue;
    paragraphs.push(text);
  }

  if (paragraphs.length < 3) {
    const divRegex = /<div[^>]*data-test-id="article-content"[^>]*>([\s\S]*?)<\/div>/i;
    const divMatch = divRegex.exec(html);
    if (divMatch) {
      const inner = divMatch[1];
      let m2;
      const p2 = /<p[^>]*>([\s\S]*?)<\/p>/gi;
      while ((m2 = p2.exec(inner)) !== null) {
        const text = stripTags(m2[1]);
        if (text && text.length >= 20 && !paragraphs.includes(text)) paragraphs.push(text);
      }
    }
  }

  return paragraphs;
}

function extractInlineImages(html, slug) {
  const images = [];
  const imgRegex = /<img[^>]+src="(https:\/\/media\.licdn\.com\/[^"]+)"[^>]*>/gi;
  let m;
  while ((m = imgRegex.exec(html)) !== null) {
    const url = decodeHtml(m[1]);
    if (url.includes('article-cover')) continue;
    if (images.some((i) => i.url === url)) continue;
    images.push({ url, alt: '' });
  }
  return images;
}

async function downloadImage(url, destPath) {
  const res = await fetch(url, { headers: { 'User-Agent': UA } });
  if (!res.ok) throw new Error(`Image fetch failed ${res.status}: ${url}`);
  const buf = Buffer.from(await res.arrayBuffer());
  await fs.writeFile(destPath, buf);
}

function yamlEscape(s) {
  return `"${s.replace(/\\/g, '\\\\').replace(/"/g, '\\"')}"`;
}

async function importArticle({ slug, path: pulsePath, date: fallbackDate }) {
  const sourceUrl = `https://www.linkedin.com/pulse/${pulsePath}`;
  console.log(`Fetching ${slug}...`);

  const res = await fetch(sourceUrl, {
    headers: { 'User-Agent': UA, Accept: 'text/html' },
    redirect: 'follow',
  });

  if (!res.ok) {
    return { slug, ok: false, error: `HTTP ${res.status}` };
  }

  const html = await res.text();
  const title = extractTitle(html) || slug;
  const date = extractPublishedDate(html) || fallbackDate;
  const paragraphs = extractBodyParagraphs(html);
  const coverUrl = extractCoverImage(html);
  const inlineImages = extractInlineImages(html, slug);

  const imageDir = path.join(IMAGES_DIR, slug);
  await fs.mkdir(imageDir, { recursive: true });

  let coverImage = '';
  if (coverUrl) {
    const coverFile = 'cover.jpg';
    try {
      await downloadImage(coverUrl, path.join(imageDir, coverFile));
      coverImage = `/images/blogs/${slug}/${coverFile}`;
    } catch (e) {
      console.warn(`  cover image failed: ${e.message}`);
    }
  }

  const bodyParts = [];
  if (coverImage) {
    bodyParts.push(`![${title}](${coverImage})`);
    bodyParts.push('');
  }

  for (const p of paragraphs) {
    bodyParts.push(p);
    bodyParts.push('');
  }

  let imgIndex = 0;
  for (const img of inlineImages.slice(0, 12)) {
    const ext = img.url.includes('.png') ? 'png' : 'jpg';
    const file = `inline-${imgIndex}.${ext}`;
    try {
      await downloadImage(img.url, path.join(imageDir, file));
      bodyParts.push(`![Figure ${imgIndex + 1}](/images/blogs/${slug}/${file})`);
      bodyParts.push('');
      imgIndex++;
    } catch {
      /* skip failed inline images */
    }
  }

  if (paragraphs.length === 0) {
    bodyParts.push(
      '_Full article text could not be extracted automatically. Read the original on LinkedIn._',
      '',
      `[Read on LinkedIn](${sourceUrl})`,
    );
  } else {
    bodyParts.push('---', '', `_Originally published on [LinkedIn](${sourceUrl})._`);
  }

  const description = paragraphs[0]?.slice(0, 200) || title;

  const frontmatterLines = [
    '---',
    `title: ${yamlEscape(title)}`,
    `date: ${date}`,
    `sourceUrl: ${sourceUrl}`,
    `description: ${yamlEscape(description)}`,
    coverImage ? `coverImage: ${coverImage}` : null,
    '---',
  ].filter(Boolean);

  const content = `${frontmatterLines.join('\n')}\n\n${bodyParts.join('\n')}`;
  await fs.writeFile(path.join(BLOGS_DIR, `${slug}.md`), content, 'utf8');

  return {
    slug,
    ok: true,
    title,
    date,
    paragraphs: paragraphs.length,
    images: imgIndex + (coverImage ? 1 : 0),
  };
}

async function main() {
  await fs.mkdir(BLOGS_DIR, { recursive: true });
  await fs.mkdir(IMAGES_DIR, { recursive: true });

  const results = [];
  for (const article of ARTICLES) {
    try {
      results.push(await importArticle(article));
    } catch (e) {
      results.push({ slug: article.slug, ok: false, error: e.message });
    }
  }

  const ok = results.filter((r) => r.ok);
  const failed = results.filter((r) => !r.ok);
  console.log('\n=== Import summary ===');
  console.log(`Success: ${ok.length}`);
  console.log(`Failed: ${failed.length}`);
  for (const r of ok) {
    console.log(`  ✓ ${r.slug} (${r.paragraphs} paragraphs, ${r.images} images)`);
  }
  for (const r of failed) {
    console.log(`  ✗ ${r.slug}: ${r.error}`);
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
