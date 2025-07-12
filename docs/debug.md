---
sidebar_position: 4
---

# Debugging

The extension provides lightweight integration with the
[CodeLLDB](https://marketplace.visualstudio.com/items?itemName=vadimcn.vscode-lldb) extension—powered by
[LLDB](https://lldb.llvm.org/)—allowing you to debug your iOS application directly from Visual Studio Code.

## Tutorial

1. **Create `launch.json`.**  
   In the `.vscode` folder of your project, create a `launch.json` file with the following content:

   ```json title=".vscode/launch.json"
   {
     "version": "0.2.0",
     "configurations": [
       {
         "type": "sweetpad-lldb",
         "request": "attach",
         "name": "Attach to running app (SweetPad)",
         "preLaunchTask": "sweetpad: launch"
       }
     ]
   }
   ```

   You can also generate this file by clicking **Create a launch.json file** in the _Run and Debug_ panel.

   ![Create launch.json](/images/debug-create-launch-json.png)  
   ![Select SweetPad LLDB](/images/debug-select-sweetpad-lldb.png)  
   ![Update launch.json](/images/debug-update-launch-json.png)

2. **Configure LLDB backend** If you haven't done so already, configure the LLDB backend by adding the following to your
   `settings.json`:

   ```json title="settings.json"
   {
     "lldb.library": "/Applications/Xcode.app/Contents/SharedFrameworks/LLDB.framework/Versions/A/LLDB"
   }
   ```

   This path is the default location of the LLDB library in default Xcode installations. If you have a custom
   installation, you may need to adjust the path accordingly.

   Alternatively, you can run "LLDB: Use Alternate Backend" from the command palette and type "lldb" to let the CodeLLDB
   extension automatically find the LLDB library.

3. **Start debugging (`F5`).**  
   Press **F5**. The debugger will build the app, launch it in the iOS Simulator, and attach to the running process.

   ![Launch debugger](/images/debug-launch-debugger.png)

4. **Set breakpoints and iterate.**  
   Place breakpoints as needed and debug your code. To run subsequent debugging sessions, simply press **F5**—the
   extension will automatically rebuild, launch, and attach.

   ![Breakpoints](/images/debug-breakpoints.png)

## Customize `preLaunchTask`

If you need more control, you can point the `preLaunchTask` property to a custom task defined in `.vscode/tasks.json`.  
For example, the task below builds the app with the **Release** scheme before launching the debugger:

```json title=".vscode/tasks.json"
{
  "version": "2.0.0",
  "tasks": [
    {
      "type": "sweetpad",
      "action": "launch",
      "label": "sweetpad: launch release",
      "detail": "Build and launch the app (Release)",
      "scheme": "Release",
      "configuration": "Release",
      "isBackground": true, // Important: lets VS Code know when the task is ready
      "problemMatcher": [
        "$sweetpad-watch",
        "$sweetpad-xcodebuild-default",
        "$sweetpad-xcbeautify-errors",
        "$sweetpad-xcbeautify-warnings"
      ]
    }
  ]
}
```

Then reference that task from `launch.json`:

```json title=".vscode/launch.json"
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "sweetpad-lldb",
      "request": "attach",
      "name": "Attach to running app (SweetPad – Release)",
      "preLaunchTask": "sweetpad: launch release"
    }
  ]
}
```

## Passing CodeLLDB parameters

To pass additional parameters to CodeLLDB, use the `codelldbAttributes` property in your `launch.json` file. For
example, if you want to execute LLDB commands before the debugger starts, you can do it like this:

```json title=".vscode/launch.json"
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "sweetpad-lldb",
      "request": "attach",
      "name": "Attach to running app (SweetPad)",
      "preLaunchTask": "sweetpad: launch",
      "codelldbAttributes": {
        "initCommands": [
          // This command will be executed before the debugger starts
          "script print('Hello from LLDB!')"
        ]
      }
    }
  ]
}
```

The full list of available parameters for `codelldbAttributes` can be found in the
[CodeLLDB documentation](https://github.com/vadimcn/codelldb/blob/master/MANUAL.md#starting-a-new-debug-session).

## Debugging on a physical device

This section is only relevant if you're debugging an app running on a physical device. Debugging on a device should
generally work out of the box, but there are some differences compared to the simulator that you should be aware of.

### Merging `codelldbAttributes`

When attaching to an app running **on a physical device**, SweetPad injects its own `CodeLLDB` commands into these
properties: `initCommands`, `preRunCommands`, and `processCreateCommands`. If you add your own commands through the
`codelldbAttributes` property, SweetPad merges them together **in the following order**:

```json
{
  "codelldbAttributes": {
    "initCommands": [...yourCommands, ...sweetpadCommands],
    "preRunCommands": [...yourCommands, ...sweetpadCommands],
    "processCreateCommands": [...yourCommands, ...sweetpadCommands]
  }
}
```

To see exactly which commands SweetPad injects, check the extension's source code:
[resolveDeviceDebugConfiguration](https://github.com/sweetpad-dev/sweetpad/blob/main/src/debugger/provider.ts)

### Stop on attach

By default, SweetPad injects commands that prevent the debugger from stopping after attaching to the application. This
prevents confusion when the debugger stops even without any breakpoints are set. If you want the debugger to **stop on
attach**, add the `"continueOnAttach": false` attribute to your `launch.json`:

```json
{
  "type": "sweetpad-lldb",
  "request": "attach",
  "name": "Attach to running app (SweetPad)",
  "preLaunchTask": "sweetpad: launch",
  "continueOnAttach": false,
  "codelldbAttributes": {}
}
```

Note that `continueOnAttach` is a SweetPad-specific attribute, not part of the CodeLLDB configuration.

## Old tutorial (deprecated)

> **Warning:** The following method is retained for backward compatibility. It still works, but the workflow above is
> recommended.

1. **Install CodeLLDB.** Install the [CodeLLDB](https://marketplace.visualstudio.com/items?itemName=vadimcn.vscode-lldb)
   extension from the VS Code Marketplace.

   ![Install CodeLLDB](/images/debug-old-install-codelldb.png)

2. **Create `launch.json`.** Add the configuration below:

   ```json title=".vscode/launch.json"
   {
     "version": "0.2.0",
     "configurations": [
       {
         "type": "lldb",
         "request": "attach",
         "name": "Attach to iOS Simulator",
         "waitFor": true,
         "program": "${command:sweetpad.debugger.getAppPath}"
       }
     ]
   }
   ```

![Create launch.json](/images/debug-old-create-launch-json.png)
![Update launch.json](/images/debug-old-update-launch-json.png)

The `${command:sweetpad.debugger.getAppPath}` variable is resolved at runtime to the path of the app most recently built
by SweetPad—this is required by CodeLLDB to attach to the simulator. See the
[CodeLLDB manual](https://github.com/vadimcn/codelldb/blob/master/MANUAL.md) for all available options.

3. **Launch the app.** Start the iOS Simulator and run **SweetPad › Launch** from the _Build_ panel.

   ![Launch](/images/debug-old-launch-app.png)

4. **Attach the debugger.** In the _Run and Debug_ panel, select **Attach to iOS Simulator**. When the _Call Stack_
   appears, the debugger is successfully attached.

   ![Attach](/images/debug-old-attach-ios-simulator.png)

5. **Debug.** Set breakpoints and debug as usual. For subsequent debugging sessions, you can skip steps 1–3 and go
   directly to attaching the debugger.

   ![Breakpoints](/images/debug-old-breakpoints.png)
