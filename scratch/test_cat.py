import urllib.request
import urllib.parse
import json

HEADERS = {
    "User-Agent": "PravasiBharatPortal/1.0 (https://pbdkolkata2027.in; contact@pbdkolkata2027.in)"
}

def get_category_members(cat):
    url = f"https://commons.wikimedia.org/w/api.php?action=query&list=categorymembers&cmtitle={urllib.parse.quote(cat)}&cmlimit=100&format=json"
    req = urllib.request.Request(url, headers=HEADERS)
    with urllib.request.urlopen(req) as resp:
        return json.loads(resp.read().decode('utf-8'))

data = get_category_members("Category:Hotels in Kolkata")
members = data.get('query', {}).get('categorymembers', [])
print(f"Hotels in Kolkata category count: {len(members)}")
for m in members[:30]:
    print(f"  {m['title']}")
