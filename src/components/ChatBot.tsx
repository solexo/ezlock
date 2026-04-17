import React, { useState } from 'react';
import { MessageCircle, Send, X, Bot, User } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showWhatsAppButton, setShowWhatsAppButton] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Bonjour ! 👋 Je suis votre assistant IA DOMO28 spécialisé en domotique avancée. Je peux vous présenter nos solutions complètes : serrures intelligentes, caméras IP, interrupteurs smart, relais automatisés, portes motorisées, poignets connectés, thermostats, et bien plus ! Je vous aide à créer votre maison du futur. Que souhaitez-vous découvrir ?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');

  const products = {
    serrures: [
      {
        name: "Serrure i40",
        price: "4000 DH HT",
        features: ["Face ID", "NFC", "Clé", "Application", "Empreinte", "Code"],
        description: "Modèle premium avec toutes les fonctionnalités"
      },
      {
        name: "Serrure i30", 
        price: "3500 DH HT",
        features: ["Face ID", "NFC", "Clé", "Application", "Empreinte", "Code"],
        description: "Parfait équilibre entre fonctionnalités et prix"
      },
      {
        name: "Serrure K10",
        price: "3500 DH HT", 
        features: ["Face ID", "NFC", "Clé", "Application", "Empreinte", "Code"],
        description: "Design moderne avec technologie de pointe"
      },
      {
        name: "Serrure i29",
        price: "3200 DH HT",
        features: ["Face ID", "NFC", "Clé", "Application", "Empreinte", "Code"],
        description: "Excellente option avec reconnaissance faciale"
      },
      {
        name: "Serrure X5 Ultra",
        price: "1650 DH HT",
        features: ["NFC", "Clé", "Application", "Empreinte", "Code"],
        description: "Modèle économique sans Face ID"
      },
      {
        name: "Serrure X5 Cam",
        price: "1950 DH HT", 
        features: ["NFC", "Clé", "Application", "Empreinte", "Code"],
        description: "Avec caméra intégrée pour plus de sécurité"
      },
      {
        name: "Serrure M1 Pro",
        price: "2400 DH HT",
        features: ["NFC", "Clé", "Application", "Empreinte", "Code"],
        description: "Professionnel et fiable"
      }
    ],
    autres: [
      {
        name: "Caméras de Surveillance",
        price: "À négocier selon quantité",
        features: ["Vision nocturne", "Détection de mouvement", "Stockage cloud", "Application mobile"],
        description: "Installation de caméras intelligentes pour votre sécurité"
      },
      {
        name: "Interrupteurs Intelligents",
        price: "À négocier selon quantité", 
        features: ["Contrôle vocal", "Application mobile", "Programmation", "Économie d'énergie"],
        description: "Transformez votre éclairage en système intelligent"
      },
      {
        name: "Relais Intelligents",
        price: "À négocier selon quantité",
        features: ["Contrôle à distance", "Programmation", "Application mobile", "Automatisation"],
        description: "Contrôlez tous vos appareils électriques à distance"
      },
      {
        name: "Portes Automatiques",
        price: "À négocier selon quantité",
        features: ["Ouverture automatique", "Détection de présence", "Contrôle mobile", "Sécurité renforcée"],
        description: "Automatisez l'ouverture de vos portes"
      }
    ]
  };

  const handleSendMessage = () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputText,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    
    // Générer la réponse de l'IA
    const botResponse = generateBotResponse(inputText.toLowerCase());
    
    setTimeout(() => {
      const botMessage: Message = {
        id: messages.length + 2,
        text: botResponse,
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);

    setInputText('');
  };

  const generateBotResponse = (userInput: string): string => {
    // Demande de devis / confirmation d'achat
    if (userInput.includes('oui') || userInput.includes('devis') || userInput.includes('commande') || userInput.includes('acheter') || userInput.includes('commander') || userInput.includes('prendre') || userInput.includes('confirmer') || userInput.includes('intéressé') || userInput.includes('intéresse')) {
      setShowWhatsAppButton(true);
      return `🎉 **Parfait ! Vous souhaitez un devis personnalisé !**

📱 **Pour obtenir votre devis personnalisé :**
Contactez-nous directement sur WhatsApp pour des conseils experts et un devis détaillé !

💬 Notre équipe vous répondra rapidement avec :
• Devis personnalisé selon vos besoins
• Conseils d'experts en domotique
• Planification de l'installation
• Réponses à toutes vos questions

⚡ **Réponse garantie sous 24h !**

À très bientôt ! 🏠✨`;
    }

    // Poignets intelligents / Smart wristbands
    if (userInput.includes('poignet') || userInput.includes('wristband') || userInput.includes('bracelet') || userInput.includes('smart bracelet') || userInput.includes('poignet intelligent') || userInput.includes('poignet smart')) {
      return `⌚ **Poignets Intelligents :**

**🔧 Fonctionnalités Avancées :**
✅ Contrôle vocal intégré
✅ Détection biométrique (pouls, température)
✅ NFC pour paiements sans contact
✅ GPS et géolocalisation
✅ Notifications intelligentes
✅ Contrôle domotique intégré
✅ Batterie longue durée (7 jours)
✅ Résistant à l'eau (IP68)

**🏠 Intégration Domotique :**
• Contrôle de l'éclairage par geste
• Ouverture de portes sans contact
• Gestion de l'alarme maison
• Contrôle de la climatisation
• Monitoring de la consommation énergétique

**💰 Prix :**
• À négocier selon modèle et fonctionnalités
• Installation et configuration incluse
• Formation à l'utilisation incluse

**🏠 Avantages :**
• Maison entièrement contrôlable depuis votre poignet
• Sécurité biométrique avancée
• Confort et praticité maximaux
• Style moderne et élégant

Voulez-vous plus de détails ou un devis personnalisé ? 📱`;
    }

    // Modèles spécifiques de serrures
    if (userInput.includes('i30') || userInput.includes('i40') || userInput.includes('k10') || userInput.includes('i29') || userInput.includes('x5') || userInput.includes('m1')) {
      const model = userInput.toLowerCase();
      let productInfo = '';
      
      if (model.includes('i30')) {
        productInfo = `🔐 **Serrure Intelligente i30 - 3500 DH HT**

**🏆 Modèle Premium avec Face ID :**
✅ Face ID (reconnaissance faciale)
✅ NFC (sans contact)
✅ Clé physique
✅ Application mobile
✅ Empreinte digitale
✅ Code numérique

**💡 Fonctionnalités Avancées :**
• Contrôle à distance depuis votre smartphone
• Historique d'accès détaillé
• Batterie longue durée (6-12 mois)
• Alerte de batterie faible
• Mode invité pour accès temporaires

**💰 Prix :** 3500 DH HT
**🚚 Livraison :** GRATUITE sur Casablanca
**🔧 Installation :** Professionnelle incluse (ou -300 DH si auto-installation)

**🏠 Idéal pour :** Maisons familiales, bureaux, propriétés de prestige

Voulez-vous plus de détails ou un devis personnalisé ? 📱`;
      } else if (model.includes('i40')) {
        productInfo = `🔐 **Serrure Intelligente i40 - 4000 DH HT**

**🏆 Notre Modèle Premium avec Face ID :**
✅ Face ID (reconnaissance faciale)
✅ NFC (sans contact)
✅ Clé physique
✅ Application mobile
✅ Empreinte digitale
✅ Code numérique

**💡 Fonctionnalités Ultra Avancées :**
• Contrôle à distance depuis votre smartphone
• Historique d'accès détaillé
• Batterie longue durée (6-12 mois)
• Alerte de batterie faible
• Mode invité pour accès temporaires
• Design premium et résistant

**💰 Prix :** 4000 DH HT
**🚚 Livraison :** GRATUITE sur Casablanca
**🔧 Installation :** Professionnelle incluse (ou -300 DH si auto-installation)

**🏠 Idéal pour :** Propriétés haut de gamme, villas, bureaux professionnels

Voulez-vous plus de détails ou un devis personnalisé ? 📱`;
      } else if (model.includes('k10')) {
        productInfo = `🔐 **Serrure Intelligente K10 - 3500 DH HT**

**🏆 Modèle Premium avec Face ID :**
✅ Face ID (reconnaissance faciale)
✅ NFC (sans contact)
✅ Clé physique
✅ Application mobile
✅ Empreinte digitale
✅ Code numérique

**💡 Design Moderne et Fonctionnalités :**
• Contrôle à distance depuis votre smartphone
• Historique d'accès détaillé
• Batterie longue durée (6-12 mois)
• Alerte de batterie faible
• Mode invité pour accès temporaires
• Design moderne et élégant

**💰 Prix :** 3500 DH HT
**🚚 Livraison :** GRATUITE sur Casablanca
**🔧 Installation :** Professionnelle incluse (ou -300 DH si auto-installation)

**🏠 Idéal pour :** Maisons modernes, appartements, propriétés contemporaines

Voulez-vous plus de détails ou un devis personnalisé ? 📱`;
      } else if (model.includes('i29')) {
        productInfo = `🔐 **Serrure Intelligente i29 - 3200 DH HT**

**🏆 Modèle Premium avec Face ID :**
✅ Face ID (reconnaissance faciale)
✅ NFC (sans contact)
✅ Clé physique
✅ Application mobile
✅ Empreinte digitale
✅ Code numérique

**💡 Excellent Rapport Qualité/Prix :**
• Contrôle à distance depuis votre smartphone
• Historique d'accès détaillé
• Batterie longue durée (6-12 mois)
• Alerte de batterie faible
• Mode invité pour accès temporaires
• Design fiable et fonctionnel

**💰 Prix :** 3200 DH HT
**🚚 Livraison :** GRATUITE sur Casablanca
**🔧 Installation :** Professionnelle incluse (ou -300 DH si auto-installation)

**🏠 Idéal pour :** Maisons familiales, propriétés résidentielles, excellent rapport qualité/prix

Voulez-vous plus de détails ou un devis personnalisé ? 📱`;
      } else if (model.includes('x5')) {
        productInfo = `🔐 **Serrure Intelligente X5 - 1650-1950 DH HT**

**💡 Modèles Standard (sans Face ID) :**
✅ NFC (sans contact)
✅ Clé physique
✅ Application mobile
✅ Empreinte digitale
✅ Code numérique

**📹 X5 Cam - 1950 DH HT :**
• Avec caméra intégrée
• Surveillance vidéo
• Vision nocturne

**💡 X5 Ultra - 1650 DH HT :**
• Modèle économique
• Toutes les fonctionnalités de base
• Excellent rapport qualité/prix

**💰 Prix :** 1650-1950 DH HT selon modèle
**🚚 Livraison :** GRATUITE sur Casablanca
**🔧 Installation :** Professionnelle incluse (ou -300 DH si auto-installation)

Voulez-vous plus de détails ou un devis personnalisé ? 📱`;
      } else if (model.includes('m1')) {
        productInfo = `🔐 **Serrure Intelligente M1 Pro - 2400 DH HT**

**💼 Modèle Professionnel :**
✅ NFC (sans contact)
✅ Clé physique
✅ Application mobile
✅ Empreinte digitale
✅ Code numérique

**💡 Caractéristiques Professionnelles :**
• Contrôle à distance depuis votre smartphone
• Historique d'accès détaillé
• Batterie longue durée
• Design professionnel et fiable
• Parfait pour les entreprises

**💰 Prix :** 2400 DH HT
**🚚 Livraison :** GRATUITE sur Casablanca
**🔧 Installation :** Professionnelle incluse (ou -300 DH si auto-installation)

**🏢 Idéal pour :** Bureaux, entreprises, propriétés professionnelles

Voulez-vous plus de détails ou un devis personnalisé ? 📱`;
      }
      
      return productInfo;
    }

    // Interrupteurs intelligents / Smart switches
    if (userInput.includes('switch') || userInput.includes('interrupteur') || userInput.includes('éclairage') || userInput.includes('lumière') || userInput.includes('smart switch') || userInput.includes('dimmer') || userInput.includes('variateur') || userInput.includes('éclairage intelligent') || userInput.includes('lighting control')) {
      return `💡 **Interrupteurs Intelligents :**

**🔧 Fonctionnalités :**
✅ Contrôle vocal (Alexa, Google Assistant)
✅ Application mobile
✅ Programmation horaire
✅ Économie d'énergie
✅ Contrôle à distance
✅ Scènes d'éclairage personnalisées

**💰 Prix :**
• À négocier selon quantité et besoins
• Installation professionnelle incluse
• Formation à l'utilisation incluse

**🏠 Avantages :**
• Transformez votre éclairage en système intelligent
• Contrôlez toutes vos lumières depuis votre smartphone
• Créez des ambiances automatiques
• Économisez sur votre facture d'électricité

Voulez-vous plus de détails ou un devis personnalisé ? 📱`;
    }

    // Caméras
    if (userInput.includes('caméra') || userInput.includes('camera') || userInput.includes('surveillance') || userInput.includes('sécurité') || userInput.includes('ip camera') || userInput.includes('vidéosurveillance') || userInput.includes('cctv') || userInput.includes('détection') || userInput.includes('motion sensor') || userInput.includes('capteur')) {
      return `📹 **Caméras de Surveillance :**

**🔧 Fonctionnalités :**
✅ Vision nocturne HD
✅ Détection de mouvement intelligente
✅ Stockage cloud sécurisé
✅ Application mobile
✅ Alertes en temps réel
✅ Vision 360° (selon modèle)

**💰 Prix :**
• À négocier selon quantité et besoins
• Installation professionnelle incluse
• Formation à l'utilisation incluse

**🏠 Avantages :**
• Surveillez votre maison 24h/24
• Recevez des alertes instantanées
• Historique des événements
• Accès depuis n'importe où

Voulez-vous plus de détails ou un devis personnalisé ? 📱`;
    }

    // Relais intelligents
    if (userInput.includes('relais') || userInput.includes('relay') || userInput.includes('automatisation') || userInput.includes('appareil') || userInput.includes('smart relay') || userInput.includes('controleur') || userInput.includes('module') || userInput.includes('actuateur') || userInput.includes('sensor') || userInput.includes('capteur')) {
      return `⚡ **Relais Intelligents :**

**🔧 Fonctionnalités :**
✅ Contrôle à distance de tous vos appareils
✅ Programmation et automatisation
✅ Application mobile intuitive
✅ Scénarios personnalisés
✅ Monitoring de consommation
✅ Compatible avec la plupart des appareils

**💰 Prix :**
• À négocier selon quantité et besoins
• Installation professionnelle incluse
• Formation à l'utilisation incluse

**🏠 Avantages :**
• Contrôlez tous vos appareils électriques
• Créez des scénarios d'automatisation
• Économisez de l'énergie
• Maison vraiment intelligente

Voulez-vous plus de détails ou un devis personnalisé ? 📱`;
    }

    // Portes automatiques
    if (userInput.includes('porte') || userInput.includes('door') || userInput.includes('automatique') || userInput.includes('ouverture') || userInput.includes('automatic door') || userInput.includes('porte motorisée') || userInput.includes('porte électrique') || userInput.includes('motor') || userInput.includes('moteur')) {
      return `🚪 **Portes Automatiques :**

**🔧 Fonctionnalités :**
✅ Ouverture automatique par détection
✅ Contrôle mobile à distance
✅ Sécurité renforcée
✅ Programmation d'horaires
✅ Alertes de sécurité
✅ Compatible avec serrures intelligentes

**💰 Prix :**
• À négocier selon quantité et besoins
• Installation professionnelle incluse
• Formation à l'utilisation incluse

**🏠 Avantages :**
• Accès sans contact
• Sécurité maximale
• Confort d'utilisation
• Intégration avec votre système domotique

Voulez-vous plus de détails ou un devis personnalisé ? 📱`;
    }

    // Présentation des produits
    if (userInput.includes('produit') || userInput.includes('serrure') || userInput.includes('modèle') || userInput.includes('commencer')) {
      return `🏠 **Nos Solutions Domotiques Complètes :**

**🔐 Serrures Intelligentes :**
• **i40** - 4000 DH HT (Face ID + toutes options)
• **i30** - 3500 DH HT (Face ID + toutes options)  
• **K10** - 3500 DH HT (Face ID + toutes options)
• **i29** - 3200 DH HT (Face ID + toutes options)
• **X5 Cam** - 1950 DH HT (avec caméra intégrée)
• **M1 Pro** - 2400 DH HT (professionnel)
• **X5 Ultra** - 1650 DH HT (économique)

**📹 Caméras de Surveillance :**
• Installation sur mesure
• Prix à négocier selon quantité
• Vision nocturne, détection mouvement, cloud

**💡 Interrupteurs Intelligents :**
• Installation sur mesure  
• Prix à négocier selon quantité
• Contrôle vocal, mobile, programmation

**⚡ Relais Intelligents :**
• Installation sur mesure
• Prix à négocier selon quantité
• Contrôle à distance, automatisation

**🚪 Portes Automatiques :**
• Installation sur mesure
• Prix à négocier selon quantité
• Ouverture automatique, détection présence

Quel produit vous intéresse ? 🤔`;
    }

    // Informations sur les prix
    if (userInput.includes('prix') || userInput.includes('coût') || userInput.includes('tarif')) {
      return `💰 **Nos Tarifs :**

**🔐 Serrures Intelligentes :**
• i40 : 4000 DH HT
• i30 : 3500 DH HT  
• K10 : 3500 DH HT
• i29 : 3200 DH HT
• X5 Cam : 1950 DH HT
• M1 Pro : 2400 DH HT
• X5 Ultra : 1650 DH HT

**📹 Caméras de Surveillance :**
• Prix à négocier selon quantité et besoins
• Installation incluse

**💡 Interrupteurs Intelligents :**
• Prix à négocier selon quantité et besoins
• Installation incluse

**⚡ Relais Intelligents :**
• Prix à négocier selon quantité et besoins
• Installation incluse

**🚪 Portes Automatiques :**
• Prix à négocier selon quantité et besoins
• Installation incluse

💡 **Bon à savoir :**
• Livraison GRATUITE sur Casablanca uniquement
• Réduction de 300 DH si vous vous occupez de l'installation
• Installation professionnelle incluse sinon

Voulez-vous plus de détails sur un produit spécifique ? 🏠`;
    }

    // Installation et livraison
    if (userInput.includes('installation') || userInput.includes('livraison') || userInput.includes('montage')) {
      return `🚚 **Livraison & Installation :**

📦 **Livraison :**
• GRATUITE uniquement sur Casablanca
• Frais de livraison pour les autres villes

🔧 **Installation :**
• Installation professionnelle incluse dans le prix
• OU réduction de 300 DH si vous préférez vous en occuper
• Formation complète à l'utilisation incluse

⚡ **Délai :** Installation sous 48h après validation

**📹 Caméras, 💡 Interrupteurs, ⚡ Relais & 🚪 Portes Automatiques :**
• Installation sur mesure incluse
• Prix négociable selon quantité
• Formation à l'utilisation incluse

Vous êtes de quelle ville ? Je peux vous donner plus de précisions ! 📍`;
    }


    // Fonctionnalités
    if (userInput.includes('fonction') || userInput.includes('option') || userInput.includes('face id') || userInput.includes('nfc')) {
      return `🔧 **Fonctionnalités de nos Solutions :**

**🔐 Serrures Premium (i40, i30, K10, i29) :**
✅ Face ID (reconnaissance faciale)
✅ NFC (sans contact)
✅ Clé physique
✅ Application mobile
✅ Empreinte digitale
✅ Code numérique

**🔐 Serrures Standard (X5 Ultra, X5 Cam, M1 Pro) :**
✅ NFC (sans contact)
✅ Clé physique  
✅ Application mobile
✅ Empreinte digitale
✅ Code numérique
❌ Pas de Face ID

**📹 Caméras de Surveillance :**
✅ Vision nocturne
✅ Détection de mouvement
✅ Stockage cloud
✅ Application mobile

**💡 Interrupteurs Intelligents :**
✅ Contrôle vocal
✅ Application mobile
✅ Programmation
✅ Économie d'énergie

**⚡ Relais Intelligents :**
✅ Contrôle à distance
✅ Programmation
✅ Application mobile
✅ Automatisation

**🚪 Portes Automatiques :**
✅ Ouverture automatique
✅ Détection de présence
✅ Contrôle mobile
✅ Sécurité renforcée

Quelle fonctionnalité vous intéresse le plus ? 🤔`;
    }

    // Systèmes de climatisation intelligente
    if (userInput.includes('thermostat') || userInput.includes('climatisation') || userInput.includes('chauffage') || userInput.includes('ventilation') || userInput.includes('air conditioning') || userInput.includes('hvac') || userInput.includes('temperature') || userInput.includes('température') || userInput.includes('humidité') || userInput.includes('humidite')) {
      return `🌡️ **Systèmes de Climatisation Intelligente :**

**🔧 Contrôle Total du Climat :**
✅ Thermostats intelligents programmables
✅ Contrôle de climatisation centralisée
✅ Systèmes de chauffage connectés
✅ Ventilation automatique intelligente
✅ Capteurs de température/humidité
✅ Détection de présence pour optimisation
✅ Programmation horaire avancée
✅ Géofencing pour contrôle automatique

**💰 Économies d'Énergie :**
• Réduction de 30% sur vos factures
• Optimisation automatique selon l'occupation
• Modes éco intelligents
• Monitoring de consommation en temps réel

**🏠 Fonctionnalités Avancées :**
• Contrôle vocal (Alexa, Google Assistant)
• Application mobile complète
• Scénarios automatiques personnalisés
• Alertes de maintenance préventive
• Intégration avec autres systèmes domotiques

**💰 Prix :** À négocier selon système et superficie
**🔧 Installation :** Professionnelle incluse avec calibration
**📚 Formation :** Utilisation et programmation incluse

Voulez-vous plus de détails ou un devis personnalisé ? 📱`;
    }

    // Systèmes d'alarme et sécurité avancée
    if (userInput.includes('alarme') || userInput.includes('security') || userInput.includes('sécurité') || userInput.includes('protection') || userInput.includes('intrusion') || userInput.includes('détecteur') || userInput.includes('detector') || userInput.includes('pir sensor') || userInput.includes('magnetic sensor') || userInput.includes('glass break')) {
      return `🚨 **Systèmes d'Alarme et Sécurité Avancée :**

**🔐 Sécurité Totale 24h/24 :**
✅ Détecteurs de mouvement PIR intelligents
✅ Capteurs d'ouverture magnétiques
✅ Détecteurs de bris de vitre
✅ Capteurs de fumée et CO connectés
✅ Sirènes intérieures et extérieures
✅ Détecteurs de vibration et choc
✅ Capteurs d'inondation et fuites
✅ Centrale d'alarme avec communication GSM

**📱 Contrôle et Monitoring :**
• Application mobile avec notifications push
• Monitoring 24h/24 par centre de télésurveillance
• Historique des événements détaillé
• Contrôle à distance complet
• Intégration avec caméras de surveillance
• Géofencing pour activation automatique

**🏠 Installation Personnalisée :**
• Audit de sécurité gratuit
• Installation invisible et discrète
• Zones de protection configurables
• Scénarios d'activation personnalisés
• Formation complète à l'utilisation

**💰 Prix :** À négocier selon superficie et besoins
**🔧 Installation :** Professionnelle avec test complet
**🛡️ Garantie :** 3 ans pièces et main d'œuvre

Voulez-vous plus de détails ou un devis personnalisé ? 📱`;
    }

    // Horme intelligente et jardin connecté
    if (userInput.includes('jardin') || userInput.includes('garden') || userInput.includes('arrosage') || userInput.includes('irrigation') || userInput.includes('pelouse') || userInput.includes('gazon') || userInput.includes('extérieur') || userInput.includes('outdoor') || userInput.includes('éclairage extérieur') || userInput.includes('outdoor lighting')) {
      return `🌱 **Jardin et Extérieur Intelligents :**

**🚿 Arrosage Automatique Intelligent :**
✅ Systèmes d'irrigation programmables
✅ Capteurs d'humidité du sol
✅ Vannes électriques connectées
✅ Programmation selon météo
✅ Zones d'arrosage indépendantes
✅ Économie d'eau jusqu'à 50%

**💡 Éclairage Extérieur Connecté :**
✅ Éclairage LED intelligent
✅ Détection de mouvement automatique
✅ Programmation horaire et saisonnière
✅ Contrôle de luminosité automatique
✅ Effets d'ambiance personnalisés
✅ Résistant aux intempéries (IP65+)

**🏠 Automatisation Complète :**
• Contrôle vocal et mobile
• Intégration avec système domotique
• Scénarios selon saisons
• Monitoring de consommation
• Alertes de maintenance

**💰 Prix :** À négocier selon superficie et complexité
**🔧 Installation :** Professionnelle avec tests
**💧 Garantie :** 2 ans pièces et main d'œuvre

Voulez-vous plus de détails ou un devis personnalisé ? 📱`;
    }

    // Autres termes domotiques
    if (userInput.includes('smart home') || userInput.includes('maison connectée') || userInput.includes('domotique') || userInput.includes('iot') || userInput.includes('z-wave') || userInput.includes('zigbee') || userInput.includes('wifi') || userInput.includes('bluetooth') || userInput.includes('hub') || userInput.includes('gateway') || userInput.includes('assistant vocal') || userInput.includes('voice control') || userInput.includes('alexa') || userInput.includes('google home') || userInput.includes('siri') || userInput.includes('homekit') || userInput.includes('matter') || userInput.includes('thread')) {
      return `🏠 **Solutions Domotiques Complètes & Technologies Avancées :**

**🔧 Nous installons TOUT le matériel domotique :**

**🔐 Sécurité & Surveillance :**
• Serrures intelligentes (i30, i40, k10, i29, X5, M1)
• Caméras IP 4K et systèmes de surveillance
• Détecteurs de mouvement PIR et capteurs
• Systèmes d'alarme connectés avec télésurveillance
• Détecteurs de fumée, CO, inondation

**💡 Éclairage & Énergie :**
• Interrupteurs et variateurs intelligents
• Relais et modules de contrôle
• Systèmes d'éclairage automatique
• Gestion de la consommation énergétique
• Éclairage extérieur connecté

**🌡️ Climatisation & Confort :**
• Thermostats intelligents programmables
• Contrôle de climatisation centralisée
• Systèmes de ventilation automatique
• Capteurs de température/humidité
• Géofencing pour optimisation automatique

**🚪 Accès & Ouvertures :**
• Portes automatiques motorisées
• Barrières et portails intelligents
• Systèmes d'ouverture sans contact
• Contrôle d'accès biométrique

**⌚ Accessoires & Wearables :**
• Poignets et bracelets intelligents
• Assistants vocaux (Alexa, Google, Siri)
• Hubs et passerelles domotiques
• Contrôleurs universels

**🌱 Jardin & Extérieur :**
• Systèmes d'arrosage automatique
• Éclairage extérieur intelligent
• Capteurs météo et sol
• Automatisation saisonnière

**📡 Protocoles & Technologies :**
• WiFi 6, Bluetooth 5.0, Zigbee 3.0
• Z-Wave Plus, Thread, Matter
• HomeKit, Google Home, Amazon Alexa
• Intégration cloud et local

**💰 Installation & Support Premium :**
• Installation professionnelle incluse
• Configuration et programmation avancée
• Formation complète à l'utilisation
• Support technique 7j/7
• Maintenance préventive
• Mises à jour logicielles

Quelle solution vous intéresse ? 🤔`;
    }

    // Questions fréquentes et aide
    if (userInput.includes('aide') || userInput.includes('help') || userInput.includes('comment') || userInput.includes('how') || userInput.includes('que') || userInput.includes('quoi') || userInput.includes('qu\'est-ce') || userInput.includes('explique') || userInput.includes('info')) {
      return `❓ **Comment puis-je vous aider ?**

**🔍 Vous pouvez me demander :**
• "Présente-moi vos produits" - Découverte complète
• "Quels sont vos prix ?" - Tarifs détaillés
• "i30" ou "i40" - Info sur un modèle spécifique
• "Smart switch" - Interrupteurs intelligents
• "Caméra" - Systèmes de surveillance
• "Poignet intelligent" - Wearables connectés
• "Thermostat" - Climatisation intelligente
• "Alarme" - Sécurité avancée
• "Jardin" - Extérieur connecté
• "Domotique" - Solutions complètes

**💰 Pour un devis :** Dites simplement "oui" ou "devis"

**📱 Besoin d'aide ?** Je vous guide vers WhatsApp pour un conseil personnalisé !

Que souhaitez-vous découvrir ? 🤔`;
    }

    // Réponse par défaut
    return `Bonjour ! 👋 

Je suis votre assistant DOMO28 spécialisé en domotique avancée. Je peux vous aider avec :

🔐 **Serrures intelligentes** - i30, i40, k10, i29, X5, M1
📹 **Caméras IP 4K** - Surveillance intelligente
💡 **Interrupteurs smart** - Éclairage connecté
⚡ **Relais automatisés** - Contrôle total
🚪 **Portes motorisées** - Accès intelligent
⌚ **Poignets connectés** - Contrôle au poignet
🌡️ **Thermostats** - Climatisation intelligente
🚨 **Alarmes** - Sécurité 24h/24
🌱 **Jardin connecté** - Extérieur automatisé
📡 **Protocoles** - WiFi 6, Zigbee, Z-Wave, Matter

**💬 Dites-moi ce qui vous intéresse !**
Ex: "i30", "smart switch", "caméra", "thermostat", "alarme"

**💰 Pour un devis personnalisé :** Dites "oui" ! 🏠`;
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Bouton flottant */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
           className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 bg-gradient-to-r from-blue-accent via-blue-400 to-blue-300 text-white p-3 sm:p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 active:scale-95 touch-manipulation z-50"
          aria-label="Ouvrir le chat assistant"
          title="Ouvrir le chat assistant"
        >
          <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 w-[calc(100vw-2rem)] sm:w-96 h-[calc(100vh-2rem)] sm:h-[600px] max-h-[700px] bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 z-50 flex flex-col">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-accent via-blue-400 to-blue-300 text-white p-3 sm:p-4 rounded-t-2xl flex items-center justify-between">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <Bot className="w-5 h-5 sm:w-6 sm:h-6" />
              <div>
                <h3 className="font-heading text-sm sm:text-base">Assistant DOMO28</h3>
                <p className="text-xs opacity-90">En ligne</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white/20 active:bg-white/30 rounded-full p-1 transition-colors touch-manipulation"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-3 sm:space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-[85%] sm:max-w-[80%] p-2 sm:p-3 rounded-2xl ${
                    message.isBot
                      ? 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white'
                       : 'bg-gradient-to-r from-blue-accent via-blue-400 to-blue-300 text-white'
                  }`}
                >
                  <div className="flex items-start space-x-1 sm:space-x-2">
                    {message.isBot && <Bot className="w-3 h-3 sm:w-4 sm:h-4 mt-1 flex-shrink-0" />}
                    {!message.isBot && <User className="w-3 h-3 sm:w-4 sm:h-4 mt-1 flex-shrink-0" />}
                    <div className="flex-1">
                      <p className="text-xs sm:text-sm whitespace-pre-line">{message.text}</p>
                      <p className="text-xs opacity-70 mt-1">
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bouton WhatsApp */}
          {showWhatsAppButton && (
            <div className="p-3 sm:p-4 border-t border-gray-200 dark:border-gray-700">
              <button
                onClick={() => {
                  // Check if mobile device
                  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

                  if (isMobile) {
                    // Use whatsapp:// URL scheme for mobile apps
                    window.location.href = 'whatsapp://send?phone=212660245937';
                  } else {
                    // Use web WhatsApp for desktop
                    window.open('https://wa.me/212660245937', '_blank');
                  }
                }}
                className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-2 sm:py-3 px-4 sm:px-6 rounded-xl font-semibold hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center space-x-2 text-sm sm:text-base touch-manipulation"
              >
                <span>💬</span>
                <span>Envoyer un message WhatsApp</span>
              </button>
            </div>
          )}

          {/* Input */}
          <div className="p-3 sm:p-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Tapez votre message..."
                 className="flex-1 px-3 sm:px-4 py-2 text-sm sm:text-base border border-gray-300 dark:border-gray-600 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-accent dark:bg-gray-700 dark:text-white"
              />
              <button
                onClick={handleSendMessage}
                className="bg-gradient-to-r from-blue-accent via-blue-400 to-blue-300 text-white p-2 rounded-full hover:shadow-lg active:scale-95 transition-all duration-300 touch-manipulation"
              >
                <Send className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;
