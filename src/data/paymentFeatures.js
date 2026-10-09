import accountIcon from "../assets/icons/feature-account.png";
import merchantIcon from "../assets/icons/feature-merchant.png";
import securityIcon from "../assets/icons/feature-security.png";

export const paymentFeatures = [
  {
    slug: "multi-currency-account",
    icon: accountIcon,
    content: {
      en: {
        title: "Multi-currency account",
        description:
          "Keep your money in local currency and transfer it to any country using only a username.",
        eyebrow: "MULTI-CURRENCY ACCOUNT",
        detail:
          "Keep funds in local currency and send money to another country using the recipient’s username. This gives you a simple way to identify who should receive a transfer.",
        detailsTitle: "A simpler way to send money",
        points: [
          "Keep funds in the local currency available in your account.",
          "Use the recipient’s username to identify the person you want to pay.",
          "Review the destination and transfer amount before submitting."
        ],
        stepsTitle: "How to make a transfer",
        stepsIntro:
          "Prepare a transfer with the recipient’s username, then review the details before confirming.",
        steps: [
          {
            title: "Choose the balance",
            description: "Start with the local-currency balance you want to use."
          },
          {
            title: "Enter a username",
            description: "Use the recipient’s RobotPay username to identify who should receive the money."
          },
          {
            title: "Review the transfer",
            description: "Check the recipient and amount, then confirm the transfer request."
          }
        ]
      },
      fr: {
        title: "Compte multidevises",
        description:
          "Conservez votre argent en monnaie locale et transférez-le vers n’importe quel pays uniquement par nom d’utilisateur.",
        eyebrow: "COMPTE MULTIDEVISES",
        detail:
          "Conservez vos fonds en monnaie locale et envoyez de l’argent vers un autre pays à partir du nom d’utilisateur du destinataire. Ce nom vous permet d’identifier simplement la personne qui recevra le transfert.",
        detailsTitle: "Envoyez de l’argent plus simplement",
        points: [
          "Conservez les fonds dans la monnaie locale disponible sur votre compte.",
          "Utilisez le nom d’utilisateur du destinataire pour identifier la personne à payer.",
          "Vérifiez le destinataire et le montant avant de valider le transfert."
        ],
        stepsTitle: "Comment effectuer un transfert",
        stepsIntro:
          "Préparez le transfert avec le nom d’utilisateur du destinataire, puis vérifiez les détails avant de confirmer.",
        steps: [
          {
            title: "Choisissez le solde",
            description: "Sélectionnez le solde en monnaie locale que vous souhaitez utiliser."
          },
          {
            title: "Saisissez un nom d’utilisateur",
            description: "Utilisez le nom RobotPay du destinataire pour indiquer qui doit recevoir l’argent."
          },
          {
            title: "Vérifiez le transfert",
            description: "Contrôlez le destinataire et le montant, puis confirmez la demande de transfert."
          }
        ]
      },
      zh: {
        title: "多币种账户",
        description: "以当地货币保存资金，只需使用用户名即可将资金转至任何国家。",
        eyebrow: "多币种账户",
        detail: "以当地货币保存资金，并通过收款人的用户名向其他国家转账。用户名可以帮助您明确这笔转账的收款对象。",
        detailsTitle: "让转账更简单",
        points: [
          "以账户支持的当地货币保存资金。",
          "使用收款人的用户名确认付款对象。",
          "提交前检查收款人和转账金额。"
        ],
        stepsTitle: "如何发起转账",
        stepsIntro: "输入收款人的用户名，并在确认前仔细检查转账信息。",
        steps: [
          {
            title: "选择余额",
            description: "选择您要使用的当地货币余额。"
          },
          {
            title: "输入用户名",
            description: "输入收款人的 RobotPay 用户名，确认资金接收方。"
          },
          {
            title: "检查转账信息",
            description: "核对收款人和金额，然后确认转账请求。"
          }
        ]
      }
    }
  },
  {
    slug: "merchant-integration",
    icon: merchantIcon,
    content: {
      en: {
        title: "Merchant integration",
        description:
          "Accept payments on your website with a simple HTML form and IPN notifications.",
        eyebrow: "MERCHANT INTEGRATION",
        detail:
          "Add a simple HTML payment form to your website and use IPN notifications to receive payment status updates. These pieces connect your checkout to the payment flow and keep your site informed when a payment changes.",
        detailsTitle: "Connect payments to your website",
        points: [
          "Place an HTML payment form in the checkout flow on your website.",
          "Use IPN notifications to receive payment status updates.",
          "Give customers a clear way to complete a payment online."
        ],
        stepsTitle: "The main integration steps",
        stepsIntro:
          "Connect the payment form and your notification handling as part of the same checkout flow.",
        steps: [
          {
            title: "Add the payment form",
            description: "Place the RobotPay HTML form where customers choose how to pay."
          },
          {
            title: "Prepare IPN handling",
            description: "Set up your site to receive and process the payment notifications."
          },
          {
            title: "Review the full flow",
            description: "Check that the checkout and status updates work together for your site."
          }
        ]
      },
      fr: {
        title: "Intégration marchande",
        description:
          "Acceptez les paiements sur votre site grâce à un simple formulaire HTML et aux notifications IPN.",
        eyebrow: "INTÉGRATION MARCHANDE",
        detail:
          "Ajoutez un formulaire de paiement HTML à votre site et recevez les mises à jour de statut par notifications IPN. Ces éléments relient le parcours de paiement à votre site et l’informent de l’évolution d’une transaction.",
        detailsTitle: "Reliez les paiements à votre site",
        points: [
          "Placez un formulaire HTML de paiement dans le parcours d’achat de votre site.",
          "Utilisez les notifications IPN pour recevoir les mises à jour de statut.",
          "Proposez à vos clients un parcours clair pour payer en ligne."
        ],
        stepsTitle: "Les principales étapes d’intégration",
        stepsIntro:
          "Connectez le formulaire de paiement et le traitement des notifications au sein d’un même parcours.",
        steps: [
          {
            title: "Ajoutez le formulaire",
            description: "Placez le formulaire HTML RobotPay à l’étape où le client choisit son moyen de paiement."
          },
          {
            title: "Préparez les notifications IPN",
            description: "Configurez votre site pour recevoir et traiter les notifications de paiement."
          },
          {
            title: "Vérifiez le parcours complet",
            description: "Assurez-vous que le paiement et les mises à jour de statut fonctionnent ensemble sur votre site."
          }
        ]
      },
      zh: {
        title: "商户集成",
        description: "通过简单的 HTML 表单和 IPN 通知，在您的网站上接受付款。",
        eyebrow: "商户集成",
        detail: "在网站中添加 HTML 支付表单，并通过 IPN 通知接收支付状态更新。这些环节可将结账流程与支付连接起来，并让网站及时了解交易状态。",
        detailsTitle: "将支付接入您的网站",
        points: [
          "在网站的结账流程中添加 HTML 支付表单。",
          "使用 IPN 通知接收支付状态更新。",
          "为客户提供清晰的在线付款流程。"
        ],
        stepsTitle: "主要接入步骤",
        stepsIntro: "将支付表单和通知处理连接到同一个结账流程中。",
        steps: [
          {
            title: "添加支付表单",
            description: "在客户选择付款方式的位置加入 RobotPay HTML 表单。"
          },
          {
            title: "设置 IPN 处理",
            description: "配置网站以接收并处理支付通知。"
          },
          {
            title: "检查完整流程",
            description: "确认支付流程和状态更新能在网站上配合工作。"
          }
        ]
      }
    }
  },
  {
    slug: "payment-security",
    icon: securityIcon,
    content: {
      en: {
        title: "Payment security",
        description:
          "Tools designed to help you protect your account and payment activity.",
        eyebrow: "PAYMENT SECURITY",
        detail:
          "Protecting an account starts with careful access habits. Use a unique password, keep verification details private, and contact RobotPay if a sign-in or payment activity seems unfamiliar.",
        detailsTitle: "Protect your account",
        points: [
          "Choose a long, unique password for your account.",
          "Keep passwords and verification codes private.",
          "Contact the RobotPay team if you notice activity you do not recognize."
        ],
        stepsTitle: "A practical security checklist",
        stepsIntro:
          "Use these simple habits to reduce avoidable risks when accessing your account.",
        steps: [
          {
            title: "Use a unique password",
            description: "Choose a password that you do not reuse on other services."
          },
          {
            title: "Keep access details private",
            description: "Do not share your password or verification codes with anyone."
          },
          {
            title: "Report unusual activity",
            description: "If a sign-in or payment does not look familiar, contact the RobotPay team."
          }
        ]
      },
      fr: {
        title: "Sécurité des paiements",
        description:
          "Des outils conçus pour vous aider à protéger votre compte et vos opérations de paiement.",
        eyebrow: "SÉCURITÉ DES PAIEMENTS",
        detail:
          "La protection d’un compte commence par de bonnes habitudes d’accès. Choisissez un mot de passe unique, gardez vos codes de vérification confidentiels et contactez RobotPay si une activité de connexion ou de paiement vous semble inhabituelle.",
        detailsTitle: "Protégez votre compte",
        points: [
          "Choisissez un mot de passe long et unique pour votre compte.",
          "Gardez votre mot de passe et vos codes de vérification confidentiels.",
          "Contactez l’équipe RobotPay si vous remarquez une activité inhabituelle."
        ],
        stepsTitle: "Une liste de contrôle pour votre sécurité",
        stepsIntro:
          "Adoptez ces habitudes simples pour limiter les risques évitables lors de l’accès à votre compte.",
        steps: [
          {
            title: "Utilisez un mot de passe unique",
            description: "Choisissez un mot de passe que vous n’utilisez pas sur d’autres services."
          },
          {
            title: "Protégez vos informations d’accès",
            description: "Ne communiquez votre mot de passe ni vos codes de vérification à personne."
          },
          {
            title: "Signalez toute activité inhabituelle",
            description: "Si une connexion ou un paiement ne vous semble pas familier, contactez l’équipe RobotPay."
          }
        ]
      },
      zh: {
        title: "支付安全",
        description: "借助相关工具，更好地保护您的账户和支付活动。",
        eyebrow: "支付安全",
        detail: "账户安全始于谨慎的访问习惯。请使用独特的密码、妥善保管验证码；如果发现陌生的登录或支付活动，请联系 RobotPay。",
        detailsTitle: "保护您的账户",
        points: [
          "为账户设置较长且独特的密码。",
          "妥善保管密码和验证码。",
          "如发现不认识的活动，请联系 RobotPay 团队。"
        ],
        stepsTitle: "实用安全检查清单",
        stepsIntro: "养成这些简单习惯，减少账户访问过程中可避免的风险。",
        steps: [
          {
            title: "使用独特的密码",
            description: "不要在其他服务中重复使用账户密码。"
          },
          {
            title: "保护账户信息",
            description: "不要向任何人透露密码或验证码。"
          },
          {
            title: "报告异常活动",
            description: "如果发现陌生的登录或支付，请联系 RobotPay 团队。"
          }
        ]
      }
    }
  }
];

export const paymentFeaturePageCopy = {
  en: {
    contact: "Contact RobotPay",
    backHome: "Back to home",
    language: "Language",
    notFoundTitle: "This page could not be found.",
    supportTitle: "Need help getting started?",
    supportDescription:
      "Contact the RobotPay team with questions about your account or integration."
  },
  fr: {
    contact: "Contacter RobotPay",
    backHome: "Retour à l’accueil",
    language: "Langue",
    notFoundTitle: "Cette page est introuvable.",
    supportTitle: "Besoin d’aide pour démarrer ?",
    supportDescription:
      "Contactez l’équipe RobotPay pour toute question sur votre compte ou votre intégration."
  },
  zh: {
    contact: "联系 RobotPay",
    backHome: "返回首页",
    language: "语言",
    notFoundTitle: "找不到此页面。",
    supportTitle: "需要帮助开始使用吗？",
    supportDescription: "如有账户或集成问题，请联系 RobotPay 团队。"
  }
};
