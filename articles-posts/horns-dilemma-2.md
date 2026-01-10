---
title: "The Horns of the Dilemma #2"
description: "In statistical analyses, you cannot get everything. This framework explains the trade-offs."
image: /assets/social-card-think.png
---

# The Horns of the Dilemma #2
*Dr. Staffan Canback, Tellusant*  

When working with large companies, we often encounter people who want everything from statistical analyses. They want a model to predict well, to explain what is going on (the drivers), and to be understandable by them as non-experts.  

This is impossible to achieve. The framework below shows the trade-off between these three factors. The framework is my adaptation of the [*Horns of the Dilemma*](horns-dilemma-1.md) framework for research in sociology (including management science).¹  

<p align="center">
<img  src="assets/images/tellusant-horns-of-dilemma-2.svg" width="400" alt="">  
</p>

**Predictive versus explanatory**. You usually cannot get prediction and explanation at the same time. The best predictive models are often timeseries (moving average) based. They have no independent variables, so they explain nothing. Non-statisticians find this disturbing. How can you predict well but not be able to explain what makes the model work?  

On the other hand, it is relatively easy to create models with high explanatory power, but they do not predict anything. An extreme case is an over-fitted regression model with many independent variables. It may give an R-squared of 0.95, but when put to the predictive test (e.g., with MAPE) it is bound to fail.  

**Understandable versus predictive / explanatory**.  Good models are hard to understand while understandable models often predict and explain poorly. Typically, we work with statistical lay people within our clients. They have some grounding in quantitative analysis, but honestly, not much. Not unreasonably, they view good models as black boxes.  

Is there a middle ground? Not really. I have found over the years that you cannot bring across most good models in a way that non-experts understand. It may work in a meeting, but the memory of that meeting fades quickly because the model is outside their knowledge domain.  

<p align="center">
—&nbsp;&nbsp;—&nbsp;&nbsp;—
</p>

My recommendation is to accept that good models will not be fully understandable. We accept that we do not know how Einstein's relativity theory affects the car's GPS. We just accept this and use it anyway. There is an element of this to statistical analysis.  

As a recipient of models, one should not be expected to know nonlinear regressions and how they are derived from differential equations. One should not be expected to know the implications of Marshall's homogeneity condition or Hotelling-Jureen's symmetry condition. Go with the flow.  

The better approach is to do critical tests without trying to understand the details.  

In sum, do not expect to satisfy all three conditions: prediction, explanation, and understandability. Decide which of the three factors is truly important to you, and accept that the two others will not be fully satisfied.  

---
¹ Note that not everyone can propose frameworks. Only the authorities can. That is, people with a long and distinguished career in the subject matter; typically associate and full professors or their equivalents. I consider myself such an authority in this knowledge domain, so hence my new framework.  

I learned this the hard way 25 years ago. Early in my doctoral studies I suggested a framework. A professor said "who are the authorities you cite for this framework?" I said "I created it." He responded " how dare you compare yourself to the authorities? You are are a lowly doctoral student and cannot offer anything. Prove yourself first: read read read - write write write, and you may get there."  

[2025-11-07]  
