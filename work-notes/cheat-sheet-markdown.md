# 📝 Markdown Cheat Sheet

## Headings
```markdown
# H1
## H2
### H3
#### H4
```

## Emphasis
```markdown
*italic* or _italic_
**bold** or __bold__
~~strikethrough~~
```

## Lists
```markdown
- Unordered item
  - Nested item
* Another unordered item

1. Ordered item
2. Second item
   1. Nested numbered item
```

## Links
```markdown
[Link text](https://example.com)
[Link with title](https://example.com "Tooltip")
```

## Images
```markdown
![Alt text](https://example.com/image.png)
```

## Blockquotes
```markdown
> This is a blockquote
>> Nested blockquote
```

## Code
Inline:
```markdown
Here is `inline code`
```

Block:
<pre>
```python
def hello():
    print("Hello World")
```
</pre>

## Horizontal Rule
```markdown
---
```

## Tables
```markdown
| Column 1 | Column 2 |
|----------|----------|
| Row 1    | Data     |
| Row 2    | Data     |
```

## Line Breaks
```markdown
Line one.␣␣  
Line two.
```
(or use `<br>`)

---

## Indents

### Paragraph Indent
Markdown ignores normal text indents. Use HTML spaces:
```markdown
&nbsp;&nbsp;&nbsp;&nbsp;This line looks indented.
```

### Lists
Indent 2–4 spaces for nesting:
```markdown
- Item 1
  - Nested item
    - Deeper item
```

### Code Blocks
Indent with 4 spaces or use backticks:
```markdown
    This is a code block (4 spaces)

```python
def hello():
    return "world"
```
```

### Blockquotes
Use `>`:
```markdown
> Quote level 1
>> Quote level 2
```

---
