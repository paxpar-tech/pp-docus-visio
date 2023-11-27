# Parcours OLD


<img src="/data/logo_vtd.svg" alt="-" width="150" height="100"/>

## Bienvenue sur VerifTonDoc Express !

Vous cherchez une solution pour vérifier vos documents en un seul clic, décelant pour vous les anomalies et garantissant la conformité des informations, alors **vous êtes au bon endroit**.

Explorons ensemble, une approche novatrice dans la vérification documentaire, où la facilité s'allie à l'efficacité. Nous vous proposons de parcourir un trajet intuitif qui simplifie chaque étape, garantissant des documents vérifiés avec aisance et rapidité.

Vous êtes en possesion de votre document pdf, c'est parfait. Vous avez juste à vous rendre sur la pleteforme paxpar en cliquant [ici](`https://ng.paxpar.io/check`). Puis, faîtes glisser votre document, sur la dropzone.

Si vous n'avez pas de documents PDFs à portée de main, pas de problème, télécharger ce document PDF de démonstration.

(pdf_link)

C'est gagné !!!
Vous pouvez savoir si votre document est conforme.

:ppw-checklist-result-static{path="🌐pp/api/bucket/public/dummy/cl_valise_securite_amoa_ko.yaml" mode="simple"}

## 👉 Interessé, devenez contributeur

Si vous êtes enthousiaste et inspiré par ces exemples et que vous souhaitez expérimenter avec vos propres documents, veuillez compléter ce formulaire. En retour, vous bénéficierez de **2 heures de sessions gratuites** avec nos experts pour configurer notre plateforme.

<details>
<summary>Formulaire d'enregistrement</summary>
1. Désposez les documents suivants

   - [ ] un document signé par vos soins (nom et adresse de la personne)
   - [ ] un document que vous souhaitez analyser

2. Quel est votre nom et votre prénom ? (Réponse courte)
   [Réponse ici]
3. Quel est votre numéro de téléphone ? (Réponse courte)

   [Réponse ici]
4. Je m'identifie par 
   - [ ] email
   - [ ] SMS
   - [ ] google
   - [ ] github
   - [ ] gitlab
5. Avez-vous des remarques ?
  [Réponse ici]
6. Je valide 
   - [ ] le partage de mes documents avec l'équipe support
   - [ ] les [CGVs](/cgvs) de paxpar
</details>

::ppw-onboard
::



<div class="button-container">

  <a href="https://ng.uat.paxpar.tech/gallery/checklist" style="background-color: #09A0C1; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;margin-right: 20px; ">Je m'enregistre pour contribuer</a>
  <a href="https://ng.paxpar.io/blog/portail" style="background-color: #09A0C1; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">Je m'enregistre pour créer mon portail</a>



</div>


## 🤔💭 Quelques hésitations

Vous avez encore quelques hésitations, alors prenons un exemple tout simple : vous venez de recevoir une [facture EDF]() par mail, tout vous semble correct.

Mais par acquis de conscience, vous préférez le vérifier;

En cliquant sur le fichier, il est alors sélectionné et la liste de contrôle s'affiche en précisant votre conformité. Vous avez la possibilité d'afficher le contenu du dossier, en cliquant sur l'oeil, en haut à droite.

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

Ces points de contrôle sont flexibles et sont élaborés en collaboration avec un expert du domaine, tel qu'un commissaire aux comptes ou un expert comptable. 

Si vous êtes un expert intéressé par l'application de cette approche à votre problème, devenir contributeur de Paxpar est simple : il vous suffit de remplir le formulaire d'enregistrement, ci-dessus.

👉 A l'issue de ces **2 sessions d'une heure gratuites**, vous recevrez **votre premier article**, comprenant des éléments interactifs, des astuces de création, et une liste de vérification (présentés en format Markdown). Lors de la session, nous vous montrerons cet article en partage d'écran.

##### visualiser l'article

Cependant, si vous souhaitez rédiger ou consulter des contenus sur votre propre site web, nous vous recommandons de passer au [WebTonDoc](/blog/portail).


::card-grid
#title
🧐 Vous voulez en savoir plus ?

#root
:ellipsis{left=0px width=40rem top=10rem blur=140px}

#default

  ::card{icon=mdi-lead-pencil}
  #title
  [Signataire habilité](/blog/contributeur/check/signataire) à signer ce document
  #description
  Chaque signataire équipé d'une signature électronique est associé à une clé publique. Cette clé publique est exploitée pour assurer votre assurance que la personne qui signe correspond bien à celle attendue.
  ::

  ::card{icon=mdi-checkbox-multiple-marked-outline}
  #title
  [Checklist](/blog/contributeur/check/specify_checklist) à l'effigie de votre société
  #description
  Vous voulez rassurer vos clients, en vérifiant des documents sensibles tels que des contrats, des factures, ... alors vous pouvez créer votre propre checklist.
  ::

  ::card{icon=mdi-file-excel}
  #title
  Vérification croisée [(xls, png, pdf)](/blog/contribteur/check/check_all)
  #description
  Votre dossier renferme des données de différentes sources : des tableaux d'analyse **au format excel**, des photos **au format png**, des rapports **au format pdf** et vous souhaitez croiser ces données, et ainsi vérifier leur cohérence.
  ::
  ::card{icon=mdi-compare}
  #title
  Accès aux [non-conformités](/blog/contributeur/check/nocompliance) en un click
  #description  
  En soumettant votre dossier, vous recevez immédiatement son degré de conformité, évalué directement par vos propres experts, sur la base d'une liste de vérification pré-établie.
  ::
  ::card{icon=mdi-file-document}
  #title
  [Vérification](/blog/contributeur/check/check_folder) d'un dossier digital
  #description
  Gérez, structurez, vérfiez et organisez des dossiers digitaux vous prend du temps, vous êtes désireux de gagner du temps sur ces tâches chronophages. Alors commencez par créer votre premier [dossier digital](/blog/contributeur/craft/create_folder), puis tester-le, en le déposant simplement dans la drop-zone prévue à cet effet.
  ::
  ::card{icon=mdi-note-plus-outline}
  #title
  [Ajout](/blog/contributeur/check/add_checkpoint) d'un point de contrôle
  #description
  Afin de rester en accord avec les changements réglementaires, vous avez la possibilité d'incorporer ces évolutions directement dans vos listes de vérification. Notre équipe de support est disponible pour vous guider dans cette démarche de conformité.
  ::
  ::card{icon=mdi-file-document}
  #title
  Elaboration d'un [rapport de vérification](/blog/contributeur/check/check_report)
  #description
  Si vous avez des préoccupations quant à la bonne orientation de votre dossier et souhaitez témoigner de votre engagement, vous avez la possibilité de créer un rapport de vérification répertoriant toutes vos demandes, chacune datée, pour démontrer votre transparence.
  ::
  ::card{icon=mdi-checkbox-multiple-marked-outline}
  #title
  Essai [Gratuit/Démonstration](/blog/contributeur)
  #description
  Nous vous proposons de tester notre plateforme, en bénéficiant de **2h de sessions gratuites** avec nos experts, 3 communiqués sur LinkedIn en co-rédaction et 6 mois d'**abonnement gratuit**.
  ::
::
