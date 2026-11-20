import os
import urllib.request
import urllib.parse
import json
from PIL import Image

TRANSIT_DIR = "src/assets/images/transit"
os.makedirs(TRANSIT_DIR, exist_ok=True)

HEADERS = {
    "User-Agent": "PravasiBharatPortal/1.0 (https://pbdkolkata2027.in; contact@pbdkolkata2027.in)"
}

HUBS = {
    "transit_airport": "Netaji Subhash Chandra Bose International Airport terminal",
    "transit_railway": "Howrah railway station building",
    "transit_flyover": "Maa Flyover Kolkata"
}

def search_commons_image(query):
    url = f"https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrnamespace=6&gsrsearch={urllib.parse.quote(query)}&gsrlimit=8&prop=imageinfo&iiprop=url|mime|size&format=json"
    req = urllib.request.Request(url, headers=HEADERS)
    try:
        with urllib.request.urlopen(req, timeout=10) as resp:
            data = json.loads(resp.read().decode('utf-8'))
            pages = data.get('query', {}).get('pages', {})
            for p_id, p_info in pages.items():
                imageinfo = p_info.get('imageinfo', [])
                if imageinfo:
                    iurl = imageinfo[0].get('url')
                    mime = imageinfo[0].get('mime', '')
                    size = imageinfo[0].get('size', 0)
                    if iurl and ('image/jpeg' in mime or 'image/png' in mime) and size > 60000:
                        return iurl
    except Exception as e:
        print(f"Error querying Commons for '{query}': {e}")
    return None

for key, q in HUBS.items():
    iurl = search_commons_image(q)
    if iurl:
        target_path = os.path.join(TRANSIT_DIR, f"{key}_hires.jpg")
        print(f"Downloading {key} from {iurl[:80]}...")
        req = urllib.request.Request(iurl, headers=HEADERS)
        try:
            with urllib.request.urlopen(req, timeout=15) as resp:
                content = resp.read()
                if len(content) > 20000:
                    with open(target_path, 'wb') as f:
                        f.write(content)
                    # Optimize
                    im = Image.open(target_path)
                    im.thumbnail((1200, 800), Image.Resampling.LANCZOS)
                    im.convert('RGB').save(target_path, 'JPEG', quality=85, optimize=True)
                    print(f"  -> Saved and optimized {target_path} ({os.path.getsize(target_path)} bytes, size {im.size})")
        except Exception as e:
            print(f"Failed to download {key}: {e}")
