# styled-tlog

[![npm version](https://badge.fury.io/js/styled-tlog.svg)](https://badge.fury.io/js/styled-tlog)
[![npm downloads](https://img.shields.io/npm/dm/styled-tlog.svg)](https://www.npmjs.com/package/styled-tlog)
[![license](https://img.shields.io/npm/l/styled-tlog.svg)](https://github.com/kalpasuraweera/styled-tlog/blob/main/LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-16%2B-green.svg)](https://nodejs.org/)


🎨 A stylish, type-safe terminal logger — configure once, use everywhere. Define custom log types with personalized names and apply styling options like text color, background color, bold, and underline. Once configured, simply call `logger.yourCustomType()` anywhere in your project for consistent, beautiful terminal output.

## 📦 Installation

```bash
npm install styled-tlog
```

```bash
yarn add styled-tlog
```

```bash
pnpm add styled-tlog
```

## 🔧 Usage

```ts
import { createLogger } from "styled-tlog";

const logger = createLogger({
  success: { color: "green", bold: true },
  error: { color: "red", background: "white" }
});

logger.success("Operation was successful");
logger.error("Something went wrong");
```

## 📸 Output

![Usage Examples](https://github.com/kalpasuraweera/styled-tlog/blob/main/media/example.png?raw=true)

## 🎨 Available Styles

![Usage Examples](https://github.com/kalpasuraweera/styled-tlog/blob/main/media/1.png?raw=true)

![Usage Examples](https://github.com/kalpasuraweera/styled-tlog/blob/main/media/2.png?raw=true)

## 🚀 Features

- ✅ Full TypeScript support
- 🎨 8 colors and 8 background colors
- 📝 Bold and underline text styles
- 🔧 Customizable logger configurations
- 🪶 Lightweight with zero dependencies
- 🎯 Type-safe logger methods

## 📚 API Reference

### Available Colors
`black` | `red` | `green` | `yellow` | `blue` | `magenta` | `cyan` | `white`

### Available Styles
- `color`: Text color
- `background`: Background color
- `bold`: Bold text
- `underline`: Underlined text

## 📄 License

MIT © [Kalpa Suraweera](https://github.com/kalpasuraweera)