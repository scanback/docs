# Methods Aid Etc.

## The General Linear Forecasting Model for Demand  
This is the equation for a "raw" regression:  

$$(1) \quad \Delta y_t= \alpha+ \sum_{k \in \mathcal{LF}} \beta_k(L)\,\Delta x_{k,t}+ \sum_{j \in \mathcal{HF}} \gamma_j(L)\,\Delta w_{j,t}+ u_t,\quad u_t \sim \text{ARIMA(p,d,q)}$$  

We often prefer to run a de-trended, stationary model in differences which has a slight modification in the timeseries part:  

$$(2) \quad \Delta y_t= \alpha+ \sum_{k \in \mathcal{LF}} \beta_k(L)\,\Delta x_{k,t}+ \sum_{j \in \mathcal{HF}} \gamma_j(L)\,w_{j,t}+ u_t,\quad u_t \sim \text{ARMA(p,q)}$$  

*(L)* means that a lag term may be included. *LF* = Low frequency (long-term influences on demand) such as population growth; *HF* = High frequency (short-term influences on demand) such as unemployment. Price often shows up as both *LF* and *HF*  with *HF* usually more important.  

Note the subtle variations: *(1)* has *Δw* while (2) has *w* since it is already differenced. *(1)* has *ARIMA(p,d,q)* while (2) has *ARMA(p,q)* since *d* disappears when differencing.  

Note that *LF* or *HF* coefficients may be calculated in a separate model and elasticities then set as static.

These are ARIMAX equations, but with a clear distinction between long-term and short-term independent variables and the timeseries component.

Do not use more advanced models such as ECM / ARDL unless truly necessary. It quickly becomes analysis for its own sake with little value added and requires PhD expertise.

## Spread x interval over y interval (rescaling):  

$$y = \frac{x - x_{\min}}{x_{\max} - x_{\min}} \cdot (y_{\max} - y_{\min}) + y_{\min}$$  

<p align="center">
if this is for regression purposes, consider logit:
<br/>
create odds function z=y/(1-y)  
</p>

$$z=\frac{(x-x_{\min})(y_{\max}-y_{\min})+y_{\min}(x_{\max}-x_{\min})}{(1-y_{\min})(x_{\max}-x_{\min})-(x-x_{\min})(y_{\max}-y_{\min})}$$  

<p align="center">
or  
</p>

$$z=\frac{x(y_{\max}-y_{\min})-x_{\min}(y_{\max}-y_{\min})+y_{\min}(x_{\max}-x_{\min})}{(1-y_{\min})(x_{\max}-x_{\min})-x(y_{\max}-y_{\min})+x_{\min}(y_{\max}-y_{\min})}$$  

<p align="center">
put in Möbius form  
</p>

$$z=\frac{(y_{\max}-y_{\min})x + (x_{\max}y_{\min}-x_{\min}y_{\max})}{(y_{\min}-y_{\max})x + (x_{\max}-x_{\min}-x_{\max}y_{\min}+x_{\min}y_{\max})}$$

$$z=\frac{ax+b}{cx+d}$$  

$$a=y_{\max}-y_{\min}$$  

$$b=x_{\max}y_{\min}-x_{\min}y_{\max}$$  

$$c=-a=y_{\min}-y_{\max}$$  

$$d=x_{\max}-x_{\min}-x_{\max}y_{\min}+x_{\min}y_{\max}$$  

<p align="center">
take logarithm of z to get logit
</p>

The steps with z are in practice unnecessary. It is better to create two colums. The first y, the second with y/(1-y). z folds this into one column, but what's the point. Columns are cheap.
