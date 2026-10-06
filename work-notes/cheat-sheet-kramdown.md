# Kramdown Cheat Sheet

A compact reference for **Kramdown Markdown with Jekyll/GitHub Pages**.

---

## 1. Headings

```markdown
# Heading 1
## Heading 2
### Heading 3
#### Heading 4
```

Custom ID:

```markdown
## My Heading
{: #my-heading}
```

Link to it:

```markdown
[Go to My Heading](#my-heading)
```

---

## 2. Paragraphs and Line Breaks

Separate paragraphs with a blank line.

```markdown
First paragraph.

Second paragraph.
```

Force a line break with two spaces at the end of a line:

```markdown
First line.  
Second line.
```

---

## 3. Emphasis

```markdown
*Italic*
**Bold**
***Bold italic***
~~Strikethrough~~
```

Kramdown also accepts:

```markdown
_Italic_
__Bold__
```

---

## 4. Links

```markdown
[Tellusant](https://tellusant.com/)
```

Open in a new tab using HTML:

```html
<a href="https://tellusant.com/" target="_blank">Tellusant</a>
```

Reference-style links:

```markdown
[Tellusant][1]

[1]: https://tellusant.com/
```

---

## 5. Images

```markdown
![Alternative text](/assets/images/image.png)
```

Image with title:

```markdown
![Alternative text](/assets/images/image.png "Image title")
```

For more control, use HTML:

```html
<img src="/assets/images/image.png"
     alt="Alternative text"
     width="400">
```

---

## 6. Lists

Unordered:

```markdown
- First
- Second
- Third
```

Ordered:

```markdown
1. First
2. Second
3. Third
```

Nested:

```markdown
- First
  - Subitem
  - Subitem
- Second
```

---

## 7. Blockquotes

```markdown
> This is a quotation.
>
> It can contain several paragraphs.
```

---

## 8. Code

Inline code:

```markdown
Use the `baseurl` setting.
```

Code block:

````markdown
```yaml
url: "https://example.com"
baseurl: "/docs"
```
````

You can specify languages such as:

```text
html
css
javascript
yaml
python
stata
liquid
```

---

## 9. Horizontal Rules

```markdown
---
```

or

```markdown
***
```

Be careful near the top of a Jekyll page: `---` is also used to delimit YAML front matter.

---

## 10. Tables

```markdown
| Country | Population | Income |
|---------|-----------:|-------:|
| Sweden  | 10.6       | 55,000 |
| Finland | 5.6        | 52,000 |
```

Alignment:

```markdown
| Left | Center | Right |
|:-----|:------:|------:|
| A    | B      | C     |
```

Apply a CSS class to the table:

```markdown
| Country | Value |
|---------|------:|
| Sweden  | 100   |
| Finland | 90    |
{: .centered-table}
```

Note the dot before the class name:

```markdown
{: .centered-table}
```

This produces approximately:

```html
<table class="centered-table">
```

---

## 11. Inline Attribute Lists (IAL)

Kramdown's attribute-list syntax is especially useful with Jekyll.

Add a class:

```markdown
Some text.
{: .my-class}
```

Add an ID:

```markdown
Some text.
{: #my-id}
```

Add both:

```markdown
Some text.
{: #my-id .my-class}
```

Multiple classes:

```markdown
{: .class-one .class-two}
```

Attributes can also be applied to headings:

```markdown
## Results
{: #results .important}
```

---

## 12. Definition Lists

```markdown
TelluBase
: A global socioeconomic data platform.

Kramdown
: A Markdown parser used by Jekyll.
```

---

## 13. Footnotes

In the text:

```markdown
This statement needs a footnote.[^1]
```

Then define it:

```markdown
[^1]: This is the footnote text.
```

Named footnotes also work:

```markdown
This has a source.[^source]

[^source]: Source information goes here.
```

---

## 14. Mathematical Expressions

Inline math:

```markdown
The relationship is $y = ax + b$.
```

Displayed equation:

```markdown
$$
y = ax + b
$$
```

Example:

```markdown
$$
W(i) = \frac{1/i^s}{\sum_{j=1}^{N}(1/j^s)}
$$
```

Common LaTeX:

```text
\frac{a}{b}          Fraction
\sum                 Summation
\sqrt{x}             Square root
\sigma               Lowercase sigma
\Sigma               Uppercase sigma
\infty               Infinity
\le                   Less than or equal
\ge                   Greater than or equal
\neq                  Not equal
\approx               Approximately
\times                Multiplication sign
```

