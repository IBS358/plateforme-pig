/* =========================================================
   SOURCE UNIQUE DES FICHES DE PRODUCTION – PIG
   ========================================================= */

window.productions = {};

/* =========================================================
   FILIERE : BTP & Matériaux de Construction
   ========================================================= */
Object.assign(window.productions, {

  mini_cimenterie: {
    unite: "Mini-cimenterie",
    filiere: "BTP & Matériaux de Construction",
    description: "Production de ciment à petite échelle pour le marché local et régional.",
    marche: "Marché local et régional",
    capex_min: 600000,
    capex_max: 1500000,
    opex_mensuel: 120000,
    capacite: "50 à 200 tonnes / jour",
    emplois: "80 à 120",
    opportunite: "Forte demande locale et substitution aux importations.",
    process: [
      "Broyage des matières premières",
      "Cuisson du clinker",
      "Broyage ciment",
      "Ensachage"
    ],
    bp_gratuit: { inclus: true },
    bp_professionnel: { inclus: true }
  },

  briques: {
    unite: "Fabrication de briques",
    filiere: "BTP & Matériaux de Construction",
    description: "Production de briques en terre cuite, stabilisée et blocs de terre comprimée.",
    marche: "Marché local",
    capex_min: 55000,
    capex_max: 150000,
    opex_mensuel: 18000,
    capacite: "20 000 à 60 000 briques / mois",
    emplois: "15 à 30",
    opportunite: "Matériaux locaux à faible coût.",
    process: [
      "Extraction de l’argile",
      "Moulage",
      "Séchage",
      "Cuisson"
    ],
    bp_gratuit: { inclus: true },
    bp_professionnel: { inclus: false }
  },

  prefabrication_beton: {
    unite: "Éléments préfabriqués en béton",
    filiere: "BTP & Matériaux de Construction",
    description: "Production de poutrelles, dalles et éléments préfabriqués.",
    marche: "BTP public et privé",
    capex_min: 110000,
    capex_max: 300000,
    opex_mensuel: 30000,
    capacite: "100 à 300 éléments / mois",
    emplois: "25 à 40",
    opportunite: "Chantiers publics et logements.",
    process: [
      "Préparation du béton",
      "Coulage",
      "Vibration",
      "Cure et stockage"
    ],
    bp_gratuit: { inclus: true },
    bp_professionnel: { inclus: false }
  },

  tuiles: {
    unite: "Production de tuiles",
    filiere: "BTP & Matériaux de Construction",
    description: "Fabrication de tuiles en béton ou céramique.",
    marche: "Marché local",
    capex_min: 85000,
    capex_max: 200000,
    opex_mensuel: 22000,
    capacite: "8 000 à 20 000 tuiles / mois",
    emplois: "15 à 25",
    opportunite: "Habitat résidentiel en croissance.",
    process: [
      "Moulage",
      "Séchage",
      "Cuisson ou cure",
      "Conditionnement"
    ],
    bp_gratuit: { inclus: true },
    bp_professionnel: { inclus: false }
  },

  agglos: {
    unite: "Production d’agglos",
    filiere: "BTP & Matériaux de Construction",
    description: "Fabrication de blocs de béton (parpaings).",
    marche: "Marché local",
    capex_min: 75000,
    capex_max: 180000,
    opex_mensuel: 20000,
    capacite: "10 000 à 30 000 blocs / mois",
    emplois: "15 à 25",
    opportunite: "Demande constante en construction.",
    process: [
      "Dosage béton",
      "Moulage",
      "Cure",
      "Stockage"
    ],
    bp_gratuit: { inclus: true },
    bp_professionnel: { inclus: false }
  },

  peintures_btp: {
    unite: "Peintures BTP",
    filiere: "BTP & Matériaux de Construction",
    description: "Peintures pour bâtiments et travaux publics.",
    marche: "Marché local",
    capex_min: 95000,
    capex_max: 250000,
    opex_mensuel: 28000,
    capacite: "5 à 20 tonnes / mois",
    emplois: "15 à 25",
    opportunite: "Substitution aux importations.",
    process: [
      "Mélange pigments",
      "Formulation",
      "Conditionnement",
      "Contrôle qualité"
    ],
    bp_gratuit: { inclus: true },
    bp_professionnel: { inclus: false }
  },

  centrale_beton: {
    unite: "Centrale à béton",
    filiere: "BTP & Matériaux de Construction",
    description: "Production de béton prêt à l’emploi et mortiers normalisés.",
    marche: "Chantiers BTP",
    capex_min: 150000,
    capex_max: 400000,
    opex_mensuel: 45000,
    capacite: "20 à 60 m³ / jour",
    emplois: "20 à 30",
    opportunite: "Chantiers publics et privés.",
    process: [
      "Dosage automatisé",
      "Malaxage",
      "Livraison"
    ],
    bp_gratuit: { inclus: true },
    bp_professionnel: { inclus: false }
  },

  menuiserie_aluminium: {
    unite: "Menuiserie aluminium & PVC",
    filiere: "BTP & Matériaux de Construction",
    description: "Fabrication de fenêtres, portes et façades aluminium/PVC.",
    marche: "Marché urbain",
    capex_min: 150000,
    capex_max: 350000,
    opex_mensuel: 35000,
    capacite: "100 à 300 unités / mois",
    emplois: "20 à 35",
    opportunite: "Urbanisation rapide.",
    process: [
      "Découpe profils",
      "Assemblage",
      "Vitrage",
      "Installation"
    ],
    bp_gratuit: { inclus: true },
    bp_professionnel: { inclus: false }
  }

});

console.log("Filière BTP chargée :", Object.keys(window.productions).length);

/* =========================================================
   FILIERE : Agro-alimentaire & Boissons
   ========================================================= */

Object.assign(window.productions, {

  huile_palme_raffinee: {
    unite: "Production d’huile de palme raffinée",
    filiere: "Agro-alimentaire & Boissons",
    description: "Unité complète de raffinage d’huile de palme brute destinée au marché local et à l’export.",
    marche: "Marché national et export",
    capex_min: 80000,
    capex_max: 200000,
    opex_mensuel: 25000,
    capacite: "5 à 15 tonnes / jour",
    emplois: "25 à 40",
    opportunite: "Forte substitution aux importations et valorisation de la filière palmier à huile.",
    process: [
      "Réception de l’huile brute",
      "Neutralisation",
      "Décoloration",
      "Désodorisation",
      "Conditionnement"
    ],
    niveau_maturite: "Élevé",
    complexite: "Moyenne",
    priorite_guinee: "Très élevée",
    bp_gratuit: { inclus: true },
    bp_professionnel: { inclus: true }
  },

  jus_fruits: {
    unite: "Production de jus de fruits",
    filiere: "Agro-alimentaire & Boissons",
    description: "Unité de pasteurisation et conditionnement de jus de fruits tropicaux (mangue, ananas, orange, papaye).",
    marche: "Marché local et sous-régional",
    capex_min: 60000,
    capex_max: 150000,
    opex_mensuel: 18000,
    capacite: "5 000 à 20 000 litres / mois",
    emplois: "12 à 20",
    opportunite: "Valorisation des fruits locaux et forte demande urbaine.",
    process: [
      "Réception et tri des fruits",
      "Lavage et extraction",
      "Pasteurisation",
      "Conditionnement",
      "Stockage"
    ],
    niveau_maturite: "Moyen",
    complexite: "Faible à moyenne",
    priorite_guinee: "Élevée",
    bp_gratuit: { inclus: true },
    bp_professionnel: { inclus: false }
  },

  conserverie_legumes: {
    unite: "Conserverie de légumes",
    filiere: "Agro-alimentaire & Boissons",
    description: "Unité de mise en conserve de légumes locaux (tomates, haricots, gombos, piments).",
    marche: "Marché local",
    capex_min: 120000,
    capex_max: 300000,
    opex_mensuel: 25000,
    capacite: "10 à 30 tonnes / mois",
    emplois: "20 à 35",
    opportunite: "Réduction des pertes post-récolte et substitution aux importations.",
    process: [
      "Réception et lavage",
      "Découpe et blanchiment",
      "Mise en bocaux ou boîtes",
      "Stérilisation",
      "Stockage"
    ],
    niveau_maturite: "Moyen",
    complexite: "Moyenne",
    priorite_guinee: "Élevée",
    bp_gratuit: { inclus: true },
    bp_professionnel: { inclus: false }
  },

  boulangerie_industrielle: {
    unite: "Boulangerie industrielle",
    filiere: "Agro-alimentaire & Boissons",
    description: "Production industrielle de pain et viennoiseries pour zones urbaines.",
    marche: "Marché urbain national",
    capex_min: 70000,
    capex_max: 180000,
    opex_mensuel: 22000,
    capacite: "5 000 à 15 000 pains / jour",
    emplois: "15 à 25",
    opportunite: "Consommation quotidienne élevée et forte rotation.",
    process: [
      "Préparation des pâtes",
      "Pétrissage",
      "Fermentation",
      "Cuisson",
      "Distribution"
    ],
    niveau_maturite: "Élevé",
    complexite: "Faible",
    priorite_guinee: "Très élevée",
    bp_gratuit: { inclus: true },
    bp_professionnel: { inclus: false }
  },

  biscuits: {
    unite: "Production de biscuits",
    filiere: "Agro-alimentaire & Boissons",
    description: "Fabrication de biscuits secs et sucrés à base de farines locales.",
    marche: "Marché local et régional",
    capex_min: 55000,
    capex_max: 160000,
    opex_mensuel: 17000,
    capacite: "3 à 10 tonnes / mois",
    emplois: "12 à 20",
    opportunite: "Forte consommation ménagère et scolaire.",
    process: [
      "Préparation des ingrédients",
      "Mélange et pétrissage",
      "Moulage",
      "Cuisson",
      "Emballage"
    ],
    niveau_maturite: "Moyen",
    complexite: "Faible",
    priorite_guinee: "Élevée",
    bp_gratuit: { inclus: true },
    bp_professionnel: { inclus: false }
  },

  fruits_confits: {
    unite: "Production de fruits confits",
    filiere: "Agro-alimentaire & Boissons",
    description: "Transformation de fruits tropicaux en produits à forte valeur ajoutée.",
    marche: "Export et marché de niche",
    capex_min: 45000,
    capex_max: 120000,
    opex_mensuel: 15000,
    capacite: "2 à 6 tonnes / mois",
    emplois: "10 à 18",
    opportunite: "Valorisation des excédents agricoles.",
    process: [
      "Découpe",
      "Confisage au sucre",
      "Séchage",
      "Conditionnement"
    ],
    niveau_maturite: "Moyen",
    complexite: "Faible",
    priorite_guinee: "Moyenne à élevée",
    bp_gratuit: { inclus: true },
    bp_professionnel: { inclus: false }
  },

  viande_sechee: {
    unite: "Production de viande séchée",
    filiere: "Agro-alimentaire & Boissons",
    description: "Séchage et conservation de viande (bœuf, poisson, volaille).",
    marche: "Marché local et régional",
    capex_min: 65000,
    capex_max: 150000,
    opex_mensuel: 20000,
    capacite: "2 à 5 tonnes / mois",
    emplois: "12 à 22",
    opportunite: "Longue conservation et forte demande locale.",
    process: [
      "Découpe et salage",
      "Séchage",
      "Contrôle qualité",
      "Conditionnement"
    ],
    niveau_maturite: "Moyen",
    complexite: "Faible",
    priorite_guinee: "Élevée",
    bp_gratuit: { inclus: true },
    bp_professionnel: { inclus: false }
  },

  riz_blancherie_industrielle: {
    unite: "Blancherie industrielle de riz",
    filiere: "Agro-alimentaire & Boissons",
    description: "Transformation du riz paddy en riz blanc prêt à la consommation.",
    marche: "Marché national",
    capex_min: 300000,
    capex_max: 800000,
    opex_mensuel: 60000,
    capacite: "5 à 10 tonnes / heure",
    emplois: "40 à 70",
    opportunite: "Réduction massive des importations de riz.",
    process: [
      "Nettoyage",
      "Décorticage",
      "Blanchiment",
      "Tri",
      "Ensachage"
    ],
    niveau_maturite: "Élevé",
    complexite: "Faible à moyenne",
    priorite_guinee: "Très élevée",
    bp_gratuit: { inclus: true },
    bp_professionnel: { inclus: true }
  }

});

