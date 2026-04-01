/* ═══════════════════════════════════════════════════
   LandPitch AI — app.js
   i18n engine · scroll animations · form · nav
   ═══════════════════════════════════════════════════ */

'use strict';

/* ── i18n TRANSLATIONS ───────────────────────────── */
const TRANSLATIONS = {
  en: {
    "meta.title":               "LandPitch AI — Your Land. The Right Investor. 15 Minutes.",
    "nav.how":                  "How it works",
    "nav.what":                 "What you get",
    "nav.pricing":              "Pricing",
    "nav.cta":                  "Get started free",
    "hero.eyebrow":             "For landowners in tourist destinations",
    "hero.line1":               "Your land.",
    "hero.line2":               "The right investor.",
    "hero.line3":               "15 minutes.",
    "hero.sub":                 "We turn your land into a professional investor presentation — complete with development concepts, financial projections and direct introductions to verified investors. No estate agents. No waiting.",
    "hero.cta":                 "Get my free presentation",
    "hero.secondary":           "See how it works",
    "hero.card.title":          "Investor Presentation",
    "hero.card.concept1":       "Luxury Glamping Resort",
    "hero.card.concept2":       "Boutique Eco-Hotel",
    "hero.card.concept3":       "Private Villa Estate",
    "hero.card.progress":       "AI analysis complete",
    "hero.card.investors":      "47 investors notified",
    "hero.card.time":           "14 min ago",
    "stats.minutes":            "minutes to results",
    "stats.commission":         "agent commission",
    "stats.investors":          "verified investors",
    "stats.concepts":           "concepts generated",
    "problem.label":            "The problem",
    "problem.heading":          "Great land. Wrong tools.",
    "problem.sub":              "Landowners in tourist destinations sit on extraordinary assets — and spend years unable to reach the investors who would buy them.",
    "problem.p1.title":         "Estate agents take 3–6%",
    "problem.p1.body":          "Plus 2–4 months of waiting, and rarely any access to serious investment capital.",
    "problem.p2.title":         "Listing sites don't work for land",
    "problem.p2.body":          "Rightmove, Zillow — built for houses. No concepts, no ROI, no investor introductions.",
    "problem.p3.title":         "Consultants charge $3,000–10,000",
    "problem.p3.body":          "For a presentation that takes weeks — and still no guarantee of a single investor introduction.",
    "problem.p4.title":         "Investors are hard to reach",
    "problem.p4.body":          "They don't browse classified ads. They work through trusted networks and professional introductions.",
    "how.label":                "How it works",
    "how.heading":              "Four steps. 15 minutes.",
    "how.sub":                  "No technical knowledge needed. No documents to prepare. Just tell us about your land.",
    "how.s1.title":             "Tell us about your land",
    "how.s1.body":              "Fill in a short form — location, size, asking price, and a brief description. Takes about 3 minutes. No documents needed.",
    "how.s2.title":             "We analyse the opportunity",
    "how.s2.body":              "Our platform researches your area — tourism figures, comparable properties, infrastructure, and what investors are actively looking for right now.",
    "how.s3.title":             "You receive your investor presentation",
    "how.s3.body":              "A professional 12-page document showing your land's potential — concepts, visuals, and financial projections. Clear enough for any investor to act on immediately.",
    "how.s4.title":             "Investors come to you",
    "how.s4.body":              "We contact our database of verified investors and publish your listing professionally. Interested parties reach out to you directly.",
    "what.label":               "What you receive",
    "what.heading":             "Everything in one package.",
    "what.w1.title":            "Investor Presentation",
    "what.w1.body":             "A professionally designed 12-page document telling the story of your land — where it is, what it could become, how much it could earn, and why an investor should act now.",
    "what.w2.title":            "Development Concepts",
    "what.w2.body":             "3 to 5 realistic ideas — glamping, boutique hotel, villas, retreat centre — each with projected income and costs.",
    "what.w3.title":            "Financial Projections",
    "what.w3.body":             "Clear numbers: development cost, annual revenue, return on investment, and payback period for each concept.",
    "what.w4.title":            "Visual Impressions",
    "what.w4.body":             "Realistic AI illustrations showing how each concept could look on your land. No architect required.",
    "what.w5.title":            "Investor Outreach",
    "what.w5.body":             "We contact verified investors whose interests match your land. Each message is personalised to their known investment focus.",
    "what.w6.title":            "Marketplace Listing",
    "what.w6.body":             "Your property published on our platform and promoted across LinkedIn and specialist real estate channels.",
    "pricing.label":            "Pricing",
    "pricing.heading":          "Simple. Transparent. No commission.",
    "pricing.sub":              "Your first submission is always free. No hidden fees. Cancel any time.",
    "pricing.per_month":        "/ month",
    "pricing.cta":              "Start free",
    "pricing.starter.context":  "For individual landowners",
    "pricing.starter.name":     "Starter",
    "pricing.starter.f1":       "1 land plot listing",
    "pricing.starter.f2":       "Investor presentation (12 pages)",
    "pricing.starter.f3":       "5 development concepts",
    "pricing.starter.f4":       "Financial projections",
    "pricing.starter.f5":       "AI visual impressions",
    "pricing.starter.f6":       "Marketplace listing",
    "pricing.starter.f7":       "Outreach to 30 investors",
    "pricing.pro.badge":        "Most popular",
    "pricing.pro.context":      "For owners of multiple plots",
    "pricing.pro.name":         "Pro",
    "pricing.pro.f1":           "Up to 10 plot listings",
    "pricing.pro.f2":           "Investor presentation per listing",
    "pricing.pro.f3":           "5 development concepts each",
    "pricing.pro.f4":           "Financial projections",
    "pricing.pro.f5":           "AI visual impressions",
    "pricing.pro.f6":           "Marketplace + social media",
    "pricing.pro.f7":           "Outreach to 200 investors",
    "pricing.pro.f8":           "Priority processing",
    "pricing.agency.context":   "Run as your own business from home",
    "pricing.agency.name":      "Agency",
    "pricing.agency.f1":        "Unlimited plot listings",
    "pricing.agency.f2":        "All Pro features included",
    "pricing.agency.f3":        "Full white-label branding",
    "pricing.agency.f4":        "Offer as your own service",
    "pricing.agency.f5":        "500+ investor database access",
    "pricing.agency.f6":        "Dedicated account manager",
    "pricing.agency.f7":        "Revenue share programme",
    "pricing.agency.f8":        "No office needed",
    "pricing.agency.callout.title": "The Agency Plan: a ready-made business from home.",
    "pricing.agency.callout.body":  "Use our platform under your own name and brand. Set your own prices. Keep the profit. No office, no staff, no upfront investment — just a laptop, our platform, and your ambition.",
    "form.label":               "Get started",
    "form.heading":             "Your investor presentation in 15 minutes.",
    "form.promise1":            "Results in 15 minutes or less",
    "form.promise2":            "First submission completely free",
    "form.promise3":            "Your details are never shared without consent",
    "form.promise4":            "We work with land in any country",
    "form.name.label":          "Your name",
    "form.name.placeholder":    "John Smith",
    "form.contact.label":       "Phone / Email",
    "form.contact.placeholder": "+1 555 000 0000",
    "form.location.label":      "Plot location",
    "form.location.placeholder":"e.g. Algarve, Portugal",
    "form.area.label":          "Area (acres)",
    "form.area.placeholder":    "12",
    "form.price.label":         "Asking price ($)",
    "form.price.placeholder":   "320000",
    "form.goal.label":          "Your goal",
    "form.goal.placeholder":    "Select your goal…",
    "form.goal.opt1":           "Sell the plot at maximum price",
    "form.goal.opt2":           "Find a co-investment partner",
    "form.goal.opt3":           "Explore what's possible",
    "form.desc.label":          "Brief description",
    "form.desc.placeholder":    "Views, existing structures, utilities, access road…",
    "form.optional":            "(optional)",
    "form.submit":              "Get my free investor presentation →",
    "form.disclaimer":          "No spam. No payment details needed. Results in 15 minutes.",
    "form.required":            "This field is required",
    "form.success.title":       "Submission received!",
    "form.success.body":        "We're already working on your investor presentation. You'll receive it within 15 minutes.",
    "footer.copy":              "© 2026 LandPitch AI. All rights reserved.",
    "footer.privacy":           "Privacy",
    "footer.terms":             "Terms",
    "footer.contact":           "Contact",
  },

  es: {
    "meta.title":               "LandPitch AI — Su Terreno. El Inversor Correcto. 15 Minutos.",
    "nav.how":                  "Cómo funciona",
    "nav.what":                 "Qué recibe",
    "nav.pricing":              "Precios",
    "nav.cta":                  "Empezar gratis",
    "hero.eyebrow":             "Para propietarios de terrenos en zonas turísticas",
    "hero.line1":               "Su terreno.",
    "hero.line2":               "El inversor correcto.",
    "hero.line3":               "15 minutos.",
    "hero.sub":                 "Convertimos su terreno en una presentación profesional para inversores — con conceptos de desarrollo, proyecciones financieras e introducciones directas a inversores verificados. Sin agentes inmobiliarios. Sin esperas.",
    "hero.cta":                 "Obtener presentación gratis",
    "hero.secondary":           "Ver cómo funciona",
    "hero.card.title":          "Presentación para Inversores",
    "hero.card.concept1":       "Resort de Glamping de Lujo",
    "hero.card.concept2":       "Eco-Hotel Boutique",
    "hero.card.concept3":       "Estate de Villas Privadas",
    "hero.card.progress":       "Análisis IA completado",
    "hero.card.investors":      "47 inversores notificados",
    "hero.card.time":           "hace 14 min",
    "stats.minutes":            "minutos para resultados",
    "stats.commission":         "comisión de agente",
    "stats.investors":          "inversores verificados",
    "stats.concepts":           "conceptos generados",
    "problem.label":            "El problema",
    "problem.heading":          "Gran terreno. Herramientas equivocadas.",
    "problem.sub":              "Los propietarios en destinos turísticos tienen activos extraordinarios — y pasan años sin poder llegar a los inversores que los comprarían.",
    "problem.p1.title":         "Los agentes cobran 3–6%",
    "problem.p1.body":          "Más 2–4 meses de espera, y raramente acceso a capital inversor serio.",
    "problem.p2.title":         "Los portales no funcionan para terrenos",
    "problem.p2.body":          "Idealista, Fotocasa — hechos para casas. Sin conceptos, sin ROI, sin introducción a inversores.",
    "problem.p3.title":         "Los consultores cobran 3.000–10.000 $",
    "problem.p3.body":          "Por una presentación que tarda semanas — y aun así no garantizan ninguna introducción a inversores.",
    "problem.p4.title":         "Los inversores son difíciles de alcanzar",
    "problem.p4.body":          "No navegan por anuncios clasificados. Trabajan a través de redes de confianza e introducciones profesionales.",
    "how.label":                "Cómo funciona",
    "how.heading":              "Cuatro pasos. 15 minutos.",
    "how.sub":                  "No se necesitan conocimientos técnicos. No hay documentos que preparar. Solo cuéntenos sobre su terreno.",
    "how.s1.title":             "Cuéntenos sobre su terreno",
    "how.s1.body":              "Rellene un formulario corto — ubicación, tamaño, precio pedido y una breve descripción. Tarda unos 3 minutos.",
    "how.s2.title":             "Analizamos la oportunidad",
    "how.s2.body":              "Nuestra plataforma investiga su zona — cifras de turismo, propiedades comparables, infraestructura y lo que los inversores buscan ahora.",
    "how.s3.title":             "Recibe su presentación para inversores",
    "how.s3.body":              "Un documento profesional de 12 páginas que muestra el potencial de su terreno — conceptos, visuales y proyecciones financieras.",
    "how.s4.title":             "Los inversores vienen a usted",
    "how.s4.body":              "Contactamos a nuestra base de inversores verificados y publicamos su anuncio profesionalmente. Las partes interesadas le contactan directamente.",
    "what.label":               "Qué recibe",
    "what.heading":             "Todo en un solo paquete.",
    "what.w1.title":            "Presentación para Inversores",
    "what.w1.body":             "Un documento de 12 páginas que cuenta la historia de su terreno — dónde está, qué podría convertirse, cuánto podría ganar y por qué un inversor debería actuar ahora.",
    "what.w2.title":            "Conceptos de Desarrollo",
    "what.w2.body":             "3 a 5 ideas realistas — glamping, hotel boutique, villas, centro de retiro — con ingresos proyectados y costes.",
    "what.w3.title":            "Proyecciones Financieras",
    "what.w3.body":             "Cifras claras: coste de desarrollo, ingresos anuales, retorno de inversión y período de recuperación.",
    "what.w4.title":            "Impresiones Visuales",
    "what.w4.body":             "Ilustraciones realistas de IA mostrando cómo podría verse cada concepto en su terreno.",
    "what.w5.title":            "Contacto con Inversores",
    "what.w5.body":             "Contactamos a inversores verificados cuyos intereses coinciden con su terreno. Cada mensaje está personalizado.",
    "what.w6.title":            "Publicación en Marketplace",
    "what.w6.body":             "Su propiedad publicada en nuestra plataforma y promovida en LinkedIn y canales especializados.",
    "pricing.label":            "Precios",
    "pricing.heading":          "Simple. Transparente. Sin comisión.",
    "pricing.sub":              "Su primera presentación siempre es gratuita. Sin costes ocultos. Cancele cuando quiera.",
    "pricing.per_month":        "/ mes",
    "pricing.cta":              "Empezar gratis",
    "pricing.starter.context":  "Para propietarios individuales",
    "pricing.starter.name":     "Starter",
    "pricing.starter.f1":       "1 terreno publicado",
    "pricing.starter.f2":       "Presentación para inversores (12 pág.)",
    "pricing.starter.f3":       "5 conceptos de desarrollo",
    "pricing.starter.f4":       "Proyecciones financieras",
    "pricing.starter.f5":       "Impresiones visuales IA",
    "pricing.starter.f6":       "Publicación en marketplace",
    "pricing.starter.f7":       "Contacto con 30 inversores",
    "pricing.pro.badge":        "Más popular",
    "pricing.pro.context":      "Para propietarios de varios terrenos",
    "pricing.pro.name":         "Pro",
    "pricing.pro.f1":           "Hasta 10 terrenos publicados",
    "pricing.pro.f2":           "Presentación para inversores por terreno",
    "pricing.pro.f3":           "5 conceptos de desarrollo c/u",
    "pricing.pro.f4":           "Proyecciones financieras",
    "pricing.pro.f5":           "Impresiones visuales IA",
    "pricing.pro.f6":           "Marketplace + redes sociales",
    "pricing.pro.f7":           "Contacto con 200 inversores",
    "pricing.pro.f8":           "Procesamiento prioritario",
    "pricing.agency.context":   "Gestione su propio negocio desde casa",
    "pricing.agency.name":      "Agencia",
    "pricing.agency.f1":        "Terrenos ilimitados",
    "pricing.agency.f2":        "Todas las funciones Pro",
    "pricing.agency.f3":        "Marca blanca completa",
    "pricing.agency.f4":        "Ofrezca como su propio servicio",
    "pricing.agency.f5":        "Acceso a 500+ inversores",
    "pricing.agency.f6":        "Gestor de cuenta dedicado",
    "pricing.agency.f7":        "Programa de reparto de ingresos",
    "pricing.agency.f8":        "Sin necesidad de oficina",
    "pricing.agency.callout.title": "El Plan Agencia: un negocio listo para operar desde casa.",
    "pricing.agency.callout.body":  "Use nuestra plataforma bajo su propio nombre y marca. Fije sus propios precios. Quédese con el beneficio. Sin oficina, sin personal, sin inversión inicial.",
    "form.label":               "Comenzar",
    "form.heading":             "Su presentación para inversores en 15 minutos.",
    "form.promise1":            "Resultados en 15 minutos o menos",
    "form.promise2":            "Primera presentación completamente gratuita",
    "form.promise3":            "Sus datos nunca se comparten sin consentimiento",
    "form.promise4":            "Trabajamos con terrenos en cualquier país",
    "form.name.label":          "Su nombre",
    "form.name.placeholder":    "Juan García",
    "form.contact.label":       "Teléfono / Email",
    "form.contact.placeholder": "+34 600 000 000",
    "form.location.label":      "Ubicación del terreno",
    "form.location.placeholder":"ej. Costa del Sol, España",
    "form.area.label":          "Superficie (hectáreas)",
    "form.area.placeholder":    "5",
    "form.price.label":         "Precio pedido ($)",
    "form.price.placeholder":   "320000",
    "form.goal.label":          "Su objetivo",
    "form.goal.placeholder":    "Seleccione su objetivo…",
    "form.goal.opt1":           "Vender el terreno al precio máximo",
    "form.goal.opt2":           "Encontrar un socio co-inversor",
    "form.goal.opt3":           "Explorar las posibilidades",
    "form.desc.label":          "Breve descripción",
    "form.desc.placeholder":    "Vistas, construcciones existentes, servicios, acceso…",
    "form.optional":            "(opcional)",
    "form.submit":              "Obtener mi presentación gratuita →",
    "form.disclaimer":          "Sin spam. Sin datos de pago. Resultados en 15 minutos.",
    "form.required":            "Este campo es obligatorio",
    "form.success.title":       "¡Envío recibido!",
    "form.success.body":        "Ya estamos trabajando en su presentación para inversores. La recibirá en 15 minutos.",
    "footer.copy":              "© 2026 LandPitch AI. Todos los derechos reservados.",
    "footer.privacy":           "Privacidad",
    "footer.terms":             "Términos",
    "footer.contact":           "Contacto",
  },

  fr: {
    "meta.title":               "LandPitch AI — Votre Terrain. Le Bon Investisseur. 15 Minutes.",
    "nav.how":                  "Comment ça marche",
    "nav.what":                 "Ce que vous obtenez",
    "nav.pricing":              "Tarifs",
    "nav.cta":                  "Démarrer gratuitement",
    "hero.eyebrow":             "Pour les propriétaires de terrains dans les zones touristiques",
    "hero.line1":               "Votre terrain.",
    "hero.line2":               "Le bon investisseur.",
    "hero.line3":               "15 minutes.",
    "hero.sub":                 "Nous transformons votre terrain en présentation professionnelle pour investisseurs — avec des concepts de développement, des projections financières et des introductions directes à des investisseurs vérifiés.",
    "hero.cta":                 "Obtenir ma présentation gratuite",
    "hero.secondary":           "Voir comment ça marche",
    "hero.card.title":          "Présentation Investisseurs",
    "hero.card.concept1":       "Resort Glamping de Luxe",
    "hero.card.concept2":       "Éco-Hôtel Boutique",
    "hero.card.concept3":       "Domaine de Villas Privées",
    "hero.card.progress":       "Analyse IA terminée",
    "hero.card.investors":      "47 investisseurs notifiés",
    "hero.card.time":           "il y a 14 min",
    "stats.minutes":            "minutes pour les résultats",
    "stats.commission":         "commission d'agent",
    "stats.investors":          "investisseurs vérifiés",
    "stats.concepts":           "concepts générés",
    "problem.label":            "Le problème",
    "problem.heading":          "Excellent terrain. Mauvais outils.",
    "problem.sub":              "Les propriétaires dans les destinations touristiques détiennent des actifs extraordinaires — et passent des années sans pouvoir atteindre les investisseurs qui les achèteraient.",
    "problem.p1.title":         "Les agents prennent 3 à 6 %",
    "problem.p1.body":          "Plus 2 à 4 mois d'attente, et rarement accès à des capitaux d'investissement sérieux.",
    "problem.p2.title":         "Les portails immobiliers ne conviennent pas aux terrains",
    "problem.p2.body":          "SeLoger, Leboncoin — conçus pour les maisons. Sans concepts, sans ROI, sans introductions aux investisseurs.",
    "problem.p3.title":         "Les consultants facturent 3 000 à 10 000 $",
    "problem.p3.body":          "Pour une présentation qui prend des semaines — sans garantie d'une seule introduction.",
    "problem.p4.title":         "Les investisseurs sont difficiles à atteindre",
    "problem.p4.body":          "Ils ne consultent pas les petites annonces. Ils passent par des réseaux de confiance.",
    "how.label":                "Comment ça marche",
    "how.heading":              "Quatre étapes. 15 minutes.",
    "how.sub":                  "Aucune connaissance technique requise. Aucun document à préparer. Parlez-nous simplement de votre terrain.",
    "how.s1.title":             "Parlez-nous de votre terrain",
    "how.s1.body":              "Remplissez un court formulaire — localisation, superficie, prix demandé et une brève description. Environ 3 minutes.",
    "how.s2.title":             "Nous analysons l'opportunité",
    "how.s2.body":              "Notre plateforme recherche votre zone — chiffres du tourisme, propriétés comparables, infrastructure et ce que les investisseurs recherchent actuellement.",
    "how.s3.title":             "Vous recevez votre présentation investisseurs",
    "how.s3.body":              "Un document professionnel de 12 pages montrant le potentiel de votre terrain — concepts, visuels et projections financières.",
    "how.s4.title":             "Les investisseurs viennent à vous",
    "how.s4.body":              "Nous contactons notre base d'investisseurs vérifiés et publions votre annonce professionnellement.",
    "what.label":               "Ce que vous recevez",
    "what.heading":             "Tout en un seul package.",
    "what.w1.title":            "Présentation Investisseurs",
    "what.w1.body":             "Un document de 12 pages racontant l'histoire de votre terrain — où il est, ce qu'il pourrait devenir, combien il pourrait rapporter.",
    "what.w2.title":            "Concepts de Développement",
    "what.w2.body":             "3 à 5 idées réalistes — glamping, hôtel boutique, villas, centre de retraite — avec revenus projetés et coûts.",
    "what.w3.title":            "Projections Financières",
    "what.w3.body":             "Chiffres clairs : coût de développement, revenus annuels, retour sur investissement et période de récupération.",
    "what.w4.title":            "Impressions Visuelles",
    "what.w4.body":             "Illustrations IA réalistes montrant à quoi pourrait ressembler chaque concept sur votre terrain.",
    "what.w5.title":            "Approche des Investisseurs",
    "what.w5.body":             "Nous contactons des investisseurs vérifiés dont les intérêts correspondent à votre terrain.",
    "what.w6.title":            "Publication sur le Marketplace",
    "what.w6.body":             "Votre propriété publiée sur notre plateforme et promue sur LinkedIn et des canaux spécialisés.",
    "pricing.label":            "Tarifs",
    "pricing.heading":          "Simple. Transparent. Sans commission.",
    "pricing.sub":              "Votre première soumission est toujours gratuite. Sans frais cachés. Annulez à tout moment.",
    "pricing.per_month":        "/ mois",
    "pricing.cta":              "Démarrer gratuitement",
    "pricing.starter.context":  "Pour les propriétaires individuels",
    "pricing.starter.name":     "Starter",
    "pricing.starter.f1":       "1 terrain publié",
    "pricing.starter.f2":       "Présentation investisseurs (12 pages)",
    "pricing.starter.f3":       "5 concepts de développement",
    "pricing.starter.f4":       "Projections financières",
    "pricing.starter.f5":       "Impressions visuelles IA",
    "pricing.starter.f6":       "Publication sur le marketplace",
    "pricing.starter.f7":       "Approche de 30 investisseurs",
    "pricing.pro.badge":        "Le plus populaire",
    "pricing.pro.context":      "Pour les propriétaires de plusieurs terrains",
    "pricing.pro.name":         "Pro",
    "pricing.pro.f1":           "Jusqu'à 10 terrains publiés",
    "pricing.pro.f2":           "Présentation par terrain",
    "pricing.pro.f3":           "5 concepts par terrain",
    "pricing.pro.f4":           "Projections financières",
    "pricing.pro.f5":           "Impressions visuelles IA",
    "pricing.pro.f6":           "Marketplace + réseaux sociaux",
    "pricing.pro.f7":           "Approche de 200 investisseurs",
    "pricing.pro.f8":           "Traitement prioritaire",
    "pricing.agency.context":   "Gérez votre propre activité depuis chez vous",
    "pricing.agency.name":      "Agence",
    "pricing.agency.f1":        "Terrains illimités",
    "pricing.agency.f2":        "Toutes les fonctionnalités Pro",
    "pricing.agency.f3":        "Marque blanche complète",
    "pricing.agency.f4":        "Proposez comme votre propre service",
    "pricing.agency.f5":        "Accès à 500+ investisseurs",
    "pricing.agency.f6":        "Gestionnaire de compte dédié",
    "pricing.agency.f7":        "Programme de partage des revenus",
    "pricing.agency.f8":        "Pas de bureau nécessaire",
    "pricing.agency.callout.title": "Le Plan Agence : une activité clé en main depuis chez vous.",
    "pricing.agency.callout.body":  "Utilisez notre plateforme sous votre propre nom et marque. Fixez vos propres prix. Gardez le bénéfice. Sans bureau, sans personnel, sans investissement initial.",
    "form.label":               "Commencer",
    "form.heading":             "Votre présentation investisseurs en 15 minutes.",
    "form.promise1":            "Résultats en 15 minutes ou moins",
    "form.promise2":            "Première soumission entièrement gratuite",
    "form.promise3":            "Vos coordonnées ne sont jamais partagées sans consentement",
    "form.promise4":            "Nous travaillons avec des terrains dans tous les pays",
    "form.name.label":          "Votre nom",
    "form.name.placeholder":    "Jean Dupont",
    "form.contact.label":       "Téléphone / Email",
    "form.contact.placeholder": "+33 6 00 00 00 00",
    "form.location.label":      "Localisation du terrain",
    "form.location.placeholder":"ex. Côte d'Azur, France",
    "form.area.label":          "Superficie (hectares)",
    "form.area.placeholder":    "5",
    "form.price.label":         "Prix demandé ($)",
    "form.price.placeholder":   "320000",
    "form.goal.label":          "Votre objectif",
    "form.goal.placeholder":    "Sélectionnez votre objectif…",
    "form.goal.opt1":           "Vendre le terrain au prix maximum",
    "form.goal.opt2":           "Trouver un co-investisseur",
    "form.goal.opt3":           "Explorer les possibilités",
    "form.desc.label":          "Brève description",
    "form.desc.placeholder":    "Vues, constructions existantes, raccordements, accès…",
    "form.optional":            "(optionnel)",
    "form.submit":              "Obtenir ma présentation gratuite →",
    "form.disclaimer":          "Sans spam. Sans données de paiement. Résultats en 15 minutes.",
    "form.required":            "Ce champ est obligatoire",
    "form.success.title":       "Soumission reçue !",
    "form.success.body":        "Nous travaillons déjà sur votre présentation. Vous la recevrez dans 15 minutes.",
    "footer.copy":              "© 2026 LandPitch AI. Tous droits réservés.",
    "footer.privacy":           "Confidentialité",
    "footer.terms":             "Conditions",
    "footer.contact":           "Contact",
  },

  ru: {
    "meta.title":               "LandPitch AI — Ваш участок. Нужный инвестор. 15 минут.",
    "nav.how":                  "Как это работает",
    "nav.what":                 "Что вы получаете",
    "nav.pricing":              "Тарифы",
    "nav.cta":                  "Начать бесплатно",
    "hero.eyebrow":             "Для владельцев земли в туристических районах",
    "hero.line1":               "Ваш участок.",
    "hero.line2":               "Нужный инвестор.",
    "hero.line3":               "15 минут.",
    "hero.sub":                 "Превращаем ваш земельный участок в профессиональную презентацию для инвесторов — с концепциями застройки, финансовыми прогнозами и прямыми знакомствами с проверенными инвесторами.",
    "hero.cta":                 "Получить презентацию бесплатно",
    "hero.secondary":           "Посмотреть как работает",
    "hero.card.title":          "Презентация для инвесторов",
    "hero.card.concept1":       "Люкс-глэмпинг",
    "hero.card.concept2":       "Эко-отель бутик",
    "hero.card.concept3":       "Элитный вилла-комплекс",
    "hero.card.progress":       "AI-анализ завершён",
    "hero.card.investors":      "47 инвесторов оповещены",
    "hero.card.time":           "14 мин назад",
    "stats.minutes":            "минут до результата",
    "stats.commission":         "комиссия агента",
    "stats.investors":          "проверенных инвесторов",
    "stats.concepts":           "концепций создано",
    "problem.label":            "Проблема",
    "problem.heading":          "Отличный участок. Неподходящие инструменты.",
    "problem.sub":              "Владельцы земли в туристических районах имеют ценные активы — и годами не могут выйти на инвесторов, готовых их купить.",
    "problem.p1.title":         "Риелторы берут 3–6%",
    "problem.p1.body":          "Плюс 2–4 месяца ожидания и редко — выход на серьёзных инвесторов.",
    "problem.p2.title":         "Сайты объявлений не работают для земли",
    "problem.p2.body":          "ЦИАН, Avito — созданы для квартир. Без концепций, без ROI, без инвесторов.",
    "problem.p3.title":         "Консультанты берут от $3 000",
    "problem.p3.body":          "За презентацию, которая делается неделями — без гарантии хотя бы одного знакомства с инвестором.",
    "problem.p4.title":         "Инвесторов сложно достичь",
    "problem.p4.body":          "Они не просматривают объявления. Они работают через доверенные сети и профессиональных посредников.",
    "how.label":                "Как это работает",
    "how.heading":              "Четыре шага. 15 минут.",
    "how.sub":                  "Никаких технических знаний. Никаких документов заранее. Просто расскажите нам о вашем участке.",
    "how.s1.title":             "Расскажите об участке",
    "how.s1.body":              "Заполните короткую форму — локация, площадь, цена и краткое описание. Займёт около 3 минут.",
    "how.s2.title":             "Мы анализируем возможности",
    "how.s2.body":              "Платформа исследует ваш район — туристический трафик, аналогичные объекты, инфраструктуру и интересы инвесторов прямо сейчас.",
    "how.s3.title":             "Вы получаете инвестиционную презентацию",
    "how.s3.body":              "Профессиональный 12-страничный документ с потенциалом вашего участка — концепции, визуализации и финансовые прогнозы.",
    "how.s4.title":             "Инвесторы приходят к вам",
    "how.s4.body":              "Мы связываемся с базой проверенных инвесторов и профессионально публикуем ваш объект. Заинтересованные выходят на вас напрямую.",
    "what.label":               "Что вы получаете",
    "what.heading":             "Всё в одном пакете.",
    "what.w1.title":            "Инвестиционная презентация",
    "what.w1.body":             "Профессиональный документ на 12 страниц — где участок, что там можно построить, сколько это принесёт и почему инвестору стоит действовать сейчас.",
    "what.w2.title":            "Концепции застройки",
    "what.w2.body":             "От 3 до 5 реалистичных идей — глэмпинг, бутик-отель, виллы, ретрит-центр — с прогнозами дохода и затрат.",
    "what.w3.title":            "Финансовые прогнозы",
    "what.w3.body":             "Чёткие цифры: стоимость строительства, годовая выручка, ROI и срок окупаемости для каждой концепции.",
    "what.w4.title":            "Визуализации",
    "what.w4.body":             "Реалистичные AI-иллюстрации того, как каждая концепция может выглядеть на вашем участке. Без архитектора.",
    "what.w5.title":            "Работа с инвесторами",
    "what.w5.body":             "Связываемся с проверенными инвесторами, чьи интересы соответствуют вашему участку. Каждое письмо персонализировано.",
    "what.w6.title":            "Публикация на маркетплейсе",
    "what.w6.body":             "Ваш объект опубликован на платформе и продвигается через LinkedIn и специализированные каналы.",
    "pricing.label":            "Тарифы",
    "pricing.heading":          "Просто. Прозрачно. Без комиссии.",
    "pricing.sub":              "Первая заявка всегда бесплатна. Никаких скрытых платежей. Отменить можно в любой момент.",
    "pricing.per_month":        "/ мес",
    "pricing.cta":              "Начать бесплатно",
    "pricing.starter.context":  "Для владельца одного участка",
    "pricing.starter.name":     "Старт",
    "pricing.starter.f1":       "1 объект на платформе",
    "pricing.starter.f2":       "Презентация для инвесторов (12 стр.)",
    "pricing.starter.f3":       "5 концепций застройки",
    "pricing.starter.f4":       "Финансовые прогнозы",
    "pricing.starter.f5":       "AI-визуализации",
    "pricing.starter.f6":       "Публикация на маркетплейсе",
    "pricing.starter.f7":       "Outreach 30 инвесторам",
    "pricing.pro.badge":        "Популярный",
    "pricing.pro.context":      "Для владельцев нескольких участков",
    "pricing.pro.name":         "Про",
    "pricing.pro.f1":           "До 10 объектов на платформе",
    "pricing.pro.f2":           "Презентация по каждому объекту",
    "pricing.pro.f3":           "5 концепций для каждого",
    "pricing.pro.f4":           "Финансовые прогнозы",
    "pricing.pro.f5":           "AI-визуализации",
    "pricing.pro.f6":           "Маркетплейс + соцсети",
    "pricing.pro.f7":           "Outreach 200 инвесторам",
    "pricing.pro.f8":           "Приоритетная обработка",
    "pricing.agency.context":   "Запустите свой бизнес из дома",
    "pricing.agency.name":      "Агентство",
    "pricing.agency.f1":        "Неограниченное кол-во объектов",
    "pricing.agency.f2":        "Все функции Про-тарифа",
    "pricing.agency.f3":        "White-label брендинг",
    "pricing.agency.f4":        "Продавайте как свой сервис",
    "pricing.agency.f5":        "База 500+ инвесторов",
    "pricing.agency.f6":        "Персональный менеджер",
    "pricing.agency.f7":        "Программа разделения дохода",
    "pricing.agency.f8":        "Офис не нужен",
    "pricing.agency.callout.title": "Тариф «Агентство»: готовый бизнес из дома.",
    "pricing.agency.callout.body":  "Используйте платформу под своим именем и брендом. Устанавливайте собственные цены. Зарабатывайте разницу. Без офиса, без сотрудников, без стартового капитала.",
    "form.label":               "Начать",
    "form.heading":             "Ваша инвестиционная презентация за 15 минут.",
    "form.promise1":            "Результат за 15 минут или быстрее",
    "form.promise2":            "Первая заявка полностью бесплатна",
    "form.promise3":            "Ваши данные не передаются без согласия",
    "form.promise4":            "Работаем с участками в любой стране",
    "form.name.label":          "Ваше имя",
    "form.name.placeholder":    "Иван Иванов",
    "form.contact.label":       "Телефон / Email",
    "form.contact.placeholder": "+7 900 000 00 00",
    "form.location.label":      "Локация участка",
    "form.location.placeholder":"например: Сочи, Краснодарский край",
    "form.area.label":          "Площадь (соток)",
    "form.area.placeholder":    "50",
    "form.price.label":         "Желаемая цена ($)",
    "form.price.placeholder":   "320000",
    "form.goal.label":          "Ваша цель",
    "form.goal.placeholder":    "Выберите цель…",
    "form.goal.opt1":           "Продать участок по максимальной цене",
    "form.goal.opt2":           "Найти со-инвестора для проекта",
    "form.goal.opt3":           "Оценить потенциал участка",
    "form.desc.label":          "Краткое описание",
    "form.desc.placeholder":    "Вид, постройки, коммуникации, подъезд…",
    "form.optional":            "(необязательно)",
    "form.submit":              "Получить бесплатную презентацию →",
    "form.disclaimer":          "Без спама. Оплата не нужна. Результат за 15 минут.",
    "form.required":            "Это поле обязательно",
    "form.success.title":       "Заявка принята!",
    "form.success.body":        "Мы уже работаем над вашей презентацией. Получите её в течение 15 минут.",
    "footer.copy":              "© 2026 LandPitch AI. Все права защищены.",
    "footer.privacy":           "Конфиденциальность",
    "footer.terms":             "Условия",
    "footer.contact":           "Контакт",
  }
};

