# Test of New Mermaid Features

<div class="mermaid">
---
title: "Grades"
---
radar-beta
  axis m["Math"], s["Science"], e["English"]
  axis h["History"], g["Geography"], a["Art"]
  curve a["Alice"]{85, 90, 80, 70, 75, 90}
  curve b["Bob"]{70, 75, 85, 80, 90, 85}

  max 100
  min 0
</div>

---

<div class="mermaid">

xychart-beta horizontal
plotColorPalette: '#00FF00'
    title "𝗖𝗢𝗨𝗡𝗧𝗥𝗬 𝗖𝗢𝗠𝗣𝗔𝗥𝗜𝗦𝗢𝗡 𝗢𝗙 𝗦𝗨𝗠𝗠𝗔𝗥𝗬 𝗦𝗖𝗢𝗥𝗘𝗦"
    x-axis ["𝗦𝗼𝘂𝘁𝗵 𝗔𝗳𝗿𝗶𝗰𝗮", "Switzerland", "Netherlands", "United States", "United Kingdom", "𝙄𝙣𝙙𝙞𝙖", "𝘽𝙧𝙖𝙯𝙞𝙡", "𝘾𝙝𝙞𝙣𝙖", "𝙉𝙞𝙜𝙚𝙧𝙞𝙖", "𝙈𝙚𝙭𝙞𝙘𝙤", "𝙈𝙮𝙖𝙣𝙢𝙖𝙧", "𝚄𝚗𝚒𝚝𝚎𝚍 𝙰𝚛𝚊𝚋 𝙴𝚖𝚒𝚛𝚊𝚝𝚎𝚜", "𝚂𝚊𝚞𝚍𝚒 𝙰𝚛𝚊𝚋𝚒𝚊", "𝚀𝚊𝚝𝚊𝚛","𝙾𝚖𝚊𝚗", "𝙺𝚞𝚠𝚊𝚒𝚝", "𝙱𝚊𝚑𝚛𝚊𝚒𝚗"]
    y-axis "Weighted average score across 8 measures" 0 --> 10
    bar [5.1, 8.0, 6.6, 5.7, 5.5, 6.6, 6.3, 5.7, 5.6, 5.1, 2.3, 7.1, 6.9, 6.8, 6.2, 6.0, 4.8]
    
</div>