console.log("Filière Agro-alimentaire chargée");

/* =========================================================
   FILIERE : Chimie, Cosmétiques & Détergents
   ========================================================= */

Object.assign(window.productions, {

  savons_industriels: {
    unite: "Production de savons industriels",
    filiere: "Chimie, Cosmétiques & Détergents",
    description: "Fabrication de savons de toilette et ménagers à base d’huile de palme locale.",
    marche: "Marché local et sous-régional",
    capex_min: 45000,
    capex_max: 120000,
    opex_mensuel: 15000,
    capacite: "30 à 150 tonnes / an",
    emplois: "12 à 25",
    opportunite: "Substitution aux importations et valorisation de l’huile locale.",
    process: [
      "Préparation des matières premières",
      "Saponification",
      "Moulage et découpe",
      "Séchage",
      "Emballage"
    ],
    niveau_maturite: "Moyen",
    complexite: "Faible à moyenne",
    priorite_guinee: "Élevée",
    bp_gratuit: { inclus: true },
    bp_professionnel: { inclus: false }
  },

  detergents: {
    unite: "Production de détergents",
    filiere: "Chimie, Cosmétiques & Détergents",
    description: "Fabrication de produits détergents et nettoyants pour ménages et industries.",
    marche: "Marché local et industriel",
    capex_min: 85000,
    capex_max: 200000,
    opex_mensuel: 25000,
    capacite: "100 à 500 tonnes / an",
    emplois: "20 à 35",
    opportunite: "Demande croissante des ménages et des entreprises.",
    process: [
      "Dosage des matières premières",
      "Mélange chimique",
      "Granulation ou mise en poudre",
      "Conditionnement"
    ],
    niveau_maturite: "Moyen",
    complexite: "Moyenne",
    priorite_guinee: "Élevée",
    bp_gratuit: { inclus: true },
    bp_professionnel: { inclus: false }
  },

  hygiene_liquide: {
    unite: "Produits d’hygiène liquide",
    filiere: "Chimie, Cosmétiques & Détergents",
    description: "Fabrication de savons liquides, gels hydroalcooliques, shampooings et gels douche.",
    marche: "Marché local et export",
    capex_min: 90000,
    capex_max: 250000,
    opex_mensuel: 30000,
    capacite: "10 000 à 50 000 litres / mois",
    emplois: "25 à 40",
    opportunite: "Demande soutenue en produits d’hygiène.",
    process: [
      "Préparation des bases",
      "Mélange et homogénéisation",
      "Remplissage",
      "Étiquetage",
      "Stockage"
    ],
    niveau_maturite: "Moyen",
    complexite: "Moyenne",
    priorite_guinee: "Très élevée",
    bp_gratuit: { inclus: true },
    bp_professionnel: { inclus: false }
  },

  peintures_industrielles: {
    unite: "Production de peintures",
    filiere: "Chimie, Cosmétiques & Détergents",
    description: "Fabrication de peintures décoratives et industrielles pour le bâtiment et l’industrie.",
    marche: "Marché BTP et industriel",
    capex_min: 130000,
    capex_max: 350000,
    opex_mensuel: 40000,
    capacite: "10 à 50 tonnes / mois",
    emplois: "30 à 50",
    opportunite: "Croissance du BTP et forte substitution aux importations.",
    process: [
      "Préparation des pigments",
      "Broyage et mélange",
      "Contrôle qualité",
      "Conditionnement"
    ],
    niveau_maturite: "Moyen",
    complexite: "Moyenne",
    priorite_guinee: "Élevée",
    bp_gratuit: { inclus: true },
    bp_professionnel: { inclus: false }
  },

  cosmetiques: {
    unite: "Production de cosmétiques",
    filiere: "Chimie, Cosmétiques & Détergents",
    description: "Fabrication de crèmes, lotions et produits de beauté à base de ressources locales.",
    marche: "Marché local et export régional",
    capex_min: 95000,
    capex_max: 280000,
    opex_mensuel: 35000,
    capacite: "5 000 à 20 000 unités / mois",
    emplois: "20 à 35",
    opportunite: "Demande croissante et potentiel de marque locale.",
    process: [
      "Préparation des bases",
      "Émulsification",
      "Remplissage",
      "Conditionnement"
    ],
    niveau_maturite: "Moyen",
    complexite: "Moyenne",
    priorite_guinee: "Élevée",
    bp_gratuit: { inclus: true },
    bp_professionnel: { inclus: false }
  },

  engrais: {
    unite: "Production d’engrais",
    filiere: "Chimie, Cosmétiques & Détergents",
    description: "Fabrication d’engrais organiques et minéraux pour l’agriculture.",
    marche: "Marché agricole national",
    capex_min: 250000,
    capex_max: 600000,
    opex_mensuel: 50000,
    capacite: "10 à 50 tonnes / mois",
    emplois: "25 à 50",
    opportunite: "Amélioration des rendements agricoles.",
    process: [
      "Collecte des matières premières",
      "Broyage",
      "Mélange et granulation",
      "Conditionnement"
    ],
    niveau_maturite: "Moyen",
    complexite: "Moyenne",
    priorite_guinee: "Très élevée",
    bp_gratuit: { inclus: true },
    bp_professionnel: { inclus: false }
  },

  insecticides: {
    unite: "Production d’insecticides",
    filiere: "Chimie, Cosmétiques & Détergents",
    description: "Fabrication de produits anti-moustiques et insecticides agricoles.",
    marche: "Marché agricole et santé publique",
    capex_min: 110000,
    capex_max: 300000,
    opex_mensuel: 30000,
    capacite: "50 à 200 tonnes / an",
    emplois: "20 à 35",
    opportunite: "Protection des cultures et lutte antivectorielle.",
    process: [
      "Formulation",
      "Mélange",
      "Conditionnement",
      "Stockage sécurisé"
    ],
    niveau_maturite: "Moyen",
    complexite: "Moyenne",
    priorite_guinee: "Élevée",
    bp_gratuit: { inclus: true },
    bp_professionnel: { inclus: false }
  },

  colles_industrielles: {
    unite: "Production de colles industrielles",
    filiere: "Chimie, Cosmétiques & Détergents",
    description: "Fabrication d’adhésifs et colles pour industries et construction.",
    marche: "Marché industriel et BTP",
    capex_min: 75000,
    capex_max: 180000,
    opex_mensuel: 20000,
    capacite: "10 à 50 tonnes / an",
    emplois: "15 à 25",
    opportunite: "Demande constante dans le BTP et l’industrie.",
    process: [
      "Préparation des matières premières",
      "Réaction chimique",
      "Conditionnement",
      "Stockage"
    ],
    niveau_maturite: "Moyen",
    complexite: "Moyenne",
    priorite_guinee: "Élevée",
    bp_gratuit: { inclus: true },
    bp_professionnel: { inclus: false }
  }

});

console.log("Filière Chimie chargée");

/* =========================================================
   FILIERE : Textile, Habillement & Cuir
   ========================================================= */

