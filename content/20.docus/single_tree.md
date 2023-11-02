# Single Tree

Let's have a single tree to organize all files related to content.

Today we need to *separate* files in many folders:
* `/content` for files supported by nuxt content (md, json, yaml)
* `/public` for files not content aware (jpeg, wbep, svg, ...)
* some other folders of many file types related to other part of the platform (API, business logic design docs, file samples, ...)

Simplified example of multiple trees:

```
/
├── content/
│   ├── case1.md
│   └── case2.md
├── public/
│   ├── case1/
│   │   ├── check_step1.webp
│   │   ├── check_step2.webp
|   |   ├── sample1.pdf
│   │   └── photo.webp
│   └── case2/
│       ├── check_step1.webp
│       ├── check_step2.webp
|       ├── sample2.pdf
│       └── photo.webp
└── pp-ref-common/
    ├── customer1/
    │   ├── sample1.pdf
    │   ├── sample2.pdf
    │   ├── sample3.pdf
    │   ├── poc.ipynb
    │   ├── dummy_checklist1.yaml
    │   ├── dummy_checklist2.yaml
    │   ├── case1.md
    │   ├── case1/
    │   │   ├── check_step1.webp
    │   │   ├── check_step2.webp
    │   │   └── photo.webp
    │   ├── blueprint.penpot.svg
    │   └── mvp.py
    └── customer2/
        ├── sample1.pdf
        ├── sample2.pdf
        ├── sample3.pdf
        ├── poc.ipynb
        ├── dummy_checklist1.yaml
        ├── dummy_checklist2.yaml
        ├── case2.md
        ├── case2/
        │   ├── check_step1.webp
        │   ├── check_step2.webp
        │   └── photo.webp
        ├── blueprint.penpot.svg
        └── mvp.py
```

We can't keep files together.
We have to put articles in `content/**`
whereas images and exotic files must be in `public/**`.

We would like to set the Nuxt content source directly to `pp-ref-common/`
where we can easily tell which files are articles/images
or be ignored.

Maybe a set of rules telling how to traverse such a tree,
what to keep, what to ignore.
Those rules would be applied on each Nuxt generation.


