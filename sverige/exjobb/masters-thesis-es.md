---
title: "Tesis de maestría en conversión de potencia eléctrica"
Description: "Estudio de las pérdidas armónicas en una máquina de inducción conectada en serie con un inductor. 🇪🇸"
image: /assets/social-card-pensar.png
---

<!-- Página 1 -->

> **Nota de traducción.** Esta es una traducción fiel del documento maestro en sueco. Las ecuaciones, los valores numéricos, los listados de código fuente, las notas de reconstrucción y los puntos de comprobación de la pasada 2 se han conservado sin correcciones técnicas.


# TESIS DE MAESTRÍA EN CONVERSIÓN DE POTENCIA ELÉCTRICA

## Estudio de las pérdidas armónicas en una máquina de inducción conectada en serie con un inductor.  🇪🇸  

<a href="/docs/about/" style="color: black; text-decoration: none;"><b>Autor:</b> Staffan Canbäck</a>  

**Supervisor:** Tom Porteous  

**Presentada:** 1979-11-27  

**Estado:** Aprobada  

---
## Resumen

Esta tesis de maestría se realizó en el Laboratorio de Alta Potencia del Departamento Central de Desarrollo de ASEA en Västerås. El supervisor fue Tom Porteous.

El objetivo del trabajo fue estudiar el efecto de un inductor en serie sobre las condiciones de funcionamiento de una máquina de inducción alimentada por inversor, tanto en lo referente a la reducción de su capacidad nominal como a las pulsaciones de par, y, de ser posible, identificar una combinación óptima de motor e inductor.

Los cálculos se efectuaron mediante programas informáticos aplicados a un motor estándar de ASEA, MBK 280 S-6, de 75 kW de potencia nominal. A estos cálculos se añadieron datos de ensayos de laboratorio relativos a las pérdidas en el hierro. Los resultados se utilizaron después para evaluar las reducciones de pérdidas que podían obtenerse con inductores de distintos tamaños. En esta evaluación también se tuvieron en cuenta las dimensiones físicas del inductor.

La tesis muestra que, cuando el espacio disponible para el motor es limitado, no existe razón alguna, desde el punto de vista de las pérdidas, para introducir un inductor en serie en el sistema, porque el peso combinado del motor y el inductor permanece prácticamente constante.

Cuando no existe restricción de espacio para el motor, los resultados muestran, sin embargo, que un inductor en serie puede utilizarse ventajosamente hasta una frecuencia límite propia de cada inductor, con el fin de reducir la pérdida de capacidad nominal de par. Una vez superada esa frecuencia límite, el inductor debe desconectarse. Esto minimiza la reducción nominal a frecuencias altas, pero aumenta las pulsaciones de par.

---

<!-- Página 2 -->

## Índice  

**1. $~$ Introducción**
$\quad$ 1.1 $~$ Generalidades  
$\quad$ 1.2 $~$ Alimentación  
$\quad$ 1.3 $~$ Desventajas de la alimentación PWM  
$\quad$ 1.4 $~$ Medidas correctivas  
$\quad$ 1.5 $~$ Métodos  

**2. $~$ Pérdidas en el hierro**  
$\quad$ 2.1 $~$ Generalidades  
$\quad$ 2.2 $~$ Dificultades para determinar analíticamente las pérdidas en el hierro  
$\quad$ 2.3 $~$ Método  
$\quad$ 2.4 $~$ Funcionamiento en vacío sin inductor en serie  
$\quad$ 2.5 $~$ Funcionamiento en vacío con inductor en serie  
$\quad$ 2.6 $~$ Análisis  

**3. $~$ El motor bajo carga**  
$\quad$ 3.1 $~$ Generalidades  
$\quad$ 3.2 $~$ Carga sin inductor en serie  
$\quad$ 3.3 $~$ Dependencia de las pérdidas respecto de la inductancia  
$\quad$ 3.4 $~$ Dependencia de las pérdidas respecto de la frecuencia  
$\quad$ 3.5 $~$ Pulsaciones de par  
$\quad$ 3.6 $~$ Cálculo de pesos  

**4. $~$ Discusión**  
$\quad$ 4.1 $~$ Posibilidades y limitaciones del procedimiento  
$\quad$ 4.2 $~$ Tamaño del inductor sin restricción de espacio para el motor  
$\quad$ 4.3 $~$ Tamaño del inductor con espacio limitado para el motor  

**5. $~$ Referencias**  

**Apéndices**  
B1. $~$ Diagramas  
B2. $~$ Forma de onda de la tensión de alimentación y análisis de Fourier  
B3. $~$ Modelo de cálculo  
B4. $~$ Descripción del programa PWMIND  
B5. $~$ Cálculo del tamaño del inductor  
B8. $~$ Datos tipo  
B7. $~$ Lista de variables  

---

<!-- Página 3 -->

## 1. Introducción

### 1.1 Generalidades

En los últimos años ha surgido un nuevo tipo de accionamiento de motores que ha despertado considerable interés entre los fabricantes. En aplicaciones de tracción, entre otras, las máquinas de inducción alimentadas por inversor han comenzado a competir seriamente con los motores de corriente continua alimentados por rectificadores de tiristores. Las ventajas son numerosas: por ejemplo, el motor de inducción es considerablemente más robusto que el motor de corriente continua, requiere mucho menos mantenimiento y funciona mejor en entornos severos. Además, con frecuencia pueden utilizarse motores estándar, lo que reduce los precios y simplifica el servicio. A medida que han bajado los precios de los tiristores y de su electrónica auxiliar, la alternativa constituida por un inversor y un motor de inducción se ha vuelto, por tanto, cada vez más competitiva.
<br>
<p align="center">
<figure>
  <img  src="assets/figur-1.svg" width="500" alt="Rectificador, enlace de CC, inversor, inductor y motor">
  <figcaption><b>Figura 1.</b> Rectificador, enlace de CC, inversor, inductor y motor</figcaption>
</figure>
</p>
<br>

### 1.2 Alimentación

Un motor de inducción puede alimentarse a frecuencia variable mediante convertidores de fuente de tensión o de fuente de corriente. En este caso se ha utilizado un inversor de fuente de tensión.

Este rectifica la tensión alterna de la red de alimentación y la convierte en una tensión constante $U_d$ en el enlace de CC (Figura 1). A continuación se obtiene una tensión alterna troceando la tensión del enlace de CC en el puente de tiristores y multiplicándola por una tensión de modulación para obtener frecuencia y amplitud variables (véase el Apéndice 2).

<!-- Página 4 -->

A bajas frecuencias, el troceado se realiza de manera que se modifica la distribución de armónicos y se suprimen los armónicos quinto y séptimo, lo que proporciona ciertas ventajas de funcionamiento (véase la Sección 3). Por consiguiente, las tensiones de referencia y de modulación pueden adoptar la forma mostrada en la Figura 2.
<br>
<p align="center">
<figure>
  <img  src="assets/figur-2.svg" width="500" alt="Forma esquemática de las tensiones de referencia y modulación">
  <figcaption><b>Figura 2.</b> Forma esquemática de las tensiones de referencia y modulación</figcaption>
</figure>
</p>
<br>

De este modo se obtiene una tensión alterna de frecuencia y amplitud arbitrarias. La amplitud máxima de la componente fundamental se obtiene cuando la tensión de modulación es constante, es decir, cuando se deja pasar toda la señal de referencia, y está limitada por la tensión del enlace de CC.

Este tipo de alimentación se denomina alimentación PWM (modulación por ancho de pulsos), porque la magnitud de la tensión fundamental viene determinada por la anchura de los pulsos de modulación y no por la amplitud de la señal de referencia.

Al variar la frecuencia del inversor entre 0 y 50 Hz, se atraviesan varios modos de funcionamiento (véase el Apéndice 6). A frecuencias predeterminadas, se modifica la forma de onda de la tensión de alimentación para mantener una alimentación óptima. Se introducen muescas en la tensión de referencia con el fin de suprimir los armónicos de bajo orden a bajas frecuencias, y se modifica la frecuencia de la tensión de modulación para que sea un múltiplo de seis veces la frecuencia de la señal de referencia.

### 1.3 Desventajas de la alimentación PWM

La etapa inversora suministra al motor una tensión esencialmente rectangular. Esto genera armónicos que, a su vez, producen pérdidas adicionales en el rotor y el estator —tanto en el hierro como en el cobre— sin aportar par adicional. Como consecuencia, la capacidad nominal del motor debe reducirse con respecto al funcionamiento con una alimentación sinusoidal convencional.

Otro problema es que el elevado contenido armónico produce pulsaciones indeseables alrededor del par de carga, que pueden ser considerables, sobre todo a bajas frecuencias. En aplicaciones de tracción, por ejemplo, las pulsaciones de par pueden provocar el deslizamiento de las ruedas durante el arranque.

<!-- Página 5 -->

También pueden crear un par negativo que se transmite a través del motor a los acoplamientos mecánicos del sistema. Las tensiones mecánicas resultantes son grandes y se consideran muy graves.

Por esta razón se introducen muescas en la tensión de alimentación para suprimir los armónicos quinto y séptimo y eliminar las pulsaciones más grandes. Debe observarse, sin embargo, que esto simplemente redistribuye los armónicos: las amplitudes de los armónicos de orden superior aumentan cuando disminuyen las tensiones correspondientes al quinto y al séptimo armónico. Otro problema es que la forma de onda de la tensión de alimentación hace que el motor sea extremadamente ruidoso.

### 1.4 Medidas correctivas

Además de la redistribución de armónicos descrita anteriormente, un método para reducir el contenido armónico en el motor consiste en filtrar la tensión de alimentación. Por ello se inserta un inductor en serie en cada una de las tres fases entre el inversor y el motor, lo que reduce las amplitudes armónicas con respecto a la fundamental. Este es el tema estudiado en el presente informe.

### 1.5 Métodos

Para determinar la magnitud de las pérdidas y de las pulsaciones, se ha aplicado un análisis de Fourier a la tensión de alimentación (véase el Apéndice 2). Al aplicarlo al modelo convencional de la máquina (Figura 3) y tener en cuenta el fenómeno de desplazamiento de corriente en el rotor, se obtiene la contribución de cada armónico a las pérdidas en el cobre y la pulsación total de par alrededor del par de carga.
<br>
<p align="center">
<figure>
  <img  src="assets/figur-3.svg" width="500" alt="Circuito equivalente del inductor y el motor">
  <figcaption><b>Figura 3.</b> Circuito equivalente del inductor y el motor</figcaption>
</figure>
</p>
<br>

Estas teorías se incorporan al programa informático PWMIND (modulación por ancho de pulsos con inductor; véase el Apéndice 4). A los resultados obtenidos con el programa se añadieron estimaciones de las pérdidas en el hierro.

Todo ello, aplicado a un motor estándar de ASEA (MBK 280 S-6, n.º 7125 824) con refrigeración forzada y utilizado conjuntamente con un inductor en serie, sirvió de base para evaluar qué inductor podía considerarse, por razones eléctricas, mecánicas y físicas, la mejor solución al problema, aunque no fuera estrictamente óptima. Estas conclusiones se establecen para el motor estándar considerado, pero también pueden aplicarse a otras combinaciones de motor e inductor.

---
<!-- Página 6 -->

## 2. Pérdidas en el hierro
<sub>&nbsp;</sub>
### 2.1 Generalidades
<sub>&nbsp;</sub>
La reducción de la capacidad nominal del motor se obtiene determinando sus pérdidas totales. En lo sucesivo, por pérdidas totales se entiende la suma de las pérdidas en el cobre y en el hierro; no se incluyen las pérdidas por fricción ni las pérdidas adicionales bajo carga. Por tanto, las pérdidas en el hierro se determinan primero mediante ensayos en vacío. Después se suman a las pérdidas en el cobre obtenidas bajo carga y se calcula la reducción de capacidad nominal (véase El motor bajo carga).

### 2.2 Dificultades para determinar analíticamente las pérdidas en el hierro

El cálculo analítico de las pérdidas en el hierro puede ser difícil. Las pérdidas se dividen en dos componentes: pérdidas por histéresis y pérdidas por corrientes parásitas. Por tanto:

$$
P_{fe} = P_v + P_h
$$

$$
P_h = k_h f B_{\max}^{\lambda}
\qquad 1 < \lambda < 3
$$

$$
P_v = k_v \sigma d^2 f^2 B^2
$$

(Lista de variables en el Apéndice 7.)

Dado que se desconoce la relación entre $P_v$ y $P_h$, no se conoce la dependencia respecto de la frecuencia y la tensión de las variables implicadas y no puede aplicarse el principio de superposición, resulta evidente que el cálculo de las pérdidas en el hierro presenta ciertas dificultades.

### 2.3 Método

Un método alternativo consiste en medir las pérdidas en vacío que se producen a distintas frecuencias y restarles los valores de pérdidas en el cobre calculados a partir del modelo de la máquina cuando esta funciona en vacío con respecto a la componente fundamental —mientras que los armónicos funcionan simultáneamente con un deslizamiento igual a uno—. Se postula entonces que las pérdidas restantes son pérdidas en el hierro. Este método proporciona al menos un límite superior absoluto para la magnitud de dichas pérdidas.

### 2.4 Funcionamiento en vacío sin inductor en serie

Las pérdidas totales —en el hierro y en el cobre— se midieron en un motor estándar de ASEA, MBK 280 S-6, con refrigeración forzada, tanto con alimentación PWM como con alimentación sinusoidal. A continuación, se restaron de las pérdidas totales las pérdidas en el cobre calculadas mediante el programa informático PWMIND, obteniéndose así las pérdidas restantes en el hierro. En el Apéndice 1.1 se representan, en función de la frecuencia, tanto las pérdidas totales en vacío con alimentación PWM como las pérdidas calculadas en el hierro con alimentación PWM y sinusoidal. La línea discontinua correspondiente a las pérdidas PWM en el hierro debe considerarse una tendencia. En estas mediciones y cálculos, el flujo fundamental fue el mismo con funcionamiento PWM y sinusoidal.

<!-- Página 7 -->

Los saltos bruscos de las pérdidas totales y de las pérdidas PWM en el hierro se deben a los cambios de modo de funcionamiento introducidos en diez frecuencias (véanse la Introducción y el Apéndice 6) para reducir las pérdidas. El hecho de que las pérdidas en el cobre en vacío asciendan a casi el cincuenta por ciento de las pérdidas totales con alimentación PWM se debe a las pérdidas adicionales producidas por los armónicos. Por consiguiente, las pérdidas en vacío **no pueden** tratarse como pérdidas en el hierro.

Los armónicos también explican por qué, dentro de un mismo modo de funcionamiento, las pérdidas a bajas frecuencias pueden ser mayores que a una frecuencia superior: el contenido armónico relativo —la relación entre la amplitud armónica y la amplitud de la fundamental— es mayor.

A fin de disponer de una base de comparación, las pérdidas en el hierro con alimentación sinusoidal se determinaron de la misma manera —pérdida total menos pérdida en el cobre—. La comparación muestra que las pérdidas PWM en el hierro son considerablemente mayores que las pérdidas sinusoidales, nuevamente debido a los armónicos. En este caso se concluye que las pérdidas PWM en el hierro superan a las de la alimentación sinusoidal en un término aproximadamente constante de alrededor de 1 kW. En consecuencia, especialmente a frecuencias bajas, el aumento relativo de las pérdidas en el hierro es muy grande.

### 2.5 Funcionamiento en vacío con un inductor

Tras estudiar las relaciones entre las pérdidas en vacío con alimentación PWM y sinusoidal, se introduce un inductor en serie en el circuito, como se muestra en la Figura 3. Dado que la impedancia del motor está dominada por la reactancia, el inductor no actuará como un filtro pasa bajos de primer orden, sino como un elemento de un divisor de tensión. Atenúa las amplitudes armónicas y mejora así sustancialmente la forma de onda de la tensión en los bornes del motor ($U$). Esta mejora de la forma de onda reduce las pérdidas armónicas —tanto en el cobre como en el hierro—, como muestran los Apéndices 1.1–1.3, que presentan las pérdidas totales y en el hierro en vacío, en función de la frecuencia, para distintas inductancias.

