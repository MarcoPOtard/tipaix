import { Show } from '@/types';

export function getUpcomingShows(shows: Show[]): Show[] {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    return shows.filter((show) => new Date(show.date) >= today);
}

export function formatShowDate(date: string): string {
    return new Date(date).toLocaleDateString('fr-FR', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
}
