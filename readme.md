# YipOnline React Native Case Study

## Overview

This is a simple React Native mobile app for uploading and managing products. Users can:

- Add up to 5 products
- Upload product name, price, and image
- Delete products
- See a dynamic product list

## Features

- **React Native** for iOS & Android
- **Context API** for state management
- **Image Picker** for selecting product images
- **Alerts** to notify when product limit is reached or product is removed
- **Confirm Modal** for deletion confirmation
- Simple and clean UI

## Installation

1. Clone the repository:

```bash
git clone https://github.com/noelams/yiponline-test-app.git
```

2. Install dependencies:

```bash
npm install
```

or

```bash
yarn install
```

3. Start the app:

```bash
npx expo start
```

## Usage

- Navigate to the Upload tab to add a product.

- Fill in the product name, price, and choose an image.

- Tap Add Product to save it.

- Switch to Home tab to view products.

- Press delete on a product to remove it.

## Notes

- Maximum 5 products allowed; user gets alerted when limit is reached.

- All state is managed locally using Context API.
