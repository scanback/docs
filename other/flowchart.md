<div class="mermaid">

flowchart TB

%% Nodes
UNstats[UN stats]
TWstats[Taiwan stats]
MAstats[Morocco stats]

UN_NAMAD[📊 UN_NAMAD.xlsb]
NatAccs[📊 NatAccs.xlsb]

TaiwanXLSB[📊 Taiwan.xlsb<br/>(in Countries folder)]
TaiwanXLS[📊 Taiwan.xls]

WSHCE[📊 Western Sahara GDP and HCE.xlsb<br/>(in Countries folder)]

%% Flows
UNstats -->|import| UN_NAMAD
UN_NAMAD -->|import| NatAccs

TWstats -->|Copy/Paste| TaiwanXLSB
TaiwanXLSB -->|import| UN_NAMAD

MAstats -->|Copy/Paste| WSHCE
WSHCE -->|Import| UN_NAMAD

%% Styling
classDef stats fill:#f2f2f2,stroke:#999,stroke-width:1px,color:#000
classDef files fill:#d9d9d9,stroke:#333,stroke-width:1.5px,color:#000

class UNstats,TWstats,MAstats stats
class UN_NAMAD,NatAccs,TaiwanXLSB,TaiwanXLS,WSHCE files

</div>
