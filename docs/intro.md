---
sidebar_position: 1
---

import ReactPlayer from 'react-player'

# Introduction

SweetPad is a VSCode extension that allows you to build and run your Xcode projects for iOS, macOS, and watchOS
applications in VSCode. It's built on top of the Xcode CLI tools and several other open-source tools like
[xcode-build-tools](https://github.com/SolaWing/xcode-build-server),
[xcbeautify](https://github.com/cpisciotta/xcbeautify), [swift-format](https://github.com/swiftlang/swift-format), and
others.

:::info

You still need to have Xcode installed on your machine to use the extension because it heavily relies on the Xcode CLI
tools to build and run your project.

:::

## Getting Started

:::tip

This tutorial also works for [Cursor](https://www.cursor.com/), an AI Code Editor that is a fork of VSCode.

:::

First, install [VSCode](https://code.visualstudio.com/) and the extension from the
[VSCode Marketplace](https://marketplace.visualstudio.com/items?itemName=SweetPad.sweetpad).

![Install extension](/images/intro/install-extension.png)

Now, you need to create an Xcode project using Xcode or some other tools. We highly recommend giving
[XcodeGen](https://github.com/yonaskolb/XcodeGen) or [Tuist](https://tuist.io/) a try, as they allow you to define the
structure of your project in configuration files. However, Xcode is also fine.

![Xcode](/images/intro/create-project.png)

Once you have a working Xcode project, open the project root folder in VSCode. Pay attention that you need to open the
root folder of the project, not the `.xcodeproj` or `.xcworkspace` folder itself.

If you installed the extension correctly, you should see the SweetPad lollipop icon 🍭 in the left sidebar of the
editor. This is the main entry point for using the extension.

The main panels of the extension are:

1. Build panel — shows the list of schemes and the "Launch" button to build and run the project.
2. Destination panel — shows the list of available simulators and devices to run the project on.

![Opened project](/images/intro/open-project.png)

To start building and running the project, click on the play button next to the scheme and wait until the build process
finishes. The extension will then boot up the simulator and run the app.

That's it! You have successfully built and run your first Xcode project in VSCode. For the next steps, we recommend:

- [to configure format on save](./format.md) to automatically format your code when you save.
- to install xcbeautify for more readable build logs. You can use the ["Tools"](./tools.md) panel for that.
- [to explore other features](/) of the extension.

## Demo

Here is a short demo of building and running an Xcode project in VSCode:

<ReactPlayer url="/images/intro/build-demo.mp4" controls height="100%" width="100%" />
