---
title: "Revenue Dashboard: Data Aggregation"
summary: "Revenue, impression and click data from many sell-side platforms never matched the client’s own records, and the discrepancies were affecting billing."
sector: "Ad tech"
build: analytics
sources: [ads]
headline: "Revenue from a dozen SSPs in one next-day view"
featured: false
order: 99
tools:
  - "TapClicks"
  - "Rubicon"
  - "Pubmatic"
  - "OpenX"
  - "Edge226"
  - "Advangelists"
  - "AcuityAds"
  - "StreamRail"
  - "engage:BDR"
  - "Pulse Point"
  - "Amazon A9"
  - "Sabio"
  - "NinthDecimal"
  - "InMobi"
---
## Problem

The revenue, impression, clicks and CTA data from various Sell Side Platforms and corresponding validation data from the client database were in different platforms and there was no single way of collecting data in a single platform and comparing them. This resulted in various issues like discrepancy in data and revenue discrepancy which affected billing.

## Challenges

- Data was in different formats across each of the platforms with some platforms using different terminology
- Data was available at different times of the day
- Data had no visual representation

## Result

- TapClicks dashboard to create visual representation
- Data was collected using SSP specific API(s) and consumed by TapClicks
- TapClicks was setup to update data at specific times to work around time zone issues
- Data was normalized and shown in a singular view and was available the next business day
- Enabled optimization of revenue stream
- Client was able to take act on discrepancies earlier
