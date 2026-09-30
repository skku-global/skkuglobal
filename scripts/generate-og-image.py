import os
from PIL import Image, ImageDraw, ImageFont

W, H = 1200, 630
base = Image.new('RGBA', (W, H), (255, 255, 255, 255))
draw = ImageDraw.Draw(base)

# Background subtle ambient glow from top
for y in range(0, 360, 2):
    factor = max(0.0, 1.0 - y / 360)
    alpha = int(factor * 28)
    draw.rectangle([0, y, W, y + 1], fill=(16, 185, 129, alpha))

# Load fonts
f_head = ImageFont.truetype('C:/Windows/Fonts/segoeuib.ttf', 66)
f_sub = ImageFont.truetype('C:/Windows/Fonts/segoeui.ttf', 23)
f_btn = ImageFont.truetype('C:/Windows/Fonts/segoeuib.ttf', 19)
f_pill = ImageFont.truetype('C:/Windows/Fonts/segoeuib.ttf', 16)
f_nav = ImageFont.truetype('C:/Windows/Fonts/segoeuib.ttf', 16)
f_trust = ImageFont.truetype('C:/Windows/Fonts/segoeuib.ttf', 15)

# 1. Navbar (66px high)
nav_h = 66
draw.line([(0, nav_h), (W, nav_h)], fill=(241, 245, 249, 255), width=1)

# Navbar Logo
logo_path = os.path.join(os.path.dirname(__file__), '..', 'public', 'brand', 'skku-green.png')
if os.path.exists(logo_path):
    logo = Image.open(logo_path).convert('RGBA')
    logo.thumbnail((42, 42), Image.Resampling.LANCZOS)
    base.paste(logo, (80, 13), logo)

# Nav links in center
nav_links = ['Work', 'Services', 'About', 'Support']
total_nav_w = 0
boxes = []
for l in nav_links:
    b = f_nav.getbbox(l)
    w = b[2] - b[0]
    boxes.append((l, w))
    total_nav_w += w + 36
total_nav_w -= 36

curr_x = (W - total_nav_w) // 2
for l, w in boxes:
    draw.text((curr_x, 24), l, fill=(71, 85, 105, 255), font=f_nav)
    curr_x += w + 36

# Search & Hamburger on right
search_cx, search_cy = W - 145, 34
draw.ellipse(
    [search_cx - 8, search_cy - 8, search_cx + 8, search_cy + 8],
    outline=(100, 116, 139, 255),
    width=2,
)
draw.line(
    [(search_cx + 6, search_cy + 6), (search_cx + 12, search_cy + 12)],
    fill=(100, 116, 139, 255),
    width=2,
)

menu_x = W - 105
draw.rounded_rectangle([menu_x, 18, menu_x + 36, 50], radius=6, outline=(226, 232, 240, 255), width=1)
draw.line([(menu_x + 8, 29), (menu_x + 28, 29)], fill=(30, 41, 59, 255), width=2)
draw.line([(menu_x + 8, 39), (menu_x + 28, 39)], fill=(30, 41, 59, 255), width=2)