La proporción de pérdidas en el cobre dentro de las pérdidas totales en vacío disminuye sustancialmente al aumentar el tamaño del inductor, pero sigue alcanzando la mitad de la pérdida total con 0.21 p.u. (1 mH) y 10 Hz. (Los valores por unidad se refieren a la tensión nominal y a la corriente nominal del motor; la impedancia base corresponde entonces a $Z_B$ = 1.47 mH y la inductancia base es $L_B$ = 4.67 mH, según el Apéndice 6; la reactancia de cortocircuito es aproximadamente 0.25 p.u.) Aquí se ha tenido en cuenta la caída de la tensión fundamental en el inductor y se ha introducido un término de corrección entre las distintas curvas para que las tres sean plenamente comparables; esto también se aplica a la curva con alimentación sinusoidal.

### 2.6 Análisis

Por tanto, es difícil determinar analíticamente las pérdidas en el hierro, pero el problema puede limitarse a derivar las curvas con inductor (Apéndices 1.2–1.3) a partir de la curva sin inductor en serie (Apéndice 1.1). El examen del circuito equivalente para los distintos armónicos muestra que, en vacío, el deslizamiento es aproximadamente cero para la componente fundamental.

<!-- Página 8 -->

Esto hace que la resistencia del rotor sea muy grande, y la única corriente fundamental que circula es la corriente magnetizante. Si se desprecia la resistencia del estator, la corriente fundamental en el lado del estator es:

$$
I_{11} = \frac{V_1-E_1}{X_1+X}
$$

$$
E_1 = X_m I_{11}
$$

$$
I_{11} = \frac{V_1}{X_1+X_m+X}
$$

En cambio, el deslizamiento es considerablemente mayor para los armónicos ($s \approx 1$). La resistencia del rotor es entonces baja y la reactancia magnetizante queda en gran medida derivada por la impedancia del rotor. Las corrientes armónicas del lado del estator son iguales a las del lado del rotor y, si se desprecian las resistencias:

$$
I_{1\ddot{o}} = I_{2\ddot{o}}
= \frac{V_{\ddot{o}}}{X_1+X_2+X}
$$

Por tanto, la comparación entre los casos con y sin inductor en serie muestra que la corriente fundamental se reduce por el factor

$$
\frac{X_1+X_m}{X_1+X_m+X}
$$

mientras que la corriente armónica se reduce por el factor

$$
\frac{X_1+X_2}{X_1+X_2+X}.
$$

Dado que $X_m$ es considerablemente mayor que $X$, $X_1$ y $X_2$, la reducción de la componente fundamental es moderada. En consecuencia, las componentes fundamentales de la tensión en los bornes del inversor y de la tensión en los bornes del motor son aproximadamente iguales ($V_1 \approx U_1$). Para los armónicos, $X$, $X_1$ y $X_2$ son comparables. Por tanto, la división de tensión da

$$
U_ö \approx
V_ö
\frac{X_1+X_2}{X_1+X_2+X}.
$$

Si puede suponerse que las pérdidas armónicas en el hierro son proporcionales al cuadrado de las tensiones armónicas, debe cumplirse lo siguiente:
  
$$
P_{feö}(X) =
P_{feö}(X=0)
\frac{(X_1+X_2)^2}{(X_1+X_2+X)^2}.
$$

Si la diferencia entre la pérdida total en el hierro y la pérdida fundamental en el hierro —la pérdida sinusoidal— se reduce mediante este factor y se representa por encima de la pérdida fundamental, se obtienen los valores punteados de los Apéndices 1.2–1.3. Como se muestra, estos concuerdan bien con los valores calculados a partir de las pérdidas totales en vacío —cruces—. (Estos razonamientos no se ven afectados por el desplazamiento de corriente, porque es igualmente grande para cada armónico correspondiente en los tres casos.)

---

<!-- Página 9 -->

## 3. El motor bajo carga

### 3.1 Generalidades

Hasta ahora, las pérdidas solo se han estudiado en vacío. Para llegar al caso de interés práctico, se carga ahora el motor. El deslizamiento aumenta y se absorben una corriente y una potencia mayores. Las pérdidas en el cobre aumentan y, con alimentación PWM, las pérdidas totales —en el cobre y en el hierro— pueden ascender a aproximadamente 10 kW en un motor de 75 kW de potencia nominal.

Las pérdidas que exceden las correspondientes a la carga nominal con alimentación sinusoidal obligan a reducir la capacidad nominal del motor. Esto significa que debe extraerse menos par del motor para mantener baja la potencia de pérdidas y, por consiguiente, se requieren motores mayores para un par de carga dado. Si se inserta un inductor en serie en el circuito, pueden reducirse las pérdidas adicionales y mejorarse el factor de reducción nominal.

Bajo carga, la caída de tensión en el inductor deja de ser despreciable, porque el mayor deslizamiento deriva la reactancia magnetizante incluso para la componente fundamental. Por tanto, debe alcanzarse un compromiso entre el efecto negativo del inductor al reducir la tensión y su efecto positivo al atenuar las pérdidas armónicas del motor. Podría parecer que el equilibrio entre estos efectos produciría una pérdida mínima, si no fuera porque las pérdidas disminuyen con el cuadrado de la tensión mientras que la tensión del motor disminuye linealmente. Por ello, cuando la tensión y el espacio no imponen restricciones, conviene utilizar la mayor inductancia posible para reducir la pérdida de capacidad nominal de un motor dado.
<br>
<p align="center">
<figure>
  <img  src="assets/figur-4.svg" width="500" alt="Circuito equivalente del inductor y el motor bajo carga">
  <figcaption><b>Figura 4. </b>Circuito equivalente del inductor y el motor bajo carga</figcaption>
</figure>
</p>
<br>

<!-- Página 10 -->

### 3.2 Carga sin inductor en serie

Se estudian primero las condiciones generales cuando el motor no se alimenta a través de un inductor en serie. El programa informático se utilizó para calcular las pérdidas en el cobre en dos casos diferentes: primero, cuando la componente fundamental ($V_1$) de la tensión de alimentación ($V$) —aquí igual a $U$— se hizo directamente proporcional a la frecuencia; y, segundo, cuando el flujo se mantuvo constante. Esto último significa que la tensión $E_1$ (véase la Figura 4) debe variar linealmente con la frecuencia porque

$$
E_1 \sim j\omega\Psi_1 \sim j\omega\Phi_1
$$

El primer caso no produce flujo constante porque, a bajas frecuencias, las resistencias se vuelven comparables a las reactancias y $E_1$ deja de ser una función lineal simple y sin desplazamiento de fase de $V_1$.

El efecto puede verse en el Apéndice 1.4, Figura 1. La figura muestra las pérdidas totales del motor a par constante (700 Nm) en función de la frecuencia. La curva A representa el primer caso, en el que la componente fundamental de la tensión en los bornes del inversor es $V_1 = kf$.
El caso sinusoidal se calculó de forma correspondiente, obteniéndose la curva a. En el caso A, la reducción de capacidad nominal (Apéndice 1.4, Figura 2), $\xi = 1 - M/M_n$, se vuelve muy grande. Como $M\propto I$ y $P_{cu}\propto I^2$, se deduce que
$\xi = 1- \sqrt{P_{cun} / {P_{cu}}}$. Sobre esta base, la reducción nominal es máxima a bajas frecuencias con alimentación PWM ($\xi$ = 18% a 11 Hz). Estos cálculos se basan en el supuesto de que la refrigeración forzada puede evacuar eficazmente todas las pérdidas, con independencia de la velocidad. En la práctica, esto ha resultado difícil de lograr, por lo que debe introducirse un término de corrección adicional que tenga en cuenta este efecto.

Cuando el flujo se mantiene constante, las condiciones son diferentes. Las pérdidas sinusoidales disminuyen entonces a bajas frecuencias porque las pérdidas en el cobre son constantes ($\Phi=\text{constante} \Rightarrow I=\text{constante}$) y las pérdidas en el hierro disminuyen con la frecuencia (curva b). En el caso PWM se produce un máximo de pérdidas alrededor de 30 Hz (curva B), y la reducción nominal es aproximadamente del 14%.

Por tanto, puede observarse que, con funcionamiento PWM y flujo constante, la reducción nominal puede variar aproximadamente entre el 8% y el 14%, y que las pérdidas alcanzan su máximo a 30 Hz.

### 3.3 Dependencia de las pérdidas respecto de la inductancia

El Apéndice 1.5 se preparó para estudiar cómo afecta el inductor a las pérdidas a una frecuencia dada. El par de carga fue de 700 Nm y la frecuencia de 30 Hz. La figura muestra tanto las pérdidas en el cobre bajo carga —divididas en pérdida fundamental ($P_{cu1}$) y pérdidas armónicas ($P_{cuö}$)— como la tensión de alimentación $V_1$ en función de la frecuencia.

<!-- Página 11 -->

Como en el caso de las pérdidas en el hierro, puede escribirse

$$
P_{cuö}(X)
=
P_{cuö}(X=0)
\frac{(X_1+X_2)^2}{(X_1+X_2+X)^2}.
$$

Por tanto, el orden de magnitud del inductor se encuentra en las proximidades de la reactancia de cortocircuito

$$
X_k=X_1+X_2,
$$

es decir, aproximadamente 0.25 p.u. (véase el Apéndice 6). El diagrama del Apéndice 1.5 muestra los valores calculados por el programa —cruces— y los valores obtenidos con la expresión anterior y combinados con la pérdida fundamental —puntos—. Una vez más, la concordancia es buena. La disminución cuadrática significa que las pérdidas armónicas se han reducido por un factor de cuatro cuando

$$
X=X_1+X_2=X_k,
$$

lo que puede considerarse una regla práctica aproximada para el tamaño requerido del inductor. También conviene observar la rapidez con que aumenta la tensión de alimentación necesaria al crecer la inductancia. Si la inductancia es ligeramente superior a 4 mH (0.86 p.u.), se requiere una tensión de alimentación $V$ de 220 $V_{eff}$, lo que corresponde al aprovechamiento máximo de la tensión de 488 V del enlace de CC. Con inductancias aún mayores no puede mantenerse el flujo constante.

### 3.4 Dependencia de las pérdidas respecto de la frecuencia

El efecto del inductor sobre las pérdidas también puede calcularse en función de la frecuencia. Para una inductancia y un par de carga dados, las pérdidas mínimas en el cobre se obtienen si el flujo del motor se mantiene constante, cualquiera que sea la frecuencia.

Esto exige, a su vez, aumentar la tensión de alimentación para compensar la caída de tensión en el inductor y el estator. A bajas frecuencias es posible porque aún no se utiliza toda la tensión disponible —aquí $V_1$ = 220 V—. Sin embargo, a medida que aumenta la frecuencia, se alcanza una frecuencia propia de cada inductor a partir de la cual ya no puede obtenerse más tensión del enlace de CC. Más allá de este límite, debe abandonarse el requisito de flujo constante en favor del requisito de par constante, que se satisface aumentando el deslizamiento.

El efecto puede estudiarse en los Apéndices 1.6 y 1.7. Si no hay inductor en el circuito, el problema no se presenta y la curva tiene la forma mostrada para $L$ = 0. Las demás curvas tendrían la misma forma convexa de no ser por el límite de tensión descrito anteriormente. En la curva de 1 mH (0.22 p.u.), por ejemplo, este límite se hace evidente aproximadamente a 44 Hz. Por encima de esta frecuencia, las pérdidas aumentan bruscamente debido al incremento de la corriente —hasta dicha frecuencia, el flujo constante había producido una corriente esencialmente constante, $s \propto 1/\textit{f}$—. El efecto es aún más pronunciado en el caso de 2 mH (0.43 p.u.). La caída de tensión en el inductor se vuelve entonces tan grande que no pueden obtenerse 700 Nm a frecuencias altas. Por ello parece apropiado puentear el inductor a una frecuencia límite determinada por el punto en que las pérdidas totales con y sin inductor son iguales. A frecuencias superiores a la frecuencia límite específica, las pérdidas siguen entonces la curva correspondiente a $L$ = 0.

<!-- Página 12 -->

Si se procede de este modo y se calcula a partir de las pérdidas la reducción nominal necesaria, se obtiene el Apéndice 1.7. Este muestra que una inductancia grande reduce la pérdida de capacidad nominal a bajas frecuencias, pero produce una gran variación de dicha reducción. Un inductor pequeño proporciona, en cambio, una curva de reducción nominal más uniforme.

### 3.5 Pulsaciones de par

El contenido armónico de la tensión de alimentación produce pulsaciones alrededor del par medio, que deben tenerse en cuenta. Adquieren especial importancia a bajas frecuencias, razón por la cual se utiliza el método de suprimir los armónicos quinto y séptimo (véase el Apéndice 2) para redistribuir los armónicos. El Apéndice 1.8, Figura 1, y el Apéndice 1.9 muestran los valores máximo y mínimo del par total a 700 Nm y 0 Nm ($\propto M_n$ y $\Theta$) en función de la frecuencia. Los valores de par se obtuvieron con el programa informático, que también tiene en cuenta la eliminación de armónicos de bajo orden. Las curvas solo ofrecen una visión general de las pulsaciones alrededor del par medio y de su dependencia respecto de la frecuencia. Si se representaran más puntos, los saltos en las transiciones entre modos de funcionamiento serían más evidentes.

Desconectar, por ejemplo, una inductancia de 1 mH (0.22 p.u.) a 47 Hz aumentaría las pulsaciones de aproximadamente ±150 Nm a ±300 Nm, lo que no es especialmente importante cuando el par es de 700 Nm. Sin embargo, con carga baja representa una duplicación.

Las curvas del Apéndice 1.8, Figura 1, y del Apéndice 1.9 también muestran que las pulsaciones son aproximadamente constantes e independientes del par de carga.

La reducción de la pulsación en función de la inductancia puede verse en el Apéndice 1.8, Figura 2. El par pulsante es proporcional a la corriente y, por tanto, de acuerdo con los cálculos anteriores, debe venir dado por

$$
M_p(X)
=
M_p(X=0)
\frac{X_1+X_2}{X_1+X_2+X}.
$$

Esto corresponde a los puntos, que concuerdan bien con las cruces obtenidas mediante el programa.

### 3.6 Cálculo de pesos

Un cálculo de pesos puede ser útil para determinar si puede encontrarse un peso combinado mínimo del motor y el inductor al par nominal. El peso se calcula de la siguiente manera:

Para cada inductancia especificada se calculan el peso del motor y el peso del inductor. El peso del motor se obtiene a partir de los datos del MBK 280 S-6S. El peso en función de la longitud de las partes activas del rotor y del estator se determina con los datos del Apéndice 6. A continuación se supone que la longitud de las partes activas es directamente proporcional a la potencia de pérdidas. El peso del inductor en función de la inductancia se obtiene del Apéndice 5, en el que se ha optimizado un inductor refrigerado por aire.

<!-- Página 13 -->

Los pesos se representan en el Apéndice 1.10. Allí se muestra que el mínimo de la curva de peso es muy poco pronunciado: el ahorro en tamaño del motor queda compensado por el peso del inductor. Sin embargo, esto no tiene en cuenta las ventajas relativas a las pulsaciones de par ni el espacio disponible.

---
<!-- Página 14 -->

## 4. Discusión

### 4.1 Posibilidades y limitaciones del procedimiento

