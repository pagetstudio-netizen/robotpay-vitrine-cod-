export const seoCopy = {
  fr: {
    htmlLang: "fr",
    ogLocale: "fr_FR",
    languageName: "Français",
    alternateLanguageName: "English",
    breadcrumb: "Fil d’Ariane",
    nav: {
      home: "Accueil",
      about: "À propos",
      countries: "Pays",
      operators: "Opérateurs",
      contact: "Contact",
      services: "Services"
    },
    labels: {
      network: "Réseau de paiement",
      countryCode: "Indicatif téléphonique",
      methods: "Moyens de paiement répertoriés",
      markets: "Marchés où ce moyen est répertorié",
      availability: "Répertoire des marchés RobotPay",
      contactCta: "Contacter l’équipe RobotPay",
      learnMore: "Voir les détails",
      allMarkets: "Découvrir les pays",
      allOperators: "Découvrir les opérateurs",
      home: "Accueil"
    },
    home: {
      title: "RobotPay, paiements internationaux pour votre entreprise",
      description: "Connectez votre entreprise aux API de paiement, aux réseaux locaux et aux services en ligne ou hors ligne de RobotPay.",
      intro: "RobotPay est un agrégateur international de technologies de paiement. Découvrez nos API, nos services d’intégration et les moyens de paiement répertoriés dans nos marchés.",
      heading: "Connectez vos paiements à plusieurs marchés",
      paragraph: "Consultez les pays et moyens de paiement du répertoire RobotPay, explorez les services destinés aux plateformes et contactez notre équipe pour discuter d’une intégration.",
      aboutLink: "Découvrir RobotPay"
    },
    about: {
      title: "À propos de RobotPay, agrégateur de paiement",
      description: "Découvrez RobotPay, ses API de paiement, ses services en ligne et hors ligne, son API de jeux et son assistance technique.",
      intro: "RobotPay est un agrégateur international de technologies de paiement. Nous proposons des API de paiement et différents services en ligne et hors ligne pour des plateformes de toutes catégories, avec des paiements en USDT et D0.",
      heading: "Une plateforme pour connecter vos paiements",
      paragraph: "RobotPay rassemble des outils de paiement pour aider les entreprises à encaisser, effectuer des payouts et se connecter aux réseaux pris en charge depuis une plateforme unifiée.",
      servicesHeading: "Services RobotPay",
      services: [
        ["Encaissement (Payin)", "Acceptez les paiements de vos clients via les réseaux et moyens répertoriés par RobotPay."],
        ["Payouts", "Envoyez des paiements à vos utilisateurs et partenaires via les services connectés."],
        ["Liens de paiement", "Créez un lien pour encaisser sans développer un parcours de paiement complet."],
        ["API de paiement et SDK", "Connectez des fonctionnalités de paiement à votre site, application ou plateforme."],
        ["API de jeux et assistance technique", "Découvrez les intégrations de jeux et contactez l’équipe technique pour parler de la configuration et des tests.", "game-api"]
      ],
      closing: "Pour confirmer les moyens disponibles et les conditions d’intégration pour votre compte, contactez l’équipe RobotPay."
    },
    contact: {
      title: "Contacter RobotPay : ventes et assistance",
      description: "Contactez RobotPay pour ouvrir un compte, parler à l’équipe commerciale, obtenir de l’aide sur WhatsApp ou poser une question générale.",
      intro: "Choisissez le canal adapté à votre demande. Pour une question sur un paiement ou une intégration, indiquez le pays et le service concernés.",
      account: "Ouvrir un compte",
      sales: "Service commercial",
      whatsapp: "Assistance WhatsApp",
      general: "Question générale",
      closing: "L’équipe RobotPay peut vous orienter vers le canal adapté à votre demande."
    },
    countries: {
      title: "Pays et moyens de paiement RobotPay",
      description: "Consultez les pays du répertoire RobotPay, leurs indicatifs téléphoniques et les moyens de paiement locaux qui y sont répertoriés.",
      intro: "Explorez les marchés présents dans le répertoire RobotPay. Chaque fiche indique l’indicatif téléphonique et les moyens de paiement actuellement listés pour le pays."
    },
    servicesHub: {
      title: "Services de paiement RobotPay",
      description: "Explorez les API de paiement, l’intégration marchande, le compte multidevises et l’API de jeux RobotPay.",
      intro: "RobotPay propose des API et des services de paiement pour les plateformes. Découvrez les parcours et intégrations présentés sur le site, puis contactez l’équipe pour discuter de votre projet."
    },
    operators: {
      title: "Opérateurs et réseaux de paiement RobotPay",
      description: "Parcourez les réseaux et opérateurs de paiement répertoriés par RobotPay et découvrez les pays associés à chaque moyen.",
      intro: "Cette liste regroupe les réseaux nommés dans le répertoire des marchés RobotPay et indique les pays où chaque moyen est mentionné."
    },
    detail: {
      countryIntro: (name) => `Consultez les moyens de paiement répertoriés par RobotPay pour ${name}. La fiche présente l’indicatif téléphonique et les réseaux nommés associés à ce marché.`,
      operatorIntro: (name) => `${name} figure dans le répertoire des moyens de paiement RobotPay pour les marchés indiqués ci-dessous. Contactez l’équipe pour confirmer les modalités adaptées à votre compte.`,
      directoryNote: "Les informations de cette page reprennent le répertoire de marchés affiché par RobotPay. Contactez l’équipe pour confirmer les options disponibles et les modalités d’intégration pour votre compte."
    },
    features: {
      "multi-currency-account": {
        title: "Compte multidevises RobotPay",
        description: "Découvrez le compte multidevises RobotPay et le transfert de fonds par nom d’utilisateur.",
        intro: "Conservez vos fonds dans la monnaie locale disponible sur votre compte et préparez un transfert international à partir du nom d’utilisateur du destinataire.",
        heading: "Comment préparer un transfert",
        steps: [
          "Choisissez le solde en monnaie locale que vous souhaitez utiliser.",
          "Saisissez le nom d’utilisateur RobotPay du destinataire.",
          "Vérifiez le destinataire et le montant avant de confirmer la demande."
        ]
      },
      "merchant-integration": {
        title: "Intégration marchande RobotPay",
        description: "Intégrez les paiements RobotPay à un site avec un formulaire HTML et des notifications IPN.",
        intro: "Ajoutez un formulaire de paiement HTML à votre site et préparez la réception des notifications IPN pour suivre le statut des paiements.",
        heading: "Étapes d’intégration",
        steps: [
          "Placez le formulaire HTML RobotPay dans le parcours où le client choisit son moyen de paiement.",
          "Configurez votre site pour recevoir et traiter les notifications IPN.",
          "Testez le parcours de paiement et les mises à jour de statut avant la mise en service."
        ]
      },
      "payment-security": {
        title: "Sécurité des paiements RobotPay",
        description: "Consultez des conseils pratiques pour protéger votre compte RobotPay et vos activités de paiement.",
        intro: "La protection du compte commence par de bonnes habitudes d’accès. Utilisez un mot de passe unique et gardez vos codes de vérification confidentiels.",
        heading: "Liste de contrôle de sécurité",
        steps: [
          "Choisissez un mot de passe long et unique pour votre compte.",
          "Ne communiquez votre mot de passe ni vos codes de vérification à personne.",
          "Contactez l’équipe RobotPay si vous remarquez une activité inhabituelle."
        ]
      },
      "game-api": {
        title: "API de jeux vidéo RobotPay",
        description: "Connectez votre plateforme à l’API de jeux RobotPay et bénéficiez de l’accompagnement de l’équipe technique.",
        intro: "RobotPay propose une API de jeux vidéo et une équipe technique prête à vous accompagner pendant l’intégration.",
        heading: "Étapes de l’intégration",
        steps: [
          "Connectez votre plateforme à l’API de jeux avec l’aide de l’équipe technique.",
          "Choisissez les jeux à présenter à vos utilisateurs.",
          "Demandez un accompagnement technique pendant la configuration et les tests."
        ],
        catalogAlt: "Exemple de catalogue de jeux vidéo",
        gamesAlt: "Sélection de jeux vidéo disponibles dans l’illustration"
      }
    },
    paymentMethodLabels: {
      "Bank Transfer": "Virement bancaire",
      Cards: "Cartes bancaires",
      "Mobile Wallets": "Portefeuilles mobiles",
      "Net Banking": "Banque en ligne"
    }
  },
  en: {
    htmlLang: "en",
    ogLocale: "en_US",
    languageName: "English",
    alternateLanguageName: "Français",
    breadcrumb: "Breadcrumb",
    nav: {
      home: "Home",
      about: "About",
      countries: "Countries",
      operators: "Operators",
      contact: "Contact",
      services: "Services"
    },
    labels: {
      network: "Payment network",
      countryCode: "Calling code",
      methods: "Listed payment methods",
      markets: "Markets where this method is listed",
      availability: "RobotPay market directory",
      contactCta: "Contact the RobotPay team",
      learnMore: "View details",
      allMarkets: "Explore countries",
      allOperators: "Explore operators",
      home: "Home"
    },
    home: {
      title: "RobotPay payment APIs for international businesses",
      description: "Connect your business to RobotPay payment APIs, local networks and online or offline payment services.",
      intro: "RobotPay is an international payment technology aggregator. Explore payment APIs, integration support and the payment methods listed across our markets.",
      heading: "Connect payments across multiple markets",
      paragraph: "Browse the RobotPay market directory, explore services for platforms and contact our team to discuss an integration.",
      aboutLink: "About RobotPay"
    },
    about: {
      title: "About RobotPay, an international payment aggregator",
      description: "Learn about RobotPay payment APIs, online and offline services, game API integrations and technical support.",
      intro: "RobotPay is an international payment technology aggregator. We provide payment APIs and a range of online and offline services for platforms across different categories, with support for USDT and D0 payments.",
      heading: "One platform for connected payment services",
      paragraph: "RobotPay brings payment capabilities together so businesses can accept payments, send payouts and connect to listed payment networks through a unified platform.",
      servicesHeading: "RobotPay services",
      services: [
        ["Payment collection (Payin)", "Accept customer payments through networks and methods listed by RobotPay."],
        ["Payouts", "Send payments to users and business partners through connected services."],
        ["Payment links", "Create a link to collect a payment without building a full checkout flow."],
        ["Payment APIs and SDKs", "Connect payment features to your website, application or platform."],
        ["Game API and technical support", "Explore game integrations and contact the technical team about setup and testing.", "game-api"]
      ],
      closing: "Contact RobotPay to confirm options and integration details for your account."
    },
    contact: {
      title: "Contact RobotPay: sales and support",
      description: "Contact RobotPay to open an account, reach sales, get WhatsApp support or ask a general question.",
      intro: "Choose the channel that matches your request. For payment or integration questions, include the relevant country and service.",
      account: "Open an account",
      sales: "Sales team",
      whatsapp: "WhatsApp support",
      general: "General questions",
      closing: "The RobotPay team can direct your request to the appropriate contact channel."
    },
    countries: {
      title: "RobotPay countries and payment methods",
      description: "Browse RobotPay market entries, calling codes and local payment methods listed for each country.",
      intro: "Explore the markets in the RobotPay directory. Each country page lists its calling code and the payment methods currently shown for that market."
    },
    servicesHub: {
      title: "RobotPay payment services",
      description: "Explore RobotPay payment APIs, merchant integration, multi-currency accounts and the game API.",
      intro: "RobotPay provides APIs and payment services for platforms. Browse the flows and integrations described on this site, then contact the team to discuss your project."
    },
    operators: {
      title: "RobotPay payment operators and networks",
      description: "Browse named payment networks in the RobotPay directory and see the countries associated with each method.",
      intro: "This directory groups named networks from RobotPay market entries and shows the countries where each method is listed."
    },
    detail: {
      countryIntro: (name) => `Review the payment methods listed by RobotPay for ${name}, including the calling code and named networks associated with this market.`,
      operatorIntro: (name) => `${name} appears in RobotPay's payment-method directory for the markets listed below. Contact the team to confirm account-specific availability and integration details.`,
      directoryNote: "This page reflects the market directory shown by RobotPay. Contact the team to confirm options and integration details for your account."
    },
    features: {
      "multi-currency-account": {
        title: "RobotPay multi-currency account",
        description: "Learn about the RobotPay multi-currency account and transfers identified by username.",
        intro: "Keep funds in a local currency available in your account and prepare an international transfer using the recipient’s username.",
        heading: "How to prepare a transfer",
        steps: [
          "Choose the local-currency balance you want to use.",
          "Enter the recipient’s RobotPay username.",
          "Review the recipient and amount before confirming the request."
        ]
      },
      "merchant-integration": {
        title: "RobotPay merchant integration",
        description: "Connect RobotPay payments to a website with an HTML form and IPN notifications.",
        intro: "Add a payment form to your website and prepare to receive IPN notifications that report payment status.",
        heading: "Integration steps",
        steps: [
          "Place the RobotPay HTML form where customers select a payment method.",
          "Configure your website to receive and process IPN notifications.",
          "Test the payment flow and status updates before launch."
        ]
      },
      "payment-security": {
        title: "RobotPay payment security",
        description: "Review practical steps to protect your RobotPay account and payment activity.",
        intro: "Protecting an account starts with careful access habits. Use a unique password and keep verification codes private.",
        heading: "Security checklist",
        steps: [
          "Choose a long, unique password for your account.",
          "Do not share your password or verification codes.",
          "Contact RobotPay if you notice activity you do not recognize."
        ]
      },
      "game-api": {
        title: "RobotPay video game API",
        description: "Connect your platform to the RobotPay game API with support from the technical team.",
        intro: "RobotPay offers a video game API and a technical team ready to help throughout integration.",
        heading: "Integration steps",
        steps: [
          "Connect your platform to the game API with help from the technical team.",
          "Choose the games you want to present to your users.",
          "Ask the technical team for support during setup and testing."
        ],
        catalogAlt: "Example video game catalog",
        gamesAlt: "Selection of video games shown in the illustration"
      }
    },
    paymentMethodLabels: {}
  }
};
