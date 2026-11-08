---
title: "Portuguese book translation to English"
summary: "The client struggled to extract Portuguese text from PDFs while preserving its meaning and structure in JSON format."
sector: "Publishing"
build: ai
sources: [docs]
headline: "Portuguese PDFs to structured JSON with meaning intact"
featured: true
order: 0
tools:
  - "Tesseract OCR"
  - "Claude 3.5 Sonnet"
---
## Problem

The client faced difficulties in extracting the content from Portuguese text embedded in PDF files while preserving its meaning and structure. The primary challenge was to ensure that the JSON output retained the following traits:-

- Output in native Portuguese language
- Hierarchical nature of the original data
- Accurate representation of context and relationships within the data

## Challenges

- Extracting Text from PDFs: Parsing and processing text accurately from various PDF formats
- Retaining: Ensuring that the extracted text remained contextually accurate in JSON format
- Maintaining Language Consistency: Preventing automatic translation or distortion of Portuguese content during the structuring process
- Hierarchical Data Representation: Ensuring that nested and relational information within the content was accurately formatted in JSON
- Existing solutions based on Tesseract didn't convert the data accurately

## Conclusion

By leveraging the Claude API, the client successfully retained the integrity of their Portuguese content extracted from PDF files in a structured JSON format. The solution provided a seamless way to extract, organize, and store hierarchical data while ensuring language preservation and accuracy.
