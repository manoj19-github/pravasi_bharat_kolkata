import urllib.request
import urllib.parse
import json
import re

HEADERS = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
}

def search_ddg_images(query):
    # Fetch token
    url = f"https://duckduckgo.com/?q={urllib.parse.quote(query)}&iax=images&ia=images"
    req = urllib.request.Request(url, headers=HEADERS)
    try:
        with urllib.request.urlopen(req, timeout=10) as resp:
            html = resp.read().decode('utf-8')
            vqd_match = re.search(r'vqd=([\d-]+)&', html) or re.search(r'vqd="([\d-]+)"', html)
            if not vqd_match:
                # search for vqd in another pattern
                vqd_match = re.search(r'vqd=([a-zA-Z0-9_-]+)', html)
            if vqd_match:
                vqd = vqd_match.group(1)
                img_url = f"https://duckduckgo.com/i.js?q={urllib.parse.quote(query)}&o=json&vqd={vqd}"
                req2 = urllib.request.Request(img_url, headers=HEADERS)
                with urllib.request.urlopen(req2, timeout=10) as resp2:
                    data = json.loads(resp2.read().decode('utf-8'))
                    return [r['image'] for r in data.get('results', [])[:5]]
    except Exception as e:
        print(f"Error {query}: {e}")
    return []

test_queries = [
    "The Moira Bed and Breakfast Kolkata",
    "Satguru Homestays Tagore Park Kolkata",
    "Aauris Hotel Robinson Street Kolkata",
    "LBD Resorts Kolkata EM Bypass"
]

for t in test_queries:
    imgs = search_ddg_images(t)
    print(f"\nQuery: {t} -> {len(imgs)} images found")
    for img in imgs[:3]:
        print(f"  {img}")
