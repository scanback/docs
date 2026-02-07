<div class="mermaid">

flowchart TB

UNstats[UN stats] -->|import| UN_NAMAD[📊 UN_NAMAD.xlsb]
UN_NAMAD -->|import| NatAccs[📊 NatAccs.xlsb]

TWstats[Taiwan stats] -->|Copy/Paste| TaiwanXLSB (in Countries folder)[📊 Taiwan.xlsb]
TaiwanXLSB -->|import| UN_NAMAD

MAstats[Morocco stats] -->|Copy/Paste| WSHCE[📊 Western Sahara GDP and HCE.xlsb]
WSHCE -->|Import| UN_NAMAD

</div>
