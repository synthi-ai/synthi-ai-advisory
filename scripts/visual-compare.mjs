// Visual comparison: live capgemini.com vs local clone.
// Usage: node scripts/visual-compare.mjs [localUrl]
// Produces screenshots + a pixelmatch diff in scripts/visual-out/.
import { chromium } from '@playwright/test'
import pixelmatch from 'pixelmatch'
import { PNG } from 'pngjs'
import { mkdirSync, writeFileSync, readFileSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const OUT = join(__dirname, 'visual-out')
mkdirSync(OUT, { recursive: true })

const LIVE = 'https://www.capgemini.com/'
const LOCAL = process.argv[2] || 'http://localhost:3010/'
const WIDTH = 1440
const HEIGHT = 900

async function shoot(browser, url, name) {
  const page = await browser.newPage({ viewport: { width: WIDTH, height: HEIGHT } })
  try {
    await page.goto(url, { waitUntil: 'networkidle', timeout: 60000 })
  } catch {
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 })
  }
  // dismiss cookie/consent if present (best effort)
  for (const label of ['Accept all', 'Accept', 'Tout accepter', 'I accept']) {
    const btn = page.getByRole('button', { name: label }).first()
    if (await btn.count().catch(() => 0)) { await btn.click().catch(() => {}); break }
  }
  await page.waitForTimeout(1500)
  const path = join(OUT, `${name}.png`)
  await page.screenshot({ path, clip: { x: 0, y: 0, width: WIDTH, height: HEIGHT } })
  await page.close()
  console.log(`captured ${name} <- ${url}`)
  return path
}

const browser = await chromium.launch()
const livePath = await shoot(browser, LIVE, 'live')
const localPath = await shoot(browser, LOCAL, 'local')
await browser.close()

const a = PNG.sync.read(readFileSync(livePath))
const b = PNG.sync.read(readFileSync(localPath))
const { width, height } = a
const diff = new PNG({ width, height })
const mismatch = pixelmatch(a.data, b.data, diff.data, width, height, { threshold: 0.1 })
writeFileSync(join(OUT, 'diff.png'), PNG.sync.write(diff))

const total = width * height
const pct = ((mismatch / total) * 100).toFixed(2)
console.log(`\nDiff pixels: ${mismatch} / ${total}  (${pct}% different at viewport ${width}x${height})`)
console.log(`Outputs in: ${OUT}`)
