/* ============================================================
   BlocPro — ركن المحترف — data.js
   Contenu pédagogique de l'application.

   👉 POUR MODIFIER LES FORMATIONS : c'est ce fichier qu'il faut éditer.
   Copiez un bloc de formation existant et changez les textes.
   Les contenus ci-dessous sont des exemples de démonstration :
   ils doivent être validés et adaptés par vos formateurs.
   ============================================================ */

const COURSES = [
  {
    id: "urgences-rcp",
    titre: "Urgences vitales et réanimation cardio-pulmonaire (RCP)",
    categorie: "Urgences",
    niveau: "Intermédiaire",
    duree: "2 h",
    icone: "🚑",
    description: "Reconnaître un arrêt cardiaque, alerter, débuter une RCP de qualité et utiliser un défibrillateur en attendant l’équipe de réanimation.",
    objectifs: [
      "Reconnaître un arrêt cardiaque en moins de 10 secondes",
      "Réaliser des compressions thoraciques efficaces",
      "Utiliser un DAE/DSA en sécurité",
      "Travailler en équipe selon la chaîne de survie"
    ],
    lecons: [
      {
        id: "u1",
        titre: "Reconnaître l’arrêt cardiaque et alerter",
        duree: "20 min",
        intro: "Chaque minute sans réanimation diminue les chances de survie. La première étape est donc de reconnaître rapidement l’arrêt cardiaque : une victime inconsciente qui ne respire pas normalement doit être considérée en arrêt cardiaque.",
        points: [
          "Vérifiez la sécurité des lieux, puis la conscience : secouez doucement les épaules en parlant fort.",
          "Si aucune réponse : criez à l’aide, ouvrez les voies aériennes (bascule tête / élévation du menton).",
          "Évaluez la respiration pendant 10 secondes maximum : regardez, écoutez, sentez. Des gasps (respiration agonique) ne sont pas une respiration normale.",
          "Alertez immédiatement selon le protocole de votre établissement (numéro d’urgence interne, équipe de réanimation) et demandez le défibrillateur et le chariot d’urgence.",
          "Ne perdez pas de temps à chercher un pouls si vous n’êtes pas entraîné : commencez les compressions."
        ],
        retenir: "Inconsciente + ne respire pas normalement = arrêt cardiaque jusqu’à preuve du contraire → alerter et masser sans délai."
      },
      {
        id: "u2",
        titre: "Les compressions thoraciques de qualité",
        duree: "25 min",
        intro: "Des compressions thoraciques de haute qualité, interrompues le moins possible, sont le facteur le plus important de la survie. Elles maintiennent une perfusion minimale du cerveau et du cœur.",
        points: [
          "Victime sur le dos, sur un plan dur. Talon d’une main au centre du thorax, sur la moitié inférieure du sternum, deuxième main par-dessus, bras tendus.",
          "Profondeur : 5 à 6 cm chez l’adulte ; fréquence : 100 à 120 par minute.",
          "Relâchez complètement entre chaque compression, sans perdre le contact.",
          "Limitez les interruptions à moins de 10 secondes (analyse du rythme, ventilation, changement de masseur).",
          "Changez de masseur toutes les 2 minutes environ : la fatigue altère la qualité sans qu’on s’en rende compte.",
          "Si vous êtes formé et équipé (BAVU) : alternez 30 compressions et 2 insufflations ; sinon, compressions continues."
        ],
        retenir: "Fort (5–6 cm), vite (100–120/min), sans interruption, relâchement complet, relais toutes les 2 minutes."
      },
      {
        id: "u3",
        titre: "Le défibrillateur (DAE/DSA) et le travail en équipe",
        duree: "20 min",
        intro: "La défibrillation précoce est le traitement des rythmes choquables (fibrillation ventriculaire, tachycardie ventriculaire sans pouls). Le défibrillateur doit être utilisé dès son arrivée, sans interrompre durablement le massage.",
        points: [
          "Allumez l’appareil et suivez les instructions vocales. Collez les électrodes sur une peau sèche, aux emplacements illustrés.",
          "Pendant l’analyse et le choc : personne ne touche la victime — annoncez-le à voix haute (« Écartez-vous ! »).",
          "Reprenez les compressions immédiatement après le choc ou si aucun choc n’est conseillé, pendant 2 minutes avant la nouvelle analyse.",
          "Répartissez les rôles : un leader, un masseur, une personne aux voies aériennes/ventilation, une personne au défibrillateur et aux médicaments selon prescription.",
          "Notez les horaires : début de l’arrêt, début de la RCP, chocs délivrés, médicaments administrés, reprise éventuelle d’activité cardiaque."
        ],
        retenir: "Le défibrillateur guide, l’équipe exécute : analyser, choquer si indiqué, masser aussitôt, tracer les horaires."
      }
    ],
    quiz: [
      {
        question: "Devant une victime inconsciente, combien de temps maximum doit durer l’évaluation de la respiration ?",
        choix: ["10 secondes", "30 secondes", "1 minute", "Le temps d’arriver du médecin"],
        reponse: 0,
        explication: "L’évaluation de la respiration ne doit pas dépasser 10 secondes pour ne pas retarder le début de la RCP."
      },
      {
        question: "Quelle est la fréquence recommandée des compressions thoraciques chez l’adulte ?",
        choix: ["60 à 80 par minute", "80 à 100 par minute", "100 à 120 par minute", "Plus de 140 par minute"],
        reponse: 2,
        explication: "Les recommandations visent 100 à 120 compressions par minute, avec une profondeur de 5 à 6 cm."
      },
      {
        question: "Les gasps (respiration agonique) doivent être considérés comme :",
        choix: ["Une respiration normale", "Un signe de reprise d’activité", "Une absence de respiration normale", "Un effet des compressions"],
        reponse: 2,
        explication: "Les gasps sont des mouvements respiratoires agoniques inefficaces : la victime est considérée en arrêt cardiaque."
      },
      {
        question: "Juste après la délivrance d’un choc par le DAE, il faut :",
        choix: ["Vérifier le pouls pendant 30 secondes", "Reprendre immédiatement les compressions", "Attendre 1 minute avant de toucher la victime", "Retirer les électrodes"],
        reponse: 1,
        explication: "Après un choc, on reprend aussitôt les compressions pendant 2 minutes avant la réévaluation du rythme."
      },
      {
        question: "À quelle fréquence faut-il idéalement changer de masseur ?",
        choix: ["Toutes les 30 secondes", "Toutes les 2 minutes environ", "Toutes les 10 minutes", "Jamais, la même personne du début à la fin"],
        reponse: 1,
        explication: "La qualité des compressions diminue avec la fatigue : un relais toutes les 2 minutes environ est recommandé, avec une interruption minimale."
      }
    ]
  },

  {
    id: "diabete-type2",
    titre: "Diabète de type 2 : prise en charge au quotidien",
    categorie: "Endocrinologie",
    niveau: "Débutant",
    duree: "1 h 30",
    icone: "🩸",
    description: "Comprendre la maladie, les objectifs glycémiques, les mesures hygiéno-diététiques et le suivi des complications chez le patient diabétique de type 2.",
    objectifs: [
      "Expliquer simplement le diabète de type 2 au patient",
      "Connaître les objectifs habituels d’HbA1c et leur individualisation",
      "Repérer les signes d’hypoglycémie et savoir réagir",
      "Organiser le dépistage des complications"
    ],
    lecons: [
      {
        id: "d1",
        titre: "Comprendre le diabète de type 2",
        duree: "20 min",
        intro: "Le diabète de type 2 associe une résistance à l’insuline et, progressivement, un défaut de sécrétion d’insuline. Il se développe souvent silencieusement, sur un terrain de surpoids, de sédentarité et de prédisposition familiale.",
        points: [
          "Le diagnostic repose sur une glycémie à jeun ≥ 1,26 g/L (7,0 mmol/L) à deux reprises, ou une HbA1c ≥ 6,5 %, ou une glycémie ≥ 2 g/L avec symptômes.",
          "Les signes d’alerte : soif importante, urines abondantes, fatigue, amaigrissement, infections à répétition.",
          "La maladie expose à des complications microvasculaires (œil, rein, nerfs) et macrovasculaires (cœur, vaisseaux).",
          "Les facteurs de risque cardiovasculaire associés (hypertension, dyslipidémie, tabac) doivent être pris en charge en même temps.",
          "L’annonce du diagnostic et l’éducation du patient conditionnent l’adhésion au traitement au long cours."
        ],
        retenir: "Maladie chronique souvent silencieuse : glycémie à jeun ≥ 1,26 g/L à deux reprises = diabète. L’éducation thérapeutique est un traitement à part entière."
      },
      {
        id: "d2",
        titre: "Mesures hygiéno-diététiques et objectifs glycémiques",
        duree: "25 min",
        intro: "Les mesures hygiéno-diététiques sont la base du traitement, avec ou sans médicament. Les objectifs sont individualisés selon l’âge, les comorbidités et le risque d’hypoglycémie.",
        points: [
          "Alimentation équilibrée : limiter les sucres rapides et les produits ultra-transformés, fractionner selon le traitement, privilégier fibres, légumes et céréales complètes.",
          "Activité physique adaptée et régulière, par exemple 30 minutes de marche rapide au moins 5 jours par semaine, après avis médical.",
          "Une perte de poids même modérée (5 à 10 %) améliore nettement l’équilibre glycémique en cas de surpoids.",
          "L’HbA1c reflète l’équilibre des 3 derniers mois. Un objectif autour de 7 % convient à la plupart des adultes, à adapter individuellement (personne âgée fragile : objectif moins strict).",
          "L’auto-surveillance glycémique est surtout utile chez les patients sous insuline ou médicaments à risque d’hypoglycémie.",
          "Arrêt du tabac, contrôle de la tension artérielle et des lipides : le risque cardiovasculaire est la première cause de mortalité."
        ],
        retenir: "Base du traitement : alimentation, activité physique, poids, arrêt du tabac. HbA1c ≈ 7 % pour la plupart des adultes, objectif toujours individualisé."
      },
      {
        id: "d3",
        titre: "Hypoglycémie et suivi des complications",
        duree: "20 min",
        intro: "L’hypoglycémie est la complication aiguë la plus fréquente sous insuline ou sulfamides hypoglycémiants. Le suivi régulier vise aussi à dépister tôt les complications chroniques, souvent silencieuses.",
        points: [
          "Signes d’hypoglycémie : sueurs, tremblements, palpitations, faim, puis troubles de la concentration voire de la conscience.",
          "Patient conscient : resucrage rapide avec 15 g de sucre rapide (ex. 3 morceaux de sucre), contrôle de la glycémie après 15 minutes, puis sucre lent si besoin.",
          "Patient inconscient : ne rien donner par la bouche, alerter, position latérale de sécurité, traitement selon protocole (glucagon ou glucose intraveineux par les professionnels habilités).",
          "Suivi annuel type : fond d’œil, fonction rénale (créatinine, albuminurie), examen des pieds et sensibilité, ECG selon le contexte, bilan lipidique.",
          "Examen des pieds à chaque consultation chez les patients à risque ; éduquer à l’auto-examen et au chaussage adapté."
        ],
        retenir: "Hypoglycémie = resucrer vite si conscient (15 g, recontrôle à 15 min), jamais par la bouche si inconscient. Complications : un dépistage organisé chaque année."
      }
    ],
    quiz: [
      {
        question: "Le seuil diagnostique de la glycémie à jeun pour le diabète est :",
        choix: ["≥ 1,00 g/L", "≥ 1,10 g/L", "≥ 1,26 g/L à deux reprises", "≥ 1,60 g/L"],
        reponse: 2,
        explication: "Une glycémie à jeun ≥ 1,26 g/L (7,0 mmol/L) constatée à deux reprises définit le diabète."
      },
      {
        question: "L’HbA1c reflète l’équilibre glycémique sur environ :",
        choix: ["24 heures", "1 semaine", "3 mois", "1 an"],
        reponse: 2,
        explication: "L’hémoglobine glyquée reflète la glycémie moyenne des 2 à 3 derniers mois environ."
      },
      {
        question: "Quel objectif d’HbA1c convient à la plupart des adultes diabétiques de type 2 ?",
        choix: ["Inférieur à 5,5 %", "Autour de 7 %", "Entre 9 et 10 %", "Il n’y a jamais d’objectif"],
        reponse: 1,
        explication: "Un objectif autour de 7 % est habituel, mais il doit toujours être individualisé (âge, fragilité, risque d’hypoglycémie)."
      },
      {
        question: "Chez un patient conscient en hypoglycémie, la conduite de base est :",
        choix: ["Donner 15 g de sucre rapide puis recontrôler après 15 minutes", "Injecter systématiquement de l’insuline", "Ne rien donner et attendre", "Donner un grand repas gras"],
        reponse: 0,
        explication: "Règle des 15 : 15 g de sucre rapide, réévaluation de la glycémie après 15 minutes, répéter si nécessaire."
      },
      {
        question: "Lequel de ces examens fait partie du suivi annuel classique des complications ?",
        choix: ["Fond d’œil", "Scanner cérébral systématique", "Fibroscopie bronchique", "Échographie thyroïdienne"],
        reponse: 0,
        explication: "Le fond d’œil annuel dépiste la rétinopathie diabétique ; il complète le suivi rénal, des pieds et cardiovasculaire."
      }
    ]
  },

  {
    id: "hygiene-infections",
    titre: "Hygiène hospitalière et prévention des infections associées aux soins",
    categorie: "Hygiène & sécurité",
    niveau: "Débutant",
    duree: "1 h 30",
    icone: "🧼",
    description: "Hygiène des mains, précautions standard et complémentaires, et bons réflexes pour réduire les infections associées aux soins dans votre service.",
    objectifs: [
      "Appliquer la technique de friction hydro-alcoolique des 5 moments",
      "Connaître les précautions standard applicables à tous les patients",
      "Distinguer les précautions complémentaires contact, gouttelettes et air",
      "Gérer correctement le linge, les déchets et le matériel souillé"
    ],
    lecons: [
      {
        id: "h1",
        titre: "L’hygiène des mains : le geste qui sauve",
        duree: "20 min",
        intro: "Les mains du personnel sont le principal vecteur de transmission des micro-organismes à l’hôpital. L’hygiène des mains est la mesure la plus efficace pour prévenir les infections associées aux soins.",
        points: [
          "La friction avec un produit hydro-alcoolique est la technique de référence sur des mains visiblement propres ; elle agit en 20 à 30 secondes.",
          "Le lavage au savon est indiqué si les mains sont visiblement souillées, après passage aux toilettes ou en cas de suspicion de certains germes (ex. spores, norovirus) selon les protocoles locaux.",
          "Les 5 moments de l’OMS : avant le contact patient, avant un geste aseptique, après un risque d’exposition aux liquides biologiques, après le contact patient, après le contact avec l’environnement du patient.",
          "Prérequis : ongles courts, sans vernis ni faux ongles, pas de bijoux (alliance lisse tolérée selon les établissements), manches courtes ou relevées.",
          "Les gants ne remplacent jamais l’hygiène des mains : hygiène avant de les enfiler et immédiatement après les avoir retirés."
        ],
        retenir: "Friction hydro-alcoolique aux 5 moments, gants ou pas gants. C’est le pilier de la prévention des infections associées aux soins."
      },
      {
        id: "h2",
        titre: "Les précautions standard : pour tous, tout le temps",
        duree: "25 min",
        intro: "Les précautions standard s’appliquent à tous les patients, quel que soit leur statut infectieux connu ou supposé, pour protéger patients et soignants du sang et des liquides biologiques.",
        points: [
          "Hygiène des mains, port de gants seulement en cas de risque de contact avec du sang, des liquides biologiques, des muqueuses ou une peau lésée — changés entre chaque patient et chaque tâche.",
          "Tablier ou surblouse en cas de risque de projection ; protection du visage (masque, lunettes) en cas de risque d’aérosolisation ou d’éclaboussure.",
          "Matériel piquant/tranchant : jamais de recapuchonnage des aiguilles, container spécifique à portée de main, jamais rempli au-delà des 2/3.",
          "Environnement : nettoyage/désinfection des surfaces souillées, du matériel partagé entre deux patients, gestion du linge et des déchets selon les filières (DASRI).",
          "Hygiène respiratoire : masque pour toute personne qui tousse, éducation des visiteurs.",
          "En cas d’accident d’exposition au sang (AES) : premiers soins immédiats, lavage, déclaration et avis médical sans délai selon le protocole de l’établissement."
        ],
        retenir: "Précautions standard = tous les patients, tout le temps. Le gant est une indication précise, pas une habitude."
      },
      {
        id: "h3",
        titre: "Les précautions complémentaires : contact, gouttelettes, air",
        duree: "20 min",
        intro: "Certains micro-organismes exigent des mesures en plus des précautions standard, selon leur mode de transmission. La signalisation et l’information de toute l’équipe, du patient et des visiteurs sont essentielles.",
        points: [
          "Contact (ex. bactéries multirésistantes, gale, Clostridioides difficile) : chambre seule si possible, surblouse et gants dès l’entrée ou au contact, matériel dédié, hygiène des mains renforcée à la sortie.",
          "Gouttelettes (ex. grippe, coqueluche) : masque chirurgical pour le soignant à proximité et pour le patient lors des sorties, distance et chambre seule selon les possibilités.",
          "Air (ex. tuberculose, rougeole, varicelle) : masque de protection respiratoire type FFP2, chambre porte fermée, idéalement en pression négative, patient masqué lors des transports.",
          "Toute précaution complémentaire doit être prescrite, signalée à l’entrée de la chambre et transmise lors des transferts du patient.",
          "Expliquer au patient et aux visiteurs : les mesures protègent tout le monde et ne doivent pas être vécues comme une stigmatisation."
        ],
        retenir: "Contact, gouttelettes ou air : on adapte l’équipement au mode de transmission, on signale, on transmet, on explique."
      }
    ],
    quiz: [
      {
        question: "Sur des mains visiblement propres, la technique de référence est :",
        choix: ["Le lavage au savon pendant 2 minutes", "La friction hydro-alcoolique de 20 à 30 secondes", "Le port de gants sans hygiène des mains", "L’eau seule"],
        reponse: 1,
        explication: "La friction hydro-alcoolique est plus rapide, plus efficace et mieux tolérée que le lavage sur mains visiblement propres."
      },
      {
        question: "Lequel de ces moments fait partie des « 5 moments » pour l’hygiène des mains ?",
        choix: ["Uniquement en arrivant au service", "Avant un geste aseptique", "Seulement après le repas", "Uniquement en cas de patient isolé"],
        reponse: 1,
        explication: "Parmi les 5 moments : avant le contact patient, avant un geste aseptique, après exposition aux liquides biologiques, après le contact patient et après le contact avec son environnement."
      },
      {
        question: "Concernant les gants dans les précautions standard :",
        choix: ["Ils doivent être portés en permanence", "Ils remplacent l’hygiène des mains", "Ils sont indiqués en cas de risque de contact avec du sang ou des liquides biologiques", "Une même paire peut servir pour plusieurs patients"],
        reponse: 2,
        explication: "Le gant répond à une indication précise ; il est changé entre patients et tâches, et ne remplace jamais l’hygiène des mains."
      },
      {
        question: "Un patient suspect de tuberculose pulmonaire relève de précautions complémentaires de type :",
        choix: ["Contact", "Gouttelettes", "Air", "Aucune"],
        reponse: 2,
        explication: "La tuberculose se transmet par voie aérienne (aérosols) : masque FFP2 pour le soignant, chambre porte fermée."
      },
      {
        question: "Après une piqûre accidentelle avec une aiguille souillée, il faut d’abord :",
        choix: ["Attendre 1 semaine pour voir", "Faire les premiers soins (lavage) puis déclarer et consulter sans délai", "Mettre un pansement et ne rien dire", "Désinfecter avec de l’alcool à brûler et reprendre le travail"],
        reponse: 1,
        explication: "Un AES impose des soins immédiats, une déclaration et une évaluation médicale rapide (un traitement post-exposition peut être indiqué en urgence)."
      }
    ]
  },

  {
    id: "ecg-cardio",
    titre: "Cardiologie : ECG de base et douleur thoracique",
    categorie: "Cardiologie",
    niveau: "Intermédiaire",
    duree: "2 h",
    icone: "❤️",
    description: "Lire un ECG de façon systématique, reconnaître les principales anomalies et appliquer la conduite à tenir devant une douleur thoracique.",
    objectifs: [
      "Réaliser un ECG de qualité avec un positionnement correct des électrodes",
      "Analyser un ECG selon une grille systématique",
      "Reconnaître les signes ECG d’alerte d’un syndrome coronarien aigu",
      "Prioriser la prise en charge d’une douleur thoracique"
    ],
    lecons: [
      {
        id: "c1",
        titre: "Réaliser un ECG 12 dérivations de qualité",
        duree: "20 min",
        intro: "Un ECG mal réalisé peut simuler une pathologie ou masquer une anomalie grave. La qualité du tracé commence par l’installation du patient et la position exacte des électrodes précordiales.",
        points: [
          "Patient allongé, torse nu, au repos, sans parler ni bouger ; vérifier l’identité, la date, l’heure et le contexte (douleur en cours ?).",
          "Électrodes des membres : droit/gauche, en veillant à ne pas inverser les bras (erreur fréquente qui modifie le tracé).",
          "V1 : 4e espace intercostal, bord droit du sternum. V2 : 4e espace, bord gauche. V4 : 5e espace, ligne médio-claviculaire. V3 entre V2 et V4. V5 et V6 sur la même horizontale que V4.",
          "Vitesse standard 25 mm/s (1 petit carreau = 0,04 s) et amplitude 10 mm/mV ; vérifier l’étalonnage sur le tracé.",
          "En cas de suspicion de syndrome coronarien : ne pas retarder l’ECG (objectif : dans les 10 minutes suivant la prise en charge) et le transmettre immédiatement au médecin."
        ],
        retenir: "L’emplacement des électrodes et la vérification des inversions sont la première étape de toute lecture d’ECG."
      },
      {
        id: "c2",
        titre: "Lire un ECG de façon systématique",
        duree: "30 min",
        intro: "Une grille de lecture systématique évite de passer à côté d’une anomalie : fréquence, rythme, ondes P, intervalle PR, QRS, segment ST, onde T, intervalle QT, puis conclusion.",
        points: [
          "Fréquence : 300 divisé par le nombre de grands carreaux entre deux QRS en rythme régulier (60–100/min = normale).",
          "Rythme sinusal : une onde P avant chaque QRS, P positive en DII, intervalle PR constant entre 0,12 et 0,20 s (3 à 5 petits carreaux).",
          "QRS fin si inférieur à 0,12 s (3 petits carreaux) ; un QRS large évoque un trouble de conduction ou un rythme ventriculaire selon le contexte.",
          "Segment ST : tout sus-décalage ou sous-décalage significatif doit attirer l’attention, surtout en contexte de douleur thoracique.",
          "Onde T : normalement positive dans la plupart des dérivations ; des ondes T inversées, pointues ou amples ont des causes variées à interpréter dans le contexte clinique et biologique (notamment potassium).",
          "Toujours comparer avec un ECG antérieur lorsqu’il existe et corréler à la clinique : un ECG normal n’élimine pas une urgence."
        ],
        retenir: "Même ordre à chaque fois : fréquence, rythme, P, PR, QRS, ST, T, QT — et toujours comparer à l’ancien tracé."
      },
      {
        id: "c3",
        titre: "Douleur thoracique : prioriser et alerter",
        duree: "25 min",
        intro: "Devant une douleur thoracique, certaines causes engagent le pronostic vital : syndrome coronarien aigu, embolie pulmonaire, dissection aortique, pneumothorax et tamponnade. La démarche doit être rapide et organisée.",
        points: [
          "Évaluez l’état général et les constantes : tension artérielle aux deux bras si suspicion de dissection, SpO2, fréquence cardiaque et respiratoire, température, glycémie selon le contexte.",
          "Caractérisez la douleur : déclenchement, type (constrictive, brûlure, déchirure), irradiation, durée, facteurs soulageant/aggravant, signes associés (sueurs, nausées, dyspnée, malaise).",
          "ECG 12 dérivations sans délai, scope si disponible, voie veineuse, oxygène seulement si hypoxémie (viser une SpO2 adaptée aux recommandations, en général 90–94 %).",
          "Tout sus-décalage du segment ST en contexte de douleur évocatrice est une urgence absolue : alerte immédiate de la filière de reperfusion selon le protocole local, en minimisant tous les délais.",
          "Ne donnez que les traitements prescrits ou prévus par protocole (ex. antiagrégant, dérivés nitrés si indiqués et tension le permettant) ; tracez heures, traitements et évolution de la douleur."
        ],
        retenir: "Douleur thoracique = ECG rapide, constantes, alerte sans délai en cas de doute. Le temps, c’est du myocarde."
      }
    ],
    quiz: [
      {
        question: "À quelle vitesse standard défile le papier d’un ECG ?",
        choix: ["10 mm/s", "25 mm/s", "50 mm/s", "100 mm/s"],
        reponse: 1,
        explication: "La vitesse standard est de 25 mm/s : 1 petit carreau (1 mm) correspond alors à 0,04 seconde."
      },
      {
        question: "L’électrode V1 se place :",
        choix: ["Au 2e espace intercostal droit", "Au 4e espace intercostal, bord droit du sternum", "Au 5e espace intercostal gauche", "Sur la clavicule droite"],
        reponse: 1,
        explication: "V1 : 4e espace intercostal au bord droit du sternum ; V2 se place en miroir à gauche."
      },
      {
        question: "Un rythme est dit sinusal si :",
        choix: ["La fréquence est inférieure à 60/min", "Une onde P précède chaque QRS avec un PR constant", "Les QRS sont larges", "Il n’y a pas d’onde P visible"],
        reponse: 1,
        explication: "Le rythme sinusal se définit par une onde P (positive en DII) devant chaque QRS, avec un intervalle PR constant et normal."
      },
      {
        question: "Devant une douleur thoracique évocatrice, l’ECG doit idéalement être réalisé :",
        choix: ["Dans les 2 heures", "Après le bilan biologique", "Dans les 10 premières minutes de la prise en charge", "Seulement si la douleur persiste le lendemain"],
        reponse: 2,
        explication: "L’objectif recommandé est un ECG dans les 10 minutes afin de ne pas retarder la reperfusion en cas de syndrome coronarien avec sus-décalage de ST."
      },
      {
        question: "Concernant l’oxygénothérapie dans la douleur thoracique :",
        choix: ["Elle est systématique à haut débit", "Elle est réservée aux patients hypoxémiques, avec une cible de SpO2 adaptée", "Elle est contre-indiquée dans tous les cas", "Elle remplace l’ECG"],
        reponse: 1,
        explication: "L’oxygène n’est indiqué qu’en cas d’hypoxémie ; l’hyperoxie peut être délétère, notamment dans le syndrome coronarien."
      }
    ]
  },

  {
    id: "plaies-pansements",
    titre: "Soins infirmiers : plaies chroniques et pansements",
    categorie: "Soins infirmiers",
    niveau: "Intermédiaire",
    duree: "1 h 45",
    icone: "🩹",
    description: "Évaluer une plaie chronique, choisir un pansement adapté et prévenir les complications, notamment chez le patient à risque d’escarres.",
    objectifs: [
      "Décrire une plaie de manière standardisée",
      "Connaître les grandes familles de pansements et leurs indications",
      "Repérer les signes locaux d’infection",
      "Mettre en œuvre la prévention des escarres"
    ],
    lecons: [
      {
        id: "p1",
        titre: "Évaluer et décrire une plaie",
        duree: "20 min",
        intro: "Une évaluation standardisée et tracée permet de suivre l’évolution d’une plaie et d’adapter le pansement. Elle porte sur la plaie elle-même, son pourtour, la douleur et le terrain du patient.",
        points: [
          "Localisation, taille (longueur, largeur, profondeur), stade et ancienneté de la plaie.",
          "Aspect du lit de la plaie : nécrose, fibrine, bourgeonnement, épidermisation (estimer les pourcentages).",
          "Exsudat : quantité, aspect, odeur ; état de la peau péri-lésionnelle (macération, rougeur, eczéma).",
          "Signes d’infection locale : douleur croissante, chaleur, rougeur qui s’étend, exsudat purulent, odeur, retard de cicatrisation ; signes généraux (fièvre) à signaler en urgence.",
          "Terrain : diabète, état nutritionnel, vascularisation (pouls, IPS si réalisé), mobilité, traitements (anticoagulants, corticoïdes).",
          "Photographie et schéma cotés, avec accord du patient, facilitent le suivi entre soignants."
        ],
        retenir: "Taille, lit, exsudat, bords, douleur, terrain : une description complète et tracée à chaque réfection oriente tout le reste."
      },
      {
        id: "p2",
        titre: "Choisir le bon pansement",
        duree: "30 min",
        intro: "Il n’existe pas de pansement « miracle » : le choix dépend de la phase de cicatrisation, de la quantité d’exsudat et de l’état de la plaie. Le principe : maintenir un milieu humide contrôlé, ni trop sec, ni macérant.",
        points: [
          "Plaie nécrotique sèche : détersion prioritaire (mécanique, autolytique avec hydrogel selon protocole) après évaluation vasculaire, notamment au membre inférieur.",
          "Plaie fibrineuse exsudative : pansements absorbants type alginate ou hydrofibre, qui gélifient au contact de l’exsudat.",
          "Plaie bourgeonnante peu exsudative : hydrocolloïde ou interface lipidocolloïde pour protéger les bourgeons.",
          "Plaie très exsudative : pansements super-absorbants, voire thérapie par pression négative sur indication spécialisée.",
          "Plaie infectée ou à haut risque infectieux : pansements à visée antimicrobienne (ex. argent, PHMB) sur indication, sans remplacer l’antibiothérapie si elle est prescrite.",
          "Protéger la peau péri-lésionnelle (film/barrière), respecter la durée d’utilisation du pansement et réévaluer régulièrement : un pansement se change quand il est saturé, pas machinalement chaque jour."
        ],
        retenir: "On choisit selon la phase et l’exsudat : déterger, absorber, protéger. Et on réévalue : une plaie qui stagne doit faire rechercher une cause (vasculaire, infectieuse, nutritionnelle, appui prolongé)."
      },
      {
        id: "p3",
        titre: "Prévenir les escarres",
        duree: "20 min",
        intro: "L’escarre résulte d’une compression prolongée des tissus entre un plan dur et une saillie osseuse. La prévention est une urgence quotidienne chez tout patient à mobilité réduite.",
        points: [
          "Évaluez le risque dès l’admission et régulièrement avec une échelle validée (ex. Braden ou Norton) et le jugement clinique.",
          "Inspectez quotidiennement les zones d’appui : sacrum, talons, trochanters, occiput, coudes. Une rougeur qui ne blanchit pas à la pression sur peau intacte est un signe d’alerte (stade 1).",
          "Changements de position réguliers (en général toutes les 2 à 3 heures selon le support et la tolérance), décharge des talons, mise au fauteuil limitée avec coussin adapté.",
          "Supports adaptés : matelas et coussins de prévention/traitement selon le niveau de risque et le matériel disponible.",
          "Nutrition et hydratation suffisantes, lutte contre la macération (incontinence, sudation), effleurage léger des zones d’appui — jamais de massage appuyé sur une rougeur.",
          "Tracez les positions et l’état cutané dans le dossier : la prévention est un travail d’équipe, jour et nuit."
        ],
        retenir: "Évaluer, inspecter, mobiliser, nourrir, tracer : l’escarre se prévient en équipe, elle se guérit difficilement."
      }
    ],
    quiz: [
      {
        question: "Lequel de ces éléments fait partie de l’évaluation standardisée d’une plaie ?",
        choix: ["La taille mesurée et l’aspect du lit de la plaie", "Uniquement la couleur du pansement", "Le groupe sanguin du soignant", "La marque du matériel utilisé"],
        reponse: 0,
        explication: "Une évaluation complète comprend taille, lit de la plaie (nécrose, fibrine, bourgeons), exsudat, peau péri-lésionnelle, douleur et terrain."
      },
      {
        question: "Pour une plaie fibrineuse très exsudative, on privilégie plutôt :",
        choix: ["Un hydrogel", "Un pansement absorbant type alginate ou hydrofibre", "Une compresse sèche simple", "De laisser la plaie à l’air libre"],
        reponse: 1,
        explication: "Les alginates et hydrofibres absorbent l’exsudat et favorisent la détersion en milieu humide contrôlé."
      },
      {
        question: "Quel signe évoque une infection locale de plaie ?",
        choix: ["Un bourgeonnement rouge et régulier", "Une douleur croissante avec exsudat purulent malodorant", "Une diminution progressive de la taille", "Une peau péri-lésionnelle saine"],
        reponse: 1,
        explication: "Douleur croissante, rougeur extensive, chaleur, exsudat purulent et odeur inhabituelle sont des signes d’infection locale à signaler."
      },
      {
        question: "Une rougeur qui ne blanchit pas à la pression, sur peau intacte au sacrum, correspond à :",
        choix: ["Une peau normale", "Une escarre de stade 1 (signe d’alerte)", "Une escarre de stade 4", "Une allergie au drap"],
        reponse: 1,
        explication: "L’érythème non blanchissable sur peau intacte définit le stade 1 : il impose une mise en décharge immédiate de la zone."
      },
      {
        question: "Concernant la fréquence des changements de position en prévention des escarres :",
        choix: ["Une fois par jour suffit", "Toutes les 2 à 3 heures en général, selon le support et la tolérance", "Uniquement si le patient se plaint", "Ils sont déconseillés la nuit"],
        reponse: 1,
        explication: "Les changements de position sont planifiés régulièrement, jour et nuit, et tracés ; la fréquence s’adapte au risque, au support et à l’état cutané."
      }
    ]
  },

  {
    id: "communication-patient",
    titre: "Communication soignant–patient et annonce d’une mauvaise nouvelle",
    categorie: "Relation d’aide",
    niveau: "Débutant",
    duree: "1 h 15",
    icone: "💬",
    description: "Écoute active, empathie et méthode structurée pour annoncer une mauvaise nouvelle en préservant la relation de confiance avec le patient et ses proches.",
    objectifs: [
      "Utiliser les techniques d’écoute active",
      "Structurer une annonce de mauvaise nouvelle en 6 étapes",
      "Accueillir les émotions sans les fuir ni les dramatiser",
      "Vérifier la compréhension du patient"
    ],
    lecons: [
      {
        id: "r1",
        titre: "L’écoute active au quotidien",
        duree: "20 min",
        intro: "La qualité de la communication influence la compréhension, l’adhésion au traitement et même les résultats cliniques. L’écoute active est une compétence qui s’apprend et se pratique.",
        points: [
          "Se rendre disponible : s’asseoir à hauteur du patient, contact visuel adapté, téléphone et dossier mis de côté le temps de l’échange.",
          "Poser des questions ouvertes (« Racontez-moi… », « Qu’est-ce qui vous inquiète le plus ? ») plutôt qu’une succession de questions fermées.",
          "Reformuler et résumer : « Si je comprends bien… » permet de vérifier et de montrer que le patient a été entendu.",
          "Accueillir le silence : il permet au patient de réfléchir et d’exprimer ce qui compte pour lui.",
          "Éviter le jargon : employer des mots simples, expliquer les termes médicaux indispensables et vérifier la compréhension (« Pour être sûr d’avoir été clair, pouvez-vous me redire… ? »)."
        ],
        retenir: "Écouter d’abord, reformuler, simplifier, vérifier : la communication fait partie du soin."
      },
      {
        id: "r2",
        titre: "Annoncer une mauvaise nouvelle : une méthode en 6 étapes",
        duree: "25 min",
        intro: "Une mauvaise nouvelle modifie négativement la vision du patient de son avenir. Une annonce structurée n’enlève rien à la difficulté, mais elle protège le patient, ses proches et le soignant.",
        points: [
          "1. Préparer : lieu calme et privé, personnes souhaitées par le patient présentes, dossier et résultats maîtrisés, temps suffisant.",
          "2. Explorer ce que le patient sait et perçoit déjà : « Qu’avez-vous compris de votre situation jusqu’ici ? »",
          "3. Savoir ce qu’il souhaite connaître : certains veulent tout savoir, d’autres progressivement ; respecter ce choix.",
          "4. Annoncer progressivement : une phrase d’alerte (« Les résultats ne sont pas ceux que nous espérions »), puis des informations claires, par petites étapes, en vérifiant la compréhension.",
          "5. Accueillir les émotions avec empathie : nommer ce qu’on observe, laisser l’émotion s’exprimer, ne pas contredire ni banaliser, ne pas donner de faux espoirs.",
          "6. Résumer et proposer un plan : ce qui va se passer ensuite, qui le patient peut joindre, rendez-vous de suivi, documents remis si besoin.",
          "L’annonce fait l’objet d’une traçabilité dans le dossier et d’une transmission à l’équipe pour assurer la cohérence des discours."
        ],
        retenir: "Préparer, explorer, respecter le rythme, informer par étapes, accueillir l’émotion, conclure par un plan : l’annonce est un acte de soin à part entière."
      },
      {
        id: "r3",
        titre: "Faire face aux émotions et aux situations difficiles",
        duree: "20 min",
        intro: "Colère, déni, silence, pleurs : les réactions émotionnelles sont des informations, pas des attaques personnelles. Savoir les accueillir maintient la relation de confiance, y compris en situation de désaccord.",
        points: [
          "Nommer l’émotion sans juger : « Je vois que cette nouvelle vous met en colère, c’est compréhensible. »",
          "Éviter les pièges : banaliser (« Ce n’est rien »), rassurer à faux (« Tout ira bien »), fuir dans la technique ou se justifier de façon défensive.",
          "Face à la colère : rester calme, écouter la réclamation jusqu’au bout, distinguer l’émotion de son contenu, proposer une réponse concrète ou un relais (cadre, médecin, médiateur selon l’organisation).",
          "Respecter la confidentialité : ne transmettre aux proches que ce que le patient souhaite partager, sauf situations particulières prévues par la réglementation locale.",
          "Prendre aussi soin de soi : débriefing avec l’équipe, groupes de parole ou supervision ; l’accumulation d’annonces difficiles favorise l’épuisement professionnel."
        ],
        retenir: "Rejoindre le patient là où il est, sans se mettre à sa place ni fuir : l’empathie est un équilibre qui s’entretient, notamment en équipe."
      }
    ],
    quiz: [
      {
        question: "Laquelle de ces questions illustre une question ouverte ?",
        choix: ["Vous avez mal, oui ou non ?", "Votre douleur est à 5 sur 10 ?", "Racontez-moi comment vous vivez cette situation", "Vous avez bien dormi ?"],
        reponse: 2,
        explication: "Une question ouverte invite le patient à s’exprimer librement, sans suggérer la réponse."
      },
      {
        question: "Avant d’annoncer une mauvaise nouvelle, il est recommandé de :",
        choix: ["Donner d’emblée tous les détails techniques", "Explorer ce que le patient sait et ce qu’il souhaite savoir", "Annoncer dans le couloir pour gagner du temps", "Demander aux proches de le faire à votre place"],
        reponse: 1,
        explication: "Explorer la perception et les souhaits du patient permet d’ajuster l’annonce à son rythme et à son niveau de compréhension."
      },
      {
        question: "Une « phrase d’alerte » avant l’annonce (« Les résultats ne sont pas ceux que nous espérions ») sert à :",
        choix: ["Faire peur au patient", "Préparer le patient à recevoir une information difficile", "Éviter de donner l’information", "Tester sa mémoire"],
        reponse: 1,
        explication: "La phrase d’alerte donne au patient quelques secondes pour se préparer, ce qui atténue l’effet de sidération."
      },
      {
        question: "Face aux pleurs d’un patient après une annonce, l’attitude la plus aidante est :",
        choix: ["Changer immédiatement de sujet", "Dire « Ne pleurez pas, ce n’est rien »", "Rester présent, en silence, puis accueillir ce qu’il exprime", "Quitter la pièce en silence"],
        reponse: 2,
        explication: "Une présence silencieuse et bienveillante, sans banaliser, permet au patient d’exprimer son émotion en sécurité."
      },
      {
        question: "Vérifier la compréhension du patient peut se faire en lui demandant de :",
        choix: ["Signer immédiatement un document", "Reformuler avec ses mots ce qu’il a retenu", "Réciter les termes médicaux exacts", "Rien, cela est inutile"],
        reponse: 1,
        explication: "La technique du « teach-back » (faire reformuler) vérifie la clarté de nos explications sans mettre le patient en situation d’examen."
      }
    ]
  }
];
