import { readFile, rm, writeFile } from 'node:fs/promises';

const templatePath = new URL('../dist/index.html', import.meta.url);
const serverEntryPath = new URL('../.ssr/entry-server.js', import.meta.url);

const template = await readFile(templatePath, 'utf8');
const { render } = await import(serverEntryPath.href);
const appHtml = render();

if (!template.includes('<!--app-html-->')) {
  throw new Error('Prerender placeholder was not found in dist/index.html');
}

await writeFile(templatePath, template.replace('<!--app-html-->', appHtml), 'utf8');
await rm(new URL('../.ssr', import.meta.url), { recursive: true, force: true });
