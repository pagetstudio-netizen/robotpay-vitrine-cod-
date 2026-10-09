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
          "Keep your money in local currency and send transfers to any country using only the recipient’s username.",
        detailsTitle: "A simpler way to send money",
        points: [
          "Keep your funds in local currency.",
          "Choose the recipient using their username.",
          "Send an international transfer using that username."
        ]
      },
      fr: {
        title: "Compte multidevises",
        description:
          "Conservez votre argent en monnaie locale et transférez-le vers n’importe quel pays uniquement par nom d’utilisateur.",
        eyebrow: "COMPTE MULTIDEVISES",
        detail:
          "Conservez votre argent en monnaie locale et envoyez des transferts vers n’importe quel pays avec le seul nom d’utilisateur du destinataire.",
        detailsTitle: "Envoyez de l’argent plus simplement",
        points: [
          "Conservez vos fonds en monnaie locale.",
          "Identifiez le destinataire avec son nom d’utilisateur.",
          "Envoyez un transfert international à l’aide de ce nom d’utilisateur."
        ]
      },
      zh: {
        title: "多币种账户",
        description: "以当地货币保存资金，只需使用用户名即可将资金转至任何国家。",
        eyebrow: "多币种账户",
        detail: "以当地货币保存资金，只需使用收款人的用户名，即可向任何国家转账。",
        detailsTitle: "让转账更简单",
        points: [
          "以当地货币保存资金。",
          "使用收款人的用户名选择收款人。",
          "通过该用户名发起国际转账。"
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
          "Add a simple HTML form to your website to accept payments, and use IPN notifications to receive payment updates.",
        detailsTitle: "Connect payments to your website",
        points: [
          "Add an HTML payment form to your site.",
          "Receive payment notifications through IPN.",
          "Give customers a straightforward way to pay online."
        ]
      },
      fr: {
        title: "Intégration marchande",
        description:
          "Acceptez les paiements sur votre site grâce à un simple formulaire HTML et aux notifications IPN.",
        eyebrow: "INTÉGRATION MARCHANDE",
        detail:
          "Ajoutez un formulaire HTML simple à votre site pour accepter les paiements, puis recevez les mises à jour de paiement par notifications IPN.",
        detailsTitle: "Reliez les paiements à votre site",
        points: [
          "Ajoutez un formulaire de paiement HTML à votre site.",
          "Recevez les notifications de paiement par IPN.",
          "Proposez à vos clients un moyen simple de payer en ligne."
        ]
      },
      zh: {
        title: "商户集成",
        description: "通过简单的 HTML 表单和 IPN 通知，在您的网站上接受付款。",
        eyebrow: "商户集成",
        detail: "在网站中添加简单的 HTML 表单以接受付款，并通过 IPN 通知接收付款更新。",
        detailsTitle: "将支付接入您的网站",
        points: [
          "在网站中添加 HTML 支付表单。",
          "通过 IPN 接收支付通知。",
          "为客户提供简单的在线付款方式。"
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
          "Use good account-security habits to help protect your access and payment activity.",
        detailsTitle: "Protect your account",
        points: [
          "Choose a long, unique password for your account.",
          "Never share your password or verification codes.",
          "Contact the RobotPay team if you notice activity you do not recognize."
        ]
      },
      fr: {
        title: "Sécurité des paiements",
        description:
          "Des outils conçus pour vous aider à protéger votre compte et vos opérations de paiement.",
        eyebrow: "SÉCURITÉ DES PAIEMENTS",
        detail:
          "Adoptez de bonnes pratiques de sécurité pour protéger l’accès à votre compte et vos opérations de paiement.",
        detailsTitle: "Protégez votre compte",
        points: [
          "Choisissez un mot de passe long et unique pour votre compte.",
          "Ne partagez jamais votre mot de passe ni vos codes de vérification.",
          "Contactez l’équipe RobotPay si vous remarquez une activité inhabituelle."
        ]
      },
      zh: {
        title: "支付安全",
        description: "借助相关工具，更好地保护您的账户和支付活动。",
        eyebrow: "支付安全",
        detail: "养成良好的账户安全习惯，帮助保护账户访问权限和支付活动。",
        detailsTitle: "保护您的账户",
        points: [
          "为账户设置较长且独特的密码。",
          "切勿分享密码或验证码。",
          "如发现不认识的活动，请联系 RobotPay 团队。"
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
    notFoundTitle: "This page could not be found."
  },
  fr: {
    contact: "Contacter RobotPay",
    backHome: "Retour à l’accueil",
    language: "Langue",
    notFoundTitle: "Cette page est introuvable."
  },
  zh: {
    contact: "联系 RobotPay",
    backHome: "返回首页",
    language: "语言",
    notFoundTitle: "找不到此页面。"
  }
};
