export const locale = {
  meta: {
    title: "Pearly - Assurance maladies graves chiens et chats",
    description:
      "Assurance dédiée aux maladies graves des chiens et des chats. Pearly protège vos compagnons face aux maladies les plus coûteuses.",
  },
  hero: {
    titleLine1: "Quand l'impensable arrive,",
    titleLine2: "vous devriez penser à eux.",
    titleLine3: "Pas à la facture.",
    subtitle: "Assurance dédiée aux maladies graves des chiens et des chats.",
    description:
      "Pearly protège les chiens et les chats face aux maladies graves les plus coûteuses.",
    cta: "Recevoir les informations au lancement",
    disclaimer: "Gratuit • Sans engagement • Aucun paiement",
  },
  diseases: {
    titleHighlight: "Assurance maladies graves pour chiens et chats.",
    titleRest: "C'est quoi une maladie grave ?",
    description:
      "Les maladies graves sont <strong>des affections sérieuses et coûteuses</strong> qui peuvent survenir soudainement. Elles peuvent représenter jusqu'à <strong>plusieurs milliers d'euros de soins</strong> en cas de :",
    cards: [
      { key: "cancer", icon: "/img/icone78-cancer.svg", label: "Cancers" },
      {
        key: "heartDisease",
        icon: "/img/icon78-maladie-cardiaque.svg",
        label: "Maladies cardiaques",
      },
      {
        key: "kidneyFailure",
        icon: "/img/icon78-insuffisance-reinale.svg",
        label: "Insuffisances rénales",
      },
      {
        key: "chronicDisease",
        icon: "/img/icon78-maladie-chronique.svg",
        label: "Maladies chroniques/génétiques",
      },
    ],
    costWarning: "Certains traitements peuvent dépasser <strong>5 000 €</strong> !",
    urgency:
      "Les <strong>maladies graves</strong> peuvent survenir à tout moment.<br/><strong>Pearly vous aide à faire face sans mettre en péril votre budget.</strong>",
  },
  emailSignup: {
    placeholder: "Votre email",
    cta: "Recevoir les informations au lancement",
    disclaimer: "Gratuit • Sans engagement • Aucun paiement",
  },
  simpleGesture: {
    titleHighlight: "Un simple geste aujourd'hui",
    titleRest: "peut tout changer demain.",
    description:
      "En laissant votre email, vous serez informé(e) du lancement de Pearly, vous faites le premier pas pour protéger votre compagnon. Aucun engagement, juste la promesse de rester informé(e).",
    cta: "Recevoir les informations au lancement",
    disclaimer: "Gratuit • Sans engagement • Aucun paiement",
  },
} as const;
