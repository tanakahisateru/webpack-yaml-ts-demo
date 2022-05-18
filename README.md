# Webpack YAML loader & TypeScript Demo

Using https://www.npmjs.com/package/yaml-loader .

```
src
├── index.ts
├── resource
│   ├── bar.yml
│   ├── foo.yml
│   └── index.ts
└── yaml.d.ts
```

foo.yml
```yaml
---
title: This is foo
body: Foo is foo.
```

bar.yml
```yaml
---
title: This is bar
body: Bar is bar, not foo.
```

How can you use them:

```ts
(item: ResourceItem) => {
    const h = document.createElement('h2')
    h.innerText = item.title
    document.body.appendChild(h)

    const p = document.createElement('p')
    p.innerText = item.body
    document.body.appendChild(p)
}
```
