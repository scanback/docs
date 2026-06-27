# Production Error vs. Transaction Error

*Work note – June 2026*

Today I explored whether the practitioners of error reduction can be divided into two major traditions:

1. **Production-cost error reduction**
2. **Transaction-cost error reduction**

This is not intended as a replacement for the broader philosophy of error developed elsewhere. Rather, it is a historical lens for understanding how practical approaches to error evolved.

---

## Historical Evolution

The following flowchart illustrates the two historical streams as discussed during this work note. It should be viewed as a first draft rather than a definitive taxonomy.

<div class="mermaid">
       
flowchart TD
    A["Error as inefficiency<br/>late 19th–early 20th c."] --> B["Production-cost tradition"]
    A --> C["Transaction-cost tradition"]

    B --> B1["Taylor<br/>scientific management"]
    B1 --> B2["Gilbreths<br/>motion, fatigue, work design"]
    B2 --> B3["Shewhart<br/>statistical control of variation"]
    B3 --> B4["Deming & Juran<br/>quality as management system"]
    B4 --> B5["Toyota / Ohno<br/>waste, flow, kaizen"]
    B5 --> B6["Taguchi / Six Sigma<br/>robust design, defect reduction"]

    C --> C1["Coase<br/>why firms exist"]
    C1 --> C2["Barnard<br/>cooperation and authority"]
    C2 --> C3["Simon<br/>bounded rationality"]
    C3 --> C4["Cyert & March<br/>behavioral theory of the firm"]
    C4 --> C5["Williamson<br/>governance, opportunism, asset specificity"]
    C5 --> C6["Argyris & Schön<br/>error detection, defensive routines, double-loop learning"]
    C6 --> C7["Senge and learning organization<br/>systems thinking"]

    B6 --> D["Modern operational excellence"]
    C7 --> E["Modern organizational learning / governance"]

    D --> F["Error as cost of failed execution"]
    E --> G["Error as cost of failed coordination"]

</div>

Or, arguably better:

<div class="memaid">
       
flowchart TD

    A["Error as Inefficiency<br/>Late 19th Century"]

    A --> B["Scientific Management"]

    B --> C["Taylor<br/>Scientific Management"]
    C --> D["Gilbreths<br/>Motion & Fatigue Studies"]

    D --> E["Shewhart<br/>Statistical Thinking<br/>Variation as the Fundamental Problem"]

    E --> F["Systems Thinking"]

    F --> G["Production Systems"]
    F --> H["Organizational Systems"]
    F --> I["Learning Systems"]

%% Production

    G --> G1["Deming<br/>Management of Variation"]
    G1 --> G2["Juran<br/>Quality Planning & Improvement"]
    G2 --> G3["Toyota / Ohno<br/>Lean Production"]
    G3 --> G4["Taguchi"]
    G4 --> G5["Six Sigma"]

%% Organization

    H --> H1["Barnard<br/>Cooperation & Authority"]
    H1 --> H2["Coase<br/>Why Firms Exist"]
    H2 --> H3["Simon<br/>Bounded Rationality"]
    H3 --> H4["Cyert & March"]
    H4 --> H5["Williamson"]

%% Learning

    I --> I1["Argyris & Schön<br/>Double-Loop Learning"]
    I1 --> I2["Senge<br/>Learning Organization"]

%% Modern synthesis

    G5 --> Z["Modern Theory of Error Reduction"]
    H5 --> Z
    I2 --> Z

</div>

## Initial Classification

| Production Cost | Transaction Cost |
|-----------------|------------------|
| Taylor | Coase |
| Gilbreths | Barnard |
| Shewhart | Simon |
| Deming | Cyert & March |
| Juran | Williamson |
| Toyoda | Argyris & Schön |
| Ohno | Senge |
| Taguchi | |
| Six Sigma | |

The distinction is roughly:

- **Production practitioners** reduce errors occurring during transformation of inputs into outputs.
- **Transaction practitioners** reduce errors occurring while coordinating people, organizations, knowledge, and incentives.

---

## A Better Abstraction

During the discussion it became clear that **cost is probably not the fundamental concept.**

Instead:

> **Error is fundamental. Cost is one consequence of error.**

Production costs and transaction costs are therefore different manifestations of the same underlying phenomenon.

---

## Historical Expansion of the "Unit of Error"

One interesting observation is that the object of error expands over time.

| Era | Unit of Error | Representative Thinkers |
|------|---------------|-------------------------|
| Mechanical | Motion and task execution | Taylor, Gilbreths |
| Statistical | Process variation | Shewhart |
| Managerial | Production systems | Deming, Juran |
| Organizational | Firm coordination | Coase, Barnard |
| Cognitive | Human decision making | Simon |
| Behavioral | Organizational decision processes | Cyert & March |
| Governance | Contracts and incentives | Williamson |
| Learning | Mental models and governing assumptions | Argyris & Schön |

The progression can also be expressed as

1. Motion
2. Process
3. Factory
4. Firm
5. Decision maker
6. Organization
7. Institution
8. Mental model

This is an appealing historical perspective because the scope of error continually expands.

---

## Herbert Simon as the Bridge

Herbert Simon appears to connect the production and transaction traditions.

Taylor asks:

> What is the best method?

Simon asks:

> Given bounded rationality, how do humans discover or approximate the best method?

Error therefore moves from the production system into the human decision process.

Many later thinkers—including Cyert, March, Williamson, and Argyris—can be viewed as extending Simon's insight.

---

## Barnard's Importance

Chester Barnard may deserve a larger role than is often recognized.

His work centers on

- communication,
- authority,
- cooperation,
- incentives, and
- organizational equilibrium.

These are essentially transaction errors before transaction-cost economics became formalized.

Simon regarded Barnard as one of his major intellectual influences.

---

## Deming and Coase

An unexpected parallel emerged.

Deming asks:

> Why do organizations generate unnecessary production variation?

Coase asks:

> Why do organizations incur unnecessary coordination costs?

Both are attempting to explain why organizations perform below their technological potential.

The difference lies primarily in what is being optimized:

- production systems,
- versus governance systems.

---

## Argyris Changes the Object of Correction

There appears to be a natural progression:

- Taylor corrects workers.
- Deming corrects processes.
- Coase explains organizational boundaries.
- Argyris corrects governing assumptions.

This may explain why Argyris feels somewhat different from Williamson.

Argyris is not primarily reducing transaction costs.

He is reducing **the cost of remaining wrong.**

---

## Possible Three-Way Classification

Rather than only two practical traditions, there may eventually be three.

```
Practical Error Reduction

├── Production
│      Taylor
│      Shewhart
│      Deming
│      Juran
│      Toyota
│
├── Coordination
│      Barnard
│      Coase
│      Simon
│      Williamson
│
└── Learning
       Argyris
       Schön
       Senge
```

Learning differs from coordination because it is a meta-capability.

It improves an organization's ability to detect and correct its own errors, whether those errors occur in production or coordination.

---

## Relation to the Broader Philosophy of Error

This historical classification is orthogonal to the broader taxonomy of errors.

One taxonomy asks:

> **What kind of error is it?**

Another asks:

> **Where does the error originate?**

For example:

| Origin | Example |
|---------|---------|
| Process | Variation |
| Human cognition | Bias |
| Organization | Misalignment |
| Institution | Transaction failure |
| Epistemology | False belief |

These two taxonomies may eventually form a matrix.

---

## Observation

The discussion suggests that the history of management and organization theory can be interpreted as an expanding theory of error.

The focus moves progressively from

**motion → process → organization → cognition → institutions → learning.**

This perspective may provide a useful historical narrative alongside the broader philosophical framework developed elsewhere.