Object.assign(window.productions, {

  confection_vetements: {
    unite: "Confection de vêtements",
    filiere: "Textile, Habillement & Cuir",
    description: "Atelier semi-industriel de confection de vêtements prêts-à-porter et tenues africaines modernes.",
    marche: "Marché local et régional",
    capex_min: 60000,
    capex_max: 150000,
    opex_mensuel: 18000,
    capacite: "1 000 à 5 000 pièces / mois",
    emplois: "20 à 40",
    opportunite: "Forte demande locale et valorisation de la création textile africaine.",
    process: [
      "Conception et patronage",
      "Découpe",
      "Assemblage",
      "Finition",
      "Conditionnement"
    ],
    niveau_maturite: "Élevé",
    complexite: "Faible",
    priorite_guinee: "Très élevée",
    bp_gratuit: { inclus: true },
    bp_professionnel: { inclus: false }
  },

  tissage_pagnes: {
    unite: "Tissage semi-industriel & pagnes",
    filiere: "Textile, Habillement & Cuir",
    description: "Production de tissus traditionnels et pagnes à partir de fibres locales avec équipements modernisés.",
    marche: "Marché local et sous-régional",
    capex_min: 100000,
    capex_max: 250000,
    opex_mensuel: 30000,
    capacite: "3 000 à 10 000 mètres / mois",
    emplois: "25 à 45",
    opportunite: "Valorisation du textile local et réduction des importations.",
    process: [
      "Préparation des fibres",
      "Filature",
      "Tissage",
      "Teinture",
      "Conditionnement"
    ],
    niveau_maturite: "Moyen",
    complexite: "Moyenne",
    priorite_guinee: "Élevée",
    bp_gratuit: { inclus: true },
    bp_professionnel: { inclus: false }
  },

  maroquinerie_cuir: {
    unite: "Maroquinerie en cuir",
    filiere: "Textile, Habillement & Cuir",
    description: "Fabrication d’articles en cuir : sacs, ceintures, portefeuilles.",
    marche: "Marché local et export sous-régional",
    capex_min: 75000,
    capex_max: 180000,
    opex_mensuel: 20000,
    capacite: "800 à 3 000 articles / mois",
    emplois: "15 à 30",
    opportunite: "Forte valeur ajoutée et potentiel d’exportation.",
    process: [
      "Découpe du cuir",
      "Assemblage",
      "Couture",
      "Finition",
      "Emballage"
    ],
    niveau_maturite: "Moyen",
    complexite: "Faible à moyenne",
    priorite_guinee: "Élevée",
    bp_gratuit: { inclus: true },
    bp_professionnel: { inclus: false }
  },

  teinture_textile: {
    unite: "Atelier de teinture textile",
    filiere: "Textile, Habillement & Cuir",
    description: "Teinture textile artisanale et semi-industrielle (batik, indigo, tie-dye).",
    marche: "Marché local",
    capex_min: 40000,
    capex_max: 100000,
    opex_mensuel: 12000,
    capacite: "1 000 à 4 000 mètres / mois",
    emplois: "10 à 20",
    opportunite: "Forte demande pour les textiles traditionnels et créatifs.",
    process: [
      "Préparation des tissus",
      "Teinture",
      "Fixation des couleurs",
      "Séchage",
      "Conditionnement"
    ],
    niveau_maturite: "Élevé",
    complexite: "Faible",
    priorite_guinee: "Élevée",
    bp_gratuit: { inclus: true },
    bp_professionnel: { inclus: false }
  },

  broderie_industrielle: {
    unite: "Broderie industrielle",
    filiere: "Textile, Habillement & Cuir",
    description: "Broderie automatisée sur vêtements et textiles traditionnels.",
    marche: "Marché local et régional",
    capex_min: 55000,
    capex_max: 140000,
    opex_mensuel: 15000,
    capacite: "2 000 à 8 000 pièces / mois",
    emplois: "10 à 18",
    opportunite: "Personnalisation textile à forte marge.",
    process: [
      "Programmation des motifs",
      "Broderie automatisée",
      "Contrôle qualité",
      "Conditionnement"
    ],
    niveau_maturite: "Élevé",
    complexite: "Faible",
    priorite_guinee: "Élevée",
    bp_gratuit: { inclus: true },
    bp_professionnel: { inclus: false }
  },

  chaussures_sandales: {
    unite: "Fabrication de chaussures et sandales",
    filiere: "Textile, Habillement & Cuir",
    description: "Production de chaussures et sandales en cuir et matières synthétiques.",
    marche: "Marché local et régional",
    capex_min: 120000,
    capex_max: 300000,
    opex_mensuel: 35000,
    capacite: "1 500 à 5 000 paires / mois",
    emplois: "25 à 45",
    opportunite: "Substitution aux importations et forte consommation locale.",
    process: [
      "Découpe",
      "Assemblage",
      "Collage et couture",
      "Finition",
      "Emballage"
    ],
    niveau_maturite: "Moyen",
    complexite: "Moyenne",
    priorite_guinee: "Très élevée",
    bp_gratuit: { inclus: true },
    bp_professionnel: { inclus: false }
  },

  uniformes: {
    unite: "Confection d’uniformes",
    filiere: "Textile, Habillement & Cuir",
    description: "Fabrication d’uniformes scolaires, professionnels et administratifs.",
    marche: "Marché institutionnel",
    capex_min: 70000,
    capex_max: 180000,
    opex_mensuel: 22000,
    capacite: "2 000 à 6 000 pièces / mois",
    emplois: "20 à 35",
    opportunite: "Contrats récurrents et visibilité financière.",
    process: [
      "Conception",
      "Découpe",
      "Assemblage",
      "Contrôle qualité",
      "Livraison"
    ],
    niveau_maturite: "Élevé",
    complexite: "Faible",
    priorite_guinee: "Très élevée",
    bp_gratuit: { inclus: true },
    bp_professionnel: { inclus: false }
  },

  linge_maison: {
    unite: "Production de linge de maison",
    filiere: "Textile, Habillement & Cuir",
    description: "Fabrication de linge de maison et hôtelier (draps, serviettes, rideaux).",
    marche: "Ménages, hôtels et institutions",
    capex_min: 90000,
    capex_max: 220000,
    opex_mensuel: 25000,
    capacite: "1 000 à 4 000 lots / mois",
    emplois: "18 à 30",
    opportunite: "Croissance du secteur hôtelier et résidentiel.",
    process: [
      "Découpe",
      "Assemblage",
      "Finition",
      "Conditionnement"
    ],
    niveau_maturite: "Moyen",
    complexite: "Faible",
    priorite_guinee: "Élevée",
    bp_gratuit: { inclus: true },
    bp_professionnel: { inclus: false }
  }

});

console.log("Filière Textile chargée");

/* =========================================================
   FILIERE : Métallurgie & Mécanique
   ========================================================= */

Object.assign(window.productions, {

  serrurerie_metallique: {
    unite: "Serrurerie métallique",
    filiere: "Métallurgie & Mécanique",
    description: "Fabrication de portes, fenêtres, grilles et structures métalliques pour bâtiments résidentiels, commerciaux et industriels.",
    marche: "Marché local BTP",
    capex_min: 55000,
    capex_max: 140000,
    opex_mensuel: 18000,
    capacite: "30 à 80 ouvrages / mois",
    emplois: "10 à 18",
    opportunite: "Forte demande liée à l’urbanisation et aux constructions privées.",
    process: [
      "Découpe des profilés métalliques",
      "Soudure et assemblage",
      "Traitement anticorrosion",
      "Finition et pose"
    ],
    niveau_maturite: "Élevé",
    complexite: "Faible",
    priorite_guinee: "Très élevée",
    bp_gratuit: { inclus: true },
    bp_professionnel: { inclus: true }
  },

  outillage_agricole: {
    unite: "Production d’outillage agricole",
    filiere: "Métallurgie & Mécanique",
    description: "Fabrication d’outils agricoles manuels et petits équipements pour exploitations agricoles.",
    marche: "Marché agricole national",
    capex_min: 85000,
    capex_max: 200000,
    opex_mensuel: 22000,
    capacite: "500 à 1 500 outils / mois",
    emplois: "12 à 22",
    opportunite: "Soutien à la mécanisation agricole locale et réduction des importations.",
    process: [
      "Découpe et formage du métal",
      "Assemblage et soudure",
      "Traitement thermique",
      "Finition et conditionnement"
    ],
    niveau_maturite: "Moyen",
    complexite: "Moyenne",
    priorite_guinee: "Élevée",
    bp_gratuit: { inclus: true },
    bp_professionnel: { inclus: true }
  },

  recyclage_metaux: {
    unite: "Recyclage de métaux",
    filiere: "Métallurgie & Mécanique",
    description: "Collecte, tri et transformation de métaux usagés en matières premières secondaires.",
    marche: "Industries locales et export",
    capex_min: 110000,
    capex_max: 300000,
    opex_mensuel: 30000,
    capacite: "50 à 150 tonnes / mois",
    emplois: "15 à 30",
    opportunite: "Économie circulaire, réduction des déchets et forte valeur industrielle.",
    process: [
      "Collecte et tri",
      "Découpe et broyage",
      "Fusion ou compactage",
      "Stockage et vente"
    ],
    niveau_maturite: "Moyen",
    complexite: "Moyenne",
    priorite_guinee: "Élevée",
    bp_gratuit: { inclus: true },
    bp_professionnel: { inclus: true }
  },

  chaudronnerie_industrielle: {
    unite: "Chaudronnerie industrielle",
    filiere: "Métallurgie & Mécanique",
    description: "Fabrication de cuves, réservoirs, silos et équipements industriels métalliques.",
    marche: "Industrie, mines, BTP",
    capex_min: 95000,
    capex_max: 250000,
    opex_mensuel: 28000,
    capacite: "5 à 15 équipements / mois",
    emplois: "12 à 25",
    opportunite: "Besoins industriels croissants et faible offre locale spécialisée.",
    process: [
      "Conception technique",
      "Découpe et roulage",
      "Soudure industrielle",
      "Contrôle qualité"
    ],
    niveau_maturite: "Moyen",
    complexite: "Élevée",
    priorite_guinee: "Élevée",
    bp_gratuit: { inclus: true },
    bp_professionnel: { inclus: true }
  },

  mecanosoudure: {
    unite: "Atelier de mécanosoudure",
    filiere: "Métallurgie & Mécanique",
    description: "Services de soudure industrielle et fabrication sur mesure de structures métalliques.",
    marche: "Industries, BTP, énergie",
    capex_min: 65000,
    capex_max: 160000,
    opex_mensuel: 20000,
    capacite: "Prestations continues",
    emplois: "8 à 15",
    opportunite: "Activité transversale indispensable à de nombreux secteurs.",
    process: [
      "Lecture de plans",
      "Assemblage",
      "Soudure",
      "Finition"
    ],
    niveau_maturite: "Élevé",
    complexite: "Faible à moyenne",
    priorite_guinee: "Très élevée",
    bp_gratuit: { inclus: true },
    bp_professionnel: { inclus: true }
  },

  structures_metalliques: {
    unite: "Fabrication de structures métalliques",
    filiere: "Métallurgie & Mécanique",
    description: "Fabrication de charpentes métalliques, hangars, pylônes et supports pour BTP et énergie.",
    marche: "BTP, énergie, logistique",
    capex_min: 100000,
    capex_max: 300000,
    opex_mensuel: 35000,
    capacite: "200 à 600 tonnes / an",
    emplois: "20 à 35",
    opportunite: "Demande croissante pour infrastructures modernes.",
    process: [
      "Conception",
      "Découpe et assemblage",
      "Soudure lourde",
      "Montage"
    ],
    niveau_maturite: "Moyen",
    complexite: "Élevée",
    priorite_guinee: "Très élevée",
    bp_gratuit: { inclus: true },
    bp_professionnel: { inclus: true }
  },

  pieces_mecaniques: {
    unite: "Fabrication de pièces mécaniques",
    filiere: "Métallurgie & Mécanique",
    description: "Usinage de pièces mécaniques pour maintenance industrielle et équipements.",
    marche: "Industrie, mines, énergie",
    capex_min: 140000,
    capex_max: 350000,
    opex_mensuel: 40000,
    capacite: "Production sur commande",
    emplois: "10 à 18",
    opportunite: "Réduction des arrêts industriels et forte valeur ajoutée.",
    process: [
      "Usinage",
      "Tournage / fraisage",
      "Contrôle dimensionnel",
      "Livraison"
    ],
    niveau_maturite: "Moyen",
    complexite: "Élevée",
    priorite_guinee: "Élevée",
    bp_gratuit: { inclus: true },
    bp_professionnel: { inclus: true }
  },

  quincaillerie_metallique: {
    unite: "Production de quincaillerie métallique",
    filiere: "Métallurgie & Mécanique",
    description: "Fabrication de vis, boulons, écrous et pièces de fixation pour BTP et industrie.",
    marche: "BTP et industrie locale",
    capex_min: 75000,
    capex_max: 180000,
    opex_mensuel: 22000,
    capacite: "5 à 20 tonnes / mois",
    emplois: "10 à 16",
    opportunite: "Très forte dépendance actuelle aux importations.",
    process: [
      "Formage à froid",
      "Filetage",
      "Traitement de surface",
      "Conditionnement"
    ],
    niveau_maturite: "Moyen",
    complexite: "Moyenne",
    priorite_guinee: "Très élevée",
    bp_gratuit: { inclus: true },
    bp_professionnel: { inclus: true }
  }

});

