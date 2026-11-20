import json

with open('scratch/stays_list.json', 'r', encoding='utf-8') as f:
    stays = json.load(f)

# Let's inspect HOTELS_DATA sorting
import re
with open('src/data/hotels.ts', 'r', encoding='utf-8') as f:
    content = f.read()

stays_full = []
for block in re.split(r'\{\s*id:\s*', content)[1:]:
    id_m = re.match(r"'([^']+)'", block)
    name_m = re.search(r'name:\s*["\']([^"\']+)["\']', block)
    type_m = re.search(r"propertyType:\s*'([^']+)'", block)
    dist_m = re.search(r"distanceKm:\s*([0-9.]+)", block)
    addr_m = re.search(r'address:\s*["\']([^"\']+)["\']', block)
    if id_m and name_m and type_m:
        stays_full.append({
            'id': id_m.group(1),
            'name': name_m.group(1),
            'type': type_m.group(1),
            'distanceKm': float(dist_m.group(1)) if dist_m else 999.0,
            'address': addr_m.group(1) if addr_m else ''
        })

hotels = sorted([s for s in stays_full if s['type'] == 'hotel'], key=lambda x: x['distanceKm'])[:20]
homestays = sorted([s for s in stays_full if s['type'] == 'homestay'], key=lambda x: x['distanceKm'])[:8]
bnbs = sorted([s for s in stays_full if s['type'] == 'bnb'], key=lambda x: x['distanceKm'])[:8]

curated = hotels + homestays + bnbs
print(f"Curated total: {len(curated)}")
print("\n--- 20 Curated Hotels ---")
for i, h in enumerate(hotels, 1):
    print(f"{i}. [{h['id']}] {h['name']} ({h['distanceKm']} km)")

print("\n--- 8 Curated Homestays ---")
for i, h in enumerate(homestays, 1):
    print(f"{i}. [{h['id']}] {h['name']} ({h['distanceKm']} km)")

print("\n--- 8 Curated B&Bs ---")
for i, h in enumerate(bnbs, 1):
    print(f"{i}. [{h['id']}] {h['name']} ({h['distanceKm']} km)")

with open('scratch/curated_36.json', 'w', encoding='utf-8') as f:
    json.dump(curated, f, indent=2)
