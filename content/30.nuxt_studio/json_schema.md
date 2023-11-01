# JSON-schema

Many features related to JSON-schema :

## YAML file linter

Use the [redhat YAML vscode extension](https://marketplace.visualstudio.com/items?itemName=redhat.vscode-yaml) while editing YAML file content.
It lets you validate your JSON or YAML content against a predefined [schema](https://json-schema.org/).
 
It's a life saver when you deal with strongly typed JSON/YAML content.

With a single first comment pointing to your schema, the editor will check if your content is valid :
```yaml
# yaml-language-server: $schema=https://paxpar.gitlab.io/schemas/checklist-2.0.schema.json
$schema: https://paxpar.gitlab.io/schemas/checklist-2.0.schema.json
name: Ordre d'intervention EDF
desc: Liste de vérification appliquée lors de la saisie d'un ordre d'intervention
tags:
  - atelier
owner:
  signature_pubkey: default
```

The schema URL could also be relative to the current project 
where schemas would be stored in `/public/schemas` :

```yaml
# yaml-language-server: $schema=/schemas/checklist-2.0.schema.json
$schema: https://paxpar.gitlab.io/schemas/checklist-2.0.schema.json
name: Ordre d'intervention EDF
desc: Liste de vérification appliquée lors de la saisie d'un ordre d'intervention
tags:
  - atelier
owner:
  signature_pubkey: default
```

## front-matter schema

Supporting a `$schema` native property
in the [front matter](https://content.nuxt.com/usage/markdown#front-matter)
will provide a kind of strong typing of document metadata.

```yaml
---
$schema: https://paxpar.tech/schema/mycheck/default/0
name: Ordre d'intervention EDF
desc: Liste de vérification appliquée lors de la saisie d'un ordre d'intervention
tags:
  - atelier
owner:
  signature_pubkey: default
---

# My document

Lorem ipsum ...
```

## front-matter linter

Replicate the behaviour of the [redhat YAML vscode extension](https://marketplace.visualstudio.com/items?itemName=redhat.vscode-yaml).
It lets you validate your JSON or YAML content against a predefined [schema](https://json-schema.org/).

Same feature as YAML file linter but restricted to the front-matter.

## YAML file visual editing

TODO: describe/show our use of [JSON-editor](https://github.com/json-editor/json-editor)


## front matter visual editing

TODO: describe/show our use of [JSON-editor](https://github.com/json-editor/json-editor)


## YAML file custom visual editing

We may define visual component to edit typed YAML file.
The component will be registered to handle a given schema
and will produce the JSON/YAML payload.

TODO: put an example here from pp

## front-matter custom visual editing

We may define visual component to edit typed front matter.
The component will be registered to handle a given schema
and will produce the JSON/YAML payload.

TODO: put an example here from pp