El procedimiento de cálculo desarrollado permite determinar, para una combinación arbitraria de motor e inductor, la distribución y magnitud de las pérdidas, las caídas de tensión y la reducción nominal a diferentes frecuencias y tensiones. Junto con información sobre las dimensiones físicas del motor y del inductor y sobre el espacio disponible, esto proporciona una base para seleccionar la combinación de motor e inductor.

La exactitud del procedimiento está limitada en cierta medida por el supuesto de una tensión rectangular con flancos verticales. En realidad, el contenido armónico es por tanto menor y las pérdidas algo más pequeñas. Esta reducción queda compensada parcialmente por el hecho de que no se han incluido las pérdidas por fricción.

Una limitación de la rutina de cálculo es que las pérdidas correspondientes en el hierro con alimentación PWM no pueden calcularse a partir de una pérdida dada en el hierro con alimentación sinusoidal. Sin embargo, sobre la base del Apéndice 1.1 puede extraerse la conclusión general de que las pérdidas en el hierro con alimentación PWM superan a las del caso sinusoidal en un término aproximadamente constante para las distintas frecuencias, y que las pérdidas PWM en el hierro a 50 Hz son aproximadamente el doble de las pérdidas sinusoidales a la misma frecuencia.

Todo este estudio se basa en el supuesto de que la refrigeración forzada proporciona una refrigeración eficaz a todas las frecuencias. En la práctica, sin embargo, no es así, y la reducción nominal aumentará adicionalmente por un factor que depende de las condiciones de refrigeración de cada aplicación concreta.

### 4.2 Tamaño del inductor sin restricción de espacio para el motor

Si el motor se va a utilizar en un entorno donde el espacio disponible para el motor y el inductor es prácticamente ilimitado, el Apéndice 1.10 muestra que el uso de un inductor en serie no produce un ahorro apreciable. Desde esta perspectiva, por tanto, no existe razón para utilizar el inductor en serie, salvo para limitar las pulsaciones de par.

### 4.3 Tamaño del inductor con espacio limitado para el motor

Si las dimensiones del espacio destinado al motor son fijas, como ocurre, por ejemplo, en el bogie de una locomotora, el argumento del peso deja de ser aplicable. El objetivo pasa a ser obtener el par máximo de un motor dado. En esos casos, el inductor debe seleccionarse con un tamaño suficiente para proporcionar una reducción razonable de los armónicos. Las pérdidas armónicas en función de la inductancia pueden expresarse aproximadamente como:

$$
P_{cuö}(X)
=
P_{cuö}(X=0)
\frac{(X_1+X_2)^2}{(X_1+X_2+X)^2},
$$

$$
P_{feö}(X)
=
P_{feö}(X=0)
\frac{(X_1+X_2)^2}{(X_1+X_2+X)^2},
$$

$$
X_1+X_2 \approx X_k.
$$

<!-- Página 15 -->

Por tanto, para reducir las pérdidas armónicas a una cuarta parte de las pérdidas sin inductor se requiere un inductor $L=L_k$. Esto también reduce a la mitad las pulsaciones de par

$$
M_p(X)
=
M_p(X=0)
\frac{X_1+X_2}{X_1+X_2+X}.
$$

El inductor debe seleccionarse en este orden de magnitud. Un inductor más pequeño no produce una mejora apreciable respecto del funcionamiento sin inductor, mientras que uno grande —por ejemplo, $L=2 \times L_k$— solo proporciona mejoras marginales muy pequeñas.

Un inductor grande también tiene una frecuencia límite baja a partir de la cual ya no puede mantenerse constante el flujo del motor y aumentan las pérdidas del motor (Apéndices 1.6 y 1.7). Con independencia del tamaño del inductor, este debe desconectarse a la frecuencia en la que las pérdidas con y sin el inductor en el circuito sean iguales.

---
## 5. Referencias

P. Krause, *Método de marcos de referencia múltiples aplicado al análisis de máquinas de inducción simétricas*. IEEE Transactions on Power Apparatus and Systems, vol. PAS-87, n.º 1, pp. 218-226.

F. G. G. de Buck, *Adaptación del diseño de motores de inducción alimentados por inversor*. Electric Power Applications, mayo de 1978, vol. 1, n.º 2, pp. 54-60.

E. Alm, *Ingeniería eléctrica, volumen III: Máquinas eléctricas*, Parte 2A, 1927, pp. 356–362.

5. F. Gustavson, *Compendio de conversión de energía electromecánica*, Parte 1, 1978, pp. 4.1–4.20.

6. T. Porteous, *Descripciones de los programas PWMOT y RESIST*.

---

## Apéndices

---
*El Apéndice 1 consta principalmente de diagramas y se ha omitido. Estos están disponibles en la copia fotostática original.*

---
### Apéndice 2. Forma de onda de la tensión de alimentación y análisis de Fourier  

<!-- Página 26 -->  

#### B2.1 Forma de onda
En el caso más sencillo, el inversor puede suministrar una tensión rectangular —la tensión de referencia— multiplicada por una tensión de modulación formada por pulsos de anchura modulada. Sin embargo, este tipo de alimentación produce fuertes pulsaciones debidas a los armónicos quinto y séptimo, especialmente a bajas frecuencias. Para eliminarlas, se introducen muescas en la tensión de referencia, de manera que estos armónicos de bajo orden se desplazan hacia frecuencias más altas.
<br>
<p align="center">
<figure>
  <img  src="assets/figur-5.svg" width="500" alt="Formas de onda">
  <figcaption><b>Figura 5.</b> Formas de onda</figcaption>
</figure>
</p>
<br>

Estas dos señales se desarrollan en series de Fourier y se multiplican entre sí.

#### B2.2 Desarrollo de Fourier

$R(\varphi)$ es una función impar. Por tanto, su desarrollo de Fourier solo contiene términos seno.

Puede suponerse que el número de muescas es par, porque un número impar puede convertirse en uno par sin modificar las condiciones —colocando una muesca en $\pi/2$—.

$$
\begin{aligned}
R_n
&= \frac{1}{\pi}\int_0^{2\pi} R(\varphi)\sin(n\varphi)\,d\varphi \\
&= \frac{4}{\pi}\int_0^{\pi/2} R(\varphi)\sin(n\varphi)\,d\varphi \\
&= \frac{4}{\pi}\left[
\int_0^{\pi/2}\sin(n\varphi)\,d\varphi
-2\sum_{k=1}^{j}
\int_{\alpha_{2k-1}}^{\alpha_{2k}}\sin(n\varphi)\,d\varphi
\right] \\
&= \{\text{la señal sin muescas menos las muescas}\} \\
&= \frac{4}{n\pi}\left[
1+2\sum_{k=1}^{j}
\left(\cos(n\alpha_{2k})-\cos(n\alpha_{2k-1})\right)
\right].
\end{aligned}
$$

<!-- Página 27 -->

Es decir,

$$
R_n
=
\frac{4}{n\pi}
\left[
1+2\sum_{k=1}^{2j}(-1)^k\cos(n\alpha_k)
\right].
$$

<!-- El límite superior de la suma se ha interpretado como 2j, lo que concuerda con la forma anterior que contiene j muescas y dos ángulos límite por muesca. -->

$M(\theta)$ es una función par. Por tanto, su desarrollo de Fourier solo contiene términos coseno.

$$
\begin{aligned}
M_i
&= \frac{1}{\pi}\int_{-\pi}^{\pi}M(\theta)\cos(i\theta)\,d\theta \\
&= \frac{2}{\pi}\int_0^{\pi}M(\theta)\cos(i\theta)\,d\theta \\
&= \frac{2}{\pi}\int_0^{m\pi}\cos(i\theta)\,d\theta \\
&= \frac{2}{i\pi}\sin(i m\pi).
\end{aligned}
$$

$$
M_0=\text{valor medio de la señal de modulación}=m.
$$

Esto da la serie de Fourier de $M$, incluido el desplazamiento de fase:

$$
M(\theta-\theta_0)
=
m+\sum_{i=1}^{\infty}M_i\cos\left[i(\theta-\theta_0)\right].
$$

El ángulo de la señal de referencia es

$$
\psi=\omega t.
$$

El ángulo de la señal de modulación es

$$
\theta=\int_0^t N\omega\,dt,
$$

donde $N$ es el número de pulsos de modulación en el sistema de coordenadas de la señal de referencia,

$$
N=6p, \qquad p=1,2,3,\ldots
$$

Si la señal de referencia actúa en un sistema trifásico sin componente de secuencia cero, se eliminan las frecuencias múltiplos de tres, quedando armónicos de orden

$$
6q\pm1, \qquad q=1,2,3,\ldots
$$

La multiplicación de las dos señales da:

$$
\begin{aligned}
R(\psi)M(\theta-\theta_0)
&=
\left[
\sum_{n=1,5,7,\ldots}^{\infty}R_n\sin(n\omega t)
\right]
\left[
m+\sum_{i=1}^{\infty}M_i\cos\left[i(N\omega t-\theta_0)\right]
\right] \\
&=
m\sum_{n=1,5,7,\ldots}^{\infty}R_n\sin(n\omega t) \\
&\quad+
\sum_{n=1,5,7,\ldots}^{\infty}
\sum_{i=1}^{\infty}
\frac{R_nM_i}{2}
\Bigl\{
\sin\left[(n+iN)\omega t-i\theta_0\right] \\
&\qquad\qquad\qquad\qquad\qquad
+
\sin\left[(n-iN)\omega t+i\theta_0\right]
\Bigr\}.
\end{aligned}
$$

<!-- En el último término seno del original, el índice de frecuencia parece ser k. Aquí se utiliza n por coherencia con el índice de suma de la misma expresión. -->

---
### Apéndice 3. Modelo de cálculo

<!-- Página 28 -->

#### B3.1 Supuestos

Se requiere un modelo matemático para estudiar el funcionamiento de la máquina de inducción con alimentación PWM. Se basa en los siguientes supuestos:

1. dq-transformation
2. análisis de Fourier y superposición
3. no existe componente de secuencia cero

Una máquina trifásica de dos polos puede representarse de la siguiente manera —con un inductor en serie en el lado del estator—:
<br>
<p align="center">
<figure>
  <img  src="assets/figur-6.svg" width="500" alt="Máquina trifásica de dos polos">
  <figcaption><b>Figura 6.</b> Máquina trifásica de dos polos</figcaption>
</figure>
</p>
<br>

#### B3.2 dq-transformation

De la Figura 1 se obtienen expresiones para las tensiones que, después de la transformación dq,

$$
\begin{bmatrix}
\gamma_{d1} \\
\gamma_{q1}
\end{bmatrix}
=
\frac{2}{3}
\begin{bmatrix}
\sin\theta & \sin\left(\theta-\frac{2\pi}{3}\right) & \sin\left(\theta+\frac{2\pi}{3}\right) \\
\cos\theta & \cos\left(\theta-\frac{2\pi}{3}\right) & \cos\left(\theta+\frac{2\pi}{3}\right)
\end{bmatrix}
\begin{bmatrix}
\gamma_{r1} \\
\gamma_{s1} \\
\gamma_{t1}
\end{bmatrix}
$$

dan las siguientes expresiones en el lado del estator:

<!-- Página 29 -->

$$
U_{d1}
=
p\Psi_{d1}
-
\Psi_{q1}p\theta
+
(R+R_1)i_{d1},
$$

$$
U_{q1}
=
p\Psi_{q1}
+
\Psi_{d1}p\theta
+
(R+R_1)i_{q1},
$$

donde $\theta$ es el ángulo entre el eje q y el eje r del estator.

Para el rotor, de manera correspondiente ($\beta$ = ángulo entre el eje q y el eje r del rotor):

$$
\begin{bmatrix}
\gamma_{d2} \\
\gamma_{q2}
\end{bmatrix}
=
\frac{2}{3}
\begin{bmatrix}
\sin\beta & \sin\left(\beta-\frac{2\pi}{3}\right) & \sin\left(\beta+\frac{2\pi}{3}\right) \\
\cos\beta & \cos\left(\beta-\frac{2\pi}{3}\right) & \cos\left(\beta+\frac{2\pi}{3}\right)
\end{bmatrix}
\begin{bmatrix}
\gamma_{r2} \\
\gamma_{s2} \\
\gamma_{t2}
\end{bmatrix}
$$

y

$$
U_{d2}
=
p\Psi_{d2}
-
\Psi_{q2}p\beta
+
R_2 i_{d2},
$$

$$
U_{q2}
=
p\Psi_{q2}
+
\Psi_{d2}p\beta
+
R_2 i_{q2}.
$$

Las expresiones para los flujos concatenados son:

$$
\Psi_{d1}
=
(L+L_1+M)i_{d1}
+
\frac{N_2}{N_1}M i_{d2},
$$

$$
\Psi_{q1}
=
(L+L_1+M)i_{q1}
+
\frac{N_2}{N_1}M i_{q2},
$$

$$
\Psi_{d2}
=
\left(L_2+\frac{N_2}{N_1}M\right)i_{d2}
+
M i_{d1},
$$

$$
\Psi_{q2}
=
\left(L_2+\frac{N_2}{N_1}M\right)i_{q2}
+
M i_{q1},
$$

cuando se utiliza la misma transformación dq.

Para simplificar los cálculos, puede resultar conveniente referir las magnitudes del rotor al sistema de referencia del estator. Se obtiene así:

<!-- Página 30 -->

$$
U'_{d2}
=
p\Psi'_{d2}
-
\Psi'_{q2}p\beta
+
R'_2 i'_{d2},
$$

$$
U'_{q2}
=
p\Psi'_{q2}
+
\Psi'_{d2}p\beta
+
R'_2 i'_{q2},
$$

donde

