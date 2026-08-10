import { stegaClean } from '@sanity/client/stega';

export function getUpcomingShows<T extends { date: string | null }>(shows: T[]): T[] {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    return shows.filter((show) => {
        const date = stegaClean(show.date);
        return date && new Date(date) >= today;
    });
}

export function formatShowDate(date: string): string {
    return new Date(stegaClean(date)).toLocaleDateString('fr-FR', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
}
