import { watch } from "fs/promises";
import { unlink, writeFile } from "node:fs/promises";
import sharp from "sharp";

const PATH = import.meta.dir + "/public";

sharp.cache(false);

const watcher = watch(PATH, { recursive: true });
for await (const event of watcher) {
  const { filename } = event;

  /* Images */
  if (
    filename?.includes(".jpg") ||
    filename?.includes(".jpeg") ||
    filename?.includes(".png")
  ) {
    let buffer = await imageToWebp(PATH + "/" + filename);
    await writeFile(PATH + "/" + filename.replace(".jpg", ".webp"), buffer);
  }
}

async function imageToWebp(img: string) {
  const buffer = await sharp(img).webp({ nearLossless: true }).toBuffer();
  return buffer;
}
