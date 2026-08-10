'use client';

import { NextStudio } from 'next-sanity/studio';
import baseConfig from '../../../../studio/sanity.config';

const config = {
  ...baseConfig,
  basePath: '/studio',
};

export default function StudioPage() {
  return <NextStudio config={config} />;
}
