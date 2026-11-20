import json
import re

with open('scratch/hotel_images_map.json', 'r', encoding='utf-8') as f:
    images_map = json.load(f)

with open('src/data/hotels.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# For each stay in images_map, replace its image and images array in content
updated_count = 0

for sid, img_data in images_map.items():
    # Find the block for this stay id
    pattern = rf"(id:\s*'{re.escape(sid)}',[\s\S]*?)(image:\s*['\"][^'\"]+['\"],[\s\S]*?images:\s*\[[\s\S]*?\])"
    
    # Let's inspect if pattern matches
    match = re.search(pattern, content)
    if match:
        new_image_field = f"image: '{img_data['image']}',"
        new_images_list = ",\n      ".join([f"'{u}'" for u in img_data['images']])
        new_images_field = f"images: [\n      {new_images_list}\n    ]"
        replacement = f"{match.group(1)}{new_image_field}\n    {new_images_field}"
        
        content = content[:match.start()] + replacement + content[match.end():]
        updated_count += 1
    else:
        print(f"Warning: pattern did not match for stay {sid}")

print(f"Updated {updated_count} stays in src/data/hotels.ts")

with open('src/data/hotels.ts', 'w', encoding='utf-8') as f:
    f.write(content)

print("Saved src/data/hotels.ts successfully!")
