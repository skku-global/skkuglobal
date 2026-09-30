import os
import math
from PIL import Image, ImageDraw, ImageFont

# Standard Open Graph dimensions
W, H = 1200, 630
base = Image.new('RGBA', (W, H), (255, 255, 255, 255))
draw = ImageDraw.Draw(base)

# Background gradient: subtle soft mint-emerald at top-left to crisp white
for y in range(0, H, 2):
    for x in range(0, W, 4):
        dist = math.sqrt((x / W) ** 2 + (y / H) ** 2)
        factor = max(0.0, min(1.0, 1.0 - dist * 0.72))
        r = int(255 * (1 - factor) + 236 * factor)
        g = int(255 * (1 - factor) + 253 * factor)
        b = int(255 * (1 - factor) + 245 * factor)
        draw.rectangle([x, y, x + 3, y + 1], fill=(r, g, b, 255))

# System typography
font_hero_bold = ImageFont.truetype('C:/Windows/Fonts/segoeuib.ttf', 74)
font_subtitle = ImageFont.truetype('C:/Windows/Fonts/segoeui.ttf', 27)
font_badge = ImageFont.truetype('C:/Windows/Fonts/segoeuib.ttf', 18)
font_foot_bold = ImageFont.truetype('C:/Windows/Fonts/segoeuib.ttf', 23)
font_foot = ImageFont.truetype('C:/Windows/Fonts/segoeui.ttf', 22)

# Paste Logo at top-right
logo_path = os.path.join(os.path.dirname(__file__), '..', 'public', 'brand', 'skku-green.png')
if os.path.exists(logo_path):
    logo = Image.open(logo_path).convert('RGBA')
    logo.thumbnail((190, 190), Image.Resampling.LANCZOS)
    base.paste(logo, (W - 190 - 80, 75), logo)

# Draw Top Status Pill
pill_text = 'CAC-REGISTERED ENTITY · WORLDWIDE REMOTE DELIVERY'
pill_bbox = font_badge.getbbox(pill_text)
text_w = pill_bbox[2] - pill_bbox[0]
text_h = pill_bbox[3] - pill_bbox[1]
pw = text_w + 54
ph = 38
px, py = 80, 80
draw.rounded_rectangle(
    [px, py, px + pw, py + ph],
    radius=ph // 2,
    fill=(240, 253, 244, 255),
    outline=(187, 247, 208, 255),
    width=2,
)
# Emerald dot centered vertically
dot_r = 5
dot_cx = px + 20
dot_cy = py + ph // 2
draw.ellipse([dot_cx - dot_r, dot_cy - dot_r, dot_cx + dot_r, dot_cy + dot_r], fill=(16, 185, 129, 255))
draw.text((px + 36, py + (ph - text_h) // 2 - 2), pill_text, fill=(4, 120, 87, 255), font=font_badge)

# Main Hero Headline
y_pos = 165
draw.text((80, y_pos), 'We Build.', fill=(15, 23, 42, 255), font=font_hero_bold)
draw.text((80, y_pos + 84), 'We Secure.', fill=(16, 185, 129, 255), font=font_hero_bold)
draw.text((80, y_pos + 168), 'We Deploy.', fill=(15, 23, 42, 255), font=font_hero_bold)

# Subtitle / Core Offerings
sub_y = y_pos + 272
draw.text(
    (80, sub_y),
    'Full-Stack Web Engineering · SecuScan Security Audits · E-Commerce Systems',
    fill=(71, 85, 105, 255),
    font=font_subtitle,
)

# Divider line
draw.line([(80, H - 95), (W - 80, H - 95)], fill=(226, 232, 240, 255), width=2)

# Footer text
draw.text((80, H - 72), 'skkuglobal.com', fill=(16, 185, 129, 255), font=font_foot_bold)
right_text = 'Lagos Tech Corridor, Nigeria · Working Worldwide'
rt_bbox = font_foot.getbbox(right_text)
rt_w = rt_bbox[2] - rt_bbox[0]
draw.text((W - 80 - rt_w, H - 72), right_text, fill=(100, 116, 139, 255), font=font_foot)

out_path = os.path.join(os.path.dirname(__file__), '..', 'public', 'og-image.png')
base.save(out_path, 'PNG')
print('Successfully generated public/og-image.png')