console.log("Filière Métallurgie & Mécanique chargée");

/* =========================================================
   FILIERE : Plastique & Caoutchouc
   ========================================================= */

Object.assign(window.productions, {

  sacs_plastiques: {
    unite: "Production de sacs plastiques",
    filiere: "Plastique & Caoutchouc",
    description: "Fabrication de sacs en polyéthylène biodégradables et réutilisables pour usages domestiques, commerciaux et industriels.",
    marche: "Marché local et régional",
    capex_min: 75000,
    capex_max: 180000,
    opex_mensuel: 22000,
    capacite: "30 à 100 tonnes / mois",
    emplois: "12 à 20",
    opportunite: "Substitution aux importations et forte demande quotidienne.",
    process: [
      "Granulation de la matière",
      "Extrusion du film plastique",
      "Découpe et soudure",
      "Conditionnement"
    ],
    niveau_maturite: "Élevé",
    complexite: "Faible à moyenne",
    priorite_guinee: "Très élevée",
    bp_gratuit: { inclus: true },
    bp_professionnel: { inclus: true }
  },

  bouteilles_pet: {
    unite: "Soufflage de bouteilles PET",
    filiere: "Plastique & Caoutchouc",
    description: "Production de bouteilles PET destinées à l’eau, aux jus et boissons gazeuses.",
    marche: "Industrie agroalimentaire",
    capex_min: 110000,
    capex_max: 300000,
    opex_mensuel: 35000,
    capacite: "500 000 à 2 000 000 bouteilles / mois",
    emplois: "15 à 25",
    opportunite: "Dépendance actuelle aux importations de préformes et bouteilles.",
    process: [
      "Chauffage des préformes",
      "Soufflage",
      "Refroidissement",
      "Conditionnement"
    ],
    niveau_maturite: "Élevé",
    complexite: "Moyenne",
    priorite_guinee: "Très élevée",
    bp_gratuit: { inclus: true },
    bp_professionnel: { inclus: true }
  },

  rechapage_pneus: {
    unite: "Rechapage de pneus",
    filiere: "Plastique & Caoutchouc",
    description: "Reconditionnement de pneus usagés pour véhicules légers et poids lourds.",
    marche: "Transport, logistique, mines",
    capex_min: 95000,
    capex_max: 250000,
    opex_mensuel: 28000,
    capacite: "200 à 600 pneus / mois",
    emplois: "12 à 20",
    opportunite: "Réduction des coûts de transport et fort impact environnemental positif.",
    process: [
      "Inspection des carcasses",
      "Rabotage",
      "Pose de la nouvelle bande",
      "Vulcanisation"
    ],
    niveau_maturite: "Moyen",
    complexite: "Moyenne",
    priorite_guinee: "Élevée",
    bp_gratuit: { inclus: true },
    bp_professionnel: { inclus: true }
  },

  tuyaux_pvc: {
    unite: "Production de tuyaux PVC",
    filiere: "Plastique & Caoutchouc",
    description: "Fabrication de tuyaux PVC pour irrigation, assainissement et construction.",
    marche: "BTP, agriculture, hydraulique",
    capex_min: 130000,
    capex_max: 350000,
    opex_mensuel: 40000,
    capacite: "50 à 150 tonnes / mois",
    emplois: "18 à 30",
    opportunite: "Besoin structurel en infrastructures hydrauliques.",
    process: [
      "Mélange des granulés",
      "Extrusion",
      "Refroidissement",
      "Découpe et stockage"
    ],
    niveau_maturite: "Élevé",
    complexite: "Élevée",
    priorite_guinee: "Très élevée",
    bp_gratuit: { inclus: true },
    bp_professionnel: { inclus: true }
  },

  emballages_plastiques: {
    unite: "Emballages plastiques",
    filiere: "Plastique & Caoutchouc",
    description: "Production de films et emballages plastiques pour l’agroalimentaire.",
    marche: "Industrie agroalimentaire",
    capex_min: 85000,
    capex_max: 220000,
    opex_mensuel: 26000,
    capacite: "20 à 70 tonnes / mois",
    emplois: "12 à 20",
    opportunite: "Croissance du secteur agroalimentaire local.",
    process: [
      "Extrusion du film",
      "Impression",
      "Découpe",
      "Conditionnement"
    ],
    niveau_maturite: "Moyen",
    complexite: "Moyenne",
    priorite_guinee: "Élevée",
    bp_gratuit: { inclus: true },
    bp_professionnel: { inclus: true }
  },

  jouets_plastique: {
    unite: "Fabrication de jouets en plastique",
    filiere: "Plastique & Caoutchouc",
    description: "Production de jouets simples et éducatifs pour enfants.",
    marche: "Marché local et régional",
    capex_min: 70000,
    capex_max: 180000,
    opex_mensuel: 20000,
    capacite: "20 000 à 80 000 unités / mois",
    emplois: "10 à 18",
    opportunite: "Très forte consommation locale et importations dominantes.",
    process: [
      "Injection plastique",
      "Assemblage",
      "Contrôle qualité",
      "Emballage"
    ],
    niveau_maturite: "Moyen",
    complexite: "Moyenne",
    priorite_guinee: "Élevée",
    bp_gratuit: { inclus: true },
    bp_professionnel: { inclus: true }
  },

  profiles_plastiques: {
    unite: "Production de profilés plastiques",
    filiere: "Plastique & Caoutchouc",
    description: "Extrusion de profilés plastiques pour construction, ameublement et industrie.",
    marche: "BTP et industrie",
    capex_min: 120000,
    capex_max: 300000,
    opex_mensuel: 35000,
    capacite: "40 à 120 tonnes / mois",
    emplois: "15 à 25",
    opportunite: "Développement du secteur immobilier et industriel.",
    process: [
      "Extrusion",
      "Calibration",
      "Découpe",
      "Stockage"
    ],
    niveau_maturite: "Moyen",
    complexite: "Élevée",
    priorite_guinee: "Élevée",
    bp_gratuit: { inclus: true },
    bp_professionnel: { inclus: true }
  },

  joints_caoutchouc: {
    unite: "Fabrication de joints en caoutchouc",
    filiere: "Plastique & Caoutchouc",
    description: "Production de joints d’étanchéité et pièces techniques en caoutchouc.",
    marche: "Industrie, BTP, mécanique",
    capex_min: 60000,
    capex_max: 150000,
    opex_mensuel: 18000,
    capacite: "Production sur commande",
    emplois: "8 à 14",
    opportunite: "Forte valeur ajoutée et usages industriels multiples.",
    process: [
      "Moulage",
      "Vulcanisation",
      "Découpe",
      "Contrôle qualité"
    ],
    niveau_maturite: "Moyen",
    complexite: "Moyenne",
    priorite_guinee: "Élevée",
    bp_gratuit: { inclus: true },
    bp_professionnel: { inclus: true }
  }

});

console.log("Filière Plastique & Caoutchouc chargée");

/* =========================================================
   FILIERE : Électronique & Électricité
   ========================================================= */

