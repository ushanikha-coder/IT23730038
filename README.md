# Tamil Transliteration Tool - Playwright Test Suite

[![Playwright](https://img.shields.io/badge/Playwright-Test_Automation-blue)](https://playwright.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-18+-green)](https://nodejs.org/)

A comprehensive end-to-end test suite for the Tamil transliteration web application using Playwright. This project validates functional correctness, edge cases, and real-time UI behavior of the Tamil Changathi transliteration tool.

## 📋 Table of Contents
- [Project Overview](#project-overview)
- [Test Coverage](#test-coverage)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running Tests](#running-tests)
- [Project Structure](#project-structure)
- [Test Reports](#test-reports)
- [Test Case Summary](#test-case-summary)

## 🎯 Project Overview

This test suite automates testing for **https://tamil.changathi.com/**, a web-based Tamil transliteration tool that converts English text (Thanglish) to Tamil script. The tests validate:

- ✅ **Functional correctness** of transliteration across various sentence structures
- ✅ **Edge case handling** including special characters, mixed languages, and ambiguity
- ✅ **Real-time UI behavior** and dynamic text updates
- ✅ **Cross-browser compatibility** (Chromium, Firefox, WebKit)

## 📊 Test Coverage

| Category | Count | Description |
|----------|-------|-------------|
| **Positive Functional Tests** | 24 | Valid inputs with correct transliteration |
| **Negative Functional Tests** | 10 | Edge cases, ambiguity, and error handling |
| **UI Tests** | 1 | Real-time update verification |
| **Total Test Cases** | **35** | Comprehensive coverage |

### Test Categories Breakdown

#### Positive Functional Tests (Pos_Fun_0001 - Pos_Fun_0024)
- Daily language usage (simple, compound, complex sentences)
- Various tenses (past, present, future, continuous)
- Sentence types (interrogative, imperative, exclamatory)
- Plural forms and negation
- Mixed Thanglish + English inputs
- Punctuation and number handling
- Slang and casual expressions
- Long paragraphs with multiple sentences

#### Negative Functional Tests (Neg_Fun_0001 - Neg_Fun_0010)
- Special characters mixed with text
- Continuous text without spaces
- Homophones ambiguity
- Heavy code-switching (English-Tamil mixing)
- Repeated characters
- Numbers as words
- Non-standard spelling variations
- Gibberish/nonsense text
- Emoji and Unicode mixing
- Extremely long single words

#### UI Tests (Pos_UI_0001)
- Real-time transliteration update verification

## 🛠️ Prerequisites

Before running the tests, ensure you have:

- **Node.js** v18 or higher ([Download](https://nodejs.org/))
- **npm** (comes with Node.js)
- **Git** (for cloning the repository)

Verify installations:
```bash
node --version
npm --version
git --version