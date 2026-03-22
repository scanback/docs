# Method aid etc.

#### Spread over an interval:  
$$y = \frac{x - x_{\min}}{x_{\max} - x_{\min}} \cdot (y_{\max} - y_{\min}) + y_{\min}$$  

create odds function z=y/(1-y)  

$$z=\frac{(x-x_{\min})(y_{\max}-y_{\min})+y_{\min}(x_{\max}-x_{\min})}{(1-y_{\min})(x_{\max}-x_{\min})-(x-x_{\min})(y_{\max}-y_{\min})}$$  

or  

$$z=\frac{x(y_{\max}-y_{\min})-x_{\min}(y_{\max}-y_{\min})+y_{\min}(x_{\max}-x_{\min})}{(1-y_{\min})(x_{\max}-x_{\min})-x(y_{\max}-y_{\min})+x_{\min}(y_{\max}-y_{\min})}$$  

put in Möbius form  

$$z=
\frac{
(y_{\max}-y_{\min})x + (x_{\max}y_{\min}-x_{\min}y_{\max})
}{
(y_{\min}-y_{\max})x + (x_{\max}-x_{\min}-x_{\max}y_{\min}+x_{\min}y_{\max})
}$$

$$z=\frac{ax+b}{cx+d}$$  

$$a=y_{\max}-y_{\min}$$  

$$b=x_{\max}y_{\min}-x_{\min}y_{\max}$$  

$$c=-a=y_{\min}-y_{\max}$$  

$$d=x_{\max}-x_{\min}-x_{\max}y_{\min}+x_{\min}y_{\max}$$  

