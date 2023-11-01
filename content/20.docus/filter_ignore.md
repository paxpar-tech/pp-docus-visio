# Filter / Ignore

YAML and JSON files are first class content payloads.

But YAML and JSON files can also be *opaque* assets not related to content.
We may think this is not a trouble to let those files be consumed as content payloads.
But in some cases they may be big and will probably clutter the content engine.

We would like to define which YAML/JSON should be ignored by the content engine.

We would also like to define a filter for intermediate cases where we want to keep a small part of the JSON/YAML payload as content.

