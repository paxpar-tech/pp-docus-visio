# Single Tree

Let's have a single tree to organize all files related to content.

Today we need to *separate* files in many folders:
* `/content` for files supported by nuxt content (md, json, yaml)
* `/public` for files not content aware (jpeg, wbep, svg, ...)
* some other folders of many file types related to other part of the platform (API, business logic design docs, file samples, ...)

Example of multiple trees:

```
/
├── content/
│   ├── case1.md
│   └── case2.md
├── public/
│   ├── case1/
│   │   ├── check_step1.webp
│   │   ├── check_step2.webp
│   │   └── photo.webp
│   └── case2/
│       ├── check_step1.webp
│       ├── check_step2.webp
│       └── photo.webp
└── pp-ref-common/
    ├── customer1/
    │   ├── case1.md
    │   └── case2.md
    └── customer2/
        ├── case1.md
        └── case2.md

```