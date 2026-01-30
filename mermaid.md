# Test of New Mermaid Features

<div class="mermaid">

---
config:
  xyChart:
    width: 550
    titleFontSize: 12
  themeVariables:
    xyChart:
      plotColorPalette: "#1f6fff"
---
xychart-beta horizontal
  title "G1 - Country Comparison of Scores"
  x-axis ["South Africa", "Switzerland", "Netherlands"]
  y-axis "Weighted average score across 8 measures" 0 --> 10
  bar [5.1, 8.0, 6.6]
    
</div>

<div class="mermaid">
  
---
config:
  xyChart:
    width: 550
  themeVariables:
    xyChart:
      plotColorPalette: "#C00000,#7b3fe4,#2aa876,#d95f02"
---
xychart-beta horizontal
  title "G2 - Country Comparison of Scores"
  x-axis ["South Africa", "Switzerland", "Netherlands", "United States", "United Kingdom", "India", "Brazil", "China", "Nigeria", "Mexico", "Myanmar", "United Arab Emirates", "Saudi Arabia", "Qatar", "Oman", "Kuwait", "Bahrain"]
  y-axis "Weighted average score across 8 measures" 0 --> 10

  %% Group A
  bar [5.1, -0.2, -0.2, -0.2, -0.2, -0.2, -0.2, -0.2, -0.2, -0.2, -0.2, -0.2, -0.2, -0.2, -0.2, -0.2, -0.2]

  %% Group B
  bar [-0.2, 8.0, 6.6, 5.7, 5.5, -0.2, -0.2, -0.2, -0.2, -0.2, -0.2, -0.2, -0.2, -0.2, -0.2, -0.2, -0.2]

  %% Group C
  bar [-0.2, -0.2, -0.2, -0.2, -0.2, 6.6, 6.3, 5.7, 5.6, 5.1, 2.3, -0.2, -0.2, -0.2, -0.2, -0.2, -0.2]

  %% Group D
  bar [-0.2, -0.2, -0.2, -0.2, -0.2, -0.2, -0.2, -0.2, -0.2, -0.2, -0.2, 7.1, 6.9, 6.8, 6.2, 6.0, 4.8]

  </div>

<div class="mermaid">

---
config:
  theme: 'base'
  themeVariables:
    primaryColor: '#ff0000'
    primaryTextColor: '#fff'
    primaryBorderColor: '#7C0000'
    lineColor: '#F8B229'
    secondaryColor: '#006100'
    tertiaryColor: '#fff'
    xyChart:
      plotColorPalette: '#9E5937, #00FF00'
      width: 300
      height: 300
      showDataLabel: true  
      titleFontSize: 40
---

xychart horizontal
title "G3 - Different Colors in xyChart"
x-axis "categoriesX" ["Category 1", "Category 2", "Category 3", "Category 4"]
y-axis "valuesY" 0 --> 40
%% Blue bar
bar [20,30,25,35]
%% Green bar
bar [15,25,20,30]

</div>

---

<div class="mermaid">
  
---
title: "G4 - Grades"
---
radar-beta
  axis m["Math"], s["Science"], e["English"]
  axis h["History"], g["Geography"], a["Art"]
  curve a["Alice"]{85, 90, 80, 70, 75, 90}
  curve b["Bob"]{70, 75, 85, 80, 90, 85}

  max 100
  min 0
</div>
