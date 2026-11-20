import urllib.request
import urllib.parse
import json

HEADERS = {
    "User-Agent": "PravasiBharatPortal/1.0 (https://pbdkolkata2027.in; contact@pbdkolkata2027.in)"
}

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
                results.append({
                    'title': title,
                    'url': info.get('url'),
                    'size': info.get('size')
                })
            return results
    except Exception as e:
        return [{'error': str(e)}]

queries = [
    "ITC Royal Bengal",
    "ITC Sonar",
    "Taj Bengal Kolkata",
    "The Oberoi Grand Kolkata",
    "Hyatt Regency Kolkata",
    "The Park Kolkata",
    "Hotel Hindusthan International Kolkata",
    "The Astor Kolkata",
    "The Peerless Inn Kolkata",
    "The Kenilworth Hotel Kolkata",
    "Vedic Village Kolkata",
    "Raajkutir Kolkata"
]

for q in queries:
    res = search_commons(q, limit=3)
    print(f"\nQuery: {q} -> {len(res)} results")
    for r in res:
        if 'error' in r:
            print(f"  ERROR: {r['error']}")
        else:
            print(f"  {r['title']}: {r['url']}")
