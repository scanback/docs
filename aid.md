# Methods aid etc.

## The General Linear Forecasting Model for Demand

This is the equation for a "raw" regression:

$$\Delta y_t= \alpha+ \sum_{k \in \mathcal{LF}} \beta_k(L)\,\Delta x_{k,t}+ \sum_{j \in \mathcal{HF}} \gamma_j(L)\,w_{j,t}+ u_t,\quad u_t \sim \text{ARIMA(p,d,q)}$$

I prefer to run a detrended, stationary model in differences which has a slight modification in the timeseries part:

$$\Delta y_t= \alpha+ \sum_{k \in \mathcal{LF}} \beta_k(L)\,\Delta x_{k,t}+ \sum_{j \in \mathcal{HF}} \gamma_j(L)\,w_{j,t}+ u_t,\quad u_t \sim \text{ARMA(p,q)}$$

*(L)* means that a lag term may be included. *LF* = Low frequency (long-term influences on demand) such as population growth; *HF* = High Frequency (short-term influences on demand) such as unemployment. Price often shows up as both *LF* and *HF*  with *HF* usually more important.

Note that *LF* or *HF* coefficients may be calculated in a separate model and elasticities then set as statics.

These are ARIMAX equations, but with a clear distinction between long-term and short-term independent variables.

Once one of this basic equations are understood

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
