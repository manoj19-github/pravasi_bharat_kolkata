const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const destDir = path.join(__dirname, '..', 'src', 'assets', 'images', 'destinations');
if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

const DESTINATION_PAGES = [
  { id: 'kumartuli', title: 'Kumortuli', prefix: 'kumartuli' },
  { id: 'college-street', title: 'College_Street_(Kolkata)', prefix: 'college_street' },
  { id: 'park-street', title: 'Park_Street,_Kolkata', prefix: 'park_street' },
  { id: 'new-market-gariahat', title: 'New_Market,_Kolkata', prefix: 'new_market' },
  { id: 'st-pauls-cathedral', title: 'St._Paul%27s_Cathedral,_Kolkata', prefix: 'st_pauls_cathedral' },
  { id: 'marble-palace', title: 'Marble_Palace_(Kolkata)', prefix: 'marble_palace' },
  { id: 'indian-museum', title: 'Indian_Museum,_Kolkata', prefix: 'indian_museum' },
  { id: 'eden-gardens', title: 'Eden_Gardens', prefix: 'eden_gardens' },
  { id: 'science-city', title: 'Science_City,_Kolkata', prefix: 'science_city' },
  { id: 'alipore-zoo-botanic-garden', title: 'Acharya_Jagadish_Chandra_Bose_Indian_Botanic_Garden', prefix: 'alipore_zoo_botanic' },
  { id: 'netaji-bhawan', title: 'Netaji_Bhawan', prefix: 'netaji_bhawan' },
  { id: 'eco-park', title: 'Eco_Park,_New_Town', prefix: 'eco_park' },
  { id: 'mp-birla-planetarium', title: 'Birla_Planetarium,_Kolkata', prefix: 'mp_birla_planetarium' },
  { id: 'kalighat-temple', title: 'Kalighat_Kali_Temple', prefix: 'kalighat' }
];

async function fetchImagesForPage(item) {
  const apiUrl = `https://en.wikipedia.org/w/api.php?action=query&generator=images&titles=${item.title}&gimlimit=12&prop=imageinfo&iiprop=url&iiurlwidth=1280&format=json`;
  
  try {
    const resRaw = execSync(`curl.exe -s "${apiUrl}" -H "User-Agent: PravasiPortal/1.0 (santr@example.com)"`, { timeout: 15000 }).toString();
    const data = JSON.parse(resRaw);
    if (!data.query || !data.query.pages) return [];

    const pages = Object.values(data.query.pages);
    const validPhotos = [];

    for (const p of pages) {
      if (!p.title || !p.imageinfo || p.imageinfo.length === 0) continue;
      const titleLower = p.title.toLowerCase();
      // Filter out icons, maps, and logos
      if (titleLower.endsWith('.svg') || titleLower.includes('logo') || titleLower.includes('flag') || titleLower.includes('map') || titleLower.includes('icon')) {
        continue;
      }
      const info = p.imageinfo[0];
      const thumbUrl = info.thumburl || info.url;
      if (thumbUrl && (thumbUrl.endsWith('.jpg') || thumbUrl.endsWith('.JPG') || thumbUrl.endsWith('.png') || thumbUrl.includes('.jpg?') || thumbUrl.includes('.JPG?'))) {
        validPhotos.push(thumbUrl);
      }
    }
    return validPhotos;
  } catch (err) {
    console.error(`Error fetching ${item.title}:`, err.message);
    return [];
  }
}

async function run() {
  console.log('Fetching authentic Wikipedia photographs for all destinations...');
  const manifest = {};

  for (const item of DESTINATION_PAGES) {
    console.log(`\nQuerying real photos for ${item.id} (${item.title})...`);
    const urls = await fetchImagesForPage(item);
    console.log(`Found ${urls.length} real photo candidates.`);

    const savedFiles = [];
    let count = 1;

    for (const url of urls) {
      if (count > 4) break;
      const targetFilename = `${item.prefix}_${count}.jpg`;
      const targetPath = path.join(destDir, targetFilename);

      try {
        const cmd = `curl.exe -s -L -o "${targetPath}" "${url}" -H "User-Agent: PravasiPortal/1.0 (santr@example.com)"`;
        execSync(cmd, { stdio: 'ignore', timeout: 20000 });
        if (fs.existsSync(targetPath) && fs.statSync(targetPath).size > 15000) {
          console.log(`  -> Saved [${targetFilename}] (${(fs.statSync(targetPath).size / 1024).toFixed(1)} KB)`);
          savedFiles.push(targetFilename);
          count++;
        }
      } catch (e) {
        // continue
      }
    }
    manifest[item.id] = savedFiles;
  }

  fs.writeFileSync(path.join(__dirname, 'downloaded_manifest.json'), JSON.stringify(manifest, null, 2));
  console.log('\nDownloaded manifest saved to scripts/downloaded_manifest.json');
}

run();