Subscripts and superscripts:

```markdown
$x_t$

$x^2$

$x_{t-1}$

$x_t^2$
```

---

## 15. Literal Dollar Signs

Because `$` can trigger math processing, ordinary currency symbols can occasionally cause problems.

If normal Markdown works:

```markdown
The price is $ 100.
```

When it does not, especially inside tables, HTML is reliable:

```html
<span>$</span>100
```

Example in a table:

```markdown
| Item | Price |
|------|------:|
| A | <span>$</span>100 |
```

---

## 16. Escaping Special Characters

Use a backslash when Markdown would otherwise interpret a character:

```markdown
\*
\_
\#
\[
\]
\`
```

Example:

```markdown
\*This is not italic.\*
```

For difficult cases, HTML entities are another option:

```html
&amp;    &
&lt;     <
&gt;     >
&nbsp;   non-breaking space
```

---

## 17. Raw HTML

Kramdown allows HTML directly inside Markdown:

```html
<div class="note">
  This is HTML inside Markdown.
</div>
```

Useful for things Markdown cannot conveniently express:

```html
<span style="color: black;">Text</span>
```

Links:

```html
<a href="https://tellusant.com/"
   target="_blank"
   style="color: black; text-decoration: none;">
  Tellusant
</a>
```

---

## 18. Jekyll Liquid

Kramdown pages processed by Jekyll can contain Liquid.

Output a variable:

```liquid
{{ site.title }}
```

Nested variable:

```liquid
{{ site.company.name }}
```

URL:

```liquid
{{ site.company.url }}
```

Example link:

```html
<a href="{{ site.company.url }}">
  {{ site.company.name }}
</a>
```

Use `relative_url` for site resources:

```liquid
{{ '/assets/images/logo.png' | relative_url }}
```

Example:

```html
<img src="{{ '/assets/images/logo.png' | relative_url }}">
```

---

## 19. Liquid Conditions

```liquid
{% if page.robots %}
<meta name="robots" content="{{ page.robots }}">
{% endif %}
```

General form:

```liquid
{% if condition %}
  Content
{% endif %}
```

---

## 20. YAML Front Matter

A Jekyll page normally begins with:

```yaml
---
title: "Page Title"
description: "Page description"
image: /assets/image.png
---
```

Custom variables can also be defined:

```yaml
---
title: "Page Title"
robots: "noindex, nofollow"
---
```

Then referenced with Liquid:

```liquid
{{ page.title }}
```

or:

```liquid
{{ page.robots }}
```

---

## 21. Comments

HTML comments:

```html
<!-- This will not appear on the rendered page. -->
```

Liquid comments:

```liquid
{% comment %}
This will not appear in the generated HTML.
{% endcomment %}
```

---

## 22. Useful Character Entities

```text
&nbsp;     non-breaking space
&mdash;    —
&ndash;    –
&hellip;   …
&amp;      &
&lt;       <
&gt;       >
&copy;     ©
&reg;      ®
```

Numeric Unicode also works:

```html
&#x20;
```

---

## 23. CSS Classes + Kramdown

Define a class in `main.css`:

```css
.centered-table {
  margin-left: auto;
  margin-right: auto;
}
```

Then apply it in Markdown:

```markdown
| A | B |
|---|---|
| 1 | 2 |
{: .centered-table}
```

This combination—**Markdown + Kramdown IAL + CSS**—is often the cleanest way to customize Jekyll pages without writing the whole element in HTML.

---

## 24. Quick Reference

```text
# H1                    Heading
## H2                   Heading
**text**                Bold
*text*                  Italic
[text](URL)             Link
![alt](image.png)       Image
`code`                  Inline code
> text                  Blockquote
- item                  Bullet
1. item                 Numbered item
---                     Horizontal rule
[^1]                    Footnote
{: .class}              CSS class
{: #id}                 HTML ID
$ x $                   Inline math
$$ x $$                 Display math
{{ variable }}          Liquid output
{% if ... %}            Liquid logic
```

---

## 25. When Markdown Fights Back

A useful hierarchy for Jekyll/Kramdown pages is:

1. **Use ordinary Markdown** when possible.
2. **Use Kramdown IALs** when you need classes or IDs.
3. **Use Liquid** for Jekyll variables and logic.
4. **Use HTML** when Markdown cannot express the layout reliably.
5. **Use CSS** for presentation rather than putting extensive styling inline.

This keeps source files readable while still providing full control over the generated page.