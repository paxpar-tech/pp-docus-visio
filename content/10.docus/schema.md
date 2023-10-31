# $schema transform


When defining a [new content transformer](https://content.nuxt.com/recipes/transformers)
we tell which extensions are involved.

It's fine to target single purpose file formats like '.xlsx' or '.csv'.
But it's not enough to set up a transformer for a special YAML or JSON based dialect.

We can use custom extension like `.checklist.yaml` but it would be better to detect the thoses files without modifiyng them.

For JSON/YAML special dialects it is very common to use the [$schema property](https://json-schema.org/understanding-json-schema/reference/schema).

`$schema` filter

Expected new YAML/JSON schema transformer :
```javascript
export default defineJSONSchemaTransformer({
  name: 'my-dummy-transformer',
  schema: '$schema: https://paxpar.tech/schema/mycheck/default/0',
  extensions: [
    '.yaml',
    '.yml',
    '.json',
  ],
  // ...
})
```