Object.assign(window.productions, {

  cables_electriques: {
    unite: "Fabrication de câbles électriques",
    filiere: "Électronique & Électricité",
    description: "Production de câbles et fils électriques pour le bâtiment, l’industrie et les infrastructures énergétiques.",
    marche: "BTP, industrie, énergie",
    capex_min: 125000,
    capex_max: 350000,
    opex_mensuel: 45000,
    capacite: "50 à 150 tonnes / mois",
    emplois: "20 à 35",
    opportunite: "Forte demande liée à l’urbanisation et à l’électrification.",
    process: [
      "Tréfilage du cuivre ou aluminium",
      "Isolation des conducteurs",
      "Gaine extérieure",
      "Bobinage et contrôle qualité"
    ],
    niveau_maturite: "Élevé",
    complexite: "Élevée",
    priorite_guinee: "Très élevée",
    bp_gratuit: { inclus: true },
    bp_professionnel: { inclus: true }
  },

  panneaux_solaires: {
    unite: "Assemblage de panneaux solaires",
    filiere: "Électronique & Électricité",
    description: "Assemblage de kits solaires photovoltaïques pour électrification rurale et sites isolés.",
    marche: "Énergie, zones rurales, ONG",
    capex_min: 180000,
    capex_max: 450000,
    opex_mensuel: 38000,
    capacite: "500 à 2 000 kits / mois",
    emplois: "15 à 25",
    opportunite: "Transition énergétique et électrification hors réseau.",
    process: [
      "Assemblage des cellules",
      "Encapsulation",
      "Câblage",
      "Tests et conditionnement"
    ],
    niveau_maturite: "Moyen",
    complexite: "Moyenne",
    priorite_guinee: "Très élevée",
    bp_gratuit: { inclus: true },
    bp_professionnel: { inclus: true }
  },

  appareils_electroniques: {
    unite: "Assemblage d'appareils électroniques",
    filiere: "Électronique & Électricité",
    description: "Montage de petits appareils électroniques : chargeurs, radios, téléviseurs et équipements domestiques.",
    marche: "Grand public",
    capex_min: 95000,
    capex_max: 250000,
    opex_mensuel: 30000,
    capacite: "5 000 à 20 000 unités / mois",
    emplois: "12 à 20",
    opportunite: "Réduction des importations et forte demande locale.",
    process: [
      "Assemblage des composants",
      "Soudure électronique",
      "Tests fonctionnels",
      "Emballage"
    ],
    niveau_maturite: "Moyen",
    complexite: "Moyenne",
    priorite_guinee: "Élevée",
    bp_gratuit: { inclus: true },
    bp_professionnel: { inclus: true }
  },

  lampes_led: {
    unite: "Production de lampes LED",
    filiere: "Électronique & Électricité",
    description: "Assemblage de lampes LED basse consommation pour usage domestique et éclairage public.",
    marche: "Ménages, collectivités",
    capex_min: 65000,
    capex_max: 160000,
    opex_mensuel: 20000,
    capacite: "10 000 à 50 000 lampes / mois",
    emplois: "10 à 18",
    opportunite: "Économie d’énergie et programmes d’éclairage public.",
    process: [
      "Assemblage LED",
      "Montage des circuits",
      "Test luminosité",
      "Conditionnement"
    ],
    niveau_maturite: "Élevé",
    complexite: "Faible à moyenne",
    priorite_guinee: "Très élevée",
    bp_gratuit: { inclus: true },
    bp_professionnel: { inclus: true }
  },

  tableaux_electriques: {
    unite: "Fabrication de tableaux électriques",
    filiere: "Électronique & Électricité",
    description: "Production de tableaux de distribution électrique et coffrets pour bâtiments et industries.",
    marche: "BTP, industrie",
    capex_min: 85000,
    capex_max: 220000,
    opex_mensuel: 28000,
    capacite: "300 à 1 000 tableaux / mois",
    emplois: "12 à 22",
    opportunite: "Normes électriques et expansion immobilière.",
    process: [
      "Assemblage des coffrets",
      "Câblage interne",
      "Installation des protections",
      "Tests de sécurité"
    ],
    niveau_maturite: "Élevé",
    complexite: "Moyenne",
    priorite_guinee: "Très élevée",
    bp_gratuit: { inclus: true },
    bp_professionnel: { inclus: true }
  },

  onduleurs: {
    unite: "Assemblage d'onduleurs",
    filiere: "Électronique & Électricité",
    description: "Montage d’onduleurs et régulateurs pour systèmes solaires et réseaux instables.",
    marche: "Énergie solaire, entreprises",
    capex_min: 110000,
    capex_max: 300000,
    opex_mensuel: 32000,
    capacite: "500 à 2 000 unités / mois",
    emplois: "12 à 20",
    opportunite: "Besoin critique de stabilisation électrique.",
    process: [
      "Assemblage électronique",
      "Programmation",
      "Tests de charge",
      "Conditionnement"
    ],
    niveau_maturite: "Moyen",
    complexite: "Élevée",
    priorite_guinee: "Très élevée",
    bp_gratuit: { inclus: true },
    bp_professionnel: { inclus: true }
  },

  compteurs_electriques: {
    unite: "Production de compteurs électriques",
    filiere: "Électronique & Électricité",
    description: "Assemblage de compteurs d’énergie monophasés et triphasés.",
    marche: "Compagnies d’électricité",
    capex_min: 150000,
    capex_max: 400000,
    opex_mensuel: 40000,
    capacite: "5 000 à 20 000 unités / mois",
    emplois: "18 à 30",
    opportunite: "Modernisation des réseaux électriques.",
    process: [
      "Assemblage électronique",
      "Calibration",
      "Certification",
      "Conditionnement"
    ],
    niveau_maturite: "Moyen",
    complexite: "Élevée",
    priorite_guinee: "Élevée",
    bp_gratuit: { inclus: true },
    bp_professionnel: { inclus: true }
  },

  batteries: {
    unite: "Fabrication de batteries",
    filiere: "Électronique & Électricité",
    description: "Production de batteries pour automobiles, motos et stockage stationnaire.",
    marche: "Transport, énergie",
    capex_min: 200000,
    capex_max: 600000,
    opex_mensuel: 60000,
    capacite: "2 000 à 8 000 batteries / mois",
    emplois: "25 à 45",
    opportunite: "Croissance du parc automobile et solaire.",
    process: [
      "Assemblage des cellules",
      "Remplissage électrolyte",
      "Scellage",
      "Tests et stockage"
    ],
    niveau_maturite: "Moyen",
    complexite: "Très élevée",
    priorite_guinee: "Élevée",
    bp_gratuit: { inclus: true },
    bp_professionnel: { inclus: true }
  }

});

console.log("Filière Électronique & Électricité chargée");

/* =========================================================
   FILIERE : Petits Matériels Médicaux
   ========================================================= */

Object.assign(window.productions, {

  masques_medicaux: {
    unite: "Production de masques médicaux",
    filiere: "Petits Matériels Médicaux",
    description: "Fabrication de masques chirurgicaux et masques de protection médicale à usage sanitaire.",
    marche: "Hôpitaux, cliniques, pharmacies",
    capex_min: 35000,
    capex_max: 120000,
    opex_mensuel: 15000,
    capacite: "500 000 à 2 millions de masques / mois",
    emplois: "10 à 20",
    opportunite: "Forte demande structurelle et souveraineté sanitaire.",
    process: [
      "Découpe des non-tissés",
      "Assemblage et soudure",
      "Pose des élastiques",
      "Stérilisation et conditionnement"
    ],
    niveau_maturite: "Élevé",
    complexite: "Faible",
    priorite_guinee: "Très élevée",
    bp_gratuit: { inclus: true },
    bp_professionnel: { inclus: true }
  },

  bandages: {
    unite: "Production de bandages et pansements",
    filiere: "Petits Matériels Médicaux",
    description: "Fabrication de bandages, compresses et pansements médicaux stériles.",
    marche: "Structures de santé, pharmacies",
    capex_min: 45000,
    capex_max: 150000,
    opex_mensuel: 18000,
    capacite: "100 000 à 500 000 unités / mois",
    emplois: "12 à 22",
    opportunite: "Consommation quotidienne et forte récurrence.",
    process: [
      "Découpe textile",
      "Assemblage",
      "Stérilisation",
      "Conditionnement"
    ],
    niveau_maturite: "Élevé",
    complexite: "Faible",
    priorite_guinee: "Très élevée",
    bp_gratuit: { inclus: true },
    bp_professionnel: { inclus: true }
  },

  mobilier_medical: {
    unite: "Fabrication de mobilier médical",
    filiere: "Petits Matériels Médicaux",
    description: "Production de lits médicaux, tables d’examen et chariots hospitaliers.",
    marche: "Hôpitaux, cliniques, centres de santé",
    capex_min: 70000,
    capex_max: 220000,
    opex_mensuel: 25000,
    capacite: "100 à 400 unités / mois",
    emplois: "15 à 30",
    opportunite: "Déficit d’équipements hospitaliers locaux.",
    process: [
      "Découpe métal / bois",
      "Assemblage",
      "Traitement de surface",
      "Contrôle qualité"
    ],
    niveau_maturite: "Moyen",
    complexite: "Moyenne",
    priorite_guinee: "Élevée",
    bp_gratuit: { inclus: true },
    bp_professionnel: { inclus: true }
  },

  fauteuils_roulants: {
    unite: "Fabrication de fauteuils roulants",
    filiere: "Petits Matériels Médicaux",
    description: "Production de fauteuils roulants manuels et aides à la mobilité.",
    marche: "Hôpitaux, ONG, particuliers",
    capex_min: 85000,
    capex_max: 260000,
    opex_mensuel: 28000,
    capacite: "50 à 200 unités / mois",
    emplois: "12 à 25",
    opportunite: "Forte demande sociale et humanitaire.",
    process: [
      "Fabrication châssis",
      "Assemblage roues et sièges",
      "Finitions",
      "Contrôle qualité"
    ],
    niveau_maturite: "Moyen",
    complexite: "Moyenne",
    priorite_guinee: "Élevée",
    bp_gratuit: { inclus: true },
    bp_professionnel: { inclus: true }
  },

  instruments_medicaux: {
    unite: "Fabrication d’instruments médicaux de base",
    filiere: "Petits Matériels Médicaux",
    description: "Production d’instruments médicaux simples et matériels hospitaliers non invasifs.",
    marche: "Hôpitaux, cliniques",
    capex_min: 120000,
    capex_max: 350000,
    opex_mensuel: 35000,
    capacite: "5 000 à 20 000 instruments / mois",
    emplois: "20 à 35",
    opportunite: "Réduction des importations de matériel médical.",
    process: [
      "Usinage / formage",
      "Assemblage",
      "Stérilisation",
      "Conditionnement"
    ],
    niveau_maturite: "Moyen",
    complexite: "Élevée",
    priorite_guinee: "Élevée",
    bp_gratuit: { inclus: true },
    bp_professionnel: { inclus: true }
  },

  bequilles_cannes: {
    unite: "Production de béquilles et cannes",
    filiere: "Petits Matériels Médicaux",
    description: "Fabrication de béquilles et cannes en aluminium et matériaux légers.",
    marche: "Structures médicales, particuliers",
    capex_min: 55000,
    capex_max: 150000,
    opex_mensuel: 18000,
    capacite: "300 à 1 000 unités / mois",
    emplois: "10 à 18",
    opportunite: "Produit simple à forte utilité sociale.",
    process: [
      "Découpe aluminium",
      "Assemblage",
      "Réglage et test",
      "Conditionnement"
    ],
    niveau_maturite: "Élevé",
    complexite: "Faible",
    priorite_guinee: "Élevée",
    bp_gratuit: { inclus: true },
    bp_professionnel: { inclus: true }
  },

  solutions_antiseptiques: {
    unite: "Production de solutions antiseptiques",
    filiere: "Petits Matériels Médicaux",
    description: "Fabrication de solutions hydroalcooliques et antiseptiques médicaux.",
    marche: "Santé, grand public",
    capex_min: 65000,
    capex_max: 180000,
    opex_mensuel: 22000,
    capacite: "5 000 à 30 000 litres / mois",
    emplois: "10 à 18",
    opportunite: "Hygiène hospitalière et prévention sanitaire.",
    process: [
      "Mélange des composants",
      "Contrôle qualité",
      "Remplissage",
      "Étiquetage"
    ],
    niveau_maturite: "Élevé",
    complexite: "Faible",
    priorite_guinee: "Très élevée",
    bp_gratuit: { inclus: true },
    bp_professionnel: { inclus: true }
  },

  kits_medicaux: {
    unite: "Assemblage de kits médicaux",
    filiere: "Petits Matériels Médicaux",
    description: "Assemblage de trousses de premiers secours et kits médicaux standards.",
    marche: "ONG, entreprises, ménages",
    capex_min: 50000,
    capex_max: 130000,
    opex_mensuel: 17000,
    capacite: "1 000 à 5 000 kits / mois",
    emplois: "8 à 15",
    opportunite: "Marché humanitaire et prévention.",
    process: [
      "Sélection des composants",
      "Assemblage",
      "Contrôle",
      "Conditionnement"
    ],
    niveau_maturite: "Élevé",
    complexite: "Faible",
    priorite_guinee: "Élevée",
    bp_gratuit: { inclus: true },
    bp_professionnel: { inclus: true }
  }

});

