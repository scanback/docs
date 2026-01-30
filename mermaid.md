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
  themeVariables:
    xyChart:
      plotColorPalette: '#9E5937, #00FF00'
      width: 300
      height: 300
      showDataLabel: true  
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

<div class="mermaid">
  
radar_chart
    title IMF 2025 Composite Sentiment Scores (Full Comparison)
    Qatar:        4,6,7,8,8,8,6,7
    Sweden:       4,7,6,7,8,8,6,7
    Netherlands:  4,7,6,7,8,8,6,7
    Brazil:       4,5,7,7,7,8,6,6
    Nigeria:      4,5,5,7,6,7,6,5
    Mexico:       4,4,4,7,6,7,5,5
    South_Africa: 3,3,4,8,6,8,5,5
    axis_labels: GE, Fiscal, Growth, Monetary, Macro, Financial, Reforms, Confidence

    </div>

    ---

<div class="mermaid">
  
    xychart horizontal
    title "IMF Article IV – Composite Sentiment Scores"

    y-axis [
        "South Africa",
        "Netherlands",
        "United States",
        "United Kingdom",
        "India",
        "Brazil",
        "China",
        "Nigeria",
        "Mexico",
        "UAE",
        "Saudi Arabia",
        "Qatar",
        "Oman",
        "Kuwait",
        "Bahrain"
    ]

    x-axis "Score" 0 --> 8

    %% Group 1: South Africa
    bar [5.05, null, null, null, null, null, null, null, null, null, null, null, null, null, null]

    %% Group 2: Advanced economies
    bar [null, 6.60, 5.65, 5.45, null, null, null, null, null, null, null, null, null, null, null]

    %% Group 3: Large EMs
    bar [null, null, null, null, 6.60, 6.25, 5.70, 5.60, 5.10, null, null, null, null, null, null]

    %% Group 4: GCC
    bar [null, null, null, null, null, null, null, null, null, 7.10, 6.90, 6.75, 6.15, 5.95, 4.80]

    </div>
