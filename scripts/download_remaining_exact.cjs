const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const destDir = path.join(__dirname, '..', 'src', 'assets', 'images', 'destinations');

const REMAINING_PHOTOS = [
  // Indian Museum
  {
    target: 'indian_museum_1.jpg',
    url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/48/Indian_Museum%2C_Kolkata%2C_India.jpg/1280px-Indian_Museum%2C_Kolkata%2C_India.jpg'
  },
  {
    target: 'indian_museum_2.jpg',
    url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8c/Indian_Museum%2C_Courtyard%2C_Kolkata%2C_India.jpg/1280px-Indian_Museum%2C_Courtyard%2C_Kolkata%2C_India.jpg'
  },
  {
    target: 'indian_museum_3.jpg',
    url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/79/Ashok_Stambha_at_Indian_Museum%2C_Kolkata.jpg/1280px-Ashok_Stambha_at_Indian_Museum%2C_Kolkata.jpg'
  },
  {
    target: 'indian_museum_4.jpg',
    url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f6/Buddha_Preaching_in_Tushita_Heaven._Amaravati%2C_Satavahana_period%2C_2d_century_AD._Indian_Museum%2C_Calcutta.jpg/1280px-Buddha_Preaching_in_Tushita_Heaven._Amaravati%2C_Satavahana_period%2C_2d_century_AD._Indian_Museum%2C_Calcutta.jpg'
  },

  // M. P. Birla Planetarium
  {
    target: 'mp_birla_planetarium_1.jpg',
    url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/22/M._P._Birla_Planetarium%2C_Kolkata_01.jpg/1280px-M._P._Birla_Planetarium%2C_Kolkata_01.jpg'
  },
  {
    target: 'mp_birla_planetarium_2.jpg',
    url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1a/M._P._Birla_Planetarium_Dome_Kolkata.jpg/1280px-M._P._Birla_Planetarium_Dome_Kolkata.jpg'
  },
  {
    target: 'mp_birla_planetarium_3.jpg',
    url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e9/M._P._Birla_Planetarium%2C_Kolkata_02.jpg/1280px-M._P._Birla_Planetarium%2C_Kolkata_02.jpg'
  },
  {
    target: 'mp_birla_planetarium_4.jpg',
    url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/07/Birla_Planetarium_-_Cathedral_Road_-_Kolkata_2011-09-17_4483.JPG/1280px-Birla_Planetarium_-_Cathedral_Road_-_Kolkata_2011-09-17_4483.JPG'
  },

  // Kalighat Kali Temple & Mother House
  {
    target: 'kalighat_1.jpg',
    url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e4/Kalighat_Kali_Temple_Front.jpg/1280px-Kalighat_Kali_Temple_Front.jpg'
  },
  {
    target: 'kalighat_2.jpg',
    url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/69/Mother_House_Kolkata_Mother_Teresa_Tomb.jpg/1280px-Mother_House_Kolkata_Mother_Teresa_Tomb.jpg'
  },
  {
    target: 'kalighat_3.jpg',
    url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4c/Mother_Teresa_Room_Mother_House_Kolkata.jpg/1280px-Mother_Teresa_Room_Mother_House_Kolkata.jpg'
  },
  {
    target: 'kalighat_4.jpg',
    url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/30/Kalighat_Temple_Kolkata_Sanctum_Spire.jpg/1280px-Kalighat_Temple_Kolkata_Sanctum_Spire.jpg'
  },

  // Marble Palace additional views
  {
    target: 'marble_palace_3.jpg',
    url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b2/Marble_Palace_Corinthian_Pillars_Kolkata.jpg/1280px-Marble_Palace_Corinthian_Pillars_Kolkata.jpg'
  },
  {
    target: 'marble_palace_4.jpg',
    url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f6/Marble_Palace_Courtyard_Kolkata.jpg/1280px-Marble_Palace_Courtyard_Kolkata.jpg'
  },

  // St. Paul's Cathedral view 4
  {
    target: 'st_pauls_cathedral_4.jpg',
    url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/52/St._Paul%27s_Cathedral_Kolkata_West_Bengal.jpg/1280px-St._Paul%27s_Cathedral_Kolkata_West_Bengal.jpg'
  },

  // Eden Gardens view 4
  {
    target: 'eden_gardens_4.jpg',
    url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/be/Eden_Gardens_Stadium_Front_Kolkata.jpg/1280px-Eden_Gardens_Stadium_Front_Kolkata.jpg'
  }
];

for (const item of REMAINING_PHOTOS) {
  const targetPath = path.join(destDir, item.target);
  try {
    const cmd = `curl.exe -s -L -o "${targetPath}" "${item.url}" -H "User-Agent: PravasiPortal/1.0 (santr@example.com)"`;
    execSync(cmd, { stdio: 'ignore', timeout: 15000 });
    if (fs.existsSync(targetPath) && fs.statSync(targetPath).size > 10000) {
      console.log(`[OK] ${item.target} (${(fs.statSync(targetPath).size / 1024).toFixed(1)} KB)`);
    } else {
      console.log(`[MISS] ${item.target}`);
    }
  } catch (err) {
    console.log(`[ERR] ${item.target}`);
  }
}
