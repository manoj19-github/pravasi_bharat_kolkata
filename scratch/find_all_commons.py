import urllib.request
import urllib.parse
import json
import re

HEADERS = {
    "User-Agent": "PravasiBharatPortal/1.0 (https://pbdkolkata2027.in; contact@pbdkolkata2027.in)"
}

with open('scratch/curated_36.json', 'r', encoding='utf-8') as f:
    curated = json.load(f)

def search_commons(query, limit=5):
    url = f"https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrnamespace=6&gsrsearch={urllib.parse.quote(query)}&gsrlimit={limit}&prop=imageinfo&iiprop=url|mime|size&format=json"
    req = urllib.request.Request(url, headers=HEADERS)
    try:
        with urllib.request.urlopen(req, timeout=10) as resp:
            data = json.loads(resp.read().decode('utf-8'))
            pages = data.get('query', {}).get('pages', {})
            results = []
            for p_id, p_info in pages.items():
                title = p_info.get('title', '')
                info = p_info.get('imageinfo', [{}])[0]
                url = info.get('url')
                mime = info.get('mime', '')
                size = info.get('size', 0)
                if url and ('image/jpeg' in mime or 'image/png' in mime) and size > 25000:
                    results.append({'title': title, 'url': url, 'size': size})
            return results
    except Exception as e:
        return []

matched = {}
unmatched = []

for item in curated:
    stay_id = item['id']
    name = item['name']
    loc = item.get('location', '')
    
    # Try multiple search phrases
    clean_name = re.sub(r'\(.*?\)', '', name).strip()
    queries = [
        clean_name,
        f"{clean_name} Kolkata",
        f"{name} Kolkata"
    ]
    
    found = []
    for q in queries:
        res = search_commons(q, limit=5)
        for r in res:
            if r['url'] not in [x['url'] for x in found]:
                found.append(r)
        if len(found) >= 3:
            break
            
    if found:
        matched[stay_id] = {
            'name': name,
            'type': item['type'],
            'results': found[:3]
        }
        print(f"MATCH: [{stay_id}] {name} -> {len(found)} images")
    else:
        unmatched.append(item)
        print(f"NO MATCH: [{stay_id}] {name}")

print(f"\nTotal Matched: {len(matched)} / {len(curated)}")
print(f"Unmatched count: {len(unmatched)}")
with open('scratch/commons_matched.json', 'w', encoding='utf-8') as f:
    json.dump({'matched': matched, 'unmatched': unmatched}, f, indent=2)
