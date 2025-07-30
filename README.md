# Custom Cursors Extension

A Chrome extension to apply custom cursor styles to web pages using Vite, Tailwind CSS, and pure JavaScript.

## Setup
1. Install dependencies: `npm install`
2. Add a `cursor.png` (32x32) to the `public/` folder.
3. Run development server: `npm run dev`
4. Build for production: `npm run build`
5. Load the `dist/` folder in Chrome via `chrome://extensions/` as an unpacked extension.

## Usage
- Click the extension icon to open the popup.
- Select a cursor style: Default, Pointer, or Custom Hand.
- The cursor will change on the active web page.
```# vite-chrome-extension-v3-template