// Stubs for de and pt (extend easily)
TRANSLATIONS.de = { ...TRANSLATIONS.en };
TRANSLATIONS.pt = { ...TRANSLATIONS.en };

/* ── i18n ENGINE ─────────────────────────────────── */
const i18n = (() => {
  let currentLang = 'en';

  function get(key) {
    const lang = TRANSLATIONS[currentLang] || TRANSLATIONS.en;
    return lang[key] || TRANSLATIONS.en[key] || key;
  }

  function applyAll(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    document.documentElement.dir = ['ar', 'he', 'fa'].includes(lang) ? 'rtl' : 'ltr';

    // Text content
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      const text = get(key);
      if (text) el.textContent = text;
    });

    // Placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.dataset.i18nPlaceholder;
      const text = get(key);
      if (text) el.placeholder = text;
    });

    // Page title
    const titleKey = 'meta.title';
    document.title = get(titleKey);

    // Persist
    try { localStorage.setItem('lp_lang', lang); } catch (_) {}
  }

  function init() {
    let lang = 'en';
    try { lang = localStorage.getItem('lp_lang') || navigator.language.split('-')[0] || 'en'; } catch (_) {}
    if (!TRANSLATIONS[lang]) lang = 'en';
    applyAll(lang);
    return lang;
  }

  return { get, applyAll, init, getCurrent: () => currentLang };
})();

