import { defineQuery } from 'next-sanity';

const imageProjection = /* groq */ `{
  asset->{
    _id,
    url,
    metadata { lqip, dimensions { width, height } }
  },
  hotspot,
  crop
}`;

export const HOME_PAGE_QUERY = defineQuery(`
  *[_id == "homePage"][0]{
    heroImage ${imageProjection},
    heroSubtitle,
    heroQuote,
    artImage ${imageProjection},
    artText,
    quoteText
  }
`);

export const SPECTACLES_PAGE_QUERY = defineQuery(`
  *[_id == "spectaclesPage"][0]{
    introQuote,
    explanationHeading,
    explanationText
  }
`);

export const TROUPE_PAGE_QUERY = defineQuery(`
  *[_id == "troupePage"][0]{
    introQuote,
    genesisImage ${imageProjection},
    genesisText,
    philosophyText
  }
`);

export const SITE_SETTINGS_QUERY = defineQuery(`
  *[_id == "siteSettings"][0]{
    navigation[]{ label, href },
    socialLinks[]{ platform, url }
  }
`);

export const SHOWS_QUERY = defineQuery(`
  *[_type == "show"] | order(date asc){
    _id,
    title,
    "slug": slug.current,
    date,
    time,
    venue,
    address,
    image ${imageProjection},
    description
  }
`);

export const SHOW_BY_SLUG_QUERY = defineQuery(`
  *[_type == "show" && slug.current == $slug][0]{
    _id,
    title,
    "slug": slug.current,
    date,
    time,
    venue,
    address,
    image ${imageProjection},
    description
  }
`);

export const SHOW_SLUGS_QUERY = defineQuery(`
  *[_type == "show" && defined(slug.current)].slug.current
`);
