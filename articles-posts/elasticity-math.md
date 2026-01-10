---
title: "Elasticity Math"
description: "Why do we use logarithms when calculating elasticities? Here is the answer."
image: /assets/social-card-think.png
---
# Elasticity Math  
*Dr. Staffan Canback, Tellusant*  

>*This is my most popular substance-oriented post ever.*


I sometimes get the question "why do you use logarithms when calculating elasticities?" Rather than answering each time, I decided to answer once and point people to this post. Ask many, answer once.

I assume the reader knows elementary calculus.

<p align="center">
<img  src="assets/images/tellusant-elasticity-math.svg" width="500" alt="Elasticity math">
</p>

The reason the logarithm is taken is that it is equivalent to working with percentage changes, and it makes for a nice linear regression.¹ 

The equations shown explain this.² Think, for example, of y=demand and x=price. Then the elasticity tells us how much demand falls if price increases.³

What I have shown is in any relevant text book. Thus, no magic here, just a refresher.

Tellusant, Inc. sometimes works with this linear equation, but in most cases we use a nonlinear approach that is more complicated. As Angus Deaton, Nobel Prize winner in Economics pointed out:

> “…[the linear regression model]…is not consistent with utility maximization…and will eventually lead to gross over-prediction”

---

¹ It also is a transformation that make observations normally distributed in many cases, thus reducing heteroscedasticity.  
² Some readers may ask: Where is the constant C in the integration. I set it to zero for simplicity.  
³ There are cases when demand increases when price increases. Those cases are rare.  



---
[2025-06-25]
