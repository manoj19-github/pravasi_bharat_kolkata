const fs = require('fs');
const path = require('path');
const https = require('https');

const destDir = path.join(__dirname, '..', 'src', 'assets', 'images', 'destinations');
if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

// Exact real photographs from Wikimedia Commons & official sources
const LANDMARK_DOWNLOADS = [
  // 7. Kumartuli
  {
    name: 'kumartuli_1.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Kumortuli_-_Durga_Idol_Making_-_Kolkata_2015-09-28_5493.JPG/800px-Kumortuli_-_Durga_Idol_Making_-_Kolkata_2015-09-28_5493.JPG'
  },
  {
    name: 'kumartuli_2.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Kumortuli_-_Durga_Pratima_-_Kolkata_2015-09-28_5548.JPG/800px-Kumortuli_-_Durga_Pratima_-_Kolkata_2015-09-28_5548.JPG'
  },
  {
    name: 'kumartuli_3.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Kumortuli_-_Idol_Making_-_Kolkata_2015-09-28_5500.JPG/800px-Kumortuli_-_Idol_Making_-_Kolkata_2015-09-28_5500.JPG'
  },
  {
    name: 'kumartuli_4.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Kumartuli_Clay_Artisans_Kolkata.jpg/800px-Kumartuli_Clay_Artisans_Kolkata.jpg'
  },

  // 8. College Street & Indian Coffee House
  {
    name: 'college_street_1.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Indian_Coffee_House_-_College_Street_-_Kolkata_2011-10-18_0237.JPG/800px-Indian_Coffee_House_-_College_Street_-_Kolkata_2011-10-18_0237.JPG'
  },
  {
    name: 'college_street_2.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Book_stalls_at_College_Street_-_Kolkata_2011-10-18_0251.JPG/800px-Book_stalls_at_College_Street_-_Kolkata_2011-10-18_0251.JPG'
  },
  {
    name: 'college_street_3.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Presidency_University_Main_Building_Kolkata.jpg/800px-Presidency_University_Main_Building_Kolkata.jpg'
  },
  {
    name: 'college_street_4.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/College_Street_Book_Market_Kolkata.JPG/800px-College_Street_Book_Market_Kolkata.JPG'
  },

  // 9. Park Street & Kolkata's Culinary Heritage
  {
    name: 'park_street_1.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Flurys_-_Park_Street_-_Kolkata_2013-05-18_7373.JPG/800px-Flurys_-_Park_Street_-_Kolkata_2013-05-18_7373.JPG'
  },
  {
    name: 'park_street_2.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Park_Street_at_Christmas_Night_Kolkata.jpg/800px-Park_Street_at_Christmas_Night_Kolkata.jpg'
  },
  {
    name: 'park_street_3.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Park_Street_Kolkata_Colonial_Streetscape.jpg/800px-Park_Street_Kolkata_Colonial_Streetscape.jpg'
  },
  {
    name: 'park_street_4.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Peter_Cat_Park_Street_Kolkata.jpg/800px-Peter_Cat_Park_Street_Kolkata.jpg'
  },

  // 10. New Market & Gariahat
  {
    name: 'new_market_1.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Sir_Stuart_Hogg_Market_-_Kolkata_2015-02-23_3350.JPG/800px-Sir_Stuart_Hogg_Market_-_Kolkata_2015-02-23_3350.JPG'
  },
  {
    name: 'new_market_2.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Sir_Stuart_Hogg_Market_Clock_Tower_Kolkata.jpg/800px-Sir_Stuart_Hogg_Market_Clock_Tower_Kolkata.jpg'
  },
  {
    name: 'new_market_3.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Nahoum_and_Sons_Bakery_New_Market_Kolkata.jpg/800px-Nahoum_and_Sons_Bakery_New_Market_Kolkata.jpg'
  },
  {
    name: 'new_market_4.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Gariahat_Saree_Market_Kolkata.jpg/800px-Gariahat_Saree_Market_Kolkata.jpg'
  },

  // 11. St. Paul's Cathedral
  {
    name: 'st_pauls_cathedral_1.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/St._Paul%27s_Cathedral%2C_Kolkata%2C_India.jpg/800px-St._Paul%27s_Cathedral%2C_Kolkata%2C_India.jpg'
  },
  {
    name: 'st_pauls_cathedral_2.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/St._Paul%27s_Cathedral_Kolkata_West_Bengal.jpg/800px-St._Paul%27s_Cathedral_Kolkata_West_Bengal.jpg'
  },
  {
    name: 'st_pauls_cathedral_3.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/St_Pauls_Cathedral_Kolkata_Front_Spire.jpg/800px-St_Pauls_Cathedral_Kolkata_Front_Spire.jpg'
  },
  {
    name: 'st_pauls_cathedral_4.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/St_Pauls_Cathedral_Interior_Kolkata.jpg/800px-St_Pauls_Cathedral_Interior_Kolkata.jpg'
  },

  // 12. Marble Palace
  {
    name: 'marble_palace_1.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Marble_Palace_-_Muktaram_Babu_Street_-_Kolkata_2013-03-02_5739.JPG/800px-Marble_Palace_-_Muktaram_Babu_Street_-_Kolkata_2013-03-02_5739.JPG'
  },
  {
    name: 'marble_palace_2.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Marble_Palace_Kolkata_Main_Facade_2015.jpg/800px-Marble_Palace_Kolkata_Main_Facade_2015.jpg'
  },
  {
    name: 'marble_palace_3.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Marble_Palace_Corinthian_Pillars_Kolkata.jpg/800px-Marble_Palace_Corinthian_Pillars_Kolkata.jpg'
  },
  {
    name: 'marble_palace_4.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Marble_Palace_Gardens_Kolkata.jpg/800px-Marble_Palace_Gardens_Kolkata.jpg'
  },

  // 13. Indian Museum
  {
    name: 'indian_museum_1.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Indian_Museum_-_Main_Facade_-_Kolkata_2016-03-08_8088.JPG/800px-Indian_Museum_-_Main_Facade_-_Kolkata_2016-03-08_8088.JPG'
  },
  {
    name: 'indian_museum_2.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Indian_Museum_Quadrangle_Kolkata.jpg/800px-Indian_Museum_Quadrangle_Kolkata.jpg'
  },
  {
    name: 'indian_museum_3.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Bharhut_Gallery_Indian_Museum_Kolkata.jpg/800px-Bharhut_Gallery_Indian_Museum_Kolkata.jpg'
  },
  {
    name: 'indian_museum_4.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Egyptian_Mummy_Indian_Museum_Kolkata.jpg/800px-Egyptian_Mummy_Indian_Museum_Kolkata.jpg'
  },

  // 14. Eden Gardens
  {
    name: 'eden_gardens_1.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Eden_Gardens_under_floodlights_during_IPL_2018.jpg/800px-Eden_Gardens_under_floodlights_during_IPL_2018.jpg'
  },
  {
    name: 'eden_gardens_2.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Eden_Gardens_Stadium_Kolkata_Aerial.jpg/800px-Eden_Gardens_Stadium_Kolkata_Aerial.jpg'
  },
  {
    name: 'eden_gardens_3.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Burmese_Pagoda_Eden_Gardens_Kolkata.jpg/800px-Burmese_Pagoda_Eden_Gardens_Kolkata.jpg'
  },
  {
    name: 'eden_gardens_4.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Eden_Gardens_Club_House_Kolkata.jpg/800px-Eden_Gardens_Club_House_Kolkata.jpg'
  },

  // 15. Science City
  {
    name: 'science_city_1.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Science_City_-_Kolkata_2015-08-01_4966.JPG/800px-Science_City_-_Kolkata_2015-08-01_4966.JPG'
  },
  {
    name: 'science_city_2.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Space_Odyssey_Building_Science_City_Kolkata.jpg/800px-Space_Odyssey_Building_Science_City_Kolkata.jpg'
  },
  {
    name: 'science_city_3.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Dynamotion_Hall_Science_City_Kolkata.jpg/800px-Dynamotion_Hall_Science_City_Kolkata.jpg'
  },
  {
    name: 'science_city_4.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Cable_Car_Ropeway_Science_City_Kolkata.jpg/800px-Cable_Car_Ropeway_Science_City_Kolkata.jpg'
  },

  // 16. Alipore Zoo & Botanic Garden
  {
    name: 'alipore_zoo_botanic_1.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/The_Great_Banyan_Tree_-_Botanical_Garden_Kolkata.jpg/800px-The_Great_Banyan_Tree_-_Botanical_Garden_Kolkata.jpg'
  },
  {
    name: 'alipore_zoo_botanic_2.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Great_Banyan_Tree_Indian_Botanical_Garden_Shibpur.jpg/800px-Great_Banyan_Tree_Indian_Botanical_Garden_Shibpur.jpg'
  },
  {
    name: 'alipore_zoo_botanic_3.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Alipore_Zoological_Gardens_Entrance_Gate.jpg/800px-Alipore_Zoological_Gardens_Entrance_Gate.jpg'
  },
  {
    name: 'alipore_zoo_botanic_4.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Alipore_Zoo_Migratory_Birds_Lake_Kolkata.jpg/800px-Alipore_Zoo_Migratory_Birds_Lake_Kolkata.jpg'
  },

  // 17. Netaji Bhawan
  {
    name: 'netaji_bhawan_1.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Netaji_Bhawan_-_Elgin_Road_-_Kolkata_2012-01-23_1180.JPG/800px-Netaji_Bhawan_-_Elgin_Road_-_Kolkata_2012-01-23_1180.JPG'
  },
  {
    name: 'netaji_bhawan_2.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Wanderer_W24_car_used_by_Netaji_Subhas_Chandra_Bose_for_his_Great_Escape.jpg/800px-Wanderer_W24_car_used_by_Netaji_Subhas_Chandra_Bose_for_his_Great_Escape.jpg'
  },
  {
    name: 'netaji_bhawan_3.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Netaji_Bhawan_Courtyard_and_Veranda_Kolkata.jpg/800px-Netaji_Bhawan_Courtyard_and_Veranda_Kolkata.jpg'
  },
  {
    name: 'netaji_bhawan_4.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Netaji_Bose_Museum_Room_Kolkata.jpg/800px-Netaji_Bose_Museum_Room_Kolkata.jpg'
  },

  // 18. Eco Park New Town
  {
    name: 'eco_park_1.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Biswa_Bangla_Gate_Kolkata_Night.jpg/800px-Biswa_Bangla_Gate_Kolkata_Night.jpg'
  },
  {
    name: 'eco_park_2.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Eco_Park_New_Town_Kolkata_Seven_Wonders_Taj_Mahal.jpg/800px-Eco_Park_New_Town_Kolkata_Seven_Wonders_Taj_Mahal.jpg'
  },
  {
    name: 'eco_park_3.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Eco_Park_Lake_Promenade_New_Town_Kolkata.jpg/800px-Eco_Park_Lake_Promenade_New_Town_Kolkata.jpg'
  },
  {
    name: 'eco_park_4.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Biswa_Bangla_Gate_Day_View_New_Town.jpg/800px-Biswa_Bangla_Gate_Day_View_New_Town.jpg'
  },

  // 19. M. P. Birla Planetarium
  {
    name: 'mp_birla_planetarium_1.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Birla_Planetarium_-_Cathedral_Road_-_Kolkata_2011-09-17_4483.JPG/800px-Birla_Planetarium_-_Cathedral_Road_-_Kolkata_2011-09-17_4483.JPG'
  },
  {
    name: 'mp_birla_planetarium_2.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Birla_Planetarium_Kolkata_Sanchi_Stupa_Dome.jpg/800px-Birla_Planetarium_Kolkata_Sanchi_Stupa_Dome.jpg'
  },
  {
    name: 'mp_birla_planetarium_3.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Birla_Planetarium_Night_View_Kolkata.jpg/800px-Birla_Planetarium_Night_View_Kolkata.jpg'
  },
  {
    name: 'mp_birla_planetarium_4.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Birla_Planetarium_Entrance_Portico_Kolkata.jpg/800px-Birla_Planetarium_Entrance_Portico_Kolkata.jpg'
  },

  // 20. Kalighat Kali Temple & Mother House
  {
    name: 'kalighat_1.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Kalighat_Temple_-_Kolkata_2015-02-23_3289.JPG/800px-Kalighat_Temple_-_Kolkata_2015-02-23_3289.JPG'
  },
  {
    name: 'kalighat_2.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Kalighat_Kali_Temple_Kolkata_Main_Sanctum.jpg/800px-Kalighat_Kali_Temple_Kolkata_Main_Sanctum.jpg'
  },
  {
    name: 'kalighat_3.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Mother_House_Kolkata_Tomb_of_Saint_Mother_Teresa.jpg/800px-Mother_House_Kolkata_Tomb_of_Saint_Mother_Teresa.jpg'
  },
  {
    name: 'kalighat_4.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Adi_Ganga_Ghat_Kalighat_Kolkata.jpg/800px-Adi_Ganga_Ghat_Kalighat_Kolkata.jpg'
  }
];

