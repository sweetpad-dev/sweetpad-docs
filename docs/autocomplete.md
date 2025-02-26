---
sidebar_position: 2
---

# Autocomplete

This extension helps you integrate Xcode with SourceKit-LSP for autocomplete functionality.

![autocomplete](/images/autocomplete-preview.png)

## Installation

1. Install [Swift](https://marketplace.visualstudio.com/items?itemName=swiftlang.swift-vscode) from the marketplace and
   [xcode-build-server](https://github.com/SolaWing/xcode-build-server) using Homebrew:

```bash
brew install xcode-build-server --head
```

2. Now, create config file `buildServer.json` in the root of your project by running command **"SweetPad: Generate Build
   Server Config"** from the command palette.

3. Then you have to build the project in order to create build logs, which are parsed by xcode-build-server and sent to
   SourceKit-LSP.

After that, autocomplete should work ✅