import json
with open('scratch/commons_matched.json', 'r', encoding='utf-8') as f:
    d = json.load(f)

for k, v in d['matched'].items():
    print(f"\n=== {k} ({v['name']}) ===")
    for r in v['results']:
        print(f"  {r['title']}: {r['url']}")
