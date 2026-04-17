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

    </div>
