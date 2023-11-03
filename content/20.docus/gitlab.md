# gitlab

Objective: Being able to deploy a docus instance on gitlab pages
from a private repo and editing the whole thing trough nuxt studio.

Why:
* have a public site while keeping the repo private
* don't rely on nuxt studio for deployment (see 2023-11-03 cloudflare outage)


Inspired from [gitlab nuxt example](https://gitlab.com/pages/nuxt/-/tree/master).

steps :
* `npx nuxi@latest init pp-front -t themes/docus`
* create `.gitlab-ci.yml`
* git commit/push to a private github repo
* create github secret GITLAB_ACCESS_TOKEN
* create personal access token or a fine-grained personal access token
* create a synched gitlab repo, option `Run CI/CD for external repository`
* git commit/push to the private gitlab repo
* static site should be deployed and running
* mirror gitlab <-> github


