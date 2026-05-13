import re

with open('scratch_styles.scss', 'r') as f:
    content = f.read()

# Extract variables from :root
root_match = re.search(r':root\s*\{([^}]*)\}', content)
root_vars = root_match.group(1) if root_match else ""
content = re.sub(r':root\s*\{[^}]*\}', '', content)

# Extract html rules
html_match = re.search(r'html\s*\{([^}]*)\}', content)
html_rules = html_match.group(1) if html_match else ""
content = re.sub(r'html\s*\{[^}]*\}', '', content)

# Extract body rules
body_match = re.search(r'body\s*\{([^}]*)\}', content)
body_rules = body_match.group(1) if body_match else ""
content = re.sub(r'body\s*\{[^}]*\}', '', content)

# Remove imports or other global stuff if any (fonts)
# Nothing here.

new_content = """@import "@/styles/imports";

.dpiContainer {
"""
new_content += root_vars + "\n"
new_content += html_rules + "\n"
new_content += body_rules + "\n"

# Indent the rest of the content
indented_rest = "\n".join(["  " + line for line in content.split('\n')])

new_content += indented_rest + "\n}\n"

with open('components/Reports/DPI/DPI.module.scss', 'w') as f:
    f.write(new_content)

print("Styles processed and saved to DPI.module.scss")
