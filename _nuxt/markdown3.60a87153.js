import{_ as v}from"./MDCRenderer.0b2982d0.js";import{_ as b}from"./MDC.vue.62f60d75.js";import{d as g,r as o,b as t,c as s,W as q,X as _,I as a,e as l,Y as h,F as E,a0 as w,g as k,w as C,J as D,f as c,t as d,n as J,k as j}from"./entry.558da846.js";import"./js-yaml.bea960a4.js";import"./_commonjsHelpers.de833af9.js";import"./node.3daaa61c.js";const I={class:"playground"},T={class:"content"},V={class:"tabs"},F=["onClick"],x={key:1,style:{padding:"1rem"}},y=g({__name:"markdown3",setup(A){const i=o("Preview"),m=o(["Preview","AST"]),n=o(`

---
model: brouillon_atelier
title: Fraude à la facture
description: Ikéa, Décathlon, Edf... Vos factures sont falsifiable à loisir 
image: https://media.paxpar.tech/1019-document-signature-hand_small.svg
aside: false
---

# Ikéa, Décathlon, Edf... Vos factures sont falsifiable à loisir

## Pitch - Scénario

::ppw-chat-conversation
---
animate: true
conversation:
    - valerie: En tant que particulier ou entreprise... Nous recevons de plus en plus de documents dans un format dématérialisé via notre boite e-mail personnelle, pro, et également d’un service à un autre au sein d’une même entreprise 
    - valerie: "- Peut-on avoir confiance en ces documents ?"
    - valerie: "- Recevoir ces documents dématérialisés est-il un gage de fiabilité comparativement à un document en version papier ?"
    - valerie: Nous allons voir 3 cas concrets de factures.
    - valerie: "- Puis-je avoir confiance en 2 de ces factures et les régler en toute confiance ?"
    - valerie: "- Puis-je accepter, sans me méfier, une facture EDF comme justificatif de domicile ?"
    - valerie: Voyons tout d’abord ensemble quels sont les risques auxquels je m’expose.
---
::



::alert{type="info"}
* TODO: viewer du slide risque
::

## Acteurs

Nadine

Alice

Jean

Isabelle

### Introduction du premier cas

::ppw-chat-conversation
---
animate: true
conversation:
    - nadine: Je fais appel à une décoratrice d’intérieur :ppw-chat-actor{name="alice" showname} pour du Home Staging. 
    - nadine: Sa prestation terminée, elle me présente une facture Ikéa pour le remboursement de quelques articles dont elle a eu besoin pour agrémenter mon salon.
---
::

## Mise en scène

:ppw-pdf-link{href="/documents/ikea_f.pdf"}

::ppw-chat-conversation
---
animate: true
conversation:
     - nadine: J'ouvre le pdf facture 
     - nadine: Je le vérifie visuellement, ok ça me semble correct, la date des achats est cohérente avec la mission, les articles listés sont bien chez moi dans mon nouvel intérieur cosy. Je vais lui régler la facture à Alice.
     - alice: Et pourtant, Nadine n'aurait pas dû régler, cette facture a été modifiée et elle ne peut pas s'en rendre compte sans une plateforme spécialisée. 
     - alice: Et c'est très facile à faire
     - alice: Voici comment je m'y suis prise pour modifier la facture
     - alice: J'enregistre une copie du pdf original en modifiant le nom « _originale » 
     - alice: Je fais les modifications suivantes -- montants HT, TTC et Total et j'enregistre la nouvelle facture au format PDf en gardant le nom de l'original. 
     - alice: Et voilà, le tour est joué. Visuellement la cliente ne peut pas s'en rendre compte avec une facture version pdf simple, si cela avait été une version papier cela aurait été la même chose, elle ne peut pas savoir, juste en se basant sur le visuel du pdf, si elle est authentique ou non. Et la facture a été réglée.
---
::

### Introduction du deuxième cas

::ppw-chat-conversation
---
animate: true
conversation:
    - nadine: Je commence une nouvelle activité de location de vélos électriques. La flotte est d’occasion pour le moment, mais je ne veux pas de souci lié à des défauts de batterie. Je confie à mon commercial Jean, la mission d’acheter des batteries neuves 10 de 36v, 10 de 24v et 4 chargeurs pour chacun des modèles de batterie.
    - nadine: J'ai également demandé à Jean de faire le tour de la flotte, il a constaté quelques éléments à remplacer ou manquants, il s’est donc rendu en magasin pour acheter les batteries et chargeurs que je lui ai demandé ainsi que quelques accessoires. Il me transmet la facture par mail pour la comptabilité.
---
::

:ppw-pdf-link{href="/documents/deca_FA130000190890-f.pdf"}

::ppw-chat-conversation
---
animate: true
conversation:
    - nadine: Je la vérifie visuellement, ok ça semble correct, la date des achats est cohérente avec la mission, les articles listés sont bien à l’atelier. Je peut régler la facture.
    - jeanL: Lorsque ma patronne reçoit une facture papier, ou même une version pdf simple, elle ne peut pas savoir, juste en se basant sur le visuel du pdf, si elle est authentique ou non (à moins de vérifier les caractéristiques de chaque article sur le site ou en magasin !) Cela lui demanderait beaucoup de temps. Du coup, a t'elle raison de se fier uniquement sur le visuel ? Et non, comme Alice, j'ai modifié la facture et voilà comment j'ai fait.
---
::

#### Modification du pdf

::ppw-chat-conversation
---
animate: true
conversation:
    - jeanL: J'enregistre une copie du pdf original en modifiant le nom « _originale » 
    - jeanL: Je modifie les quantités mais je ne change pas le montant total
    - jeanL: J'enregistre la nouvelle facture au format PDF en gardant le nom de l'original. C'est simple
    - jeanL: Voilà comment j'ai arnaqué ma patronne. Je pourrais récupérer les articles supplémentaires et les revendre moi-même. 
---
::

### Introduction du troisième cas

::ppw-chat-conversation
---
animate: true
conversation:
    - nadine: Isabelle veux souscrire un prêt à la consommation auprès de Sofinco mais ne veut pas régler les échéances, pour cela l'organisme va lui demander un justificatif de domicile. Elle va fournir une facture EDF par mail dont elle aura falsifiée le nom. Est-ce que l'organisme de prêt peut avoir confiance en cette facture et peut-il se rendre compte que le justificatif est falsifié ?
---
::

::ppw-chat-conversation
---
animate: true
conversation:

    - isabelle: Je vais vous démontrer que non
    - isabelle: Je vais la modifier en changeant le nom du destinataire
    - isabelle: J'enregistre une copie du pdf original en modifiant le nom « _originale »
    - isabelle: Je modifie le nom sous inkscape 
    - isabelle:  J'enregistre la nouvelle facture au format pdf en gardant le nom de l’original.
    - isabelle: Vérifier un pdf visuellement, même s'il est noté « document électronique certifié authentique », ok ça semble plutôt pas mal. MAIS, est-ce un argument suffisant pour faire confiance à cette facture ?     
---
::

:ppw-pdf-link{href="/documents/pu_edfb.pdf"}

::ppw-chat-conversation
---
animate: true
conversation:
    - isabelle: Je dépose la facture authentique dans adobe qui indique bien que la signature ELECTRICITE DE FRANCE est valable 
---
::

![](/images/images_putaclic/edf_phec_adobe.png)

::ppw-chat-conversation
---
animate: true
conversation:
    - isabelle: Maintenant, au tour de la facture falsifiée
---
::

:ppw-pdf-link{href="/documents/pu_edfc.pdf"}

::ppw-chat-conversation
---
animate: true
conversation:
    - isabelle: Comme le document n'est pas signé, adobe n'indique pas l'onglet vérification de signature
---
::

![](/images/images_putaclic/edf_isa_adobe.png)

::ppw-chat-conversation
---
animate: true
conversation:
    - isabelle: Je signe le document avec un PSC sous le nom ELECTRICITE DE FRANCE et le dépose de nouveau dans adobe
---
::    

![](/images/images_putaclic/edf_un_adobe.png)

::ppw-chat-conversation
---
animate: true
conversation:
    - isabelle: Adobe indique que la signature est bien ELECTRICITE DE FRANCE et est valable, pourtant ce n'est pas le cas.
    - isabelle: Comment faire pour distinguer la vraie de la fausse ????
    - isabelle: Il faut une règle métier qui permette d’identifier que le signataire est bien la société qui s’affiche comme signataire
    - isabelle: La plateforme VérifTonDoc est capable de vérifier ces conformités métier
    - isabelle: Reprenons l'exemple de nos 2 factures EDF
    - isabelle: Avec VérifTonDoc, il suffit de déposer les pdfs dans la dropzone et la checklist nous indique si le document est conforme ou pas    
---
::

::ppw-showcase-check
---  
pdfs:
- url: "/documents/edf_20230524b.pdf"
  check_result: "/blog/2023/10/_cl_edf_20230524b.yaml"
  name: "Facture EDF"
  conversation:
    - isabelle: "1er pdf, la checklist indique que tout est Ok"
- url: "/documents/edf_20230524c.pdf"
  check_result: "/blog/2023/10/_cl_edf_20230524c.yaml"
  name: "Facture EDF"
  conversation:
    - isabelle: "2ème pdf, la checklist indique que la signature dans la conformité métier est KO, la clé publique de ELECTRICITE DE FRANCE n'a pas été trouvée" 
    - isabelle: "C'est donc la 2ème facture qui a été falsifiée"                    
---
::  

::ppw-chat-conversation
---
conversation:
    - nadine: Le but de cet atelier était de montrer que quelqu’un qui reçoit une facture papier, ou même une version pdf simple ne peut pas savoir, juste en se basant sur le visuel du pdf, si elle est authentique ou non. Pour un document signé électroniquement, même avec la mention « document électronique certifié authentique » inscrite sur le document, il faut utiliser un outil qui puisse vérifier des conformités métier et s'assurer que la signature apposée est bien celle du signataire attendu.
---
::

## Questions

Vous avez parlé d'une clé publique dans le dernier cas. Pouvez-vous nous expliquer ?
    - La clé publique est un message chiffré, si cette clé est nominative, VérifTonDoc est capable de vérifier si la clé est bien celle du signataire qu'on attend. 

Vous avez dit qu'on ne peut pas faire de vérification avec un pdf simple. Quel pdf faut-il pour pouvoir en faire ? et comment peut-on l'obtenir ?
    - Il faut un pdf que l'on dit enrichi, c'est à dire dans lequel on a mis des métadonnées (données non visibles mais qui peuvent être analysées par la plateforme VérifTonDoc). Nous pourrons montrer lors d'un prochain atelier comment enrichir un pdf, quel qu'il soit. VérifTonDoc peut générer ce genre de pdf.

VérifTonDoc dans votre exemple a vérifier la signature, est-ce que la plateforme peut vérifier autre chose ?
    - Oui bien sûr, VérifTonDoc n'est pas seulement une plateforme de vérfication de signature, elle peut vérifier des documents comme des PAFs, des factures, des contrats...etc. Il faut simplement établir la liste des critères que vous voulez vérifier, cela peut être des calculs, des dates, le nombre de document...cela est en fonction du domaine dans lequel on est. C'est le client qui détermine ses propres critères à vérifier.




           

`.trim());return(L,u)=>{const p=v,f=b;return t(),s("div",I,[q(l("textarea",{"onUpdate:modelValue":u[0]||(u[0]=e=>h(n)?n.value=e:null)},null,512),[[_,a(n)]]),l("div",T,[l("div",V,[(t(!0),s(E,null,w(a(m),e=>(t(),s("button",{key:e,class:J(["outline",{active:e===a(i)}]),onClick:r=>i.value=e},d(e),11,F))),128))]),k(f,{value:a(n)},{default:C(({data:e,body:r})=>[a(i)==="Preview"?(t(),D(p,{key:0,body:r,data:e},null,8,["body","data"])):c("",!0),a(i)==="AST"?(t(),s("pre",x,d(r),1)):c("",!0)]),_:1},8,["value"])])])}}});const O=j(y,[["__scopeId","data-v-317b343f"]]);export{O as default};
