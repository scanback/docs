---
title: "Can a Non-Statistician Do Valid Statistical Analysis Using AI? No
"
description: "The results will be meaningless even though they may look good to the untrained eye."
date: 2026-11-07
image: /assets/social-card-publ.png
---

# Can a Non-Statistician Do Valid Statistical Analysis Using AI? No
*By Staffan Canback* | *2026-11-07*

The results will be meaningless even though they may look good to the untrained eye.

I tested ChatGPT with predicting future market size for beer, spirits, and wine based on a robust dataset for 130 countries and 9 U.S. census divisions, 2000-2024. The goal was to predict future years.

The results arrived and they made little sense, so I dug a bit deeper. First, there was no test of data quality. It took what was given without considering outliers. Second, it paid no attention to heteroscedasticity and normality. Third, it did not transform the data based on differential equations, which is almost always needed; instead it ran linear regressions straight off. Fourth, it included unimportant explanatory variables.

ChatGPT showed that a naive model worked best (and it said so explicitly). That is, tomorrow is the same as today. But I know this is not the case. I pointed this out and it then did a linear regression even though the data are highly nonlinear. It gave me nice (incorrect) graphs but no test statistics.

As an expert, I could have fed it instructions to adjust for the factors above. But that would probably take more time than performing the analysis myself, which for me is a System 1 thinking.

What I saw was behavior similar to a young business analyst who took a course in statistical analysis in college and think they know what they do. Mechanical skills, yes, intelligent insights, none. 

This is akin to most ML models that are useless because the people who created them did not know what they were doing.

For the next few years, domain expertise is what is needed, not AI. However, there is perhaps an opportunity for someone to create an AI agent that puts a harness on AI stats analysis to deliver trustworthy results.

On the other hand, what worked well was that ChatGPT elegantly generated KDE and ridge graphs for me. But this worked because my input data had the right properties. Insight: beer and spirits are the same market, wine is different.

I continue to rely heavily on AI. This post does not diminish my belief that AI is of incredible use. It does, however, reinforce that robust output requires a domain expert as AI operator. You cannot compensate for lack of knowledge by using AI.
