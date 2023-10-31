# JSON-Schema

Replicate the behaviour of the [redhat YAML vscode extension](https://marketplace.visualstudio.com/items?itemName=redhat.vscode-yaml).
It lets you validate your JSON or YAML content against a predefined [schema](https://json-schema.org/).
 
 It's a life saver when you deal with strongly typed JSON/YAML content.


With a single first comment pointing to your schema, the editor will check if your content is valid :
```yaml
# yaml-language-server: $schema=https://paxpar.gitlab.io/schemas/checklist-2.0.schema.json
$schema: https://paxpar.tech/schema/mycheck/default/0
name: Ordre d'intervention EDF
desc: Liste de vérification appliquée lors de la saisie d'un ordre d'intervention
tags:
  - atelier
owner:
  signature_pubkey: default
```

