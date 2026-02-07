flowchart LR

UNstats[UN stats] -->|import| UN_NAMAD[UN_NAMAD.xlsb]
UN_NAMAD -->|import| NatAccs[NatAccs.xlsb]

TWstats[Taiwan stats] -->|Copy/Paste| TaiwanXLSB[Taiwan.xlsb]
TaiwanXLSB -->|import| TaiwanXLS[Taiwan.xls]

MAstats[Morocco stats] -->|Copy/Paste| WSHCE[Western Sahara GDP and HCE.xlsb]
WSHCE -->|Import| UN_NAMAD
