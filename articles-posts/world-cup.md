---
title: "A Scientific Evaluation of World Cup Performance by Country 2002–2026"
description: "How have countries performed at the World Cup this century? A composite score by country is created by applying the Zipf distribution."
image: /assets/social-card-think.png
---
# A Scientific Evaluation of World Cup Performance by Country 2002–2026
*Dr. Staffan Canback, Tellusant*  

**Updated  on July 12, 2026 with quarterfinal results**

How have countries performed at the World Cup this century? A composite score by country is created by applying the Zipf distribution.¹  

The Zipf distribution is a wonderful tool. It is, for example, used to understand the size-distribution of cities, of companies, and of words. Datasets where the smallest value is zero are often Zipf-distributed.  

The formula is simple. The largest item has the weight 1; the second largest 1/2, third 1/3, and so on till the nth item with weight 1/n.²

We applied this in **two ways** to football performance over the seven world cups this century.  

- Each team that reached the round of 16 in a given year was given a Zipf weight. The gold medalist 1, silver 1/2, etc. This created 7 sets of 16 teams with weights.  

- The most recent year (2026) was given weight 1, down to the most distant year (2002) with weight 1/7.

The two dimensions were finally combined to create a total score by country. Higher placement in recent years get the highest score. The sum across all countries is 1000 and if a country had won all seven world cups, it would have 296 points.

The Zipf distribution strongly favors high placement and recency. Some may argue too strongly. Alternative distributions are, e.g., half-life and rectangular distributions. We have found Zipf often have the best characteristics. Zipf is also theoretically grounded.

The graph shows the ranking after the 2026 semifinals. This means that there will be some movement and I will update the graph after the final. 

<p align="center">
<img  src="https://canback.net/docs/articles-posts/assets/images/football/s.canback-tellusant-world-cup-performance.svg" width="450" alt="S.Canback-Tellusant - World Cup performance">
</p>

[The post-quarterfinals ranking reported earlier is found here](assets/images/football/s.canback-tellusant-world-cup-performance-quarter.svg)  
[The pre-quarterfinals ranking reported earlier is found here](assets/images/football/s.canback-tellusant-world-cup-performance-pre-quarter.svg)  

This post is primarily about illustrating Zipf's usefulness. I applied it to a popular topic to make it more enjoyable.

---
¹ Zipf is the ranked, discrete form of the continuous Pareto distribution. They describe the same underlying phenomena.  
² Well, not that simple: There is also a normalization constant $\frac{1}{H_N}$ where $H_N = \sum_{k=1}^{N} \frac{1}{k}$. In this post I multiplied by 1000 to make the scores range from 0 to 1000. Thus, $H_N = 1000 \sum_{k=1}^{N} \frac{1}{k}$

---
[More on football](english-football-affordability.md)
