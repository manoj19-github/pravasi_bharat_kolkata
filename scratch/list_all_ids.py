import json

with open('scratch/stays_list.json', 'r', encoding='utf-8') as f:
    stays = json.load(f)

print(f"Total stays: {len(stays)}")
for s in stays:
    print(f"{s['id']} | {s['type']} | {s['name']}")
