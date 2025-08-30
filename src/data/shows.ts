import { Show } from '@/types';

export const mockShows: Show[] = [
  {
    id: '1',
    title: 'Impro Comedy Night',
    date: '2024-12-15',
    time: '20:00',
    venue: 'Théâtre de la Ville',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop',
    description: 'Une soirée d\'improvisation théâtrale pleine de rires et de surprises. Venez découvrir l\'art de l\'impro avec Tipaix !',
    reservationUrl: 'https://example.com/reserve/1'
  },
  {
    id: '2',
    title: 'Match d\'Impro',
    date: '2024-12-22',
    time: '19:30',
    venue: 'Salle des Fêtes',
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&h=600&fit=crop',
    description: 'Un match d\'improvisation théâtrale opposant Tipaix à une troupe invitée. Sport et théâtre réunis !',
    reservationUrl: 'https://example.com/reserve/2'
  },
  {
    id: '3',
    title: 'Spectacle de Fin d\'Année',
    date: '2024-12-30',
    time: '21:00',
    venue: 'Centre Culturel',
    image: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800&h=600&fit=crop',
    description: 'Notre grand spectacle de fin d\'année avec des improvisations préparées et des surprises.',
    reservationUrl: 'https://example.com/reserve/3'
  }
];