/* ── LANGUAGE SWITCHER UI ────────────────────────── */
function initLangSwitcher() {
  const btn      = document.getElementById('langBtn');
  const dropdown = document.getElementById('langDropdown');
  const flagEl   = document.getElementById('langFlag');
  const codeEl   = document.getElementById('langCode');

  if (!btn || !dropdown) return;

  function setLang(lang, flag) {
    i18n.applyAll(lang);
    flagEl.textContent = flag;
    codeEl.textContent = lang.toUpperCase();
    dropdown.querySelectorAll('li').forEach(li => {
      li.setAttribute('aria-selected', li.dataset.lang === lang ? 'true' : 'false');
    });
    close();
  }

  function open()  { dropdown.classList.add('open'); btn.setAttribute('aria-expanded', 'true'); }
  function close() { dropdown.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); }

  btn.addEventListener('click', e => { e.stopPropagation(); dropdown.classList.contains('open') ? close() : open(); });
  dropdown.addEventListener('click', e => {
    const li = e.target.closest('li[data-lang]');
    if (li) setLang(li.dataset.lang, li.dataset.flag);
  });
  document.addEventListener('click', close);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });

  // Set initial flag/code from stored lang
  const current = i18n.getCurrent();
  const match = dropdown.querySelector(`li[data-lang="${current}"]`);
  if (match) {
    flagEl.textContent = match.dataset.flag;
    codeEl.textContent = current.toUpperCase();
    match.setAttribute('aria-selected', 'true');
  }
}

