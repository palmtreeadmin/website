import type { ImageMetadata } from 'astro';
import dataPlatform from '../assets/case-studies/diagrams/data-platform.png';
import brandRetail from '../assets/case-studies/diagrams/brand-retail-data-pipline.png';
import marketing from '../assets/case-studies/diagrams/marketing.png';
import cohorts from '../assets/case-studies/diagrams/data-pipeline.png';
import datagen from '../assets/case-studies/diagrams/datagen.png';

// Solution diagrams from the original site, keyed by case-study id.
export interface Diagram { src: ImageMetadata; alt: string }

export const DIAGRAMS: Record<string, Diagram> = {
  'enterprise-data-platform': {
    src: dataPlatform,
    alt: 'Architecture on two Amazon EKS clusters. A ReactJS UI drives an Apache Kafka runner backed by MySQL. The runner talks to Zookeeper and KSQL with a schema registry, and Kafka Connect moves data between Kafka and sources and sinks: Elasticsearch, Cloud Storage and Amazon S3.',
  },
  'brand-retail-data-pipeline': {
    src: brandRetail,
    alt: 'Log files land in Cloud Storage, with a backup copy, then pass through Cloud Dataflow transformations, which add device details from a Kubernetes Engine service, into a BigQuery data warehouse. Cloud Composer orchestrates the ETL.',
  },
  'marketing-insights-platform': {
    src: marketing,
    alt: 'Google datasets (DoubleClick, Analytics, AdWords) and other datasets (BlueKai, Silverpop, Mixpanel, point of sale) flow into Cloud Storage and BigQuery on Google Cloud, are wrangled in Cloud Dataprep by analysts and data scientists, and land as results in Cloud Storage and BigQuery. Cloud Machine Learning and Tableau visualisations serve data scientists, business analysts and executives.',
  },
  'social-user-cohorts-data-pipeline': {
    src: cohorts,
    alt: 'On Google Cloud, user events stream into Cloud Pub/Sub, through Cloud Dataflow, into BigQuery, which Cloud Datalab reads for visualisation.',
  },
  'synthetic-data-generator': {
    src: datagen,
    alt: 'Inside Kubernetes, the Rails Datagen UI stores jobs in PostgreSQL and calls the Spring Datagen service, which fans out to healthcare, Pixalate and other Docker services writing to a shared persistent disk. A storage writer and an on-demand Dataproc cluster with a field generator write generated data to Cloud Storage, which the UI serves back.',
  },
};
