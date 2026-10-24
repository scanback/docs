---
robots: noindex, nofollow
sitemap: false
---

# Product Governance and Dashboard Diagnostic Framework

The following two Mermaid diagrams reproduce and organize the two handwritten charts from October 19, 2026. Wording has been lightly standardized for readability.

## 1. Product Governance

<div class="mermaid">
    
flowchart LR
    A["Product Governance"]
    B["Science, Logic & Approval"]
    C["Parallel Tracks — Portfolio"]
    D["AI Validation & Integration"]

    A --> B
    A --> C
    A --> D

    B --> B1["All products and features based on mathematical or scientifically accepted methods"]
    C --> C1["70%: Troubleshooting and improvements"]
    C --> C2["30%: Commercial initiatives"]
    C2 --> C3["Dashboard"]
    C2 --> C4["TelluBase"]
    C2 --> C5["New clients"]
    C --> C6["Alternative allocation: 50% / 50%"]
    D --> D1["Immediate, short-term initiative to simplify and future-proof products"]

    classDef blue fill:#E3F2FD,stroke:#0D47A1,stroke-width:2px,color:#111;
    classDef green fill:#E8F5E9,stroke:#1B5E20,stroke-width:2px,color:#111;
    classDef red fill:#FFEBEE,stroke:#B71C1C,stroke-width:2px,color:#111;
    class A red;
    class B,C,D blue;
    class B1,C1,C2,C3,C4,C5,C6,D1 green;

</div>

## 2. Dashboard Example: Declining Margin

*Architecture note in the source: Frontend to PoluSim rather than TelluBase.*

<div class="mermaid">
    
flowchart LR
    A["Dashboard: Declining Margin"]
    B["Is it the economy? — Macroeconomic baseline"]
    C["Is it our industry / sector?"]
    D["Is it us? — Internal execution"]

    A --> B
    A --> C
    A --> D

    B --> B1["Inflation"]
    B --> B2["Interest rates"]
    B --> B3["Capital costs"]

    C --> C1["Peer-group performance"]
    C --> C2["Supply-chain shifts"]
    C --> C3["Pricing strategy"]
    C3 --> C4["Input costs"]
    C3 --> C5["Fulfillment time"]
    C3 --> C6["Gross margin"]

    D --> D1["Operational efficiency"]
    D --> D2["Unit economics"]
    D --> D3["Margin delta"]
    D3 --> D4["Pricing limits"]
    D3 --> D5["Labor yield"]
    D3 --> D6["Fixed costs"]

    classDef blue fill:#E3F2FD,stroke:#0D47A1,stroke-width:2px,color:#111;
    classDef green fill:#E8F5E9,stroke:#1B5E20,stroke-width:2px,color:#111;
    classDef red fill:#FFEBEE,stroke:#B71C1C,stroke-width:2px,color:#111;
    class A red;
    class B,C,D blue;
    class B1,B2,B3,C1,C2,C3,C4,C5,C6,D1,D2,D3,D4,D5,D6 green;

</div>

**Transcription note:** The handwritten source has some ambiguous wording. In particular, the industry branch lists “input cost / fulfillment time / gross margin” beneath pricing strategy; the diagram preserves that visual grouping without asserting a causal relationship. The source also suggests a 70/30 allocation *or* 50/50, not both simultaneously.
