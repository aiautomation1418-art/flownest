import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

type Translations = {
  nav: {
    home: string;
    platform: string;
    solutions: string;
    pricing: string;
    blog: string;
    about: string;
    contact: string;
    login: string;
    getStarted: string;
  };
  hero: {
    badge: string;
    title: string;
    with: string;
    subtitle: string;
    cta1: string;
    cta2: string;
  };
  features: {
    title: string;
  };
  context: {
    title: string;
    subtitle: string;
    rightTitle: string;
    rightDesc: string;
    button: string;
  };
  footer: {
    newsletter: string;
    placeholder: string;
    product: string;
    company: string;
    support: string;
    rights: string;
  };
};

const defaultTranslations: Translations = {
  nav: {
    home: "Home",
    platform: "Platform",
    solutions: "Solutions",
    pricing: "Pricing",
    blog: "Blog",
    about: "About",
    contact: "Contact",
    login: "Login",
    getStarted: "Get Started"
  },
  hero: {
    badge: "Manage Tasks Effortlessly with AI",
    title: "Simplify Your Workflow",
    with: "with",
    subtitle: "Empower your organization with FlowNest AI's seamless AI workforce, intelligent task automation, and advanced omnichannel communication—so your team can focus on what truly matters.",
    cta1: "Get Started",
    cta2: "Request a Demo"
  },
  features: {
    title: "Why Choose FlowNest AI"
  },
  context: {
    title: "FlowNest Speaks Every Customer's Language",
    subtitle: "Deliver personalized experiences by speaking every customer's language natively.",
    rightTitle: "Context Aware Intelligence",
    rightDesc: "FlowNest AI remembers and understands conversation context to deliver truly personalized experiences.",
    button: "Explore Context API"
  },
  footer: {
    newsletter: "Newsletter",
    placeholder: "Enter your email here",
    product: "Product",
    company: "Company",
    support: "Support",
    rights: "© 2024 FlowNest AI. All rights reserved."
  }
};

