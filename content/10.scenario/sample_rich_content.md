# Sample rich content


:ppw-factice



::ppw-playground-checklist-result
---
source: |
    result:
        id: root
        name: I am root2
        status: KO
        children:
        - id: step1
          name: This is step 1
          icon: "mdi:file-arrow-up-down-outline"
          status: OK
        - id: step2
          name: This is step 2
          status: KO
        - id: step3
          name: This is step 3
          status: OK
        - id: step4
          name: This is step 4
          status: OK
---
::


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


::ppw-cardgame-deck
---
cards:
    - 1516
    - 1513
    - 1514
    - 1204
    - 1205
---
::

::ppw-chat-conversation
---
conversation:
    - zina: "Hello, my name is Zina"
    - peggy: "Hello, my name is Peggy"
    - zina: "How do you do ?"
    - peggy: "Fine !"
    - peggy: " ...and you ?"
    - zina: ":-)"
---
::


::ppw-mermaid
---
def: |
    sequenceDiagram
        Alice->>+John: Hello John, how are you?
        Alice->>+John: John, can you hear me?
        John-->>-Alice: Hi Alice, I can hear you!
        John-->>-Alice: I feel great!
---
::
