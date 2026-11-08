---
title: "Manufacturing Unit Consolidated Dashboard"
summary: "Large manufacturing company in midwest US and with several brand outlets acquired."
sector: "Manufacturing"
build: analytics
sources: [crm]
headline: "One forecasting view across six departments"
featured: true
order: 6
tools:
  - "Salesforce Einstein Analytics Studio"
---
## Problem

Large manufacturing company in midwest US and with several brand outlets acquired through many acquisitions had major difficulties in having a unified view of forecasting their expenditure and revenue estimates

## Challenges

- The manufacturing company acquired multiple brands under its umbrella and it was not possible to view performance of each brand on a daily basis
- Salesforce reports from multiple brands were available but a consolidated visualization wasn’t possible
- Stakeholders had limited insights on non proper performing departments other than Finance, Sales and Marketing

## Result

- Using Salesforce Einstein dataflow all the information required for creating a particular dashboard was stored in a specific dataset, necessary dataset specific transformations was performed on the dataflow definition file
- Using Salesforce Einstein, different dashboards were created for the following departments - Finance, HR, Marketing, Operations, Inventory, Safety
- Each departments dashboard would contain multiple lens for expenditure and revenue on day/week/month/quarterly/yearly and other future predictive estimations
- Each lens is a graphical visualization of the data present in the department specific datasets. We used Einstein Analytics Studio to build these stakeholder specific dashboards