const translations: Record<string, Translations> = {
  us: defaultTranslations,
  gb: defaultTranslations, // English UK (using US for now)
  ca: defaultTranslations, // English CA
  es: {
    nav: {
      home: "Inicio",
      platform: "Plataforma",
      solutions: "Soluciones",
      pricing: "Precios",
      blog: "Blog",
      about: "Nosotros",
      contact: "Contacto",
      login: "Acceso",
      getStarted: "Empezar"
    },
    hero: {
      badge: "Gestiona tareas sin esfuerzo con IA",
      title: "Simplifica tu flujo de trabajo",
      with: "con",
      subtitle: "Empodera a tu organización con la fuerza laboral de IA de FlowNest, automatización inteligente de tareas y comunicación omnicanal avanzada.",
      cta1: "Empezar",
      cta2: "Solicitar Demo"
    },
    features: {
      title: "Por qué elegir FlowNest AI"
    },
    context: {
      title: "FlowNest habla el idioma de cada cliente",
      subtitle: "Ofrece experiencias personalizadas hablando el idioma de cada cliente de forma nativa.",
      rightTitle: "Inteligencia Contextual",
      rightDesc: "FlowNest AI recuerda y entiende el contexto de la conversación para ofrecer experiencias verdaderamente personalizadas.",
      button: "Explorar API de Contexto"
    },
    footer: {
      newsletter: "Boletín",
      placeholder: "Introduce tu email",
      product: "Producto",
      company: "Empresa",
      support: "Soporte",
      rights: "© 2024 FlowNest AI. Todos los derechos reservados."
    }
  },
  fr: {
    nav: {
      home: "Accueil",
      platform: "Plateforme",
      solutions: "Solutions",
      pricing: "Tarifs",
      blog: "Blog",
      about: "À propos",
      contact: "Contact",
      login: "Connexion",
      getStarted: "Commencer"
    },
    hero: {
      badge: "Gérez vos tâches sans effort avec l'IA",
      title: "Simplifiez votre flux de travail",
      with: "avec",
      subtitle: "Donnez à votre organisation les moyens d'agir grâce à la main-d'œuvre IA transparente de FlowNest, à l'automatisation intelligente des tâches et à la communication omnicanale avancée.",
      cta1: "Commencer",
      cta2: "Demander une démo"
    },
    features: {
      title: "Pourquoi choisir FlowNest AI"
    },
    context: {
      title: "FlowNest parle la langue de chaque client",
      subtitle: "Offrez des expériences personnalisées en parlant nativement la langue de chaque client.",
      rightTitle: "Intelligence Contextuelle",
      rightDesc: "FlowNest AI se souvient et comprend le contexte de la conversation pour offrir des expériences vraiment personnalisées.",
      button: "Explorer l'API Context"
    },
    footer: {
      newsletter: "Newsletter",
      placeholder: "Entrez votre email ici",
      product: "Produit",
      company: "Entreprise",
      support: "Support",
      rights: "© 2024 FlowNest AI. Tous droits réservés."
    }
  },
  de: {
    nav: {
      home: "Startseite",
      platform: "Plattform",
      solutions: "Lösungen",
      pricing: "Preise",
      blog: "Blog",
      about: "Über uns",
      contact: "Kontakt",
      login: "Anmelden",
      getStarted: "Loslegen"
    },
    hero: {
      badge: "Müheloses Aufgabenmanagement mit KI",
      title: "Vereinfachen Sie Ihren Workflow",
      with: "mit",
      subtitle: "Stärken Sie Ihr Unternehmen mit der nahtlosen KI-Belegschaft, intelligenten Aufgabenautomatisierung und fortschrittlichen Omnichannel-Kommunikation von FlowNest.",
      cta1: "Loslegen",
      cta2: "Demo anfordern"
    },
    features: {
      title: "Warum FlowNest AI wählen"
    },
    context: {
      title: "FlowNest spricht die Sprache jedes Kunden",
      subtitle: "Liefern Sie personalisierte Erlebnisse, indem Sie die Sprache jedes Kunden muttersprachlich sprechen.",
      rightTitle: "Kontextbewusste Intelligenz",
      rightDesc: "FlowNest AI erinnert sich und versteht den Gesprächskontext, um wirklich personalisierte Erlebnisse zu liefern.",
      button: "Kontext-API erkunden"
    },
    footer: {
      newsletter: "Newsletter",
      placeholder: "Geben Sie Ihre E-Mail ein",
      product: "Produkt",
      company: "Unternehmen",
      support: "Support",
      rights: "© 2024 FlowNest AI. Alle Rechte vorbehalten."
    }
  },
  cn: {
    nav: {
      home: "首页",
      platform: "平台",
      solutions: "解决方案",
      pricing: "定价",
      blog: "博客",
      about: "关于",
      contact: "联系",
      login: "登录",
      getStarted: "开始使用"
    },
    hero: {
      badge: "利用 AI 轻松管理任务",
      title: "简化您的工作流程",
      with: "使用",
      subtitle: "利用 FlowNest AI 的无缝 AI 劳动力、智能任务自动化和先进的全渠道通信为您的组织赋能——让您的团队专注于真正重要的事情。",
      cta1: "开始使用",
      cta2: "申请演示"
    },
    features: {
      title: "为什么选择 FlowNest AI"
    },
    context: {
      title: "FlowNest 会说每位客户的语言",
      subtitle: "通过母语般地通过每位客户的语言提供个性化体验。",
      rightTitle: "上下文感知智能",
      rightDesc: "FlowNest AI 能够记住并理解对话上下文，从而提供真正的个性化体验。",
      button: "探索上下文 API"
    },
    footer: {
      newsletter: "通讯",
      placeholder: "在此输入您的电子邮件",
      product: "产品",
      company: "公司",
      support: "支持",
      rights: "© 2024 FlowNest AI. 版权所有。"
    }
  },
  jp: {
    nav: {
      home: "ホーム",
      platform: "プラットフォーム",
      solutions: "ソリューション",
      pricing: "料金",
      blog: "ブログ",
      about: "概要",
      contact: "お問い合わせ",
      login: "ログイン",
      getStarted: "始める"
    },
    hero: {
      badge: "AIでタスクを簡単に管理",
      title: "ワークフローを簡素化",
      with: "FlowNestで",
      subtitle: "FlowNest AIのシームレスなAI労働力、インテリジェントなタスク自動化、高度なオムニチャネル通信で組織を強化します。",
      cta1: "始める",
      cta2: "デモをリクエスト"
    },
    features: {
      title: "FlowNest AIを選ぶ理由"
    },
    context: {
      title: "FlowNestはすべての顧客の言語を話します",
      subtitle: "すべての顧客の言語をネイティブに話すことで、パーソナライズされた体験を提供します。",
      rightTitle: "コンテキスト認識インテリジェンス",
      rightDesc: "FlowNest AIは会話のコンテキストを記憶して理解し、真にパーソナライズされた体験を提供します。",
      button: "コンテキストAPIを探索"
    },
    footer: {
      newsletter: "ニュースレター",
      placeholder: "メールアドレスを入力",
      product: "製品",
      company: "会社",
      support: "サポート",
      rights: "© 2024 FlowNest AI. 全著作権所有。"
    }
  },
  sa: {
    nav: {
      home: "الرئيسية",
      platform: "المنصة",
      solutions: "الحلول",
      pricing: "الأسعار",
      blog: "مدونة",
      about: "من نحن",
      contact: "اتصل بنا",
      login: "تسجيل الدخول",
      getStarted: "البدء"
    },
    hero: {
      badge: "إدارة المهام بسهولة مع الذكاء الاصطناعي",
      title: "بسط سير عملك",
      with: "مع",
      subtitle: "قم بتمكين مؤسستك من خلال القوى العاملة السلسة للذكاء الاصطناعي من FlowNest، وأتمتة المهام الذكية، والاتصالات المتقدمة متعددة القنوات.",
      cta1: "ابدأ الآن",
      cta2: "طلب عرض توضيحي"
    },
    features: {
      title: "لماذا تختار FlowNest AI"
    },
    context: {
      title: "FlowNest يتحدث لغة كل عميل",
      subtitle: "قدم تجارب مخصصة من خلال التحدث بلغة كل عميل بطلاقة.",
      rightTitle: "الذكاء المدرك للسياق",
      rightDesc: "يتذكر FlowNest AI ويفهم سياق المحادثة لتقديم تجارب مخصصة حقًا.",
      button: "استكشف API السياق"
    },
    footer: {
      newsletter: "النشرة الإخبارية",
      placeholder: "أدخل بريدك الإلكتروني",
      product: "المنتج",
      company: "الشركة",
      support: "الدعم",
      rights: "© 2024 FlowNest AI. جميع الحقوق محفوظة."
    }
  }
};

interface LanguageContextType {
  language: string;
  setLanguage: (lang: string) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState('us');
  const [t, setT] = useState<Translations>(defaultTranslations);

  useEffect(() => {
    // If translation exists for the selected language, use it. Otherwise fallback to 'us'.
    const selectedTranslations = translations[language] || defaultTranslations;
    setT(selectedTranslations);
    
    // Optional: Handle RTL for Arabic
    if (language === 'sa' || language === 'pk' || language === 'sa') {
       // Ideally set document dir, but kept simple for now
    }
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};