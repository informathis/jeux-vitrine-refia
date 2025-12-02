import { Game } from './types';

export const GAMES: Game[] = [
  {
    id: 'sentier',
    titleShort: 'Sentier REF’IA',
    titleFull: 'Sentier REF’IA – Randonnée des cas d’usage IA',
    url: 'https://informathis-jeu-sent-d52a.bolt.host/',
    objective: 'Aider les référents IA à concevoir et dimensionner des cas d’usage IA dans la formation, en évaluant bénéfices, risques et garde-fous.',
    color: '#2563eb', // Blue
    duration: '30 min'
  },
  {
    id: 'clinique',
    titleShort: 'Clinique IA',
    titleFull: 'Clinique des cas d’usage IA – Référent Praticien',
    url: 'https://informathis-jeu-clin-4qwg.bolt.host/',
    objective: 'Entraîner le référent à qualifier les demandes, décider de la pertinence de l’IA et orienter vers la bonne solution technique.',
    color: '#059669', // Emerald
    duration: '45 min'
  },
  {
    id: 'agora',
    titleShort: 'Agora REF’IA',
    titleFull: 'Agora REF’IA – Mission Accultur’Action',
    url: 'https://informathis-jeu-agor-prhm.bolt.host/',
    objective: 'Simuler l’animation d’une séance d’acculturation sur une agora : préparer le déroulé et répondre aux objections des publics.',
    color: '#d97706', // Amber
    duration: '25 min'
  },
  {
    id: 'vnf',
    titleShort: 'REF’IA à bord',
    titleFull: 'REF’IA à bord – Voilier des cas d’usage VNF',
    url: 'https://informathis-jeu-refi-1rf9.bolt.host/',
    objective: 'Naviguer entre différents cas d’usage (maintenance, trafic, environnement) en arbitrant bénéfices et risques opérationnels.',
    color: '#0891b2', // Cyan
    duration: '40 min'
  },
  {
    id: 'onboarding',
    titleShort: 'Passeport',
    titleFull: 'Passeport REF’IA – Onboarding du référent',
    url: 'https://eplefpah-onboarding-c6dv.bolt.host/',
    objective: 'Accompagner le référent IA dans sa prise de fonction, clarifier son rôle, découvrir les ressources et construire son plan d’action.',
    color: '#7c3aed', // Violet
    duration: '60 min'
  }
];