# 2. Status Pill
pill_text = 'Now booking Q3/Q4 projects'
pill_box = f_pill.getbbox(pill_text)
pt_w = pill_box[2] - pill_box[0]
pw = pt_w + 48
ph = 36
px = (W - pw) // 2
py = 98
draw.rounded_rectangle(
    [px, py, px + pw, py + ph],
    radius=ph // 2,
    fill=(255, 255, 255, 255),
    outline=(226, 232, 240, 255),
    width=1,
)
draw.ellipse([px + 16, py + ph // 2 - 4, px + 24, py + ph // 2 + 4], fill=(16, 185, 129, 255))
draw.text((px + 32, py + 8), pill_text, fill=(55, 65, 81, 255), font=f_pill)

# 3. Main Heading: 'We Build. We Secure.'
line1_part1 = 'We Build. '
line1_part2 = 'We Secure.'
b1 = f_head.getbbox(line1_part1)
b2 = f_head.getbbox(line1_part2)
w1 = b1[2] - b1[0]
w2 = b2[2] - b2[0]
total_w1 = w1 + w2
start_x1 = (W - total_w1) // 2
y1 = 154

draw.text((start_x1, y1), line1_part1, fill=(15, 23, 42, 255), font=f_head)
draw.text((start_x1 + w1, y1), line1_part2, fill=(5, 150, 105, 255), font=f_head)

line2 = 'We Deploy.'
b3 = f_head.getbbox(line2)
w3 = b3[2] - b3[0]
start_x2 = (W - w3) // 2
y2 = y1 + 76
draw.text((start_x2, y2), line2, fill=(15, 23, 42, 255), font=f_head)

# 4. Subtitle
sub_line1 = 'We build web apps and e-commerce systems, then audit them for security'
sub_line2 = 'flaws with SecuScan. CAC-registered in Nigeria, working worldwide.'
sb1 = f_sub.getbbox(sub_line1)
sb2 = f_sub.getbbox(sub_line2)
draw.text(((W - (sb1[2] - sb1[0])) // 2, 322), sub_line1, fill=(71, 85, 105, 255), font=f_sub)
draw.text(((W - (sb2[2] - sb2[0])) // 2, 355), sub_line2, fill=(71, 85, 105, 255), font=f_sub)

# 5. Buttons
btn_y = 416
btn1_w = 215
btn2_w = 235
btn_gap = 18
total_btn_w = btn1_w + btn_gap + btn2_w
btn1_x = (W - total_btn_w) // 2
btn2_x = btn1_x + btn1_w + btn_gap
btn_h = 52

# Button 1: Solid Emerald
draw.rounded_rectangle(
    [btn1_x, btn_y, btn1_x + btn1_w, btn_y + btn_h],
    radius=10,
    fill=(5, 150, 105, 255),
)
t1 = 'Start a Project  →'
tb1 = f_btn.getbbox(t1)
draw.text((btn1_x + (btn1_w - (tb1[2] - tb1[0])) // 2, btn_y + 13), t1, fill=(255, 255, 255, 255), font=f_btn)

# Button 2: White Card
draw.rounded_rectangle(
    [btn2_x, btn_y, btn2_x + btn2_w, btn_y + btn_h],
    radius=10,
    fill=(255, 255, 255, 255),
    outline=(226, 232, 240, 255),
    width=1,
)
t2 = 'Explore Case Studies'
tb2 = f_btn.getbbox(t2)
draw.text((btn2_x + (btn2_w - (tb2[2] - tb2[0])) // 2, btn_y + 13), t2, fill=(30, 41, 59, 255), font=f_btn)

# 6. Trust strip with vector checkmarks
trust_items = [
    'CAC-registered company',
    'Our own scan engine',
    'Founder-led',
    'Scans under 30s',
]

item_widths = []
for item in trust_items:
    b = f_trust.getbbox(item)
    item_widths.append(b[2] - b[0])

total_trust_w = sum(item_widths) + len(trust_items) * 20 + (len(trust_items) - 1) * 28
t_x = (W - total_trust_w) // 2
t_y = 520

for i, (item, tw) in enumerate(zip(trust_items, item_widths)):
    cx = t_x
    cy = t_y + 6
    draw.line([(cx, cy + 3), (cx + 4, cy + 7)], fill=(16, 185, 129, 255), width=2)
    draw.line([(cx + 4, cy + 7), (cx + 11, cy - 2)], fill=(16, 185, 129, 255), width=2)

    draw.text((t_x + 16, t_y), item, fill=(100, 116, 139, 255), font=f_trust)
    t_x += 16 + tw

    if i < len(trust_items) - 1:
        draw.text((t_x + 10, t_y - 1), '/', fill=(203, 213, 225, 255), font=f_trust)
        t_x += 28

out_path = os.path.join(os.path.dirname(__file__), '..', 'public', 'og-image.png')
base.save(out_path, 'PNG')
print('Successfully generated exact website preview og-image.png')
