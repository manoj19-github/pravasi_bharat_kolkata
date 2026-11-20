import urllib.request
import urllib.parse
import json

HEADERS = {
    "User-Agent": "PravasiBharatPortal/1.0 (https://pbdkolkata2027.in; contact@pbdkolkata2027.in)"
}

def search_commons(query):
    url = f"https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrnamespace=6&gsrsearch={urllib.parse.quote(query)}&gsrlimit=5&prop=imageinfo&iiprop=url|mime|size&format=json"
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
                if url and ('image/jpeg' in mime or 'image/png' in mime) and size > 20000:
                    results.append({'title': title, 'url': url})
            return results
    except Exception as e:
        return []

specific_queries = {
    "raajkutir": ["Swabhumi Kolkata", "Raajkutir", "Rangmanch Swabhumi"],
    "kenilworth": ["Kenilworth Hotel Little Russel Street Kolkata", "Kenilworth Kolkata", "Russel Street Kolkata"],
    "golden_parkk": ["Golden Park Hotel Kolkata", "Golden Parkk Kolkata", "Ho Chi Minh Sarani Kolkata"],
    "walson": ["Sudder Street Kolkata hotel", "Sudder Street Kolkata", "Sudder Street"],
    "stadel": ["The Stadel Salt Lake Stadium", "Salt Lake Stadium Kolkata hotel", "Salt Lake Stadium Kolkata"],
    "holiday_inn": ["Holiday Inn Kolkata", "Holiday Inn Express Kolkata Airport", "Jessore Road Dum Dum"],
    "altair": ["Sector V Salt Lake Kolkata building", "Sector V Salt Lake", "Salt Lake Electronics Complex"],
    "regenta": ["Kasba Kolkata", "Kasba New Market Kolkata", "Prantik Pally Kasba"],
    "jw_marriott": ["JW Marriott Hotel Kolkata", "JW Marriott Kolkata"],
    "vivanta": ["Vivanta Kolkata EM Bypass", "Vivanta Kolkata"],
    "great_eastern": ["Great Eastern Hotel Kolkata", "Lalit Great Eastern Kolkata"]
}

for key, queries in specific_queries.items():
    print(f"\n--- {key} ---")
    for q in queries:
        res = search_commons(q)
        if res:
            print(f"Query '{q}' found {len(res)} results:")
            for r in res[:2]:
                print(f"  {r['title']}: {r['url']}")
