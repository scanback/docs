---
title: "Fedora"
description: "How can a previously manual workflow be automated with AI and other components? I use our Fed Beige Book analysis as a case study to show the now automated workflow."
image: /assets/social-card-think.png
---
# Fedora
How can a previously manual workflow be automated with AI and other components? I use our Fed Beige Book analysis as a case study to show the now automated workflow.

<div class="mermaid">

flowchart TD

    A[New Beige Book Release]

    subgraph S1[1. Ingestion]
        B[Fetch Beige Book (HTML / PDF)]
        C[Store Source & Metadata]
    end

    subgraph S2[2. Extraction]
        D[Parse District Sections]
        E[Extract First Sentences]
        F[Extract Full District Text]
    end

    subgraph S3[3. Scoring]
        G[Apply Growth LUT (First Sentence)]
        H[Apply Semantic LUT (Full Text)]
        I[Generate District Scores]
    end

    subgraph S4[4. Aggregation]
        J[Apply GDP Weights (from Workbook)]
        K[Compute Metrics: Weighted Mean, DI, WDI]
        L[Compute Semantic Indices]
        M[Compute Composite Macro Index]
    end

    subgraph S5[5. Output]
        N[Write to Workbook (Main, Semantic, History)]
        O[Generate Tellusant Summary]
        P[Generate Charts (Python)]
        Q[Store Audit Trail]
    end

    subgraph S6[6. Automation]
        R[Scheduled Trigger (GitHub Actions)]
        S[Check for New Release]
    end

    subgraph S7[7. Feedback Loop]
        T[Human Review]
        U[Update LUTs in Workbook]
    end

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
    Q --> T --> U --> G

%% ========= STYLES =========
classDef green   fill:#E8F5E9,stroke:#1B5E20,stroke-width:2px,color:#111;
classDef blue    fill:#E3F2FD,stroke:#0D47A1,stroke-width:2px,color:#111;
classDef orange  fill:#FFF8E1,stroke:#FF6F00,stroke-width:2px,color:#111;
classDef red     fill:#FDECEA,stroke:#B71C1C,stroke-width:2px,color:#111;
classDef grey    fill:#F5F5F5,stroke:#424242,stroke-width:2px,color:#111;
classDef base    fill:#ECECFF,stroke:#9370DB,stroke-width:2px,color:#111;
classDef clear   fill:transparent,stroke:transparent;

    </div>
