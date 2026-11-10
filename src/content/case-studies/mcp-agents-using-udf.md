---
title: "MCP Agents using UDF"
summary: "Proof of Concept for pulling tourism specific data using MCP agents."
sector: "Artificial Intelligence"
build: ai
sources: [apis]
headline: "MCP agents querying live stock, country and tourism APIs"
featured: true
order: 1
tools:
  - "MCP"
  - "Anthropic"
  - "Finnhub"
  - "REST Countries"
  - "Japan Tourism"
  - "Pandas"
---
## Problem

A proof-of-concept exploration demonstrating how MCP agents can retrieve data from external APIs through user-defined functions (UDFs), using live stock, country, and tourism data sources for a Tour Operator

This exploration helps us prepare for future use cases where data from external APIs will be needed on-demand by analysts and dashboards, without heavy engineering dependencies.

## Challenges

- Dynamic Parameter Handling: Some APIs require query parameters like symbol, country, or year. Testing how MCP could pass and manage these inputs dynamically was a key part of the study.
- Testing Different Data Domains: We tried very different datasets (stocks, countries, visitor stats) to evaluate the flexibility of MCP across domains.
- Lightweight UDFs, Powerful Results: We wanted to see how minimal UDF code, wrapped with MCP logic, could yield highly usable outputs with little overhead.

## Result

- Stock Details UDF: Fetches stock quote, news, or financials using: symbol, data_type, time_range
- Country Data UDF: Gets country info using: filter_type, like region or language
- Visitor Info UDF: Shows tourist arrivals for a given year, and an optional country
- Visitor Purpose UDF: Breaks down tourism reasons (business, leisure) with year and country filters
