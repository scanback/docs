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

---
config:
---
config:
  theme: forest
  themeVariables:
    xyChart:
      plotColorPalette: '#9E5937, #00FF00'
      width: 300
      height: 300
      showDataLabel: true  
      titleFontSize: 40
---

xychart horizontal
title "Different Colors in xyChart"
x-axis "categoriesX" ["Category 1", "Category 2", "Category 3", "Category 4"]
y-axis "valuesY" 0 --> 40
%% Blue bar
bar [20,30,25,35]
%% Green bar
bar [15,25,20,30]

</div>

---

