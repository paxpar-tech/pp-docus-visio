# Scenario


## content authoring

We need to write a lot of content.
Documentation but also knowledge articles.
[Here is a sample rich content article](sample_rich_content.md) as it is written by non-developpers.

We use our components a lot in those articles thanks to MDC :   

```
::ppw-showcase-check
---  
pdfs:
- url: "🌐pp/api/bucket/public/blog/2023_10_atelier/pu_edfb.pdf"
  check_result: "🌐pp/api/bucket/public/blog/2023_10_atelier/cl_edf_20230524b.yaml"
  name: "Facture EDF b"
  conversation:
    - isabelle: "1er pdf, la checklist indique que tout est Ok"
- url: "🌐pp/api/bucket/public/blog/2023_10_atelier/pu_edfc.pdf"
  check_result: "🌐pp/api/bucket/public/blog/2023_10_atelier/cl_edf_20230524c.yaml"
  name: "Facture EDF c"
  conversation:
    - isabelle: "2ème pdf, la checklist décéle une anomalie/non-conformité métier. Si vous cliquez sur le blason, vous découvrirez qu'il s'agit d'une erreur sur sur la clé publique de signature d'ELECTRICITE DE FRANCE, celle-ci n'a pas été trouvée." 
    - isabelle: "C'est donc la 2ème facture qui a été falsifiée"                    
---
:: 
```

A good visual editor is a must.
Particulary when it comes to show helpfull error/warning messages to the author.

[Here is a broken example](sample_parcours.md) where the page is not showing up
and no clear error message is given.


## webcomponent use

TODO: describe here a scenario
where we use some of our widgets as webcomponent in a simple HTML page.

## portal fork

TODO: describe here a scenario
where a user can fork our template project and inherit all the base features.

steps :
1. go to the github repo xxx
1. fork it
1. wait for the initial deployment
1. go to the site
1. click on the nuxt studio link on the github README
1. edit basic content
1. create a new doc schema
1. create document from the previous doc type with the text editor
1. create document from the previous doc type with the visual editor
