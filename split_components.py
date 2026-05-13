import re
import os

with open('scratch_body.jsx', 'r') as f:
    content = f.read()

sections = [
    ("NAV", "Navigation"),
    ("HERO", "Hero"),
    ("EXEC SUMMARY", "ExecSummary"),
    ("GLOBAL SHIFTS", "GlobalShifts"),
    ("INTERNATIONAL COMPARISON", "InternationalComparison"),
    ("NIGERIA 2025 TIMELINE", "Timeline"),
    ("SCENARIOS", "Scenarios"),
    ("RISKS", "Risks"),
    ("STATE READINESS", "StateReadiness"),
    ("SECTORS", "Sectors"),
    ("RECOMMENDATIONS", "Recommendations"),
    ("DOWNLOAD CTA", "DownloadSection"),
    ("FOOTER", "Footer")
]

for i in range(len(sections)):
    marker, comp_name = sections[i]
    start_str = f"{{/*  {marker}  */}}"
    
    if i < len(sections) - 1:
        end_str = f"{{/*  {sections[i+1][0]}  */}}"
        match = re.search(re.escape(start_str) + r'(.*?)' + re.escape(end_str), content, re.DOTALL)
        if match:
            comp_content = match.group(1).strip()
        else:
            print(f"Failed to find {comp_name}")
            continue
    else:
        # last section
        match = re.search(re.escape(start_str) + r'(.*)', content, re.DOTALL)
        if match:
            comp_content = match.group(1).strip()
        else:
            print(f"Failed to find {comp_name}")
            continue

    template = f"""import React from 'react';
import styles from '../DPI.module.scss';

const {comp_name} = () => {{
    return (
        <>
            {comp_content}
        </>
    );
}};

export default {comp_name};
"""
    with open(f"components/Reports/DPI/components/{comp_name}.tsx", "w") as f:
        f.write(template)
    print(f"Created {comp_name}.tsx")

