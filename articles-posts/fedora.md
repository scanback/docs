---
title: "Semantic Analysis Workflow: The Fedora Example"
description: "How can a previously manual workflow be automated with AI and other components? I use our Fed Beige Book analysis as a case study to show the new automated workflow."
image: /assets/social-card-think.png
---
# Semantic Analysis Workflow: The Fedora Example
How can a previously manual workflow be automated with AI and other components? I use our [Fed Beige Book analysis agent called Fedora](https://tellusant.github.io/docs/nowcasts-ongoing-analyses/beige-book.html) as a case study to show the new automated workflow in GPT. No human need to be involved in the process any more, except for the occasional quality control.  

Just like the workflow is automated, the workflow graph generation is also automated using Mermaid v11.  

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

    subgraph S5["`⠀⠀⠀⠀⠀⠀*5. Output*`"]
        N["`**Write to Workbook**<br/>Main, Semantic, History`"]:::base
        O["`**Generate Tellusant Summary**`"]:::base
        P["`**Generate Charts (Python)**`"]:::base
        Q["`**Store Audit Trail**`"]:::base
    end

    subgraph S6["`*0. Automation*`"]
        R["`**Scheduled Trigger**<br/>GitHub Actions`"]:::base
        S["`**Check for New Release**`"]:::base
    end

    subgraph S7["`⠀⠀⠀⠀⠀⠀*6. Feedback Loop*`"]
        T["`**Human Review**`"]:::green
        U["`**Update in Workbook**`"]:::base
    end

        V["`**Final Output**`"]:::red
        
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
    O --> T
    P --> T
    Q --> T -->|⠀if error⠀| U --> G
    T -->|⠀if correct⠀| V
    O --> V
    
linkStyle 24 stroke:blue,stroke-width:1;
linkStyle 26 stroke:transparent,stroke-width:0;


%% ========= STYLES =========
classDef green   fill:#E8F5E9,stroke:#1B5E20,stroke-width:2px,color:#111;
classDef blue    fill:#E3F2FD,stroke:#0D47A1,stroke-width:2px,color:#111;
classDef orange  fill:#FFF8E1,stroke:#FF6F00,stroke-width:2px,color:#111;
classDef red     fill:#FDECEA,stroke:#B71C1C,stroke-width:2px,color:#111;
classDef grey    fill:#F5F5F5,stroke:#424242,stroke-width:2px,color:#111;
classDef base    fill:#ECECFF,stroke:#9370DB,stroke-width:2px,color:#111;
classDef clear   fill:transparent,stroke:transparent;

    </div>

The details of the workflow is best understand by studying the graph.  

Instead, what is interesting is whether the GPT generated workflow corresponds to my own cognitive process. It does exactley, with two additions.  

1. I trained the model in a series of steps a sesqui-month ago and now. It is interesting to see that GPT's work steps exactly mimics mine. It did not suggest another approach even thoug I asked it to improve the process if it could.  

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I suppose I could get a job at GPT as an agent.  

- It added two steps:
  - The *full text sematic analysis* task. In my manual version I did not have this because it was too time consuming and too arbitrary (since it involved my judgment). My more limited effort took 10 minutes every sesqui-month, which I thought was fair for an insightful piece of work. The full text analysis would take hours.
  - GPT added *Store audit trail*. As almost all humans I was sloppy with this. Having the trail is a benefit, especially for the new *full text semantic analysis*.


