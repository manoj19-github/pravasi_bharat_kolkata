import re
import json

with open('src/data/hotels.ts', 'r', encoding='utf-8') as f:
    content = f.read()

stays = []
for block in re.split(r'\{\s*id:\s*', content)[1:]:
    id_m = re.match(r"'([^']+)'", block)
    name_m = re.search(r'name:\s*["\']([^"\']+)["\']', block)
    type_m = re.search(r"propertyType:\s*'([^']+)'", block)
    nidhi_m = re.search(r"nidhiId:\s*'([^']+)'", block)
    loc_m = re.search(r"location:\s*'([^']+)'", block)
    if id_m and name_m and type_m:
        stays.append({
            'id': id_m.group(1),
            'name': name_m.group(1),
            'type': type_m.group(1),
            'nidhi': nidhi_m.group(1) if nidhi_m else '',
            'location': loc_m.group(1) if loc_m else ''
        })

print(f"Total stays: {len(stays)}")
with open('scratch/stays_list.json', 'w', encoding='utf-8') as f:
    json.dump(stays, f, indent=2)

for t in ['hotel', 'homestay', 'bnb']:
    matching = [s for s in stays if s['type'] == t]
    print(f"\n{t.upper()} count: {len(matching)}")
    for s in matching[:10]:
        print(f"  [{s['id']}] {s['name']} ({s['location']})")
