# Nuxt UI Pro

We are considering moving to nuxt ui pro.

As we understand it, nuxt ui pro is a nuxt layer
that you add to your project.
It provides components and dependencies.

We want to package our own components and dependencies (plus somes pages, layouts and static assets) the same way.

We will make a simple proof-of-concept based
on nuxt ui pro to assess the stack.


Here are the main features :


::list
* a shared nuxt layer project `pp-widgets`
    ::list
    * ✅💀 defined as a nuxt layer
    * ✅✨ some shared nuxt pages
    * ✅✨ some shared nuxt layout
    * ✅✨ some shared nuxt composables
    * ✅🚨 some shared js/ts libraries
    * ✅✨ some shared nuxt components
    * 🌀🌀 some shared nuxt components as web components
    ::

* a starter project to fork `pp-front-starter`
    ::list
    * ✅✨ some md content files
    * ✅🚨 the only dep is pp-widgets
    * ✅🚨 full static generation
    * ✅✨ hosted on github/gitlab pages
    * ✅💀 compatible with nuxt studio
    ::

* dev env with good DX
    ::list
    * ✅💀 bun as the package manager
    * 🌀🌀 some vitest unit tests
    * 🌀🌀 some vitest e2e tests with playwright
    * ✅✨ CI/CD to github/gitlab
    * ✅✨ CI/CD to K8S
    * ✅✨ devpod/devcontainer setting
    * ✅💀 easy switch to use local `pp-widgets`
    ::
::

```
legend :
✅✨ : already done / easy
✅💀 : done with errors, not mastered
✅🚨 : done with some glitch/warning
🌀🌀 : todo
```

Pending questions :

* For a nuxt layer distribution, do I need to put license key in the target repo ?
* For a webcomponent distribution, do I need to put license key in the target repo ?
* Does the Nuxt UI pro templates provides a pre-configured vitest test set ?
* Does the Nuxt UI pro templates provides a sample best-practices component we can use to start new component without any licensing issue ?
* Is it possible to embed nuxt ui pro as a web component without any stling issues ?
