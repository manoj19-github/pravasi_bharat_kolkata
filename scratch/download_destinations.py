import os
import urllib.request
import urllib.parse
import json

DEST_DIR = "src/assets/images/destinations"
os.makedirs(DEST_DIR, exist_ok=True)

HEADERS = {
    "User-Agent": "PravasiBharatPortal/1.0 (https://pbdkolkata2027.in; contact@pbdkolkata2027.in)"
}

LANDMARKS = {
    "victoria_memorial": [
        "Victoria Memorial, Kolkata",
        "Victoria Memorial situated in Kolkata.jpg",
        "Victoria Memorial hall in Kolkata, India 02.jpg",
        "Victoria Memorial at dusk.jpg",
        "Victoria Memorial Hall, Kolkata.jpg",
        "Victoria Memorial Front View.jpg"
    ],
    "howrah_bridge": [
        "Howrah Bridge",
        "Howrah bridge at night.jpg",
        "Howrah Bridge from Hooghly River.jpg",
        "Howrah bridge from launch ghat.jpg",
        "Howrah Bridge Kolkata sunset.jpg",
        "Rabindra Setu (Howrah Bridge).jpg"
    ],
    "dakshineswar_temple": [
        "Dakshineswar Kali Temple",
        "Dakshineswar Temple Kolkata.jpg",
        "Dakshineswar Kali Temple Front.jpg",
        "Dakshineswar Temple from Ganges.jpg",
        "Dakshineswar Kali Temple Complex.jpg",
        "Dakshineswar temple courtyard.jpg"
    ],
    "belur_math": [
        "Belur Math",
        "Belur Math Temple.jpg",
        "Belur Math Main Temple.jpg",
        "Belur Math, Howrah.jpg",
        "Belur Math HQ.jpg",
        "Belur Math Evening.jpg"
    ],
    "prinsep_ghat": [
        "Prinsep Ghat",
        "Prinsep Ghat Kolkata.jpg",
        "Prinsep Ghat under Vidyasagar Setu.jpg",
        "Prinsep Ghat at sunset.jpg",
        "Prinsep Ghat monument Kolkata.jpg",
        "Prinsep Ghat with boat.jpg"
    ],
    "jorasanko_thakur_bari": [
        "Jorasanko Thakur Bari",
        "Jorasanko Thakur Bari - Kolkata.jpg",
        "Jorasanko Thakur Bari Courtyard.jpg",
        "Jorasanko Thakur Bari Museum.jpg",
        "Tagore House Jorasanko.jpg",
        "Jorasanko Thakur Bari Main Building.jpg"
    ]
}

def search_commons_images(query, limit=10):
    url = f"https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrnamespace=6&gsrsearch={urllib.parse.quote(query)}&gsrlimit={limit}&prop=imageinfo&iiprop=url|mime|size&format=json"
    req = urllib.request.Request(url, headers=HEADERS)
    try:
        with urllib.request.urlopen(req, timeout=10) as resp:
            data = json.loads(resp.read().decode('utf-8'))
            pages = data.get('query', {}).get('pages', {})
            img_urls = []
            for p_id, p_info in pages.items():
                imageinfo = p_info.get('imageinfo', [])
                if imageinfo:
                    iurl = imageinfo[0].get('url')
                    mime = imageinfo[0].get('mime', '')
                    size = imageinfo[0].get('size', 0)
                    if iurl and ('image/jpeg' in mime or 'image/png' in mime) and size > 40000:
                        img_urls.append(iurl)
            return img_urls
    except Exception as e:
        print(f"Error querying Commons for '{query}': {e}")
        return []

def download_file(url, out_path):
    req = urllib.request.Request(url, headers=HEADERS)
    try:
        with urllib.request.urlopen(req, timeout=15) as resp:
            content = resp.read()
            if len(content) > 15000:
                with open(out_path, 'wb') as f:
                    f.write(content)
                return True
    except Exception as e:
        print(f"Failed to download {url}: {e}")
    return False

for key, queries in LANDMARKS.items():
    print(f"\n--- Downloading for {key} ---")
    collected = []
    # Search via commons API
    for q in queries:
        urls = search_commons_images(q, limit=6)
        for u in urls:
            if u not in collected:
                collected.append(u)
        if len(collected) >= 8:
            break
            
    print(f"Found {len(collected)} candidates for {key}")
    saved_count = 0
    for idx, u in enumerate(collected):
        if saved_count >= 4:
            break
        target_path = os.path.join(DEST_DIR, f"{key}_{saved_count + 1}.jpg")
        print(f"Downloading {key}_{saved_count + 1} from {u[:80]}...")
        if download_file(u, target_path):
            print(f"  -> Saved {target_path} ({os.path.getsize(target_path)} bytes)")
            saved_count += 1
            
    print(f"Total saved for {key}: {saved_count}/4")