console.log("Filière Petits Matériels Médicaux chargée");

/* =========================================================
   FILIERE : Assemblage & Montage
   ========================================================= */

Object.assign(window.productions, {

  smartphones: {
    unite: "Assemblage de smartphones",
    filiere: "Assemblage & Montage",
    description: "Assemblage semi-industriel de smartphones et tablettes à partir de kits CKD, avec contrôle qualité, SAV local et ciblage des marchés institutionnels.",
    marche: "Opérateurs télécoms, administrations, distributeurs agréés",
    capex_min: 300000,
    capex_max: 600000,
    opex_mensuel: 45000,
    capacite: "20 000 à 50 000 unités / mois",
    emplois: "25 à 40",
    opportunite: "Substitution aux importations et accès aux marchés institutionnels.",
    process: [
      "Réception des kits CKD",
      "Assemblage des composants",
      "Tests fonctionnels",
      "Configuration logicielle",
      "Conditionnement et SAV"
    ],
    niveau_maturite: "Moyen",
    complexite: "Élevée",
    priorite_guinee: "Élevée",
    bp_gratuit: { inclus: true },
    bp_professionnel: { inclus: true }
  },

  tricycles: {
    unite: "Assemblage de tricycles",
    filiere: "Assemblage & Montage",
    description: "Montage de tricycles utilitaires destinés au transport urbain, à l’agriculture et aux services logistiques.",
    marche: "PME, collectivités, agriculteurs",
    capex_min: 140000,
    capex_max: 280000,
    opex_mensuel: 22000,
    capacite: "300 à 800 unités / mois",
    emplois: "15 à 25",
    opportunite: "Forte demande pour la logistique urbaine et rurale.",
    process: [
      "Assemblage châssis",
      "Montage moteur",
      "Installation électrique",
      "Tests et mise en service"
    ],
    niveau_maturite: "Élevé",
    complexite: "Moyenne",
    priorite_guinee: "Très élevée",
    bp_gratuit: { inclus: true },
    bp_professionnel: { inclus: true }
  },

  bicyclettes: {
    unite: "Assemblage de bicyclettes",
    filiere: "Assemblage & Montage",
    description: "Montage de bicyclettes et vélos utilitaires à partir de pièces importées pour mobilité urbaine et rurale.",
    marche: "Ménages, collectivités, ONG",
    capex_min: 90000,
    capex_max: 180000,
    opex_mensuel: 16000,
    capacite: "800 à 2 000 unités / mois",
    emplois: "10 à 18",
    opportunite: "Mobilité douce, faible coût et forte demande.",
    process: [
      "Assemblage cadre",
      "Montage transmission",
      "Installation freins",
      "Contrôle sécurité"
    ],
    niveau_maturite: "Élevé",
    complexite: "Faible",
    priorite_guinee: "Élevée",
    bp_gratuit: { inclus: true },
    bp_professionnel: { inclus: true }
  },

  climatiseurs: {
    unite: "Assemblage de climatiseurs",
    filiere: "Assemblage & Montage",
    description: "Assemblage de climatiseurs splits et mobiles avec bancs de test, installation et SAV structuré.",
    marche: "Bâtiments, hôtels, bureaux, administrations",
    capex_min: 220000,
    capex_max: 450000,
    opex_mensuel: 35000,
    capacite: "2 000 à 5 000 unités / mois",
    emplois: "20 à 30",
    opportunite: "Marché structurel lié au climat et à l’urbanisation.",
    process: [
      "Assemblage unités",
      "Chargement fluide",
      "Tests de performance",
      "Conditionnement"
    ],
    niveau_maturite: "Moyen",
    complexite: "Élevée",
    priorite_guinee: "Élevée",
    bp_gratuit: { inclus: true },
    bp_professionnel: { inclus: true }
  },

  electromenager: {
    unite: "Assemblage d’électroménager",
    filiere: "Assemblage & Montage",
    description: "Assemblage de réfrigérateurs, cuisinières et appareils électroménagers à partir de kits CKD.",
    marche: "Ménages, promoteurs immobiliers, distributeurs",
    capex_min: 200000,
    capex_max: 400000,
    opex_mensuel: 38000,
    capacite: "1 500 à 4 000 unités / mois",
    emplois: "25 à 35",
    opportunite: "Demande domestique forte et continue.",
    process: [
      "Assemblage mécanique",
      "Installation électrique",
      "Tests sécurité",
      "Conditionnement"
    ],
    niveau_maturite: "Moyen",
    complexite: "Élevée",
    priorite_guinee: "Élevée",
    bp_gratuit: { inclus: true },
    bp_professionnel: { inclus: true }
  },

  meubles: {
    unite: "Assemblage de meubles",
    filiere: "Assemblage & Montage",
    description: "Assemblage de meubles en kit pour logements, bureaux et institutions avec forte intensité de main-d’œuvre locale.",
    marche: "Ménages, entreprises, administrations",
    capex_min: 70000,
    capex_max: 150000,
    opex_mensuel: 15000,
    capacite: "1 000 à 3 000 meubles / mois",
    emplois: "10 à 20",
    opportunite: "Substitution aux importations et création d’emplois.",
    process: [
      "Réception des kits",
      "Assemblage",
      "Contrôle qualité",
      "Livraison"
    ],
    niveau_maturite: "Élevé",
    complexite: "Faible",
    priorite_guinee: "Très élevée",
    bp_gratuit: { inclus: true },
    bp_professionnel: { inclus: true }
  },

  ordinateurs: {
    unite: "Assemblage d’ordinateurs",
    filiere: "Assemblage & Montage",
    description: "Assemblage de PC fixes, ordinateurs portables et périphériques pour administrations, écoles et entreprises.",
    marche: "Administrations, écoles, entreprises",
    capex_min: 120000,
    capex_max: 250000,
    opex_mensuel: 20000,
    capacite: "1 000 à 3 000 unités / mois",
    emplois: "15 à 25",
    opportunite: "Souveraineté numérique et marchés publics.",
    process: [
      "Assemblage composants",
      "Installation OS",
      "Tests performance",
      "Configuration client"
    ],
    niveau_maturite: "Élevé",
    complexite: "Moyenne",
    priorite_guinee: "Élevée",
    bp_gratuit: { inclus: true },
    bp_professionnel: { inclus: true }
  },

  motos: {
    unite: "Assemblage de motos",
    filiere: "Assemblage & Montage",
    description: "Assemblage industriel de motos et scooters à partir de kits CKD avec réseau de distribution et SAV.",
    marche: "Transporteurs, particuliers, administrations",
    capex_min: 280000,
    capex_max: 550000,
    opex_mensuel: 40000,
    capacite: "1 000 à 3 000 unités / mois",
    emplois: "25 à 40",
    opportunite: "Marché massif et structurant pour la mobilité.",
    process: [
      "Assemblage châssis",
      "Montage moteur",
      "Installation électrique",
      "Tests routiers"
    ],
    niveau_maturite: "Moyen",
    complexite: "Élevée",
    priorite_guinee: "Très élevée",
    bp_gratuit: { inclus: true },
    bp_professionnel: { inclus: true }
  }

});

