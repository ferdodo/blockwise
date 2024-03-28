[![Npm package](https://img.shields.io/npm/v/blockwise.svg)](https://www.npmjs.com/package/blockwise)
[![npm](https://img.shields.io/npm/dw/blockwise)](https://www.npmjs.com/package/blockwise)
[![GitHub last commit (branch)](https://img.shields.io/github/last-commit/ferdodo/blockwise/master)](https://github.com/ferdodo/blockwise)
[![GitHub](https://img.shields.io/github/license/ferdodo/blockwise)](https://github.com/ferdodo/blockwise)
[![npm](https://img.shields.io/badge/documentation-blue)](https://ferdodo.github.io/blockwise/)

Blockwise is a utility library that simplifies 2D game development by treating all elements as blocks. It exposes a single Block TypeScript interface for handling everything, aiming to provide essential functions for creating small, beginner-friendly games.

``` TypeScript
import { Block, isBlockColliding } from "blockwise";

const player: Block = { x: 0, y: 0, w: 1, y: 1 };
const obstacle: Block = { x: 15, y: 0, w: 1, y: 1 };
console.log(isBlockColliding(player, obstacle)); // false
```

## Documentation

https://ferdodo.github.io/blockwise/

## Installation

```bash
npm install blockwise
```
