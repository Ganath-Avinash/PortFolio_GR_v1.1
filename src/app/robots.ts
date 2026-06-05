import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: ['/', '/llms.txt'],
    },
    sitemap: 'https://ganathavinash.site/sitemap.xml',
  }
}
