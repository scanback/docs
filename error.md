# Error

---
## Test 2

<div class="mermaid">

flowchart TD

A["Classical Foundations"]  
P["Plato<br/>Error as ignorance"]  
AR["Aristotle<br/>Logic"]  
B["Bacon<br/>Sources of error"]  
D["Descartes<br/>Judgment"]  
H["Hume<br/>Limits of induction"]  
K["Kant<br/>Limits of reason"]  

A --> P["Plato<br/>Error as ignorance"]
A --> AR["Aristotle<br/>Logic"]
A --> B["Bacon<br/>Sources of error"]
A --> D["Descartes<br/>Judgment"]
A --> H["Hume<br/>Limits of induction"]
A --> K["Kant<br/>Limits of reason"]

P --> N
AR --> N
B --> E
D --> E
H --> N
K --> N

subgraph N["Necessary Error School"]
NI["Nietzsche"]
KU["Kuhn"]
end

subgraph E["Error Elimination School"]
PE["Peirce"]
PO["Popper"]
RE["Rescher"]
WI["Wiener"]
end

N --> DEM
N --> TOY

E --> SHE
E --> DEM
E --> JUR
E --> TOY

SHE["Shewhart"]

DEM"[Deming"]
JUR["Juran"]
TOY["Toyota Production System"]

SHE --> SPC["Statistical Process Control"]

DEM --> PDCA
JUR --> QT["Quality Trilogy"]
TOY --> LEAN["Lean"]
TOY --> KANBAN["Kanban"]

PDCA --> TQM["TQM"]
LEAN --> LEANM["Lean Management"]
KANBAN --> LEANM
QT --> SIX["Six Sigma"]

LEANM --> MODERN["Learning Organizations"]
TQM --> MODERN
SIX --> MODERN

MODERN --> GOAL["Reduced Error<br/>Better Decisions<br/>Human Flourishing"]

<\div>  

End test 2

---
## Test 1

<div class="mermaid">

flowchart TD

A[Classical Foundations]

A --> P[Plato<br/>Error as ignorance]
A --> AR[Aristotle<br/>Logic]
A --> B[Bacon<br/>Sources of error]
A --> D[Descartes<br/>Judgment]
A --> H[Hume<br/>Limits of induction]
A --> K[Kant<br/>Limits of reason]

P --> N
AR --> N
B --> E
D --> E
H --> N
K --> N

subgraph N["Necessary Error School"]
NI[Nietzsche]
KU[Kuhn]
end

subgraph E["Error Elimination School"]
PE[Peirce]
PO[Popper]
RE[Rescher]
WI[Wiener]
end

N --> DEM
N --> TOY

E --> SHE
E --> DEM
E --> JUR
E --> TOY

SHE[Shewhart]

DEM[Deming]
JUR[Juran]
TOY[Toyota Production System]

SHE --> SPC[Statistical Process Control]

DEM --> PDCA
JUR --> QT[Quality Trilogy]
TOY --> LEAN[Lean]
TOY --> KANBAN[Kanban]

PDCA --> TQM[TQM]
LEAN --> LEANM[Lean Management]
KANBAN --> LEANM
QT --> SIX[Six Sigma]

LEANM --> MODERN[Learning Organizations]
TQM --> MODERN
SIX --> MODERN

MODERN --> GOAL[Reduced Error<br/>Better Decisions<br/>Human Flourishing]

<\div>  

End test 1