/* =========================================================
   FILIERE : Recyclage & Valorisation
   ========================================================= */

Object.assign(window.productions, {

  recyclage_plastique: {
    unite: "Recyclage du plastique",
    filiere: "Recyclage & Valorisation",
    description: "Collecte, tri, lavage et broyage des déchets plastiques (PET, PEHD, PP) pour la production de granulés plastiques destinés à l’industrie.",
    marche: "Industrie plastique locale et régionale",
    capex_min: 110000,
    capex_max: 180000,
    opex_mensuel: 25000,
    capacite: "10 à 40 tonnes / mois",
    emplois: "15 à 30",
    opportunite: "Forte demande industrielle et soutien des politiques environnementales.",
    process: [
      "Collecte et tri",
      "Lavage",
      "Broyage",
      "Granulation",
      "Conditionnement"
    ],
    niveau_maturite: "Élevé",
    complexite: "Moyenne",
    priorite_guinee: "Très élevée",
    bp_gratuit: { inclus: true },
    bp_professionnel: { inclus: true }
  },

  recyclage_papier: {
    unite: "Recyclage du papier",
    filiere: "Recyclage & Valorisation",
    description: "Transformation de papiers et cartons usagés en pâte recyclée et produits papier simples.",
    marche: "Emballage et industrie",
    capex_min: 120000,
    capex_max: 200000,
    opex_mensuel: 30000,
    capacite: "15 à 50 tonnes / mois",
    emplois: "20 à 35",
    opportunite: "Réduction des importations et partenariats municipaux.",
    process: [
      "Collecte",
      "Broyage",
      "Pulpage",
      "Pressage",
      "Séchage"
    ],
    niveau_maturite: "Moyen",
    complexite: "Moyenne",
    priorite_guinee: "Élevée",
    bp_gratuit: { inclus: true },
    bp_professionnel: { inclus: true }
  },

  recyclage_metaux: {
    unite: "Recyclage des métaux",
    filiere: "Recyclage & Valorisation",
    description: "Collecte, tri et transformation de métaux ferreux et non ferreux en matières premières secondaires.",
    marche: "BTP et industrie",
    capex_min: 130000,
    capex_max: 250000,
    opex_mensuel: 35000,
    capacite: "20 à 60 tonnes / mois",
    emplois: "20 à 40",
    opportunite: "Marché rentable et débouchés immédiats.",
    process: [
      "Collecte",
      "Tri",
      "Découpe",
      "Compactage",
      "Revente industrielle"
    ],
    niveau_maturite: "Élevé",
    complexite: "Faible à moyenne",
    priorite_guinee: "Très élevée",
    bp_gratuit: { inclus: true },
    bp_professionnel: { inclus: true }
  },

  compost: {
    unite: "Production de compost",
    filiere: "Recyclage & Valorisation",
    description: "Valorisation des déchets organiques en compost et amendements agricoles naturels.",
    marche: "Agriculture et maraîchage",
    capex_min: 50000,
    capex_max: 90000,
    opex_mensuel: 15000,
    capacite: "30 à 100 tonnes / mois",
    emplois: "10 à 20",
    opportunite: "Forte demande agricole et impact environnemental positif.",
    process: [
      "Collecte",
      "Tri",
      "Fermentation",
      "Maturation",
      "Conditionnement"
    ],
    niveau_maturite: "Élevé",
    complexite: "Faible",
    priorite_guinee: "Élevée",
    bp_gratuit: { inclus: true },
    bp_professionnel: { inclus: false }
  },

  recyclage_verre: {
    unite: "Recyclage du verre",
    filiere: "Recyclage & Valorisation",
    description: "Broyage et transformation du verre usagé en granulats et matières premières pour le BTP.",
    marche: "BTP et industrie",
    capex_min: 150000,
    capex_max: 300000,
    opex_mensuel: 30000,
    capacite: "20 à 50 tonnes / mois",
    emplois: "15 à 30",
    opportunite: "Substitution aux matériaux importés.",
    process: [
      "Collecte",
      "Tri",
      "Broyage",
      "Tamisage",
      "Stockage"
    ],
    niveau_maturite: "Moyen",
    complexite: "Moyenne",
    priorite_guinee: "Élevée",
    bp_gratuit: { inclus: true },
    bp_professionnel: { inclus: true }
  },

  recyclage_pneus: {
    unite: "Recyclage de pneus",
    filiere: "Recyclage & Valorisation",
    description: "Transformation de pneus usagés en granulats de caoutchouc pour routes et sols sportifs.",
    marche: "BTP et collectivités",
    capex_min: 150000,
    capex_max: 300000,
    opex_mensuel: 35000,
    capacite: "10 à 30 tonnes / mois",
    emplois: "15 à 25",
    opportunite: "Forte demande publique et environnementale.",
    process: [
      "Collecte",
      "Découpage",
      "Broyage",
      "Granulation",
      "Conditionnement"
    ],
    niveau_maturite: "Moyen",
    complexite: "Moyenne",
    priorite_guinee: "Très élevée",
    bp_gratuit: { inclus: true },
    bp_professionnel: { inclus: true }
  },

  recyclage_huiles: {
    unite: "Recyclage d’huiles usagées",
    filiere: "Recyclage & Valorisation",
    description: "Collecte et régénération d’huiles de moteur et industrielles usagées.",
    marche: "Industrie et transport",
    capex_min: 80000,
    capex_max: 150000,
    opex_mensuel: 20000,
    capacite: "50 000 à 150 000 litres / mois",
    emplois: "10 à 20",
    opportunite: "Pollution évitée et marché industriel stable.",
    process: [
      "Collecte",
      "Filtration",
      "Décantation",
      "Régénération",
      "Conditionnement"
    ],
    niveau_maturite: "Moyen",
    complexite: "Moyenne",
    priorite_guinee: "Élevée",
    bp_gratuit: { inclus: true },
    bp_professionnel: { inclus: true }
  },

  recyclage_deee: {
    unite: "Recyclage DEEE",
    filiere: "Recyclage & Valorisation",
    description: "Démantèlement et valorisation des déchets d’équipements électriques et électroniques.",
    marche: "Industrie du recyclage",
    capex_min: 160000,
    capex_max: 300000,
    opex_mensuel: 35000,
    capacite: "5 à 15 tonnes / mois",
    emplois: "20 à 35",
    opportunite: "Filière soutenue par bailleurs internationaux.",
    process: [
      "Collecte",
      "Démantèlement",
      "Tri",
      "Valorisation matières",
      "Revente"
    ],
    niveau_maturite: "Moyen",
    complexite: "Élevée",
    priorite_guinee: "Très élevée",
    bp_gratuit: { inclus: true },
    bp_professionnel: { inclus: true }
  }

});

/* =========================================================
   FILIERE : Services Industriels
   ========================================================= */