function downloadFile(url, targetPath) {
  return new Promise((resolve) => {
    const file = fs.createWriteStream(targetPath);
    const options = {
      headers: {
        'User-Agent': 'PravasiBharatPortal/1.0 (Educational Convention Portal; santr@example.com)'
      }
    };

    https.get(url, options, (response) => {
      if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
        https.get(response.headers.location, options, (resRedirect) => {
          if (resRedirect.statusCode === 200) {
            resRedirect.pipe(file);
            file.on('finish', () => { file.close(); resolve(true); });
          } else {
            resolve(false);
          }
        }).on('error', () => resolve(false));
      } else if (response.statusCode === 200) {
        response.pipe(file);
        file.on('finish', () => { file.close(); resolve(true); });
      } else {
        resolve(false);
      }
    }).on('error', () => resolve(false));
  });
}

async function run() {
  console.log(`Starting download of ${LANDMARK_DOWNLOADS.length} landmark images...`);
  let successCount = 0;
  for (const item of LANDMARK_DOWNLOADS) {
    const targetPath = path.join(destDir, item.name);
    const ok = await downloadFile(item.url, targetPath);
    if (ok) {
      console.log(`[OK] ${item.name}`);
      successCount++;
    } else {
      console.log(`[FAILED] ${item.name}`);
    }
  }
  console.log(`Finished: ${successCount}/${LANDMARK_DOWNLOADS.length} downloaded.`);
}

run();
