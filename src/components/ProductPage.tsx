import React from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import ProductCard from './ProductCard';

const ProductPage: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();

  const products = [
    {
      id: 'x1ai',
      name: 'X1 Ai 7 Methodes d\'Ouverture Intelligentes',
      image: '/images/x1ai.webp',
      url: '/product/x1ai',
      features: [
        'Reconnaissance Faciale (AI) ultra-precise',
        'Empreinte Digitale 360 degres',
        'Code PIN personnalisable',
        'Cle mecanique',
        'Carte NFC',
        'Application mobile (Wi-Fi & Bluetooth)',
        'Ouverture par paume intelligente (AI Palm ID)'
      ],
      description: 'Grace a son systeme AI avance, la X1 reconnait les visages avec une precision exceptionnelle et apprend vos habitudes pour un confort optimal.'
    },
    {
      id: 'i40',
      name: 'Serrure Intelligente I40',
      image: '/images/i40%20(2).webp',
      url: '/product/i40',
      features: ['Application mobile', 'Empreinte digitale', 'Face ID', 'Carte NFC', 'Cle traditionnelle', 'Mot de passe'],
      description: 'Serrure premium avec ecran tactile et reconnaissance faciale avancee'
    },
    {
      id: 'i30',
      name: 'Serrure Intelligente I30',
      image: '/images/i30.webp',
      url: '/product/i30',
      features: ['Application mobile', 'Empreinte digitale', 'Face ID', 'Carte NFC', 'Cle traditionnelle', 'Mot de passe'],
      description: 'Serrure intelligente I30 avec toutes les fonctionnalites avancees comme l I40'
    },
    {
      id: 'i29',
      name: 'Serrure Intelligente I29',
      image: '/images/WhatsApp%20Image%202025-09-11%20at%2015.47.22.webp',
      url: '/product/i29',
      features: ['Application mobile', 'Empreinte digitale', 'Face ID', 'Carte NFC', 'Cle traditionnelle', 'Mot de passe'],
      description: 'Design elegant avec interface intuitive et securite renforcee'
    },
    {
      id: 'k10',
      name: 'Serrure Intelligente K10',
      image: '/images/k10.webp',
      url: '/product/k10',
      features: ['Application mobile', 'Empreinte digitale', 'Face ID', 'Carte NFC', 'Cle traditionnelle', 'Mot de passe'],
      description: 'Modele robuste avec ecran haute definition et mecanisme de securite avance',
      reviews: 180
    },
    {
      id: 'x5',
      name: 'X5',
      image: '/images/x5.webp',
      url: '/product/x5',
      features: ['Application mobile', 'Empreinte digitale', 'Carte NFC', 'Cle traditionnelle', 'Mot de passe'],
      description: 'Serrure poignee avec design minimaliste et technologie NFC integree'
    },
    {
      id: 'i20',
      name: 'Serrure Intelligente I20',
      image: '/images/i20.webp',
      url: '/product/i20',
      features: ['Application mobile', 'Empreinte digitale', 'Carte NFC', 'Live cam view', 'Cle traditionnelle', 'Mot de passe'],
      description: 'Serrure intelligente I20 avec camera integree pour surveillance en temps reel et controle mobile'
    },
    {
      id: 'i50',
      name: 'Serrure Intelligente I50',
      image: '/images/serrure intelligente/i50.webp',
      url: '/product/i50',
      features: ['Application mobile', 'Empreinte digitale', 'Carte NFC', 'Cle traditionnelle', 'Mot de passe'],
      description: 'Serrure intelligente I50 avec design moderne et acces securise pour maison ou bureau'
    },
    {
      id: 'm1pro',
      name: 'Serrure Intelligente M1 Pro',
      image: '/images/m1pro.webp',
      url: '/product/m1pro',
      features: ['Application mobile', 'Empreinte digitale', 'Carte NFC', 'Cle traditionnelle', 'Mot de passe'],
      description: 'Serrure intelligente M1 Pro avec controle mobile et methodes d ouverture avancees'
    },
    {
      id: 's10',
      name: 'Serrure Intelligente S10',
      image: '/images/serrure intelligente/s10.webp',
      url: '/product/s10',
      features: ['Application mobile', 'Empreinte digitale', 'Carte NFC', 'Cle traditionnelle', 'Mot de passe'],
      description: 'Serrure intelligente S10 au format compact avec securite biometrique et acces pratique'
    },
    {
      id: 's928',
      name: 'Serrure Intelligente S928',
      image: '/images/serrure intelligente/s928.webp',
      url: '/product/s928',
      features: ['Application mobile', 'Empreinte digitale', 'Carte NFC', 'Cle traditionnelle', 'Mot de passe'],
      description: 'Serrure intelligente S928 avec design elegant et fonctions de securite essentielles'
    },
    {
      id: 'x7-cam',
      name: 'Serrure Intelligente X7 CAM',
      image: '/images/serrure intelligente/x7cam.jpg',
      url: '/product/x7-cam',
      features: ['Application mobile', 'Empreinte digitale', 'Carte NFC', 'Live cam view', 'Cle traditionnelle', 'Mot de passe'],
      description: 'Serrure intelligente X7 CAM avec camera integree pour surveillance et controle a distance'
    },
    {
      id: 'camera-surveillance-1',
      name: 'Camera de surveillance 01',
      image: '/images/camera de surveillance/a.webp',
      url: '/product/camera-surveillance-1',
      features: ['Application mobile', 'Vision nocturne', 'Detection de mouvement', 'Enregistrement HD', 'Notifications push'],
      description: 'Camera de surveillance pour securiser votre maison, commerce ou bureau avec visualisation a distance.'
    },
    {
      id: 'camera-surveillance-2',
      name: 'Camera de surveillance 02',
      image: '/images/camera de surveillance/a-1.webp',
      url: '/product/camera-surveillance-2',
      features: ['Application mobile', 'Vision nocturne', 'Detection de mouvement', 'Enregistrement HD', 'Stockage cloud'],
      description: 'Solution de videosurveillance connectee avec image nette et controle facile depuis smartphone.'
    },
    {
      id: 'camera-surveillance-3',
      name: 'Camera de surveillance 03',
      image: '/images/camera de surveillance/a-2.webp',
      url: '/product/camera-surveillance-3',
      features: ['Application mobile', 'Vision nocturne', 'Detection de mouvement', 'Enregistrement HD', 'Notifications push'],
      description: 'Camera adaptee a la surveillance quotidienne avec acces rapide aux alertes et au flux video.'
    },
    {
      id: 'camera-surveillance-4',
      name: 'Camera de surveillance 04',
      image: '/images/camera de surveillance/o.webp',
      url: '/product/camera-surveillance-4',
      features: ['Application mobile', 'Vision nocturne', 'Detection de mouvement', 'Enregistrement HD', 'Stockage cloud'],
      description: 'Camera moderne pour une installation professionnelle avec supervision locale et a distance.'
    },
    {
      id: 'ca1-ca2',
      name: 'Controle d Acces CA1/CA2',
      image: '/images/ca2.webp',
      url: '/product/ca1-ca2',
      features: ['Application mobile', 'Empreinte digitale', 'Code numerique', 'Carte NFC', 'Controle d acces'],
      description: 'Systemes de controle d acces CA1 et CA2 avec empreinte digitale, code et NFC pour securiser vos espaces'
    },
    {
      id: 'inta-intb',
      name: 'Interrupteurs Tactiles INTA/INTB',
      image: '/images/intb.webp',
      url: '/product/inta-intb',
      features: ['Application mobile', 'Connexion WiFi', 'Controle eclairage', 'Controle rideaux', 'Controle TV', 'Controle climatisation'],
      description: 'Interrupteurs tactiles INTA et INTB pour controler l eclairage, rideaux, TV et climatisation via WiFi et application'
    },
    {
      id: 'smart-switch-double',
      name: 'Smart Switch Intelligent Double',
      image: '/images/smart%20switch%20rideau.webp',
      url: '/product/smart-switch-double',
      features: ['Application mobile', 'Connexion WiFi', 'Controle eclairage', 'Controle rideaux', 'Controle climatisation', 'Controle prises', '2 canaux independants', 'Programmation horaire'],
      description: 'Smart switch double pour controler deux appareils independamment : eclairage, rideaux, climatisation et prises via WiFi'
    },
    {
      id: 'smart-switch-simple',
      name: 'Smart Switch Intelligent Simple',
      image: '/images/smart%20switch.webp',
      url: '/product/smart-switch-simple',
      features: ['Application mobile', 'Connexion WiFi', 'Controle eclairage', 'Controle rideaux', 'Controle climatisation', 'Controle prises', 'Design compact', 'Programmation horaire'],
      description: 'Smart switch simple pour controler eclairage, rideaux, climatisation et prises via WiFi et application mobile'
    },
    {
      id: 'cam',
      name: 'Camera de Surveillance',
      image: '/images/cam.webp',
      url: '/product/cam',
      features: ['Application mobile', 'Vision nocturne', 'Detection de mouvement', 'Enregistrement HD', 'Stockage cloud', 'Notifications push'],
      description: 'Camera de surveillance intelligente avec vision nocturne, detection de mouvement et notifications en temps reel'
    },
    {
      id: 'domotique-4ch-r3-pro-2',
      name: '4CH R3 Pro',
      image: '/images/domotique/4CH-R3-Pro-2.webp',
      url: '/product/domotique-4ch-r3-pro-2',
      features: ['Application mobile', 'Connexion WiFi', 'Controle eclairage', 'Controle prises', 'Programmation horaire'],
      description: 'Module domotique multi-canaux pour automatiser plusieurs circuits d eclairage et equipements.'
    },
    {
      id: 'domotique-aubess-prise-3',
      name: 'Aubess Prise Smart',
      image: '/images/domotique/Aubess-Prise-3.webp',
      url: '/product/domotique-aubess-prise-3',
      features: ['Application mobile', 'Connexion WiFi', 'Controle prises', 'Programmation horaire'],
      description: 'Prise connectee intelligente pour piloter vos appareils a distance et suivre vos automatisations.'
    },
    {
      id: 'domotique-bridge-r2-2',
      name: 'Bridge R2',
      image: '/images/domotique/Bridge-R2-2.webp',
      url: '/product/domotique-bridge-r2-2',
      features: ['Application mobile', 'Connexion WiFi', 'Programmation horaire'],
      description: 'Passerelle domotique pour relier et centraliser vos accessoires intelligents a la maison.'
    },
    {
      id: 'domotique-dual-r3-1',
      name: 'Dual R3',
      image: '/images/domotique/Dual-R3-1.webp',
      url: '/product/domotique-dual-r3-1',
      features: ['Application mobile', 'Connexion WiFi', 'Controle rideaux', 'Controle eclairage'],
      description: 'Relais double intelligent ideal pour l automatisation des volets, rideaux et circuits electriques.'
    },
    {
      id: 'domotique-mini-r2-2',
      name: 'Mini R2',
      image: '/images/domotique/mini-r2-2.webp',
      url: '/product/domotique-mini-r2-2',
      features: ['Application mobile', 'Connexion WiFi', 'Controle eclairage', 'Design compact'],
      description: 'Micro module compact pour transformer un interrupteur classique en interrupteur connecte.'
    },
    {
      id: 'domotique-mini-r3-2',
      name: 'Mini R3',
      image: '/images/domotique/Mini-R3-2.webp',
      url: '/product/domotique-mini-r3-2',
      features: ['Application mobile', 'Connexion WiFi', 'Controle eclairage', 'Design compact'],
      description: 'Solution mini format pour piloter l eclairage et les automatismes dans les petits espaces.'
    },
    {
      id: 'domotique-mini-r4-1',
      name: 'Mini R4',
      image: '/images/domotique/Mini-R4-1.webp',
      url: '/product/domotique-mini-r4-1',
      features: ['Application mobile', 'Connexion WiFi', 'Controle eclairage', 'Design compact'],
      description: 'Nouvelle generation de mini relais intelligent pour scenarios domotiques simples et efficaces.'
    },
    {
      id: 'domotique-s26-r2-2',
      name: 'S26 R2',
      image: '/images/domotique/S26-R2-2.webp',
      url: '/product/domotique-s26-r2-2',
      features: ['Application mobile', 'Connexion WiFi', 'Controle prises', 'Programmation horaire'],
      description: 'Prise intelligente WiFi pour automatiser vos appareils electriques a la maison ou au bureau.'
    },
    {
      id: 'domotique-switch-r5-1',
      name: 'Switch R5',
      image: '/images/domotique/Switch-R5-1.webp',
      url: '/product/domotique-switch-r5-1',
      features: ['Application mobile', 'Connexion WiFi', 'Controle eclairage'],
      description: 'Interrupteur scene pour piloter rapidement plusieurs actions domotiques depuis un seul point.'
    },
    {
      id: 'domotique-t3eu3c',
      name: 'T3EU3C',
      image: '/images/domotique/T3EU3C.jpg',
      url: '/product/domotique-t3eu3c',
      features: ['Application mobile', 'Connexion WiFi', 'Controle eclairage', 'Programmation horaire'],
      description: 'Interrupteur tactile connecte trois canaux pour une gestion elegante de votre eclairage.'
    },
    {
      id: 'domotique-telecommande-2',
      name: 'Telecommande Smart',
      image: '/images/domotique/telecommande-2-250x250.jpg',
      url: '/product/domotique-telecommande-2',
      features: ['Application mobile', 'Connexion WiFi', 'Controle eclairage'],
      description: 'Telecommande domotique pratique pour declencher vos scenes et commandes a distance.'
    },
    {
      id: 'controle-acces-cp01',
      name: 'Digicode Metallique CP01',
      image: '/images/controle dacces/Digicode-metallique-CP01-1-250x250.jpg',
      url: '/product/controle-acces-cp01',
      features: ['Code numerique', 'Carte NFC', 'Controle d acces'],
      description: 'Digicode metallique robuste pour le controle d acces securise de porte, portail ou bureau.'
    },
    {
      id: 'controle-acces-rfid-lecteur-1',
      name: 'Lecteur RFID',
      image: '/images/controle dacces/Lecteur-Rfid-1.jpg',
      url: '/product/controle-acces-rfid-lecteur-1',
      features: ['Carte NFC', 'Controle d acces', 'Application mobile'],
      description: 'Lecteur RFID pratique pour les systemes de controle d acces professionnels et residentiels.'
    },
    {
      id: 'controle-acces-padlock-1',
      name: 'Cadenas Connecte',
      image: '/images/controle dacces/padlock-1-250x250.webp',
      url: '/product/controle-acces-padlock-1',
      features: ['Application mobile', 'Empreinte digitale', 'Controle d acces'],
      description: 'Cadenas intelligent pour securiser rapidement casiers, portes et espaces techniques.'
    },
    {
      id: 'controle-acces-clavier-1',
      name: 'Clavier de Controle 01',
      image: '/images/controle dacces/11161020751990325179.jpg',
      url: '/product/controle-acces-clavier-1',
      features: ['Code numerique', 'Carte NFC', 'Controle d acces'],
      description: 'Clavier de controle d acces avec design compact pour installations interieures et exterieures.'
    },
    {
      id: 'controle-acces-clavier-2',
      name: 'Clavier de Controle 02',
      image: '/images/controle dacces/1892504409-1613275237.jpg',
      url: '/product/controle-acces-clavier-2',
      features: ['Code numerique', 'Carte NFC', 'Controle d acces'],
      description: 'Solution de controle d acces fiable pour bureaux, residences et coproprietes.'
    },
    {
      id: 'controle-acces-clavier-3',
      name: 'Clavier de Controle 03',
      image: '/images/controle dacces/23703153969957916.jpg',
      url: '/product/controle-acces-clavier-3',
      features: ['Code numerique', 'Carte NFC', 'Controle d acces'],
      description: 'Clavier securise pour gerer les acces avec code et badges sur site.'
    },
    {
      id: 'controle-acces-clavier-4',
      name: 'Clavier de Controle 04',
      image: '/images/controle dacces/80713322-1538541174.jpg',
      url: '/product/controle-acces-clavier-4',
      features: ['Code numerique', 'Carte NFC', 'Controle d acces'],
      description: 'Modele de controle d acces pense pour un usage intensif avec installation simple.'
    },
    {
      id: 'controle-acces-badgeuse-1',
      name: 'Badgeuse et Lecteur 01',
      image: '/images/controle dacces/IMG_20210321_184217.jpg',
      url: '/product/controle-acces-badgeuse-1',
      features: ['Carte NFC', 'Controle d acces', 'Application mobile'],
      description: 'Lecteur de controle d acces adapte aux immeubles, entreprises et zones sensibles.'
    },
    {
      id: 'controle-acces-badgeuse-2',
      name: 'Badgeuse et Lecteur 02',
      image: '/images/controle dacces/InkedHe673616e79f345cc84ff35ee432b74e66-300x300.jpg',
      url: '/product/controle-acces-badgeuse-2',
      features: ['Carte NFC', 'Controle d acces', 'Application mobile'],
      description: 'Unite de lecture compacte pour une integration rapide dans votre systeme de securite.'
    },
    {
      id: 'lecteur-uhf-1',
      name: 'Lecteur UHF 01',
      image: '/images/lecteur uhf/H44d48b9fd1aa4fd4a1c0c7a261fe6156o-300x300.webp',
      url: '/product/lecteur-uhf-1',
      features: ['Application mobile', 'Controle d acces', 'Carte NFC'],
      description: 'Lecteur UHF longue portee pour identification automatique dans les environnements professionnels.'
    },
    {
      id: 'lecteur-uhf-2',
      name: 'Lecteur UHF 02',
      image: '/images/lecteur uhf/Hed70fdbf6c104b2d85715adf0c15c5faD-300x300.webp',
      url: '/product/lecteur-uhf-2',
      features: ['Application mobile', 'Controle d acces', 'Carte NFC'],
      description: 'Solution UHF compacte pour la lecture rapide et fiable de badges et etiquettes a distance.'
    },
    {
      id: 'lecteur-uhf-3',
      name: 'Lecteur UHF 03',
      image: '/images/lecteur uhf/InkedHe673616e79f345cc84ff35ee432b74e66-300x300.jpg',
      url: '/product/lecteur-uhf-3',
      features: ['Application mobile', 'Controle d acces', 'Carte NFC'],
      description: 'Lecteur UHF professionnel adapte aux parkings, entrepots, sites industriels et controle d acces.'
    },
    // Add audio products
    {
      id: 'smart-soundbar',
      name: 'Smart Soundbar',
      image: '/images/sound/Smart%20Sound%20Bar.webp',
      url: '/product/smart-soundbar',
      features: ['Système audio haute qualité', 'Installation résidentielle', 'Contrôle domotique'],
      description: 'Soundbar intelligente avec son immersif et connectivité WiFi'
    },
    {
      id: 'smart-ultra-soundbar',
      name: 'Smart Ultra Soundbar',
      image: '/images/sound/Smart%20Ultra%20Soundbar.webp',
      url: '/product/smart-ultra-soundbar',
      features: ['Système audio haute qualité', 'Installation résidentielle', 'Contrôle domotique'],
      description: 'Soundbar premium avec Dolby Atmos 3D'
    },
    {
      id: 'acoustimass-series-3-haut-parleur',
      name: 'Acoustimass Series 3 Haut-parleur',
      image: '/images/sound/cube.webp',
      url: '/product/acoustimass-series-3-haut-parleur',
      features: ['Système audio haute qualité', 'Installation résidentielle', 'Contrôle domotique'],
      description: 'Enceintes satellites cubes Acoustimass Series 3 pour système surround'
    },
    {
      id: 'acoustimass-3',
      name: 'Acoustimass 3',
      image: '/images/sound/Caisson%20de%20Bass%20Acoustimass3.webp',
      url: '/product/acoustimass-3',
      features: ['Système audio haute qualité', 'Installation résidentielle', 'Contrôle domotique'],
      description: 'Caisson de basses Acoustimass 3 pour son surround'
    },
    {
      id: 'smart-ultra-caisson-700',
      name: 'Smart Ultra Caisson 700',
      image: '/images/sound/Smart%20Ultra%20Caisson%20700.webp',
      url: '/product/smart-ultra-caisson-700',
      features: ['Système audio haute qualité', 'Installation résidentielle', 'Contrôle domotique'],
      description: 'Caisson de basses premium avec technologie sans fil'
    },
    {
      id: 'caisson-de-bass-flush',
      name: 'Caisson de Bass Flush',
      image: '/images/sound/Caisson%20de%20bass%20flush.webp',
      url: '/product/caisson-de-bass-flush',
      features: ['Système audio haute qualité', 'Installation résidentielle', 'Contrôle domotique'],
      description: 'Caisson de basses encastrable avec design flush'
    },
    {
      id: 'dm2c-encastrable',
      name: 'DM2C Encastrable',
      image: '/images/sound/DM2C.webp',
      url: '/product/dm2c-encastrable',
      features: ['Installation professionnelle', 'Son surround', 'Amplification puissante'],
      description: 'Enceinte encastrée pour installations professionnelles'
    },
    {
      id: 'dm3-flush',
      name: 'DM3 Flush',
      image: '/images/sound/DM3_Flush.webp',
      url: '/product/dm3-flush',
      features: ['Installation professionnelle', 'Son surround', 'Amplification puissante'],
      description: 'Enceinte flush avec design discret'
    },
    {
      id: 'dm5-flush',
      name: 'DM5 Flush',
      image: '/images/sound/DM5_Flush.webp',
      url: '/product/dm5-flush',
      features: ['Installation professionnelle', 'Son surround', 'Amplification puissante'],
      description: 'Enceinte flush premium avec son supérieur'
    },
    {
      id: 'dm8c-flush',
      name: 'DM8C Flush',
      image: '/images/sound/DM8C_Flush.webp',
      url: '/product/dm8c-flush',
      features: ['Installation professionnelle', 'Son surround', 'Amplification puissante'],
      description: 'Enceinte flush haut de gamme avec acoustique exceptionnelle'
    },
    {
      id: 'fs2c',
      name: 'FS2C',
      image: '/images/sound/FS2C.webp',
      url: '/product/fs2c',
      features: ['Installation professionnelle', 'Son surround', 'Amplification puissante'],
      description: 'Enceinte professionnelle FS2C pour installations'
    },
    {
      id: 'fs2se',
      name: 'FS2SE',
      image: '/images/sound/FS2SE.webp',
      url: '/product/fs2se',
      features: ['Installation professionnelle', 'Son surround', 'Amplification puissante'],
      description: 'Enceinte professionnelle FS2SE pour installations'
    },
    {
      id: '251-enceinte-exterieure',
      name: '251 Enceinte Extérieure',
      image: '/images/sound/251.webp',
      url: '/product/251-enceinte-exterieure',
      features: ['Installation professionnelle', 'Son surround', 'Amplification puissante'],
      description: 'Enceinte extérieure Articulated Array® avec zone d\'écoute vaste et homogène'
    },
    {
      id: 'satellite-flush',
      name: 'Satellite Flush',
      image: '/images/sound/Satellite_flush.webp',
      url: '/product/satellite-flush',
      features: ['Installation professionnelle', 'Son surround', 'Amplification puissante'],
      description: 'Enceinte satellite flush pour installations discrètes'
    },
    {
      id: 'satellites',
      name: 'Satellites',
      image: '/images/sound/Satellite_flush.webp',
      url: '/product/satellites',
      features: ['Installation professionnelle', 'Son surround', 'Amplification puissante'],
      description: 'Enceintes satellites pour son surround'
    },
    {
      id: 'iza2120',
      name: 'IZA2120',
      image: '/images/sound/IZA2120.webp',
      url: '/product/iza2120',
      features: ['Installation professionnelle', 'Son surround', 'Amplification puissante'],
      description: 'Amplificateur professionnel IZA2120'
    },
    {
      id: 'bose-music-amplifier',
      name: 'Bose Music Amplifier',
      image: '/images/sound/Bose%20Music%20Amplifier.webp',
      url: '/product/bose-music-amplifier',
      features: ['Installation professionnelle', 'Son surround', 'Amplification puissante'],
      description: 'Amplificateur multicanal pour applications professionnelles'
    },
    {
      id: 'l1-pro-16',
      name: 'L1 PRO 16',
      image: '/images/sound/L1_Pro16.webp',
      url: '/product/l1-pro-16',
      features: ['Système portable', 'Batterie longue durée', 'Connexion sans fil'],
      description: 'Système de sonorisation portable professionnel 16 canaux'
    },
    {
      id: 'l1-pro-8',
      name: 'L1 PRO 8',
      image: '/images/sound/L1pro8.webp',
      url: '/product/l1-pro-8',
      features: ['Système portable', 'Batterie longue durée', 'Connexion sans fil'],
      description: 'Système de sonorisation portable professionnel 8 canaux'
    },
    {
      id: '360p-ec',
      name: '360P EC',
      image: '/images/sound/360P_EC.webp',
      url: '/product/360p-ec',
      features: ['Système portable', 'Batterie longue durée', 'Connexion sans fil'],
      description: 'Enceinte portable résistante à l\'eau avec son 360°'
    },
    {
      id: 'za250-lz-zone-amplifier',
      name: 'ZA250-LZ Zone Amplifier',
      image: '/images/sound/ZA250.webp',
      url: '/product/za250-lz-zone-amplifier',
      features: ['Installation professionnelle', 'Son surround', 'Amplification puissante'],
      description: 'Amplificateur de zone pour extension de systèmes sonores'
    }
  ];

  const product = products.find(p => p.id === productId);

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Produit non trouve
          </h1>
          <p className="text-lg text-gray-600">
            Le produit demande n'existe pas.
          </p>
        </div>
      </div>
    );
  }



  return (
    <>
      <Helmet>
        <title>{product.name} - Ez lock | Equipements Domotiques Maroc</title>
        <meta name="description" content={product.description} />
        <link rel="canonical" href={`https://www.ezlock.ma/product/${productId}`} />
      </Helmet>
      <div className="min-h-screen bg-gray-50 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {product.name}
            </h1>
            <p className="text-lg text-gray-600 text-center">
              Decouvrez tous les details de ce produit
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <ProductCard product={product} showVariants={product.id === 'x5'} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
