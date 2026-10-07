import fs from "node:fs";
import sharp from "sharp";

const list = (d, re) => (fs.existsSync(d) ? fs.readdirSync(d).filter((f) => re.test(f)).sort() : []);
const nice = (f) => f.replace(/\.[^.]+$/, "").replace(/[-_]+/g, " ").replace(/^./, (c) => c.toUpperCase());

const ads = list("public/work/ads", /\.mp4$/i).map((f) => {
  const poster = "public/work/ads/" + f.replace(/\.mp4$/i, ".webp");
  return {
    src: "/work/ads/" + f,
    poster: fs.existsSync(poster) ? poster.replace("public", "") : "",
    title: nice(f),
    note: "WhatsApp, Meta ads, promos",
    ratio: "9 / 16",
  };
});

const flyers = [];
for (const f of list("public/work/flyers", /\.webp$/i)) {
  const m = await sharp("public/work/flyers/" + f).metadata();
  flyers.push({ src: "/work/flyers/" + f, title: nice(f), note: "Flyer", ratio: `${m.width} / ${m.height}` });
}

fs.writeFileSync(
  "src/data/media.js",
  `export const adVideos = ${JSON.stringify(ads, null, 2)}\n\nexport const flyers = ${JSON.stringify(flyers, null, 2)}\n`
);
console.log(`${ads.length} videos, ${flyers.length} flyers`);