Object.assign(window.productions, {

  nettoyage_industriel: {
    unite: "Services de nettoyage industriel",
    filiere: "Services Industriels",
    description: "Prestations de nettoyage industriel, dépollution de sites, entretien technique d’usines et zones industrielles.",
    marche: "Industries, BTP, mines",
    capex_min: 40000,
    capex_max: 90000,
    opex_mensuel: 20000,
    capacite: "10 à 30 sites / mois",
    emplois: "15 à 30",
    opportunite: "Externalisation croissante des services industriels.",
    process: [
      "Diagnostic du site",
      "Mobilisation des équipes",
      "Nettoyage spécialisé",
      "Contrôle qualité",
      "Reporting client"
    ],
    niveau_maturite: "Élevé",
    complexite: "Faible",
    priorite_guinee: "Très élevée",
    bp_gratuit: { inclus: true },
    bp_professionnel: { inclus: true }
  },

  maintenance_industrielle: {
    unite: "Maintenance industrielle",
    filiere: "Services Industriels",
    description: "Maintenance préventive et corrective des équipements, machines et lignes de production.",
    marche: "Industries et mines",
    capex_min: 90000,
    capex_max: 180000,
    opex_mensuel: 30000,
    capacite: "20 à 50 interventions / mois",
    emplois: "20 à 35",
    opportunite: "Besoin critique pour la continuité industrielle.",
    process: [
      "Audit équipements",
      "Maintenance préventive",
      "Dépannage",
      "Remise en service",
      "Suivi technique"
    ],
    niveau_maturite: "Élevé",
    complexite: "Moyenne",
    priorite_guinee: "Très élevée",
    bp_gratuit: { inclus: true },
    bp_professionnel: { inclus: true }
  },

  logistique_industrielle: {
    unite: "Logistique industrielle",
    filiere: "Services Industriels",
    description: "Gestion logistique industrielle incluant entreposage, manutention et transport.",
    marche: "Industries et zones économiques",
    capex_min: 120000,
    capex_max: 300000,
    opex_mensuel: 40000,
    capacite: "1 000 à 3 000 palettes / mois",
    emplois: "25 à 45",
    opportunite: "Chaîne logistique encore sous-développée.",
    process: [
      "Réception marchandises",
      "Stockage",
      "Gestion inventaire",
      "Manutention",
      "Distribution"
    ],
    niveau_maturite: "Moyen",
    complexite: "Moyenne",
    priorite_guinee: "Élevée",
    bp_gratuit: { inclus: true },
    bp_professionnel: { inclus: true }
  },

  formation_industrielle: {
    unite: "Centre de formation industrielle",
    filiere: "Services Industriels",
    description: "Formation aux métiers industriels, maintenance, production, sécurité et qualité.",
    marche: "Entreprises et jeunes diplômés",
    capex_min: 70000,
    capex_max: 150000,
    opex_mensuel: 20000,
    capacite: "200 à 500 apprenants / an",
    emplois: "10 à 20",
    opportunite: "Manque critique de compétences industrielles.",
    process: [
      "Conception des programmes",
      "Formation théorique",
      "Formation pratique",
      "Évaluation",
      "Certification"
    ],
    niveau_maturite: "Moyen",
    complexite: "Faible à moyenne",
    priorite_guinee: "Très élevée",
    bp_gratuit: { inclus: true },
    bp_professionnel: { inclus: true }
  },

  controle_qualite: {
    unite: "Contrôle qualité industriel",
    filiere: "Services Industriels",
    description: "Contrôle, tests, audits et accompagnement qualité pour produits industriels.",
    marche: "Industries locales et exportatrices",
    capex_min: 60000,
    capex_max: 130000,
    opex_mensuel: 18000,
    capacite: "50 à 150 audits / an",
    emplois: "8 à 15",
    opportunite: "Préparation à l’export et aux normes internationales.",
    process: [
      "Tests produits",
      "Audits qualité",
      "Rapports",
      "Recommandations",
      "Suivi conformité"
    ],
    niveau_maturite: "Moyen",
    complexite: "Moyenne",
    priorite_guinee: "Élevée",
    bp_gratuit: { inclus: true },
    bp_professionnel: { inclus: true }
  },

  bureau_etudes: {
    unite: "Bureau d’études techniques",
    filiere: "Services Industriels",
    description: "Études techniques, ingénierie et conception de projets industriels.",
    marche: "Industries, BTP, énergie",
    capex_min: 55000,
    capex_max: 120000,
    opex_mensuel: 18000,
    capacite: "20 à 50 projets / an",
    emplois: "8 à 15",
    opportunite: "Externalisation de l’ingénierie.",
    process: [
      "Analyse du besoin",
      "Études techniques",
      "Dimensionnement",
      "Plans et dossiers",
      "Assistance projet"
    ],
    niveau_maturite: "Moyen",
    complexite: "Élevée",
    priorite_guinee: "Élevée",
    bp_gratuit: { inclus: true },
    bp_professionnel: { inclus: true }
  },

  securite_industrielle: {
    unite: "Sécurité industrielle",
    filiere: "Services Industriels",
    description: "Prévention des risques industriels, audits HSE et équipements de protection.",
    marche: "Industries, mines, BTP",
    capex_min: 50000,
    capex_max: 100000,
    opex_mensuel: 15000,
    capacite: "30 à 80 audits / an",
    emplois: "10 à 20",
    opportunite: "Exigences réglementaires croissantes.",
    process: [
      "Audit HSE",
      "Évaluation des risques",
      "Formation",
      "Équipements",
      "Suivi conformité"
    ],
    niveau_maturite: "Élevé",
    complexite: "Faible à moyenne",
    priorite_guinee: "Très élevée",
    bp_gratuit: { inclus: true },
    bp_professionnel: { inclus: true }
  },

  services_energetiques: {
    unite: "Services énergétiques",
    filiere: "Services Industriels",
    description: "Audit énergétique, optimisation et gestion de l’énergie pour sites industriels.",
    marche: "Industries énergivores",
    capex_min: 100000,
    capex_max: 200000,
    opex_mensuel: 25000,
    capacite: "20 à 60 sites / an",
    emplois: "12 à 25",
    opportunite: "Réduction des coûts énergétiques.",
    process: [
      "Audit énergétique",
      "Analyse consommation",
      "Solutions techniques",
      "Mise en œuvre",
      "Suivi performance"
    ],
    niveau_maturite: "Moyen",
    complexite: "Élevée",
    priorite_guinee: "Très élevée",
    bp_gratuit: { inclus: true },
    bp_professionnel: { inclus: true }
  }

});

/* =========================================================
   FILIERE : Énergie, Eau & Environnement
   ========================================================= */

Object.assign(window.productions, {

  poteaux_electriques: {
    unite: "Fabrication de poteaux électriques en béton",
    filiere: "Énergie, Eau & Environnement",
    description: "Production industrielle de poteaux en béton armé pour réseaux électriques, télécoms et éclairage public.",
    marche: "État, électriciens, télécoms",
    capex_min: 150000,
    capex_max: 350000,
    opex_mensuel: 45000,
    capacite: "300 à 1 000 poteaux / mois",
    emplois: "25 à 40",
    opportunite: "Forte demande nationale en infrastructures.",
    process: [
      "Préparation du béton",
      "Coulage et vibration",
      "Cure",
      "Finition",
      "Stockage"
    ],
    niveau_maturite: "Élevé",
    complexite: "Moyenne",
    priorite_guinee: "Très élevée",
    bp_gratuit: { inclus: true },
    bp_professionnel: { inclus: true }
  },

  compteurs_eau: {
    unite: "Production de compteurs d’eau",
    filiere: "Énergie, Eau & Environnement",
    description: "Assemblage et calibration de compteurs d’eau pour réseaux urbains et ruraux.",
    marche: "Sociétés d’eau, collectivités",
    capex_min: 120000,
    capex_max: 250000,
    opex_mensuel: 30000,
    capacite: "2 000 à 6 000 unités / mois",
    emplois: "15 à 25",
    opportunite: "Réduction des pertes d’eau.",
    process: [
      "Assemblage",
      "Calibration",
      "Tests",
      "Conditionnement",
      "Distribution"
    ],
    niveau_maturite: "Moyen",
    complexite: "Moyenne",
    priorite_guinee: "Élevée",
    bp_gratuit: { inclus: true },
    bp_professionnel: { inclus: true }
  },

  kits_solaires: {
    unite: "Assemblage de kits solaires domestiques",
    filiere: "Énergie, Eau & Environnement",
    description: "Assemblage de systèmes solaires autonomes pour ménages et PME.",
    marche: "Zones rurales, PME",
    capex_min: 100000,
    capex_max: 220000,
    opex_mensuel: 25000,
    capacite: "300 à 800 kits / mois",
    emplois: "15 à 30",
    opportunite: "Accès à l’énergie hors réseau.",
    process: [
      "Réception composants",
      "Assemblage",
      "Tests",
      "Conditionnement",
      "Distribution"
    ],
    niveau_maturite: "Élevé",
    complexite: "Faible à moyenne",
    priorite_guinee: "Très élevée",
    bp_gratuit: { inclus: true },
    bp_professionnel: { inclus: true }
  },

  lampadaires_solaires: {
    unite: "Production de lampadaires solaires",
    filiere: "Énergie, Eau & Environnement",
    description: "Assemblage de lampadaires solaires pour éclairage public.",
    marche: "Collectivités, projets publics",
    capex_min: 130000,
    capex_max: 300000,
    opex_mensuel: 35000,
    capacite: "150 à 400 unités / mois",
    emplois: "20 à 35",
    opportunite: "Urbanisation et sécurité.",
    process: [
      "Assemblage",
      "Tests électriques",
      "Montage final",
      "Conditionnement",
      "Livraison"
    ],
    niveau_maturite: "Élevé",
    complexite: "Moyenne",
    priorite_guinee: "Très élevée",
    bp_gratuit: { inclus: true },
    bp_professionnel: { inclus: true }
  },

  equipements_hydrauliques: {
    unite: "Forage et équipements hydrauliques",
    filiere: "Énergie, Eau & Environnement",
    description: "Production et intégration d’équipements hydrauliques et de forage.",
    marche: "État, ONG, collectivités",
    capex_min: 160000,
    capex_max: 350000,
    opex_mensuel: 45000,
    capacite: "20 à 50 forages / an",
    emplois: "30 à 50",
    opportunite: "Accès à l’eau potable.",
    process: [
      "Étude site",
      "Forage",
      "Installation équipements",
      "Tests",
      "Maintenance"
    ],
    niveau_maturite: "Moyen",
    complexite: "Élevée",
    priorite_guinee: "Très élevée",
    bp_gratuit: { inclus: true },
    bp_professionnel: { inclus: true }
  },

  traitement_eau: {
    unite: "Traitement et conditionnement de l’eau",
    filiere: "Énergie, Eau & Environnement",
    description: "Mini-stations industrielles de traitement et purification de l’eau.",
    marche: "Collectivités, industries",
    capex_min: 110000,
    capex_max: 250000,
    opex_mensuel: 30000,
    capacite: "50 à 300 m³ / jour",
    emplois: "15 à 25",
    opportunite: "Qualité de l’eau et santé publique.",
    process: [
      "Captage",
      "Filtration",
      "Traitement",
      "Stockage",
      "Distribution"
    ],
    niveau_maturite: "Élevé",
    complexite: "Moyenne",
    priorite_guinee: "Très élevée",
    bp_gratuit: { inclus: true },
    bp_professionnel: { inclus: true }
  },

  maintenance_energetique: {
    unite: "Maintenance d’installations énergétiques",
    filiere: "Énergie, Eau & Environnement",
    description: "Maintenance des installations solaires, hydrauliques et groupes électrogènes.",
    marche: "Industries, collectivités",
    capex_min: 80000,
    capex_max: 150000,
    opex_mensuel: 22000,
    capacite: "40 à 100 interventions / mois",
    emplois: "15 à 25",
    opportunite: "Durabilité des investissements.",
    process: [
      "Diagnostic",
      "Maintenance",
      "Dépannage",
      "Tests",
      "Reporting"
    ],
    niveau_maturite: "Élevé",
    complexite: "Faible à moyenne",
    priorite_guinee: "Très élevée",
    bp_gratuit: { inclus: true },
    bp_professionnel: { inclus: true }
  },

  audit_energie_environnement: {
    unite: "Audit énergétique et environnemental",
    filiere: "Énergie, Eau & Environnement",
    description: "Audit énergétique, diagnostics environnementaux et études d’impact.",
    marche: "Industries, projets publics",
    capex_min: 60000,
    capex_max: 120000,
    opex_mensuel: 18000,
    capacite: "30 à 80 audits / an",
    emplois: "8 à 15",
    opportunite: "Exigences bailleurs et réglementation.",
    process: [
      "Collecte données",
      "Analyse",
      "Rapport",
      "Recommandations",
      "Suivi"
    ],
    niveau_maturite: "Moyen",
    complexite: "Élevée",
    priorite_guinee: "Très élevée",
    bp_gratuit: { inclus: true },
    bp_professionnel: { inclus: true }
  }

});



















