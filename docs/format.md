---
sidebar_position: 9
---

# Format code

This extension integrates [**swift-format**](https://github.com/apple/swift-format) by default, or another formatter of
your choice, with VSCode for formatting Swift files. You can also enable **Format on Save** to format Swift files
automatically when saving.

[![Swift-format](/images/format-demo.gif)](/images/format-demo.gif)

### Configure formatter

:::warning

If you're using **Xcode 15 or earlier**, you need to install **swift-format** manually before configuring the extension.
See the [Install swift-format](#install-swift-format) section below.

:::

Next, add the following to your `.vscode/settings.json`:

```json title=".vscode/settings.json"
{
  "[swift]": {
    "editor.defaultFormatter": "sweetpad.sweetpad",
    "editor.formatOnSave": true
  }
}
```

Then open your Swift file and press `⌘ + S` to format it 💅🏼.

:::tip

🙈 If you encounter errors, open the Command Palette with `⌘ + Shift + P`, run `> SweetPad: Show format logs`, and check
the **Output** panel for formatter logs. If issues persist, grab the logs and open an issue on the SweetPad GitHub
repository.

:::

### Which formatter to use?

By default, SweetPad uses [**swift-format**](https://github.com/apple/swift-format), developed by Apple and bundled with
Xcode 16 and later.

You can also configure SweetPad to use another formatter. For example, to use
[**SwiftFormat**](https://github.com/nicklockwood/SwiftFormat):

```json title=".vscode/settings.json"
{
  "sweetpad.format.path": "swiftformat",
  // The "--quiet" flag ignores stderr output,
  // preventing the extension from misinterpreting it as a failure.
  "sweetpad.format.args": ["--quiet", "${file}"]
}
```

To use the Homebrew-installed version of **swift-format** instead of Xcode’s:

```json title=".vscode/settings.json"
{
  "sweetpad.format.path": "/opt/homebrew/bin/swift-format",
  "sweetpad.format.args": ["--in-place", "${file}"]
}
```

### Install swift-format

If you're using **Xcode 16** or later, **swift-format** is already bundled with your Xcode. You can verify this by
running the following command in your terminal:

```bash
xcrun --find swift-format
```

For **Xcode 15** or earlier, you need to install **swift-format** separately using Homebrew:

```bash
brew install swift-format
```

:::info

By default, SweetPad uses Xcode's version of **swift-format**. If you want to use the Homebrew-installed version of
**swift-format**, you can specify the path using the `sweetpad.format.path` setting in your `.vscode/settings.json`
file.

:::