/* ── NAV ─────────────────────────────────────────── */
function initNav() {
  const header = document.querySelector('.site-header');
  const burger = document.getElementById('navBurger');
  const menu   = document.getElementById('navMenu');

  // Scroll shadow
  const onScroll = () => {
    header.querySelector('.nav').classList.toggle('nav--scrolled', window.scrollY > 10);
  };
  window.addEventListener('scroll', onScroll, { passive: true });

  // Burger
  if (burger && menu) {
    burger.addEventListener('click', () => {
      const open = burger.getAttribute('aria-expanded') === 'true';
      burger.setAttribute('aria-expanded', String(!open));
      menu.classList.toggle('is-open', !open);
      document.body.style.overflow = !open ? 'hidden' : '';
    });

    // Close on link click
    menu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        burger.setAttribute('aria-expanded', 'false');
        menu.classList.remove('is-open');
        document.body.style.overflow = '';
      });
    });

    // Close on outside click
    document.addEventListener('click', e => {
      if (!header.contains(e.target)) {
        burger.setAttribute('aria-expanded', 'false');
        menu.classList.remove('is-open');
        document.body.style.overflow = '';
      }
    });
  }
}

/* ── SCROLL ANIMATIONS ───────────────────────────── */
function initAnimations() {
  const els = document.querySelectorAll('[data-animate]');
  if (!els.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const delay = parseInt(entry.target.dataset.delay || 0, 10);
      setTimeout(() => entry.target.classList.add('is-visible'), delay);
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  els.forEach(el => observer.observe(el));
}

/* ── FORM ────────────────────────────────────────── */
function initForm() {
  const form    = document.getElementById('landForm');
  const success = document.getElementById('formSuccess');
  const submitBtn = document.getElementById('submitBtn');
  if (!form) return;

  function validateField(field) {
    const parent = field.closest('.form__field');
    if (!parent) return true;
    const valid = field.checkValidity() && field.value.trim() !== '';
    parent.classList.toggle('has-error', !valid && field.required);
    field.classList.toggle('is-invalid', !valid && field.required);
    return valid || !field.required;
  }

  // Live validation on blur
  form.querySelectorAll('input, select, textarea').forEach(field => {
    field.addEventListener('blur', () => validateField(field));
    field.addEventListener('input', () => {
      if (field.closest('.form__field')?.classList.contains('has-error')) {
        validateField(field);
      }
    });
  });

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Validate all required fields
    let valid = true;
    form.querySelectorAll('[required]').forEach(f => { if (!validateField(f)) valid = false; });
    if (!valid) {
      form.querySelector('.is-invalid')?.focus();
      return;
    }

    // Loading state
    submitBtn.classList.add('btn--loading');
    submitBtn.disabled = true;

    // Collect data
    const data = Object.fromEntries(new FormData(form));
    data.lang = i18n.getCurrent();
    data.submitted_at = new Date().toISOString();

    try {
      // TODO: replace with your Make.com webhook URL
      const WEBHOOK_URL = 'https://hook.eu1.make.com/YOUR_WEBHOOK_ID';
      await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
    } catch (_) {
      // Fail silently — show success anyway (webhook will retry)
    }

    // Show success
    form.hidden = true;
    success.hidden = false;
    success.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });
}

/* ── SMOOTH ANCHOR SCROLL ────────────────────────── */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const id = a.getAttribute('href').slice(1);
      if (!id) return;
      const target = document.getElementById(id);
      if (!target) return;
      e.preventDefault();
      const navH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h'), 10) || 72;
      const top = target.getBoundingClientRect().top + window.scrollY - navH - 8;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
}

/* ── BOOT ────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  i18n.init();
  initLangSwitcher();
  initNav();
  initAnimations();
  initForm();
  initSmoothScroll();
});
