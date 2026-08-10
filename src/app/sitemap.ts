import { MetadataRoute } from 'next';
import { client } from '@/sanity/client';
import { SHOW_SLUGS_QUERY } from '@/sanity/queries';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.tipaix.fr';

    // Pages statiques
    const staticPages = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 1,
        },
        {
            url: `${baseUrl}/spectacles`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 0.9,
        },
        {
            url: `${baseUrl}/troupe`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.7,
        },
        {
            url: `${baseUrl}/mentions-legales`,
            lastModified: new Date(),
            changeFrequency: 'yearly' as const,
            priority: 0.3,
        },
    ];

    // Pages dynamiques des spectacles
    const slugs = await client.fetch(SHOW_SLUGS_QUERY, {}, { stega: false });
    const showPages = slugs.map((slug) => ({
        url: `${baseUrl}/spectacles/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.6,
    }));

    return [...staticPages, ...showPages];
}
