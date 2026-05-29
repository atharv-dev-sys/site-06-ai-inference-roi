import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.inferenceroi.com'
  
  const articles = [
    'zero-cloud-cost-philosophy',
    'local-llm-fastapi-guide',
    'langchain-local-hardware',
    'avoiding-cloud-lock-in',
    'power-to-token-ratio-gpus',
    'tco-analysis-gpu-vs-api',
    'privacy-data-sovereignty',
    'benchmarking-inference-engines',
    'vercel-local-hybrid-baner',
    'enterprise-ai-scaling-pune',
    'optimizing-multi-user-throughput',
    'environmental-impact-ai',
    'hardware-procurement-break-even',
    'security-auditing-local-llms',
    'future-proofing-ai-infrastructure'
  ]

  const articleRoutes = articles.map((slug) => ({
    url: `${baseUrl}/articles/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/articles`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
    ...articleRoutes,
  ]
}
