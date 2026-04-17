---
title: "Semantic Analysis Workflow: The Fedora Example"
description: "How can a previously manual workflow be automated with AI and other components? I use our Fed Beige Book analysis as a case study to show the new automated workflow."
image: /assets/social-card-think.png
---
# Semantic Analysis Workflow: The Fedora Example
How can a previously manual workflow be automated with AI and other components? I use our Fed Beige Book analysis as a case study to show the new automated workflow.

<div class="mermaid">

%%{init: {'themeVariables': { 'fontFamily': 'Arial'}}}%%

flowchart TD

    A["`**New Beige Book Release**`"]:::blue

    subgraph S1["`*1. Ingestion*`"]
        B["`**Fetch Beige Book**<br/>HTML / PDF`"]:::base
        C["`**Store Source & Metadata**`"]:::base
    end

    subgraph S2["`*2. Extraction*`"]
        D["`**Parse District Sections**`"]:::base
        E["`**Extract First Sentences**`"]:::base
        F["`**Extract Full District Text**`"]:::base
    end

    subgraph S3["`*3. Scoring*`"]
        G["`**Apply Growth LUT**<br/>First Sentence`"]:::base
        H["`**Apply Semantic LUT**<br/>Full Text`"]:::base
        I["`**Generate District Scores**`"]:::base
    end

    subgraph S4["`*4. Aggregation*`"]
        J["`**Apply GDP Weights<br/>from Workbook**`"]:::base
        K["`**Compute Metrics: Weighted Mean, DI, WDI**`"]:::base
        L["`**Compute Semantic Indices**`"]:::base
        M["`**Compute Composite Macro Index**`"]:::base
    end

    subgraph S5["`*5. Output*`"]
        N["`**Write to Workbook**<br/>Main, Semantic, History`"]:::base
        O["`**Generate Tellusant Summary**`"]:::base
        P["`**Generate Charts (Python)**`"]:::base
        Q["`**Store Audit Trail**`"]:::base
    end

    subgraph S6["`*0. Automation*`"]
        R["`**Scheduled Trigger**<br/>GitHub Actions`"]:::base
        S["`**Check for New Release**`"]:::base
    end

    subgraph S7["`*6. Feedback Loop*`"]
        T["`**Human Review**`"]:::green
        U["`**Update in Workbook**`"]:::base
    end

        V["`**Final Output**`"]:::orange
        
    R --> S --> A
    A --> B --> C --> D --> E
    D --> F
    E --> G --> I
    F --> H --> I
    I --> J --> K
    I --> L --> M
    K --> N
    M --> N
    N --> O
    N --> P
    N --> Q
    Q --> T -->|⠀if error⠀| U --> G
    %% T -->|⠀no error⠀| V

%% ========= STYLES =========
classDef green   fill:#E8F5E9,stroke:#1B5E20,stroke-width:2px,color:#111;
classDef blue    fill:#E3F2FD,stroke:#0D47A1,stroke-width:2px,color:#111;
classDef orange  fill:#FFF8E1,stroke:#FF6F00,stroke-width:2px,color:#111;
classDef red     fill:#FDECEA,stroke:#B71C1C,stroke-width:2px,color:#111;
classDef grey    fill:#F5F5F5,stroke:#424242,stroke-width:2px,color:#111;
classDef base    fill:#ECECFF,stroke:#9370DB,stroke-width:2px,color:#111;
classDef clear   fill:transparent,stroke:transparent;

    </div>
