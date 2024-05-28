# Simple Currency Converter

A simple web-based currency converter application that allows users to convert amounts between different currencies using real-time exchange rates.

## Overview

This project is a currency converter that uses an API to fetch real-time exchange rates. The application has a user-friendly interface with a minimalist design.

## Features

- Convert amounts between different currencies.
- Real-time exchange rates fetched from an external API.
- Responsive design for mobile devices.

## Installation

Clone the repository:

```bash
  git clone https://github.com/HarshanaPanagoda/Currency-Converter.git
  cd currency-converter
```

Open index.html in your web browser.

## How to Test

- Open the application in your web browser.
- Enter the amount you want to convert in the left input field.
- Select the currency you want to convert from and the currency you want to convert to.
- The converted amount will be displayed in the right input field.

## API Integration

This application uses the APILayer Exchange Rates Data API for fetching real-time exchange rates.

### API Key

You need an API key to use the APILayer Exchange Rates Data API. Replace YOUR_API_KEY in the script.js file with your actual API key.

```
const apiKey = "YOUR_API_KEY";
const apiUrl = `https://api.apilayer.com/exchangerates_data/convert?apikey=${apiKey}`;
```

### API Documentation

[Documentation](https://apilayer.com/marketplace/exchangerates_data-api#documentation-tab)

## Technologies Used

- HTML
- CSS
- JavaScript
- APILayer Exchange Rates Data API
