import re

html_file = "/Users/mac/Documents/Dev/Govtech_folder/govtech-v2/templates/nigeria_dpi_outlook_2026.html"

with open(html_file, 'r') as f:
    content = f.read()

# Extract styles
style_match = re.search(r'<style>(.*?)</style>', content, re.DOTALL)
styles = style_match.group(1) if style_match else ""

with open("scratch_styles.scss", "w") as f:
    f.write(styles)

# Extract body
body_match = re.search(r'<body>(.*?)<script>', content, re.DOTALL)
body = body_match.group(1) if body_match else ""

# Convert class to className
# We want to use module styles. So class="foo bar" -> className={`${styles.foo} ${styles.bar}`}
def replace_class(match):
    classes = match.group(1).split()
    if len(classes) == 1:
        return f'className={{styles["{classes[0]}"]}}'
    else:
        cls_str = " ".join([f'${{styles["{c}"]}}' for c in classes])
        return f'className={{`{cls_str}`}}'

body = re.sub(r'class="([^"]+)"', replace_class, body)

# Convert for to htmlFor
body = re.sub(r'for="([^"]+)"', r'htmlFor="\1"', body)

# Convert inline styles
def replace_style(match):
    style_str = match.group(1)
    # Parse style rules
    rules = [r.strip() for r in style_str.split(';') if r.strip()]
    obj_str = []
    for r in rules:
        if ':' not in r: continue
        k, v = r.split(':', 1)
        k = k.strip()
        v = v.strip()
        # camelCase the key
        k_parts = k.split('-')
        k_camel = k_parts[0] + "".join(x.title() for x in k_parts[1:])
        obj_str.append(f'{k_camel}: "{v}"')
    return 'style={{ ' + ', '.join(obj_str) + ' }}'

body = re.sub(r'style="([^"]+)"', replace_style, body)

# Close tags
body = re.sub(r'<br>', r'<br />', body)
body = re.sub(r'<img>', r'<img />', body)
body = re.sub(r'<img(.*?)(?<!/)>', r'<img\1 />', body)

# Convert comments
body = re.sub(r'<!--(.*?)-->', r'{/* \1 */}', body)

# Remove &nbsp; or replace with {"\u00A0"}
body = body.replace('&nbsp;', '{"\\u00A0"}')

with open("scratch_body.jsx", "w") as f:
    f.write(body)

print("Extraction complete.")
