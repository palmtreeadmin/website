---
title: "Retail Data Pipeline"
summary: "E-commerce buyer activities on various retailers are captured. Products from various brands need an in-depth analysis."
sector: "Retail"
build: pipelines
sources: [ecom]
headline: "Cart logs to Snowflake through Spark, orchestrated by Airflow"
featured: true
order: 5
tools:
  - "Snowflake"
  - "AWS EMR Spark"
  - "AWS S3"
  - "Apache Airflow"
---
## Problem

E-commerce buyer activities on various retailers are captured. Products from various brands need an in-depth analysis of customer buying patterns on products being bought on various timelines to improve their digital marketing efforts.

An ETL pipeline was required to convert the shopping-cart data into useful data which can be used by brands to improve the sales of their products

## Challenges

- Processing large volumes of shopping-cart data
- Partitioning and clustering Snowflake tables to optimize performance and to minimize querying cost

## Solution

- Shopping-cart logs were copied into AWS S3
- The shopping-cart logs from AWS S3 was consumed by AWS EMR Spark
- Logs were parsed and enhanced using the transformations from Apache Spark
- Data cleansing and enrichment were done using Apache Spark
- Processed data was stored in Snowflake as it handles a huge volume of data
- Data were further aggregated and stored in Snowflake as well
- Apache Airflow orchestrated the ETL pipeline and it executes the pipeline on a scheduled basis
