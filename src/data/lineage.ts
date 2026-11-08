import { getCollection, type CollectionEntry } from 'astro:content';

export type Study = CollectionEntry<'case-studies'>;
export type BuildId = Study['data']['build'];
export type SourceId = Study['data']['sources'][number];

export const SOURCES: Record<SourceId, string> = {
  docs: 'Documents and PDFs',
  apis: 'External APIs',
  pos: 'Pricing and promotion history',
  db: 'Operational databases',
  social: 'Product event streams',
  ecom: 'E-commerce and cart data',
  crm: 'CRM and ERP records',
  location: 'Location and in-store signals',
  ads: 'Ad exchanges and SSPs',
};

export const BUILDS: { id: BuildId; name: string; short: string; text: string }[] = [
  { id: 'ai', name: 'AI, LLMs and agents', short: 'AI and agents',
    text: 'LLM extraction and translation pipelines, MCP agents over your own functions, synthetic training data and pricing models.' },
  { id: 'pipelines', name: 'Data pipelines and platforms', short: 'Data pipelines',
    text: 'Batch and streaming pipelines on Google Cloud, AWS and Azure that ingest, clean and enrich data, then land it where analysts can use it.' },
  { id: 'analytics', name: 'Analytics and dashboards', short: 'Analytics',
    text: 'One view across systems that never agreed: SSP revenue, deal data, departmental forecasts, promotion performance.' },
  { id: 'commerce', name: 'Commerce and apps', short: 'Commerce and apps',
    text: 'Web and mobile products built end to end, from in-store beacon apps to Shopify stores and platform migrations.' },
  { id: 'campaigns', name: 'Campaigns and ad tech', short: 'Campaigns',
    text: 'Programmatic, geo-fenced and mobile campaigns, with the tracking scripts to prove what worked.' },
];

export const buildName = (id: BuildId) => BUILDS.find((b) => b.id === id)!.name;

export async function getStudies(): Promise<Study[]> {
  const all = await getCollection('case-studies');
  const rank = (b: BuildId) => BUILDS.findIndex((x) => x.id === b);
  return all.sort((a, b) => a.data.order - b.data.order || rank(a.data.build) - rank(b.data.build) || a.data.title.localeCompare(b.data.title));
}

export const studyHref = (s: Study) => `/case-studies/${s.id}`;