$$
\Psi_{d1}
=
(L+L_1)i_{d1}
+
M(i_{d1}+i'_{d2}),
$$

$$
\Psi_{q1}
=
(L+L_1)i_{q1}
+
M(i_{q1}+i'_{q2}),
$$

$$
\Psi'_{d2}
=
L'_2 i'_{d2}
+
M(i_{d1}+i'_{d2}),
$$

$$
\Psi'_{q2}
=
L'_2 i'_{q2}
+
M(i_{q1}+i'_{q2}).
$$

Aquí se han utilizado las relaciones

$$
i'_2=\frac{N_2}{N_1}i_2,
$$

$$
L'_2=\frac{N_1}{N_2}L_2
$$

.

Al combinar estas expresiones en forma matricial se obtiene:

$$
\begin{bmatrix}
U_{d1} \\
U_{q1} \\
U'_{d2} \\
U'_{q2}
\end{bmatrix}
=
\begin{bmatrix}
-\omega(L+L_1+M) & R+R_1+(L+L_1+M)p & -\omega M & Mp \\
R+R_1+(L+L_1+M)p & \omega(L+L_1+M) & Mp & \omega M \\
-(\omega-\omega_r)M & Mp & -(\omega-\omega_r)L'_2 & R'_2+L'_2p \\
Mp & (\omega-\omega_r)M & R'_2+L'_2p & (\omega-\omega_r)L'_2
\end{bmatrix}
\begin{bmatrix}
i_{d1} \\
i_{q1} \\
i'_{d2} \\
i'_{q2}
\end{bmatrix},
$$

donde $\omega_r$ es la velocidad angular del rotor.

<!-- La matriz anterior se ha reproducido en el orden de columnas visible en el original. No parece ser plenamente coherente con el orden del vector de corrientes ni con las ecuaciones escalares precedentes; esto deberá comprobarse en la pasada 2. -->

Finalmente se obtiene una expresión para el par:

$$
M_v
=
M\left(\frac{a}{2}\right)\left(\frac{P}{2}\right)
\left(i_{q1}i'_{d2}-i_{d1}i'_{q2}\right),
$$

donde $a$ es el número de fases y $P$ el número de polos.

<!-- Página 31 -->

#### B3.3 Análisis de Fourier

Para continuar el análisis se introduce ahora la forma de onda producida por el inversor. El superíndice $s$ —por ejemplo, $V_{q1}^{s}$— indica variables en el sistema de referencia del estator, mientras que $e$ indica un sistema de referencia que gira sincrónicamente.

A partir de las ecuaciones de $\gamma$:

$$
\begin{aligned}
V_{d1}^{s}
&=
\frac{1}{\sqrt{3}}(-V_{s1}+V_{t1}) \\
&=
&= \{\text{desarrollo de Fourier}\} \\
&=
\sum_{k=1}^{\infty}
\left(
V_{kd\alpha}\cos(k\omega_e t)
+
V_{kd\gamma}\sin(k\omega_e t)
\right),
\end{aligned}
$$

$$
V_{q1}^{s}
=
V_{t1}
=
\sum_{k=1}^{\infty}
\left(
V_{kq\alpha}\cos(k\omega_e t)
+
V_{kq\gamma}\sin(k\omega_e t)
\right).
$$

Expresado en el sistema $e$, esto se convierte en:

$$
V_{d1}^{e}
=
V_{q1}^{s}\sin(\omega_e t)
+
V_{d1}^{s}\cos(\omega_e t),
$$

$$
V_{q1}^{e}
=
V_{q1}^{s}\cos(\omega_e t)
-
V_{d1}^{s}\sin(\omega_e t).
$$

La sustitución de las expresiones de $V_{d1}^{s}$ y $V_{q1}^{s}$ da ondas que giran hacia delante y hacia atrás, designadas $+e$ y $-e$.

$$
\begin{aligned}
V_{kd1}^{+e}
=
\frac{1}{2}\sum_{k=1}^{\infty}
\Bigl[
&-(V_{kq\alpha}-V_{kd\gamma})
\sin((k-1)\omega_e t) \\
&+(V_{kq\gamma}+V_{kd\alpha})
\cos((k-1)\omega_e t)
\Bigr],
\end{aligned}
$$

$$
\begin{aligned}
V_{kq1}^{+e}
=
\frac{1}{2}\sum_{k=1}^{\infty}
\Bigl[
&(V_{kq\alpha}-V_{kd\gamma})
\cos((k-1)\omega_e t) \\
&+(V_{kq\gamma}+V_{kd\alpha})
\sin((k-1)\omega_e t)
\Bigr],
\end{aligned}
$$

$$
\begin{aligned}
V_{kd1}^{-e}
=
\frac{1}{2}\sum_{k=1}^{\infty}
\Bigl[
&(V_{kq\alpha}+V_{kd\gamma})
\sin((k+1)\omega_e t) \\
&-(V_{kq\gamma}-V_{kd\alpha})
\cos((k+1)\omega_e t)
\Bigr],
\end{aligned}
$$

$$
\begin{aligned}
V_{kq1}^{-e}
=
\frac{1}{2}\sum_{k=1}^{\infty}
\Bigl[
&(V_{kq\alpha}+V_{kd\gamma})
\cos((k+1)\omega_e t) \\
&+(V_{kq\gamma}-V_{kd\alpha})
\sin((k+1)\omega_e t)
\Bigr].
\end{aligned}
$$

Para resolver las ecuaciones de los distintos armónicos, conviene establecer un sistema de referencia separado para cada uno, de modo que los parámetros sean constantes. Por tanto, los diferentes armónicos se transforman individualmente:

$$
\gamma_{d1}^{+ke}
=
\gamma_{kq1}^{+e}\sin((k-1)\omega_e t)
+
\gamma_{kd1}^{+e}\cos((k-1)\omega_e t),
$$

$$
\gamma_{q1}^{+ke}
=
\gamma_{kq1}^{+e}\cos((k-1)\omega_e t)
-
\gamma_{kd1}^{+e}\sin((k-1)\omega_e t),
$$

<!-- Página 32 -->

$$
\gamma_{d2}^{+ke}
=
\gamma_{kq2}^{+e}\sin((k-1)\omega_e t)
+
\gamma_{kd2}^{+e}\cos((k-1)\omega_e t),
$$

$$
\gamma_{q2}^{+ke}
=
\gamma_{kq2}^{+e}\cos((k-1)\omega_e t)
-
\gamma_{kd2}^{+e}\sin((k-1)\omega_e t),
$$

y

$$
\gamma_{d1}^{-ke}
=
-\gamma_{kq1}^{-e}\sin((k+1)\omega_e t)
+
\gamma_{kd1}^{-e}\cos((k+1)\omega_e t),
$$

$$
\gamma_{q1}^{-ke}
=
\gamma_{kq1}^{-e}\cos((k+1)\omega_e t)
+
\gamma_{kd1}^{-e}\sin((k+1)\omega_e t),
$$

$$
\gamma_{d2}^{-ke}
=
-\gamma_{kq2}^{-e}\sin((k+1)\omega_e t)
+
\gamma_{kd2}^{-e}\cos((k+1)\omega_e t),
$$

$$
\gamma_{q2}^{-ke}
=
\gamma_{kq2}^{-e}\cos((k+1)\omega_e t)
+
\gamma_{kd2}^{-e}\sin((k+1)\omega_e t).
$$

Con las tensiones del rotor iguales a cero, la combinación de las ecuaciones anteriores da:

$$
V_{d1}^{+ke}
=
\frac{1}{2}(V_{kq\alpha}+V_{kd\gamma}),
$$

$$
V_{q1}^{+ke}
=
\frac{1}{2}(V_{kq\gamma}-V_{kd\alpha}),
$$

$$
V_{d1}^{-ke}
=
\frac{1}{2}(V_{kq\alpha}-V_{kd\gamma}),
$$

$$
V_{q1}^{-ke}
=
\frac{1}{2}(V_{kq\alpha}+V_{kd\gamma}).
$$

<!-- En el original, el término final de la expresión de V_{q1}^{-ke} parece ser V_{kd\gamma}. Esto debe comprobarse con respecto a la descomposición anterior en la pasada 2. -->

Las corrientes pueden resolverse ahora tomando la inversa de

$$
\begin{bmatrix}
V_{d1} \\
V_{q1} \\
0 \\
0
\end{bmatrix}^{\pm ke}
=
\begin{bmatrix}
-n\omega_e(L+L_1+M) & R+R_1+(L+L_1+M)p & -n\omega_eM & Mp \\
R+R_1+(L+L_1+M)p & n\omega_e(L+L_1+M) & Mp & n\omega_eM \\
-(n\omega_e-\omega_r)M & Mp & -(n\omega_e-\omega_r)L'_2 & R'_2+L'_2p \\
Mp & (n\omega_e-\omega_r)M & R'_2+L'_2p & (n\omega_e-\omega_r)L'_2
\end{bmatrix}
\begin{bmatrix}
i_{d1} \\
i_{q1} \\
i'_{d2} \\
i'_{q2}
\end{bmatrix}^{\pm ke}
$$

Estas ecuaciones se resuelven y proporcionan después las pérdidas y el par de la manera habitual, a partir del circuito equivalente convencional para las ondas que giran hacia delante y hacia atrás.

<!-- Esta matriz también se ha reproducido en el orden mostrado en el original. La variable n aparece aquí sin definición explícita en la página; parece indicar el orden de la onda considerada. -->

---
### Apéndice 4. Descripción del programa PWMIND

<!--
> **Reconstrucción, pasada 1.** Este archivo abarca las Secciones 4.1–4.5 del apéndice original (páginas 33–37 del PDF). El texto se ha transcrito de la copia escaneada. Se han omitido el diagrama del circuito y el dibujo de la ranura del rotor, sustituyéndolos por breves marcadores de posición. El listado del programa y los ejemplos de ejecución, que constituyen los puntos 9 y 10 del índice original, se tratan en archivos separados.
-->

<!-- Página 33 -->

**Índice**

B4.1 $\  $ Generalidades  
B4.2 $\  $ Ámbito de aplicación  
B4.3 $\  $ Secuencia de cálculo  
B4.4 $\  $ Datos de entrada  
B4.5 $\  $ Salida  
B4.6 $\  $ "Flujo constante"  
B4.7 $\  $ "Iteración de s"  
B4.8 $\  $ Instrucciones de ejecución  
B4.9 $\  $ Listado del programa  
B4.10 $\ $ Ejemplo de ejecución  

<!-- Página 34 -->

#### B4.1 Generalidades

El programa PWMIND es una modificación del programa PWMOT y calcula pérdidas, tensión, corriente y par para una combinación arbitraria de un inductor en serie y una máquina de inducción.

<br>
<p align="center">
<figure>
  <img  src="assets/figur-7.svg" width="500" alt="Circuito equivalente lineal de un inductor en serie y una máquina de inducción">
  <figcaption><b>Figura 7.</b> Circuito equivalente del inductor y el motor bajo carga (también mostrado en la Figura 4)</figcaption>
</figure>
</p>
<br>

#### B4.2 Ámbito de aplicación

Se obtienen resultados correctos para todos los circuitos equivalentes lineales en los que la tensión de alimentación tiene una forma de onda y una frecuencia arbitrarias. El programa también tiene en cuenta el desplazamiento de corriente, que adquiere especial importancia a frecuencias altas.

#### B4.3 Secuencia de cálculo

El programa realiza primero un análisis de Fourier de la tensión. A continuación calcula las corrientes de cada armónico a partir de los datos de la máquina y de la amplitud de la tensión. Finalmente, estos resultados se utilizan para obtener la caída de tensión en el inductor y las pérdidas, el par y la caída de tensión en el motor.

#### B4.4 Datos de entrada

Primero se solicitan los datos de entrada de la tensión:

| Variable del programa | Magnitud | Referencia |
|---|---|---|
| $N$ | $J'$ | Apéndice 2 |
| AIN(I) | $\alpha_i$ | Apéndice 2 |
| $\mathrm{NMAX}$ | Término más alto del desarrollo de Fourier | |
| APK | $m$ | Apéndice 2 |
| MK | $p$ | Apéndice 2 |
| FFT | $\theta_0$ | Apéndice 2 |

Como alternativa, los coeficientes de armónicos seleccionados pueden obtenerse mediante desarrollo continuo de Fourier (`IS`, `NRWANT(I)`).

<!-- Página 35 -->

Para **flujo constante**, véase el apartado con ese título.

A continuación se introducen los parámetros de la máquina. Solo es necesario hacerlo antes del primer cálculo o cuando se requieran nuevos datos de la máquina.

| Variable del programa | Significado | Unidad/observación |
|---|---|---|
| RES(1) | Resistencia del estator | $\Omega/\text{fase}$, Y equivalente |
| XI(1) | Reactancia del estator | Igual |
| XI(2) | Reactancia magnetizante | Igual |
| XI(3) | Reactancia del rotor | Igual |
| RES(2) | Resistencia del rotor | Igual |
| POLES | Número de polos | — |
| BASEF | Frecuencia base | Hz |

<br>
<p align="center">
<figure>
  <img  src="assets/figur-8.svg" width="400" alt="Croquis acotado de la ranura del rotor">
  <figcaption><b>Figura 8.</b> Croquis acotado de la ranura del rotor</figcaption>
</figure>
</p>
<br>

Las etiquetas de la figura indican:

- `SPTR`: tipo de ranura según el programa RESIST
$\rho_2$: resistividad del conductor  
- $R_{\mathrm{rat}}$: relación entre el diámetro medio de la ranura y el diámetro medio del rotor

Lo anterior muestra las dimensiones de la ranura del rotor necesarias para calcular el desplazamiento de corriente.

Para la **iteración de s**, véase el apartado con ese título.

Para iniciar el cálculo también se requiere lo siguiente:

| Variable del programa | Significado | Unidad |
|---|---|---|
| `FM0` | Frecuencia actual | Hz |
| `SM` | Deslizamiento | |
| `UD/2` | Mitad de la tensión del enlace de CC | V |

Para el inductor en serie se requiere lo siguiente:

| Variable del programa | Significado | Unidad |
|---|---|---|
| `R` | Resistencia del inductor | $\Omega/\text{fase}$ |
| `L` | Inductancia del inductor | H/fase |

<!-- Página 36 -->

#### B4.5 Salida

Los valores de salida se explican por sí mismos, pero debe observarse que las tensiones son valores de cresta.

#### B4.6 "Flujo constante"

Cuando la máquina de inducción se utiliza a distintas frecuencias, se procura siempre mantener constante el flujo $\Phi$ con el fin de minimizar las pérdidas a par de carga constante. Este flujo $\Phi$ es proporcional a $E/f$; por consiguiente, para mantener el flujo constante, $E$ debe conservarse linealmente proporcional a la frecuencia —para la componente fundamental—. Como se producen caídas de tensión en las impedancias del inductor y del estator, la tensión en bornes $V$ debe aumentarse continuamente para mantener el flujo constante. Esto es más perceptible a bajas frecuencias.

$V$ se eleva aumentando la relación de impulsos por encima de su valor normal de

$$
\mathrm{APK}=\frac{\mathrm{FM0}}{\mathrm{FB}}.
$$

De este modo, la señal de modulación se ensancha y aumenta el valor de cresta de la componente fundamental. Sin embargo, esto solo puede mantenerse a bajas frecuencias y con inductancias pequeñas, porque de lo contrario la relación de impulsos se vuelve mayor que uno, lo cual es imposible.

Para mantener constante el flujo, se responde con un uno a la pregunta correspondiente. El programa entra entonces en un bucle iterativo entre `0800` y `3060`. El bucle comienza calculando los términos de Fourier. A continuación se calcula el valor de cresta de la tensión fundamental de flujo `EQ` (= la tensión de flujo del programa). Si difiere del valor de cresta deseado `E1` de la tensión de flujo, la ejecución vuelve a `103` y se modifica la relación de impulsos `APK`.

La iteración continúa de este modo hasta que `EQ` y `E1` difieren como máximo un 0.4%. Entonces se sale del bucle y el programa continúa normalmente utilizando la última relación de impulsos aplicada.

**NOTA:** $E$ es un valor de cresta.

#### B4.7 "Iteración de s"

Con frecuencias o inductancias suficientemente altas, el flujo no puede mantenerse constante. En su lugar debe aumentarse el deslizamiento para obtener par constante.

Para determinar el deslizamiento necesario para un par dado, se ha insertado un bucle iterativo entre `1920` y `3140`. Si se responde afirmativamente a la pregunta sobre la iteración de s, este bucle se ejecuta para la componente fundamental. En `3140` se imprime el par fundamental ($\approx$ par total). Si difiere del par deseado, se vuelve a entrar en el bucle con un valor diferente de s.

> **Advertencia.** Como los bucles interactúan, es necesario proceder con cuidado. Si, por ejemplo, se realiza una iteración de flujo constante, no conviene entrar al mismo tiempo en el bucle de iteración de s.

<!-- Página 37 -->

#### B4.8 Instrucciones de ejecución

El programa está diseñado para TIME SHARING y, por tanto, se ejecuta desde un terminal. Después de iniciar sesión, introdúzcase:

```text
FORT
RUN CPWMIND;CSUBROUT
```

a lo que el terminal responde:

```text
LOADER DIAGNOSTICS ......
```

A continuación, el programa solicita los parámetros descritos como datos de entrada en la Sección 4.

Puede obtenerse más información en la descripción del programa PWMOT.

---
### B4.9 Listado del programa PWMIND

<!--
> **Reconstrucción, pasada 1.** Este archivo abarca las Secciones 4.6–4.9 del apéndice original
> (páginas 38–41 del PDF), desde la línea 0100 hasta la línea 2490 del listado del programa.
>
> El texto del programa se ha reproducido en formato FORTRAN fijo hasta donde permite el escaneado.
> La impresión matricial hace que esta parte sea menos segura que el texto corrido. Por ello, varios
> nombres de variables y líneas de continuación difíciles de leer deben comprobarse con
> el original en una pasada posterior. El texto sueco de las instrucciones `PRINT` se ha
> restituido con å, ä y ö cuando estas letras son claras.
-->

#### Parte 1

<!-- Página 38 -->

```fortran  
  
0100C     PROGRAM FÖR MASKINBERÄKNING MED PWM REFERENS-
0110C     OCH MODULATIONSPULSER SOM INDATA
0120C     PROGRAMMET BERÄKNAR MOMENTANVÄRDEN PÅ SPÄNNING,
0130C     STRÖMMAR OCH MOMENT. FÖRLUSTER BERÄKNAS
0140C     *******************************************************
0150      DIMENSION RES(50,5),AIN(10),NRWANT(50)
0155      DIMENSION KIND(50),IIND(50)
0160      DIMENSION ABM(50,5),U(50,2,2)
0165      DIMENSION UDQ(50),UDG(50),UDA(50), VOD(50)
0170      DIMENSION DELTAU(50,2)
0180      DIMENSION VOD(50,4),HM(20),EE(4),SI(4),BS(20)
0190      DIMENSION AINTID(10)
0200      DIMENSION H(20),BC(20),RHO(20)
0210      DIMENSION A(50,2,4),RROT(50,2),EFF(50,2)
0220      COMMON/LABEL2/RS,LS,M,LR,RR,WE,WR,A(4,4),RI,LI,B(4,4)
0230      COMMON/LABEL1/IND(199)
0240      REAL PI/3.14159/
0250      REAL MOM1
0260      REAL KM,LS,LR,M,LI
0270      REAL PCU1,PCU2,IQST,IDST,IQRT,IDRT,MOMT
0280      CHARACTER TEXT*42
0290    1 CONTINUE
0300      DO 3 I=1,50
0310      NRWANT(I)=0
          KIND(I)=0
          IIND(I)=0
0320      IF(I.LT.11) AIN(I)=0.
0330    3 CONTINUE
0340      DO 5 I=2,198,2
0350      IND(I)=3*I-1
0360    5 IND(I+1)=3*I+1
0370      IND(1)=1
0380      PRINT,"GE ANTAL ARGUMENT (ALFA) SOM INTE=0"
0390      READ,N
0400      NTID=N
0410      PRINT,"GE ARGUMENTEN I GRADER"
0420      READ,(AINTID(I),I=1,N)
0430      DO 10 I=1,N
0440   10 AIN(I)=AINTID(I)*PI/180
0450      DO 7 I=1,N
0460      AINTID(I)=AIN(I)
0470    7 CONTINUE
0480      PRINT,"ÖNSKAS SÄRSKILDA FREKVENSER? 1=JA"
0490      READ,IS
0500      IF(IS.NE.1) GO TO 15
0510      PRINT,"GE ANTALET ÖNSKADE FREKVENSER"
0520      READ,NT
0530      PRINT,"GE FREKVENSERNA SOM F/F0, F0=GRUNDTON"
0540      READ,(NRWANT(I),I=1,NT)
0550      GO TO 40
0560   15 PRINT,"GE HÖGSTA ÖNSKADE FREKVENS F/F0, F0=GRUNDTON"
0570      READ,NMAX
0580      DO 20 I=1,199
0590      IF(IND(I).GT.NMAX) GO TO 30
0600   20 NRWANT(I)=IND(I)
0610   30 NT=I-1
0620   40 CONTINUE
0630      PRINT,"GE PULSKVOT"
0640      READ,APK
0650      PRINT,"GE (ANTALET PULSER PER PERIOD)/6"
0660      READ,MK
0670      MKN=6*MK
0680      PRINT,"GE FASFÖRSKJUTNING I GRADER"
0690      READ,FFI

```

#### Parte 2

<!-- Página 39 -->

```fortran  
  
0700      PRINT,"GE MINSTA AMPLITUD SOM SKALL ADDERAS"
0710      READ,RMMIN
0720      FFI=FFI*PI/180
0730      IE=2
0740      PRINT,"ÖNSKAS KONSTANT FLÖDE? 1=JA"
0750      READ,IE
0760      IF(IE.NE.1) GOTO 107
0770      PRINT,"GE ÖNSKAT E-VÄRDE"
0780      READ,E1
0790  107 CONTINUE
0800  103 CONTINUE
0810C
0820      WRITE(6,104) APK
0830  104 FORMAT(1X,"PULSKVOT=",F10.4)
0840      K1=0
0850      N=NTID
0860      DO 109 I=1,N
0870  109 AIN(I)=AINTID(I)
0880      DO 200 J=1,NT
0890      R1=APK*REFK(N,AIN,NRWANT(J))
0900      R2=NRWANT(J)
0910      R3=0
0920      CALL FIND1(NRWANT(J),MKN,KIND,IIND,M1)
0930      IF(M1.LT.1) GO TO 120
0940      DO 110 J1=1,M1
0950      RM=AMT(APK,IIND(J1))*REFK(N,AIN,KIND(J1))/2.
0960      FI=-IIND(J1)*FFI
0970      IF(ABS(RM).LT.RMMIN) GO TO 110
0980      CALL ADD(RM,R1,FI,R3,FI,RR1,RR3)
0990      R1=RR1
1000      R3=RR3
1010  110 CONTINUE
1020  120 CONTINUE
1030      CALL FIND2(NRWANT(J),MKN,KIND,IIND,M2)
1040      IF(M2.EQ.0) GO TO 150
1050      DO 140 J2=1,M2
1060      K2=IABS(KIND(J2))
1070      I2=IABS(IIND(J2))
1080      RM=AMT(APK,I2)*REFK(N,AIN,K2)/2.
1090      RM=RM*SIGN(1.,KIND(J2))
1100      IF(ABS(RM).LT.RMMIN) GO TO 140
1110      FI=FFI*IIND(J2)
1120      CALL ADD(RM,R1,FI,R3,FI,RR1,RR3)
1130      R1=RR1
1140      R3=RR3
1150  140 CONTINUE
1160  150 K1=K1+1
1170      RES(K1,1)=R1
1180      RES(K1,2)=R2
1190      RES(K1,3)=R3
1200  200 CONTINUE
1210C
1220      IF(IE.EQ.1) GOTO 411
1230      WRITE(6,420)
1240  420 FORMAT(1X,5(1H*),/T10,"RESULTAT AV FOURIERANALYS:",
         &    /5(1H*),/T10,"F/F0",5X,"AMPLITUD",3X,"FASVINKEL",
         &    /70(1H-))
1260      WRITE(6,430)(RES(I,2),RES(I,1),RES(I,3),I=1,K1)
1270  430 FORMAT(1X,T10,F4.0,5X,F7.5,2X,F9.5)
1280  440 CONTINUE
1290  411 CONTINUE
  
```

#### Parte 3

<!-- Página 40 -->

```fortran  
  
1300      PRINT,"ÖNSKAS NY FOURIER-ANALYS ? 1=JA"
1310      READ,IIVS
1320      IF(IIVS.EQ.1) GO TO 1
1330      PRINT,"NYA MASKINKONSTANTER ? 1=JA"
1340      READ,MASK
1350C
1360      K3=K1
1370      IF(MASK.NE.1) GOTO 405
1380      PRINT,"ÖNSKAS MBK 280 S-6:S MASKINKONSTANTER? 1=JA"
1390      READ,IMBK
1400      IF(IMBK.NE.1) GOTO 404
1410      RS=.048
          XLS=.21
          XM=3.886
          XLR=.16
          RRO=.051
          P=6
          FB=50
1420      SPTR=2
          BS21=3.95
          BS22=3.95
          HS2=29.2
          BSY2=2
          HSY2=1
1430      BSMR=0
          HSMR=0
          BCR1=3.75
          BCMR=0
          HCR=28
          RHO2=.0425
          RRAT=.65
1440  404 CONTINUE
1450      IF(IMBK.EQ.1) GOTO 405
1460      PRINT,"GE INDATA: RS,XLS,XM,XLR,RRO,P,FB"
1470      READ,RS,XLS,XM,XLR,RRO,P,FB
1480      PRINT,"ROTOR-SPTR: BS21,BS22,HS2,BSY2,HSY2,BSMR,HSMR",
1490     &    " BCR1,BCMR,HCR,RHO2,RRAT"
1500      READ,SPTR,BS21,BS22,HS2,BSY2,HSY2,BSMR,HSMR,
1510     &    BCR1,BCMR,HCR,RHO2,RRAT
1520  405 CONTINUE
1530      PRINT,"ÖNSKAS S-ITERATION? 1=JA"
1540      READ,IIVS
1550  390 PRINT,"GE FM0, SM, UD/2"
1560      READ,FM0,SM,UM1
1570      RI=0
          LI=0
1580      PRINT,"SKALL SERIEREAKTOR INGÅ I BERÄKNINGARNA? 1=JA"
1590      READ,KS
1600      IF(KS.NE.1) GOTO 392
1610      PRINT,"GE SERIEREAKTORDATA: R,L"
1620      READ,RI,LI
1630      XL=2*PI*FB*LI
1640  392 CONTINUE
1650  397 CONTINUE
1660  394 CONTINUE
1670      CALL SARE(SPTR,BS21,BS22,HS2,BSY2,HSY2,BSMR,HSMR,
1680     &    BCR1,BCMR,HCR,RHO2,N,BS,H,BC,RHO)
1690      WRITE(6,530)
1700  530 FORMAT(1X,5(1H*))
1710C     UPPLÄGGNING AV RESULTAT FRÅN FOURIER-ANALYS
1720C     3-FAS TILL Q OCH D-AXEL
1730      WRITE(6,545)
1740C
1750      K1=K3
1760      IF(IIVS.EQ.1) K1=1
1770      IF(IE.EQ.1) K1=1
1780      DO 540 I=1,K1
1790      A2=RES(I,1)*SIN(RES(I,3))+UM1
1800      B3=RES(I,1)*COS(RES(I,3))+UM1
1810      ABM(I,1)=RES(I,2)
1820      ABM(I,2)=A2
1830      ABM(I,3)=B3
1840      IN=ABM(I,1)
1850  540 WRITE(6,550) A2,IN,B3,IN
1860C
1870      PRINT,"COPY"
          READ,STRUNT
1880  545 FORMAT(1X,6(1H*),/T10,"SPÄNNING Q-AXEL")
1890  550 FORMAT(1X,T10,F10.3,"*COS(",I2,"*WT) +",
  
```

#### Parte 4

<!-- Página 41 -->

```fortran  
  
1900     &    I2,"*WT) + ",F10.3,"*SIN(",I2,"*WT) +")
1910  559 CONTINUE
1920      WRITE(6,530)
1930C     WQ & WD
1940      S2=2/SQRT(3)
1950C
1960      K1=K3
1970      IF(IIVS.EQ.1) K1=1
1980      IF(IE.EQ.1) K1=1
1990      DO 560 I=1,K1
2000      ABM(I,4)=S2*ABM(I,3)*SIN(ABM(I,1)*2*PI/3)
2010      ABM(I,5)=-S2*ABM(I,2)*SIN(ABM(I,1)*2*PI/3)
2020      IN=ABM(I,1)
2030  560 CONTINUE
2040C
2050      XS=XLS+XM
2060      XR=XLR+XM
2070      WP=2*PI*FB
2080      WE=2*PI*FM0
2090      LS=XS/WP
2100      M=XM/WP
2110C
2120      EE(3)=0.
2130      EE(4)=EE(3)
2140C
2150      IF(KS.NE.1) GOTO 699
2160      DO 698 K=1,50
2170      DO 698 J=1,2
2180      DO 698 I=1,2
2190      U(K,J,I)=0.0
2200  698 CONTINUE
2210  699 CONTINUE
2220      K1=K3
2230      IF(IE.EQ.1) K1=1
2240      DO 700 K=1,K1
2250      KU=ABM(K,1)
2260      WR=WE*(1-SM)
2270C
2280      VOD(K,1)=0.5*(ABM(K,2)-ABM(K,5))
2290      VOD(K,2)=0.5*(ABM(K,3)+ABM(K,4))
2300      VOD(K,3)=0.5*(ABM(K,2)+ABM(K,5))
2310      VOD(K,4)=0.5*(ABM(K,3)-ABM(K,4))
2320C
2330      DO 700 J=1,3,2
2340      MP=1
2350      IF(J.EQ.3) MP=2
2360      EE(1)=VOD(K,J)
2370      EE(2)=VOD(K,J+1)
2380      KW=ABM(K,1)
2390      IF(J.EQ.3) KW=-ABM(K,1)
2400      F2=ABS(KW*WE-WR)/(2*PI)
2410      CALL RSPIMP(1,F2,N,0,BS,H,BC,RHO,
         &    Z1,Z2,Z3,Z4,Z5,Z6,Z7,Z8)
2420      CALL RSPIMP(1,.1,N,0,BS,H,BC,RHO,
         &    Z3,Z4,Z5,Z6,Z7,Z8,Z9,Z10)
2430      RFACT=RRAT*(Z1/Z3-1.0)+1.0
2440      XFACT=RRAT*(Z2*.1/(Z4*F2)-1.0)+1.0
2450      LR=(XLR*XFACT+XM)/WP
2460      RR=RRO*RFACT
2470      RROT(K,MP)=RR
2480      CALL SETA(KW)
2490      CALL MINF(F2,4,4,0.0001,HM,IER2)
  
```

<!--
Pasada 2: comprobar en particular la línea de declaración 0160 y el orden de los argumentos
en CALL ADD en las líneas 0980 y 1120, las líneas FORMAT 1240–1250 y
1890–1900, así como el primer argumento de MINF en la línea 2490.
-->

---

<!--
> **Reconstrucción, pasada 1.** Este archivo abarca las Secciones 4.10–4.14 del apéndice original
> (páginas 42–46 del PDF), desde la línea 2500 hasta la línea 5860 del listado del programa.
>
> El texto del programa se ha reproducido en formato FORTRAN fijo hasta donde permite el escaneado.
> La impresión matricial y varias expresiones muy densas hacen que algunas líneas sean inciertas.
> La numeración de líneas original salta de 4870 a 5650; no aparecen líneas de programa
> intermedias en las páginas reproducidas.
-->

#### Parte 5

<!-- Página 42 -->

```fortran  
  
2500      DO 620 I=1,4
2510      SUM=0.0
2520C
2530      DO 630 J2=1,4
2540      SUM=SUM+H(I,J2)*EE(J2)
2550  630 CONTINUE
2560C
2570      SI(I)=SUM
2580      IF(KB.NE.1) GOTO 632
2590      DO 631 J3=1,2
2600      U(K,MP,J3)=B(J3,I)*SI(I)+U(K,MP,J3)
2610  631 CONTINUE
2620  632 CONTINUE
2630  620 CONTINUE
2640C     STRÖMMAR I Q&D-PLANET
2650C
2660      DO 700 I=1,4
2670      AI(K,MP,I)=SI(I)
2680  700 CONTINUE
2690C
2700      IF(KB.NE.1) GOTO 702
2710      K1=K3
2720      IF(INYS.EQ.1) K1=1
2730      IF(IE.EQ.1) K1=1
2740      DO 701 K=1,K1
2750      UDA(K)=U(K,1,1)+U(K,2,1)
2760      UDG(K)=U(K,1,2)+U(K,2,2)
2770      UDA(K)=U(K,1,2)-U(K,2,2)
2780      UDG(K)=U(K,2,1)-U(K,1,1)
2790      DELTAU(K,1)=ABM(K,2)-UDA(K)
2800      DELTAU(K,2)=ABM(K,3)-UDG(K)
2810  701 CONTINUE
2820  702 CONTINUE
2830C
2840C
2850C     EFFEKTFÖRLUSTER I STATOR OCH ROTOR:
2860      PCU1=0
2870      PCU2=0
2880C
2890      K1=K3
2900      IF(INYS.EQ.1) K1=1
2910      IF(IE.EQ.1) K1=1
2920      DO 710 K=1,K1
2930      APCU1=RS*1.5*(AI(K,1,1)**2+AI(K,1,2)**2)
2940      BPCU1=RS*1.5*(AI(K,2,1)**2+AI(K,2,2)**2)
2950      EFF(K,1)=APCU1+BPCU1
2960      IF(IE.NE.1) GOTO 705
2970  742 CONTINUE
2980      DENOM=(RRO/SM)**2+((XLR+XM)*FM0/FB)**2
2990      RH=RRO/SM*(XM*FM0/FB)**2/DENOM
3000      XH=((RRO/SM)**2*XM*FM0/FB+
         &     XLR*XM*(XLR+XM)*(FM0/FB)**3)/DENOM
3010      EQ=RES(1,1)*UM1*SQRT((RH**2+XH**2)/((RI+RS+RH)**2
3020     &     +(XL*FM0/FB+XLS*FM0/FB+XH)**2))
3030      IF(INYS.EQ.1) GOTO 748
3040      APK1=APK
3050      APK=APK*E1/EQ
3060      IF(ABS((EQ-E1)/E1).GT.0.004) GOTO 103
3070  748 CONTINUE
3080      WRITE(6,713)EQ
3090  713 FORMAT(1X,"EQ=",F13.3)
```

#### Parte 6

```fortran  
  
3100      CPCU2=1.5*RROT(1,1)*(AI(1,1,3)**2+AI(1,1,4)**2)
3110      DPCU2=1.5*RROT(1,2)*(AI(1,2,3)**2+AI(1,2,4)**2)
3120      MOM1=P*(CPCU2+DPCU2)/SM/4/PI/FM0
3130      WRITE(6,712)MOM1
3140  712 FORMAT(1X,"MOMENTET=",F13.3,"   
         &   ÖNSKAS NY ITERATION? 1=JA")
3150      IF(INYS.EQ.1) GOTO 405
3160      READ,INY
3170      IF(INY.NE.1) GOTO 704
3180      GOTO 390
3190  704 IE=2
          APK=APK1
3200      GOTO 103
3210  705 CONTINUE
3220      IF(INYS.EQ.1) GOTO 742
3230      INYS=2
3240      BPCU2=1.5*RROT(K,2)*(AI(K,2,3)**2+AI(K,2,4)**2)
3250      APCU2=1.5*RROT(K,1)*(AI(K,1,3)**2+AI(K,1,4)**2)
3260      EFF(K,2)=APCU2+BPCU2
3270C
3280      IT=ABM(K,1)
3290      WRITE(6,720)K,IT,EFF(K,1),EFF(K,2),RROT(K,1),RROT(K,2)
3300      PCU1=PCU1+EFF(K,1)
3310      PCU2=PCU2+EFF(K,2)
3320  710 CONTINUE
3330      AIP1=SQRT(PCU1/(3*RS))
3340      PRINT,"COPY"
          READ,STRUNT
3350      WRITE(6,730)PCU1,PCU2,AIP1
3360  720 FORMAT(1X,"K=",I2," F/F0=",I2," PCU1=",F7.1,
3370     &    " PCU2=",F7.1," R2+=",E10.3," R2-=",E10.3//)
3380  730 FORMAT(1X,70(1H-),//,T10,"SUMMA PCU1=",E11.4," W",
3390     &    /T10,"SUMMA PCU2=",E11.4," W",
3400     &    /T10,"I1     =",E11.4," A",/70(1H-))
3410      IF(KB.NE.1) GOTO 737
3420      PRINT,"SPÄNNINGSFALL ÖVER REAKTORN"
3430      PRINT,"    Q-AXELN"
3440      PRINT,"    +COS(NWT)    +SIN(NWT)"
3450      DO 736 K=1,K1
3460      WRITE(6,734)DELTAU(K,1),DELTAU(K,2)
3470  734 FORMAT(1X,2F12.4)
3480  736 CONTINUE
3490  737 CONTINUE
3500C     MOMENTBERÄKNINGAR
3510      AMVM=0
          AMOMA=-1E8
          AMOMI=1E8
3520      T=1/(FM0*MK)
3530      T1=T/50
3540      TI=0
          NTM=0
3550C
3560  735 CONTINUE
3570      IF(TI.GT.T) GOTO 750
3580      IQST=0
          IDST=0
          IQRT=0
          IDRT=0
3590      DO 740 K=1,K1
3600      FI=ABM(K,1)*(WE*TI-PI/6.)
3610C     STATORSTRÖM:
3620      IQST=IQST+(AI(K,1,1)+AI(K,2,1))*COS(FI)
3630     &    +(AI(K,1,2)-AI(K,2,2))*SIN(FI)
3640      IDST=IDST+(AI(K,1,2)+AI(K,2,2))*COS(FI)
3650     &    -(AI(K,1,1)-AI(K,2,1))*SIN(FI)
3660C     ROTORSTRÖM:
3670      IQRT=IQRT+(AI(K,1,3)+AI(K,2,3))*COS(FI)
3680     &    +(AI(K,1,4)-AI(K,2,4))*SIN(FI)
3690      IDRT=IDRT+(AI(K,1,4)+AI(K,2,4))*COS(FI)

```

#### Parte 7

```fortran  
  
3700      &  -(AI(K,1,3)-AI(K,2,3))*SIN(FI)
3710  740 CONTINUE
3720C
3730      MOMT=M*0.75*P*(IQST*IDRT-IDST*IQRT)
3740      AMVM=AMVM+MOMT
3750      IF(MOMT.GT.AMOMA)AMOMA=MOMT
3760      IF(MOMT.LT.AMOMI)AMOMI=MOMT
3770      TI=TI+T1
3780      NTM=NTM+1
3790      GO TO 735
3800  750 CONTINUE
3810      AMVM=AMVM/NTM
3820      AMVAR1=AMOMA-AMVM
3830      AMVAR2=AMOMI-AMVM
3840      WRITE(6,760)T,AMVM,AMVAR1,AMVAR2
3850  760 FORMAT(1X,/70(1H-),/T10,"MOMENTET UNDER",E11.4,
         &    " SEK. :",
3860     &    /T10,"MEDELVÄRDE:",E11.4," NM",
3870     &    /T10,"AMPLITUD  :",E11.4," NM",
3880     &    /T10,"AMPLITUD  :",E11.4," NM",/70(1H-))
3890C     ÖGONBLICKS­VÄRDEN: STRÖM, SPÄNNING OCH MOMENT
3900  805 CONTINUE
3910      PRINT,"ÖNSKAS PLOT ELLER TABELL? 1=PLOT 2=TABELL"
3920      READ,LP
3930      PRINT,"GE TEXT TILL TABELL ELLER PLOT"
3940      READ,TEXT
3950      PRINT,"GE TIDSINTERVALL FÖR PLOT ELLER UTSKRIFT"
3960      PRINT,"T1<T<T2 MILLISEC. ; T1>=0"
3970      READ,T1,T
3980      T1=T1/1000
3990      T=T/1000
4000      PRINT,"GE ANTALET STEG I INTERVALLET"
4010      READ,STEG
4020      TD=(T-T1)/STEG
4030      IF(LP.EQ.2)GOTO 808
4040      PRINT,"GE AMPLITUDER FÖR SKALNING !"
4050      PRINT,"SPÄNNING (V),STATORSTRÖM (A), MOMENT (NM)"
4060      READ,UMAX,AIQSMAX,AMOMAX
4070      CALL PLOTS
4080      CALL ERASE
4090      WRITE(6,940)TEXT
4100      CALL FRAME(0.,0.,16.,14.,2)
4110      DX=(T-T1)/10.
4120      CALL AXIS(4.,1.,"TID (SEKUNDER) ",-15,10.,0.,T1,DX)
4130      DY1=2*UMAX/10.
4140      CALL AXIS(1.,1.,"SPÄNNING (V)",15,10.,90.,
         &   -UMAX,DY1)
4150      DY2=2*AIQSMAX/10.
4160      CALL AXIS(2.,1.,"STATORSTRÖM (A)",15,10.,90.,            
         &   -AIQSMAX,DY2)
4170      DY3=2*AMOMAX/10.
4180      CALL AXIS(3.,1.,"MOMENT (NM)",15,10.,90.,
         &   -AMOMAX,DY3)
4190      CALL PLOT(4.,6.,23)
4200      GO TO 810
4210  808 CONTINUE
4220      WRITE(6,930)TEXT
4230      WRITE(6,910)
4240C
4250  810 CONTINUE
4260      IF(TI.GT.T)GO TO 905
4270      IQST=0
          IDST=0
          IQRT=0
          IDRT=0
          UDST=0
4280C
4290      DO 900 K=1,K1
  
```

#### Parte 8

```fortran  
  
4300      FI=ABM(K,1)*(WE*TI-PI/6.)
4310      FI1=ABM(K,1)*WE*TI
4320C     STATORSTRÖM:
4330      IQST=IQST+(AI(K,1,1)+AI(K,2,1))*COS(FI)
4340     &    +(AI(K,1,2)-AI(K,2,2))*SIN(FI)
4350      IDST=IDST+(AI(K,1,2)+AI(K,2,2))*COS(FI)
4360     &    -(AI(K,1,1)-AI(K,2,1))*SIN(FI)
4370C     ROTORSTRÖM:
4380      IQRT=IQRT+(AI(K,1,3)+AI(K,2,3))*COS(FI)
4390     &    +(AI(K,1,4)-AI(K,2,4))*SIN(FI)
4400      IDRT=IDRT+(AI(K,1,4)+AI(K,2,4))*COS(FI)
4410     &    -(AI(K,1,3)-AI(K,2,3))*SIN(FI)
4420      UDST=UDST+ABM(K,4)*COS(FI1)+ABM(K,5)*SIN(FI1)
4430  900 CONTINUE
4440C
4450      UDST=UDST*SQRT(3)
4460      MOMT=M*0.75*P*(IQST*IDRT-IDST*IQRT)
4470C     UTSKRIFT I TABELL
4480      IF(LP.EQ.2)GO TO 902
4490      CALL PLOT(TI/DX,UDST/DY1,3)
4500      CALL PLOT(TI/DX,UDST/DY1,2)
4510      CALL PLOT(TI/DX,IDST/DY2,3)
4520      CALL PLOT(TI/DX,IDST/DY2,2)
4530      CALL PLOT(TI/DX,MOMT/DY3,3)
4540      CALL PLOT(TI/DX,MOMT/DY3,2)
4550      GO TO 904
4560  902 F10=WE*TI
4570      WRITE(6,920)TI*1000,F10,MOMT,UDST,IDST,IDRT
4580  904 TI=TI+TD
4590      GO TO 810
4600  905 CONTINUE
4610      IF(LP.EQ.2)GO TO 908
4620      CALL HDCOPY
4630      DO 906 NNM=1,5
4640  906 CALL BELL
4650      READ,STRUNT
4660      CALL PLOT(0.,0.,23)
4670      CALL ERASE
4680      CALL ENDP
4690  908 CONTINUE
4700      WRITE(6,530)
4710      PRINT,"ÖNSKAS NY UTSKRIFT (PLOT) ? 1=JA"
4720      READ,ISVAR
4730      IF(ISVAR.EQ.1)GO TO 805
4740  910 FORMAT(1X,70(1H-),/T9,T15,"W0*T",T25,"M",T35,"U",
4750     &    T45,"I1",T55,"I2",//"(MS)",T11,"(RAD)",T25,"(NM)",
4760     &    T35,"(V)",T45,"(A)",T55,"(A)",/70(1H-))
4770  920 FORMAT(1X,F8.3,T15,F6.4,T25,F7.2,T35,F7.1,T45,F7.1,
         &    T55,F7.1)
4780  930 FORMAT(1X,70(1H-),/T10,A30)
4790  940 FORMAT(1X,T20,A30)
4800 1000 CONTINUE
4810      PRINT,"ÖNSKAS NY MASKINBERÄKNING? 1=JA"
4820      READ,MASKIN
4830      IF(MASKIN.EQ.1)GO TO 440
4840      PRINT,"ÖNSKAS NY KÖRNING? 1=JA"
4850      READ,ISLUT
4860      IF(ISLUT.EQ.1)GO TO 1
4870      STOP
          END
            
```

#### Parte 9

```fortran  
  
5650      SUBROUTINE SETA(N)
5660      COMMON/LABEL2/RS,LS,M,LR,RR,WE,WR,A(4,4),RI,LI,B(4,4)
5670      REAL M,LS,LR,LI
5680C
5690      A(1,1)=RS+RI
5700      A(1,2)=N*WE*(LS+LI)
5710      A(1,3)=0.0
5720      A(1,4)=N*WE*M
5730      A(2,1)=-N*WE*(LS+LI)
5740      A(2,2)=RS+RI
5750      A(2,3)=-N*WE*M
5760      A(2,4)=0.0
5770      A(3,1)=0.0
5780      A(3,2)=(N*WE-WR)*M
5790      A(3,3)=RR
5800      A(3,4)=(N*WE-WR)*LR
5810      A(4,1)=-(N*WE-WR)*M
5820      A(4,2)=0.0
5830      A(4,3)=-(N*WE-WR)*LR
5840      A(4,4)=RR
5841      B(1,1)=RS
5842      B(1,2)=N*WE*LS
5843      B(2,1)=-N*WE*LS
5844      B(2,2)=RS
5845      DO 2 J=3,4
5846      DO 2 I=3,4
5847      B(I,J)=A(I,J)
5848    2 CONTINUE
5849      B(1,3)=A(1,3)
5850      B(1,4)=A(1,4)
5851      B(2,3)=A(2,3)
5852      B(2,4)=A(2,4)
5853      B(3,1)=A(3,1)
5854      B(3,2)=A(3,2)
5855      B(4,1)=A(4,1)
5856      B(4,2)=A(4,2)
5857      RETURN
5860      END
  
```

<!--
Pasada 2: comprobar en particular los nombres de variables UDA/UDG en las líneas 2750–2780,
las expresiones de RH, XH y EQ en las líneas 2980–3020, los signos de los
cálculos de par, las líneas FORMAT 3850–3880 y 4740–4770, y
la declaración REAL en la línea 5670.
-->

---
### Apéndice 4.10 Ejemplo de ejecución

<!--
> En la salida del programa que figura a continuación, `W` se ha representado como $\omega$ cuando las expresiones
> se han compuesto en LaTeX. Algunos de los coeficientes más pequeños son difíciles de leer y deben
> comprobarse con el original en la pasada 2.
-->

<!-- Página 47 -->

#### B4.10.1 Datos de entrada e iteraciones iniciales

```text
GE ANTAL ARGUMENT (ALFA) SOM INTE=0
=0

GE ARGUMENTEN I GRADER
=0

ÖNSKAS SÄRSKILDA FREKVENSER? 1=JA
=2

GE HÖGSTA ÖNSKADE FREKVENS F/F0, F0=GRUNDTON
=53

GE PULSKVOT
=.67

GE (ANTALET PULSER PER PERIOD)/6.
=2

GE FASFÖRSKJUTNING I GRADER
=0

GE MINSTA AMPLITUD SOM SKALL ADDERAS
=1E-10

ÖNSKAS KONSTANT FLÖDE? 1=JA
=1

GE ÖNSKAT E-VÄRDE
=170

PULSKVOT=    0.6700

ÖNSKAS NY FOURIER-ANALYS? 1=JA
=2

NYA MASKINKONSTANTER? 1=JA
=1

ÖNSKAS MBK 280 S-6:S MASKINKONSTANTER? 1=JA
=1

ÖNSKAS S-ITERATION? 1=JA
=2

GE FM0, SM, UD/2
=30 .0525 244

SKALL SERIEREAKTOR INGÅ I BERÄKNINGARNA? 1=JA
=1

GE SERIEREAKTORDATA:R,L
=.006 .001
```

La primera componente fundamental calculada de la tensión del eje q se imprime como

$$
u_q(t)
=
0.013\cos(\omega t)
-
207.098\sin(\omega t)
+\cdots
$$

A continuación, el programa modifica la relación de impulsos:

```text
PULSKVOT=    0.6883

ÖNSKAS NY FOURIER-ANALYS? 1=JA
=2

NYA MASKINKONSTANTER? 1=JA
=2

ÖNSKAS S-ITERATION? 1=JA
=2

GE FM0, SM, UD/2
=30 .0525 244

SKALL SERIEREAKTOR INGÅ I BERÄKNINGARNA? 1=JA
=1

GE SERIEREAKTORDATA:R,L
=.006 .001
```

La nueva componente fundamental es

$$
u_q(t)
=
0.014\cos(\omega t)
-
212.834\sin(\omega t)
+\cdots
$$

<!-- Página 48 -->

#### B4.10.2 Resultados después de la iteración de flujo constante

```text
EQ=          170.059
MOMENTET=    703.524     ÖNSKAS NY ITERATION? 1=JA
=2
PULSKVOT=      0.6983
```

#### B4.10.3 Resultados del análisis de Fourier

| $f/f_0$ | Amplitud | Fasvinkel |
|---:|---:|---:|
| 1  | 0.87227 | 3.14153 |
| 5  | 0.15005 | 3.14153 |
| 7  | 0.07989 | 3.14153 |
| 11 | 0.23409 | 0 |
| 13 | 0.42800 | 3.14153 |
| 17 | 0.15094 | 3.14153 |
| 19 | 0.13659 | 3.14153 |
| 23 | 0.25953 | 3.14153 |
| 25 | 0.12437 | 0 |
| 29 | 0.01231 | 3.14153 |
| 31 | 0.01661 | 3.14153 |
| 35 | 0.00326 | 0.00002 |
| 37 | 0.05062 | 3.14153 |
| 41 | 0.02451 | 3.14153 |
| 43 | 0.01841 | 3.14153 |
| 47 | 0.04002 | 0.00000 |
| 49 | 0.10166 | 3.14153 |
| 53 | 0.04665 | 3.14153 |

A continuación se utilizan los mismos datos de la máquina y del inductor:

```text
ÖNSKAS NY FOURIER-ANALYS? 1=JA
=2

NYA MASKINKONSTANTER? 1=JA
=2

ÖNSKAS S-ITERATION? 1=JA
=2

GE FM0, SM, UD/2
=30 .0525 244

SKALL SERIEREAKTOR INGÅ I BERÄKNINGARNA? 1=JA
=1

GE SERIEREAKTORDATA:R,L
=.006 .001
```

#### B4.10.4 Tensión en el eje q

La salida del programa corresponde a la siguiente serie de Fourier:

$$
\begin{aligned}
u_q(t) ={}&
 0.014\cos(\omega t)
-212.834\sin(\omega t) \\
&+0.002\cos(5\omega t)
-36.611\sin(5\omega t) \\
&+0.001\cos(7\omega t)
-19.492\sin(7\omega t) \\
&+0.000\cos(11\omega t)
+57.119\sin(11\omega t) \\
&+0.007\cos(13\omega t)
-104.432\sin(13\omega t) \\
&+0.002\cos(17\omega t)
-36.828\sin(17\omega t) \\
&+0.002\cos(19\omega t)
-33.329\sin(19\omega t) \\
&+0.004\cos(23\omega t)
-63.326\sin(23\omega t) \\
&+0.000\cos(25\omega t)
+30.346\sin(25\omega t) \\
&+0.000\cos(29\omega t)
-3.004\sin(29\omega t) \\
&+0.000\cos(31\omega t)
-4.053\sin(31\omega t) \\
&+0.000\cos(35\omega t)
+0.726\sin(35\omega t) \\
&+0.001\cos(37\omega t)
-12.351\sin(37\omega t) \\
&+0.000\cos(41\omega t)
-5.980\sin(41\omega t) \\
&+0.000\cos(43\omega t)
-4.491\sin(43\omega t) \\
&+0.000\cos(47\omega t)
+9.764\sin(47\omega t) \\
&+0.002\cos(49\omega t)
-24.804\sin(49\omega t) \\
&+0.001\cos(53\omega t)
-11.432\sin(53\omega t).
\end{aligned}
$$

<!-- Página 49 -->

#### B4.10.5 Pérdidas en el cobre y resistencias del rotor

| $K$ | $f/f_0$ | $P_{\mathrm{CU1}}$ | $P_{\mathrm{CU2}}$ | $R_2^+$ | $R_2^-$ |
|---:|---:|---:|---:|---:|---:|
| 1  | 1  | 2745.5 | 2320.7 | $0.510\times10^{-1}$ | $0.811\times10^{-1}$ |
| 2  | 5  | 27.5 | 72.8 | $0.114\times10^{0}$ | $0.135\times10^{0}$ |
| 3  | 7  | 4.0 | 10.6 | $0.136\times10^{0}$ | $0.153\times10^{0}$ |
| 4  | 11 | 14.4 | 52.0 | $0.169\times10^{0}$ | $0.183\times10^{0}$ |
| 5  | 13 | 34.4 | 125.1 | $0.184\times10^{0}$ | $0.196\times10^{0}$ |
| 6  | 17 | 2.5 | 11.1 | $0.209\times10^{0}$ | $0.220\times10^{0}$ |
| 7  | 19 | 1.7 | 7.3 | $0.221\times10^{0}$ | $0.232\times10^{0}$ |
| 8  | 23 | 4.1 | 20.7 | $0.243\times10^{0}$ | $0.252\times10^{0}$ |
| 9  | 25 | 0.8 | 4.0 | $0.253\times10^{0}$ | $0.262\times10^{0}$ |
| 10 | 29 | 0.0 | 0.0 | $0.271\times10^{0}$ | $0.280\times10^{0}$ |
| 11 | 31 | 0.0 | 0.1 | $0.280\times10^{0}$ | $0.289\times10^{0}$ |
| 12 | 35 | 0.0 | 0.0 | $0.297\times10^{0}$ | $0.305\times10^{0}$ |
| 13 | 37 | 0.1 | 0.4 | $0.306\times10^{0}$ | $0.313\times10^{0}$ |
| 14 | 41 | 0.0 | 0.1 | $0.321\times10^{0}$ | $0.329\times10^{0}$ |
| 15 | 43 | 0.0 | 0.0 | $0.329\times10^{0}$ | $0.336\times10^{0}$ |
| 16 | 47 | 0.0 | 0.2 | $0.343\times10^{0}$ | $0.350\times10^{0}$ |
| 17 | 49 | 0.1 | 1.0 | $0.351\times10^{0}$ | $0.357\times10^{0}$ |
| 18 | 53 | 0.0 | 0.2 | $0.364\times10^{0}$ | $0.371\times10^{0}$ |

El resumen de la salida del programa es:

$$
\sum P_{\mathrm{CU1}} = 0.2835\times10^4\ \mathrm{W},
$$

$$
\sum P_{\mathrm{CU2}} = 0.2626\times10^4\ \mathrm{W},
$$

y

$$
I_1 = 0.1403\times10^3\ \mathrm{A}.
$$

#### B4.10.6 Caída de tensión en el inductor

Para el eje q, los coeficientes de coseno y seno se imprimen de la siguiente manera:

| Harmonisk term | $\cos(n\omega t)$ | $\sin(n\omega t)$ |
|---:|---:|---:|
| 1  | -27.1578 | -24.8731 |
| 5  | 1.4653 | -18.3514 |
| 7  | -0.7123 | -9.7876 |
| 11 | -1.4651 | 29.2392 |
| 13 | -2.5807 | -53.4793 |
| 17 | 0.7417 | -19.0144 |
| 19 | -0.6551 | -17.2107 |
| 23 | 1.0782 | -32.9578 |
| 25 | 0.5085 | 15.7472 |
| 29 | 0.0450 | -1.5637 |
| 31 | -0.0598 | -2.1099 |
| 35 | -0.0107 | 0.4157 |
| 37 | -0.1648 | -6.4462 |
| 41 | 0.0742 | -3.1267 |
| 43 | -0.0550 | -2.3483 |
| 47 | -0.1121 | 5.1130 |
| 49 | -0.2825 | -12.9992 |
| 53 | 0.1234 | -5.9942 |

#### B4.10.7 Par

```text
MOMENTET UNDER 0.1667E-01 SEK. :

MEDELVÄRDE:  0.7034E 03 NM
AMPLITUD  :  0.1465E 03 NM
AMPLITUD  : -0.1188E 03 NM
```

Esto corresponde a un par medio de aproximadamente $703.4\ \mathrm{Nm}$, con desviaciones
por encima y por debajo de la media de aproximadamente $146.5\ \mathrm{Nm}$ y $-118.8\ \mathrm{Nm}$, respectivamente.

<!-- Página 50 -->

#### B4.10.8 Tabla de par, tensión y corriente

```text
ÖNSKAS PLOT ELLER TABELL? 1=PLOT 2=TABELL
=2

GE TEXT TILL TABELL ELLER PLOT
=

GE TIDSINTERVALL FÖR PLOT ELLER UTSKRIFT
T1<T<T2 MILLISEC. ; T1>=0
=0 17

GE ANTALET STEG I INTERVALLET
=6
```

| $t$ (ms) | $\omega_0 t$ (rad) | $M$ (Nm) | $U$ (V) | $I_1$ (A) | $I_2$ (A) |
|---:|---:|---:|---:|---:|---:|
| 0.000  | 0.0000 | 741.03 | -512.6 | -41.9 | 92.2 |
| 2.833  | 0.5341 | 761.89 | -533.3 | -160.1 | 176.1 |
| 5.667  | 1.0681 | 726.10 | -84.8 | -208.3 | 185.2 |
| 8.500  | 1.6022 | 807.88 | 0.4 | -204.5 | 149.4 |
| 11.333 | 2.1363 | 709.90 | 499.2 | -157.2 | 64.5 |
| 14.167 | 2.6704 | 836.44 | 435.1 | -19.2 | -49.5 |
| 17.000 | 3.2044 | 694.67 | 459.9 | 50.8 | -97.8 |

```text
ÖNSKAS NY UTSKRIFT (PLOT)? 1=JA
=2

ÖNSKAS NY MASKINBERÄKNING? 1=JA
=2

ÖNSKAS NY KÖRNING? 1=JA
=2
```

<!--
Pasada 2:
- Comprobar la relación de impulsos 0.6883 en el Apéndice 4.15 y 0.6983 en el Apéndice 4.16.
- Comprobar los coeficientes de coseno más pequeños de la serie de Fourier del eje q.
- Comprobar los coeficientes de seno de los armónicos 7, 17 y 23.
- Comprobar el encabezado I1/I2 de la última tabla con respecto a las designaciones internas
  IDST e IDRT del programa.
-->

### Apéndice 5. Cálculo del tamaño del inductor

<!--
> **Reconstrucción, pasada 1.** Este archivo abarca las Secciones 5.1–5.5 del apéndice original
> (páginas 51–55 del PDF). El texto y los cálculos se han transcrito de la
> copia escaneada. De acuerdo con los principios del proyecto, los tres diagramas finales
> se han omitido y sustituido por breves marcadores de posición.
>
> En varias fórmulas, el original utiliza un sistema de unidades basado en cgs:
> $\hat B$ se expresa en gauss, $A_{\mathrm{fe}}$ en $\mathrm{cm}^2$, y
> el entrehierro $\Delta$ en cm.
-->

> Nota: en ocasiones se utilizan unidades cgs en lugar de unidades SI, como suele ser convencional en física electromagnética.

<!-- Original: Apéndice B5.1, página 51 del PDF -->

#### B5.1 Generalidades

Para estudiar con mayor detalle las dimensiones físicas de un inductor, se han calculado el peso
y el volumen de un inductor refrigerado por aire para distintos valores de inductancia.

Un inductor trifásico tiene la siguiente forma:

<br>
<p align="center">
<figure>
  <img  src="assets/figur-9.svg" width="500" alt="Dibujo esquemático de un inductor trifásico">
  <figcaption><b>Figura 9.</b> Dibujo esquemático de un inductor trifásico</figcaption>
</figure>
</p>
<br>

Los entrehierros se dividen en varios entrehierros parciales para limitar el flujo de dispersión.

#### B5.2 Procedimiento de cálculo

La tensión inducida en el devanado es

$$
e=\frac{d\Psi}{dt}
\quad\Longrightarrow\quad
\bar E=j\omega\Psi,
\qquad
E=\omega\Psi.
$$

Además,

$$
\Psi=N\Phi=NB A_{\mathrm{fe}},
$$

y, por tanto,

$$
E=2\pi B A_{\mathrm{fe}}Nf.
$$

Con $\hat B$ expresado en gauss y $A_{\mathrm{fe}}$ en
$\mathrm{cm}^2$, se obtiene

$$
E
=
\sqrt{2}\,\pi\,10^{-8}
\hat B A_{\mathrm{fe}}Nf
\qquad
(\mathrm{cgs}).
$$

Además,

$$
\oint H\,ds=NI,
$$

que, para el trayecto en el hierro y el entrehierro, se escribe

$$
H_{\Delta}\Delta+H_j\ell=NI.
$$

Con

$$
H_{\Delta}=\frac{B}{\mu_0},
\qquad
H_j=\frac{B}{\mu\mu_0},
$$

se obtiene

$$
\frac{B}{\mu_0}\Delta
+
\frac{B}{\mu\mu_0}\ell
=
NI.
$$

Se supone que domina la reluctancia del entrehierro, de modo que

$$
I=\frac{1}{\mu_0}\frac{B\Delta}{N}.
$$

Para el valor eficaz de la corriente y el valor de cresta $\hat B$, esto se convierte en

$$
I
=
\frac{1}{\mu_0}
\frac{\hat B\Delta}{N\sqrt{2}}
10^{-6}
\qquad
(\mathrm{cgs}),
$$

y, por tanto,

$$
\Delta
=
\frac{\mu_0\sqrt{2}\,10^6IN}{\hat B}
=
\frac{0.4\pi\sqrt{2}\,IN}{\hat B}
\qquad
(\mathrm{cgs}).
$$

<!-- Original: Apéndice 5.2, página 52 del PDF -->

La reactancia es

$$
X
=
\frac{E}{I}
=
\frac{\sqrt{2}\,\pi\,10^{-8}\hat B f}{I}
\,N A_{\mathrm{fe}}
\qquad
(\mathrm{cgs}).
$$

Si el inductor se diseña para la máquina MBK 280 S-6, se requiere lo siguiente:

$$
I=160\ \mathrm{A}.
$$

La sustitución de este valor junto con los valores máximos de densidad de corriente y densidad de flujo
da

$$
\hat B=12\,000\ \mathrm{gauss},
\qquad
S_{\max}=1.9\ \mathrm{A/mm^2}.
$$

Por tanto,

$$
X
=
1.66\cdot10^{-4}
N A_{\mathrm{fe}}
\qquad
(\mathrm{cgs}),
$$

y

$$
\Delta
=
2.37\cdot10^{-2}N.
$$

Aquí $X$ se expresa en ohmios y $\Delta$ en cm cuando
$A_{\mathrm{fe}}$ se expresa en $\mathrm{cm}^2$.

#### B5.3 Pesos del cobre

Con la densidad de corriente

$$
S=1.9\ \mathrm{A/mm^2}
$$

el área de cobre requerida es

$$
A_{\mathrm{cu}}
=
\frac{160}{1.9}
\approx
84\ \mathrm{mm^2}
=
6\cdot14\ \mathrm{mm^2}.
$$

Por tanto, se supone que el conductor tiene las dimensiones

$$
b=6\ \mathrm{mm},
\qquad
h=14\ \mathrm{mm},
$$

y se toma como densidad del cobre

$$
\rho_{\mathrm{cu}}=7900\ \mathrm{kg/m^3}.
$$

El peso del cobre para las tres fases es

$$
m_{\mathrm{cu}}
=
3N A_{\mathrm{cu}}\ell\rho_{\mathrm{cu}},
$$

donde la longitud del devanado por espira se aproxima como

$$
\ell
=
4\left(\sqrt{A_{\mathrm{fe}}}+0.3a\right).
$$

La sustitución da

$$
\begin{aligned}
m_{\mathrm{cu}}
&=
3A_{\mathrm{cu}}\rho_{\mathrm{cu}}
\,4\left(\sqrt{A_{\mathrm{fe}}}+0.3a\right)N \\
&=
0.0796
\left(\sqrt{A_{\mathrm{fe}}}+0.3a\right)N,
\end{aligned}
$$

donde $A_{\mathrm{fe}}$ se expresa en $\mathrm{cm}^2$ y la masa en kg.

<!--
Punto de comprobación para la pasada 2:
El original parece indicar el coeficiente 0.0897. La sustitución directa de
$A_{cu} = 84\ \mathrm{mm}^2$ y $\rho_{cu} = 7900\ \mathrm{kg/m^3}$ da aproximadamente 0.0796; por tanto,
el coeficiente del original puede contener un error de cálculo o de lectura. SC: modificado a 0.0796.
-->

#### B5.4 Pesos del hierro

*Columnas*

El peso del hierro de las tres columnas se escribe

$$
m_{\mathrm{feb}}
=
3A_{\mathrm{fe}}H\rho_{\mathrm{fe}},
$$

donde

$$
H=\frac{Nh}{a}+0.04.
$$

Con $\rho = 2.2 \cdot 10^{-8}\ \Omega\mathrm{m}$ y
$h=14\ \mathrm{mm}$ se obtiene

$$
\begin{aligned}
m_{\mathrm{feb}}
&=
3\rho_{\mathrm{fe}}
\left(\frac{Nh}{a}+0.04\right)
A_{\mathrm{fe}} \\
&=
3\cdot7900\cdot10^{-6}
\left(\frac{Nh}{a}+4\right)
A_{\mathrm{fe}} \\
&=
0.0237
\left(1.4\frac{N}{a}+4\right)
A_{\mathrm{fe}}.
\end{aligned}
$$

Aquí $A_{\mathrm{fe}}$ se expresa en $\mathrm{cm}^2$ y la masa en kg.

*Yugos*

El peso del hierro de los dos yugos se escribe

$$
m_{\mathrm{feo}}
=
2A_{\mathrm{fe}}B\rho_{\mathrm{fe}},
$$

donde la anchura del núcleo se aproxima como

$$
B
=
3\sqrt{A_{\mathrm{fe}}}
+
4\cdot1.2\,a b
+
2\cdot0.03.
$$

Esto da

$$
\begin{aligned}
m_{\mathrm{feo}}
&=
2\rho_{\mathrm{fe}}
\left(
3\sqrt{A_{\mathrm{fe}}}
+
4.8ab
+
0.06
\right)
A_{\mathrm{fe}} \\
&=
2\cdot7900\cdot10^{-6}
\left(
3\sqrt{A_{\mathrm{fe}}}
+
2.88a
+
6
\right)
A_{\mathrm{fe}} \\
&=
0.0158
\left(
3\sqrt{A_{\mathrm{fe}}}
+
2.88a
+
6
\right)
A_{\mathrm{fe}}.
\end{aligned}
$$

También aquí, $A_{\mathrm{fe}}$ se expresa en $\mathrm{cm}^2$ y la masa en kg.

<!-- Original: Apéndice 5.3, página 53 del PDF -->

#### 5.5 Resumen

Las expresiones utilizadas pueden resumirse como

$$
X
=
\frac{\sqrt{2}\,\pi\,10^{-8}\hat B f}{I}
\,N A_{\mathrm{fe}}
=
1.66\cdot10^{-4}
N A_{\mathrm{fe}}
\quad [\Omega],
$$

$$
\Delta
=
\frac{\mu_0\sqrt{2}\,10^6 I}{\hat B}N
=
2.37\cdot10^{-2}N
\quad [\mathrm{cm}],
$$

$$
m_{\mathrm{cu}}
=
0.0897
\left(
\sqrt{A_{\mathrm{fe}}}+0.3a
\right)N,
$$

$$
m_{\mathrm{feb}}
=
0.0237
\left(
1.4\frac{N}{a}+4
\right)
A_{\mathrm{fe}},
$$

y

$$
m_{\mathrm{feo}}
=
0.0158
\left(
3\sqrt{A_{\mathrm{fe}}}+2.88a+6
\right)
A_{\mathrm{fe}}.
$$

Si se realizan cálculos para tres inductores diferentes —0.5, 1.0 y 2.0 mH—,
se obtienen los tres diagramas de las Figuras 1–3. En ellos, el peso del inductor
se calculó utilizando como variables libres el área de las columnas y el número de capas del devanado.

<!-- Original: Apéndice 5.4–5.5, páginas 54–55 del PDF -->

<!--
> **Figura 1.** Peso del inductor en serie en función del área de las columnas
> $A_{\mathrm{fe}}$ para $L=0.5\ \mathrm{mH}$ y distintos números de
> capas de devanado. Se ha omitido el diagrama original.

> **Figura 2.** Peso del inductor en serie en función del área de las columnas
> $A_{\mathrm{fe}}$ para $L=1.0\ \mathrm{mH}$ y distintos números de
> capas de devanado. Se ha omitido el diagrama original.

> **Figura 3.** Peso del inductor en serie en función del área de las columnas
> $A_{\mathrm{fe}}$ para $L=2.0\ \mathrm{mH}$ y distintos números de
> capas de devanado. Se ha omitido el diagrama original.
-->

<!--
Pasada 2:
- Comprobar si el símbolo de la densidad del material debe ser rho o delta,
  porque el original utiliza un símbolo manuscrito parecido a delta.
- Comprobar el coeficiente 0.0897 de la expresión del peso del cobre.
- Comprobar la expresión dimensional de la anchura del yugo $B$ con respecto al dibujo original.
-->

### Apéndice 6. Datos tipo

<!--
> **Reconstrucción, pasada 1.** Este archivo abarca las Secciones 6.1–6.2 del apéndice original
> (páginas 56–57 del PDF). Las tablas se han transcrito de la copia escaneada.
> El dibujo de la ranura del rotor se ha omitido y sustituido por un marcador de posición.
>
> La tabla del inversor contiene una columna sin encabezado impreso entre
> $p$ y $J'$. Aquí se ha designado $m$, porque los valores y la posición
> de la notación coinciden con las variables del Apéndice 2. Todos los valores de
> la columna son cero.
-->

<!-- Original: Apéndice 6.1, página 56 del PDF -->

#### B6.1 Inversor

La tensión del enlace de CC es

$$
U_d = 488\ \mathrm{V}.
$$

| Modo de funcionamiento | Intervalo de frecuencia fundamental | $p$ | $m$ | $J'$ | $\alpha$ |
|:---:|:---:|---:|---:|---:|:---|
| A | 0.00–4.51 | 17 | 0 | 3 | 8.7, 24.4, 28.8 |
| B | 3.93–5.89 | 13 | 0 | 2 | 16.2, 22.1 |
| C | 5.47–10.95 | 7 | 0 | 1 | 12 |
| D | 9.60–12.77 | 6 | 0 | 1 | 12 |
| E | 11.52–15.32 | 5 | 0 | 1 | 12 |
| F | 14.02–17.88 | 5 | 0 |  |  |
| G | 17.53–22.35 | 4 | 0 |  |  |
| H | 21.28–25.92 | 3 | 0 |  |  |
| I | 25.54–41.44 | 2 | 0 |  |  |
| K | 39.06–50.00 | 1 | 0 |  |  |
| L | 50.00– | — | 0 |  |  |

#### B6.2 Motor  
<br>  
El motor es un **MBK 280 S-6 con refrigeración forzada**.

*Datos eléctricos*

| Magnitud | Valor |
|---|---:|
| Tensión nominal, $U_n$ | $380\ \mathrm{V}$ |
| Corriente nominal, $I_n$ | $150\ \mathrm{A}$ |
| Par nominal, $M_n$ | $740\ \mathrm{Nm}$ |
| Velocidad nominal, $n_n$ | $970\ \mathrm{rpm}$ |
| Potencia nominal de salida, $P_{2n}$ | $75\ \mathrm{kW}$ |
| Resistencia del estator | $0.062\ \Omega/\text{fase}$ |
| Reactancia del estator | $0.379\ \Omega/\text{fase}$ |
| Reactancia magnetizante | $13.89\ \Omega/\text{fase}$ |
| Reactancia del rotor | $0.539\ \Omega/\text{fase}$ |
| Resistencia del rotor | $0.058\ \Omega/\text{fase}$ |

*Datos mecánicos*

Estator:

| Magnitud | Valor |
|---|---:|
| Diámetro del estator | 450 mm |
| Diámetro del entrehierro | 335 mm |
| Longitud del paquete de chapas | $205\ \mathrm{mm}$ |
| Altura del diente | $43.5\ \mathrm{mm}$ |
| Anchura de la ranura | $10.1\ \mathrm{mm}$ |
| Anchura del diente | 8.2 mm |
| Peso del devanado | 47.2 kg |
| Número de ranuras | 54 |

Rotor:

| Magnitud | Valor |
|---|---:|
| Altura del diente | $29.5\ \mathrm{mm}$ |
| Anchura de la ranura | $4.25\ \mathrm{mm}$ |
| Anchura del diente | 11.6 mm |
| Peso del devanado | 29.4 kg |
| Número de ranuras | 66 |

El peso total del motor es

$$
m_{\mathrm{tot}} = 480\ \mathrm{kg}.
$$

<!-- Original: Apéndice 6.2, página 57 del PDF -->

#### B6.3 Datos de la ranura

<br>
<p align="center">
<figure>
  <img  src="assets/figur-10.svg" width="400" alt="Croquis acotado de la ranura del rotor">
  <figcaption><b>Figura 10.</b> Croquis acotado de la ranura del rotor (también Figura 8)</figcaption>
</figure>
</p>
<br>

Las anotaciones manuscritas de la figura indican:

- `SPTR`: tipo de ranura según el programa `RESIST`
$\rho_2$: resistividad del conductor  
- $R_{\mathrm{rat}}$: relación entre el diámetro medio de la ranura y el diámetro
  medio del rotor

| Parámetro | Valor |
|---|---:|
| `SPTR` | 2 |
| $b_{s21}$ | $3.95\ \mathrm{mm}$ |
| $b_{s22}$ | $3.95\ \mathrm{mm}$ |
| $h_{s2}$ | $29.2\ \mathrm{mm}$ |
| $b_{sy2}$ | $2.0\ \mathrm{mm}$ |
| $h_{sy2}$ | $1.0\ \mathrm{mm}$ |
| $b_{cr1}$ | $3.75\ \mathrm{mm}$ |
| $h_{cr}$ | $28\ \mathrm{mm}$ |
| $\rho_2$ | $0.0425\ \Omega/\mathrm{m}$ |
| $R_{\mathrm{rat}}$ | $0.65$ |

<!--
Pasada 2:
- Confirmar que la columna sin encabezado de la tabla del inversor corresponde efectivamente a $m$.
- Comprobar si los intervalos de frecuencia fundamental deben incluir la unidad Hz.
- Comprobar los subíndices $b_{sy2}$ y $h_{sy2}$ con respecto al croquis de la ranura.
-->

---
### Apéndice 7. Lista de variables

<!--
> **Reconstrucción, pasada 1.** Este archivo abarca las Secciones 7.1–7.2 del apéndice original
> (páginas 58–59 del PDF). Las variables se han representado en LaTeX y dispuesto en una
> tabla Markdown. Se han traducido las descripciones originales en sueco.
>
> El símbolo $\mathrm{ö}$ en un subíndice indica un *armónico*. La definición manuscrita
> de $Z_2$ se ha interpretado como la conexión en paralelo entre
> la reactancia magnetizante y la rama equivalente del rotor.
-->
<!-- Original: Apéndice 7.1, página 58 del PDF -->

| Símbolo | Significado |
|---|---|
| $a$ | número de fases |
| $B$ | densidad de flujo |
| $B_{\max}$ | densidad de flujo máxima |
| $d$ | profundidad de penetración |
| $E$ | tensión de flujo |
| $e$ | valor instantáneo de la tensión de flujo |
| $f$ | frecuencia |
| $I_1$ | corriente del estator |
| $I_2$ | corriente del rotor |
| $I_{11}$ | componente fundamental de la corriente del estator |
| $I_{1ö}$ | corriente armónica del estator |
| $I_{2ö}$ | corriente armónica del rotor |
| $k_h$ | factor de proporcionalidad |
| $k_v$ | factor de proporcionalidad |
| $L$ | inductancia del inductor |
| $L_1$ | inductancia del estator |
| $L_2$ | inductancia del rotor |
| $L_m$ | inductancia magnetizante |
| $M$ | par |
| $m$ | relación de impulsos |
| $M_n$ | par nominal |
| $M_p$ | par pulsante |
| $M(\theta)$ | señal de modulación |
| $M_i$ | coeficiente de Fourier de $M(\theta)$ |
| $N$ | número de pulsos de modulación |
| $N_1$ | espiras del devanado primario |
| $N_2$ | espiras del devanado secundario |
| $P_{cu}$ | pérdidas en el cobre |
| $P_{cuö}$ | pérdidas armónicas en el cobre |
| $P_{fe}$ | pérdidas en el hierro |
| $P_{feö}$ | pérdidas armónicas en el hierro |
| $P_h$ | pérdidas por histéresis |
| $P_v$ | pérdidas por corrientes parásitas |
| $R$ | resistencia del inductor |
| $R_1$ | resistencia del estator |
| $R_2$ | resistencia del rotor |
| $R(\varphi)$ | señal de referencia |
| $R_n$ | coeficiente de Fourier de $R(\varphi)$ |
| $s$ | deslizamiento |
| $U$ | tensión en los bornes del motor |
| $U_1$ | componente fundamental de $U$ |
| $U_ö$ | armónicos de $U$ |
| $V$ | tensión en los bornes del inversor |
| $V_1$ | componente fundamental de $V$ |
| $V_{ö}$ | armónicos de $V$ |
| $Z_2$ | $jX_m \parallel \left(\dfrac{R_2}{s}+jX_2\right)$ |
| $\alpha_i$ | ángulos de las muescas |
| $\beta$ | ángulo entre el eje q y el eje r del rotor |
| $\gamma$ | $U$, $I$ o $\Psi$ |
| $\theta$ | ángulo entre el eje q y el eje r del estator |
| $\theta_0$ | desplazamiento de fase |
| $\theta_r$ | $\theta-\beta$ |
| $\lambda$ | constante exponencial de las pérdidas por histéresis |
| $\xi$ | reducción de la capacidad nominal |
| $\sigma$ | conductividad |
| $\Phi$ | flujo |
| $\varphi$ | ángulo, $\varphi=\omega t$ |
| $\Psi$ | flujo concatenado |
| $\omega$ | velocidad angular síncrona |
| $\omega_e$ | velocidad angular eléctrica |
| $\omega_r$ | velocidad angular del rotor |

<!--
Pasada 2:
- Comprobar si el primer símbolo de la componente fundamental de la corriente debe escribirse en el original como $I_{11}$
  o $I_{1,1}$.
- Comprobar la diferencia tipográfica entre $U_1$ y $V_1$ en el original.
- Confirmar la interpretación
  Z_2 = jX_m || (R_2/s + jX_2)
  con respecto al circuito equivalente y al modelo de cálculo.
- La variable gamma solo se define en el original como "U, I o Psi";
  debe verificarse en el texto corrido un posible significado implícito como ángulo de fase.
-->
