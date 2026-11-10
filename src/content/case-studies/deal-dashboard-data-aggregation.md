---
title: "Deal Dashboard: Data Aggregation"
summary: "Private-marketplace deal data from several sell-side platforms couldn’t be checked against the client’s records or tied to goals in Salesforce, so deals couldn’t be paced or tracked."
sector: "Ad tech"
build: analytics
sources: [ads, crm]
headline: "Private-marketplace deals matched to Salesforce in one view"
featured: false
order: 99
tools:
  - "Ad-Juster"
  - "Salesforce"
  - "Excel"
  - "Rubicon"
  - "Pubmatic"
  - "ironSource"
---
## Problem

The private marketplace deal data from various Sell Side Platforms and corresponding validation data from the client database were in different platforms and there was no single way of collecting data in a single platform and comparing them. The corresponding goal in Salesforce needed to be attributed to the deal so that the deal could be optimized for pacing evenly and revenue tracked.

## Challenges

- Data was in different formats across each of the platforms with some platforms using different terminology
- Data was available at different times of the day
- Data had no visual representation
- Salesforce data had different tracking mechanisms and had to attribute corresponding deals

## Result

- Ad-Juster dashboard to create visual representation
- Data was collected using SSP specific API(s) and consumed by Adjuster using email endpoints exposed per dashboard
- Ad-Juster setup to update data at specific times to work around time zone issues
- Ad-Juster excel macro used for Salesforce ID, Deal ID mapping
- Salesforce data was attributed to deals using a transit document
- Data was normalized and shown in a singular view and was available the next business day
- Enabled deal optimization
- Client was able to take act on discrepancies earlier
