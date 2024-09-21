---
sidebar_position: 13
---

# Troubleshooting

## See logs

1. Set up "debug" level logging in the configuration file to show debug messages in the output panel.

```json title=".vscode/settings.json"
{
  "sweetpad.system.logLevel": "debug"
}
```

2. Restart Visual Studio Code to apply the changes.

3. Check the "Output" panel for debug messages.

![debug](/images/troubleshooting-output-panel.png)

## Reset extension cache

The extension caches user choices such as the simulator to run on, configuration to use, or active workspace. If you
encounter any issues or just want to make another choice, you can reset the cache by running the
`> SweetPad: Reset Extension Cache` command from the command palette.

## Enable Sentry

:::tip

Sending error reports to the SweetPad team is optional and is **disabled** by default. The error reports may contain
sensitive information about your project, so make sure you understand what you're doing.

:::

If you encounter any issues, you can enable Sentry to send error report to the SweetPad team. To enable Sentry, set the
`sweetpad.system.enableSentry` setting to `true` in the configuration file.

```json title=".vscode/settings.json"
{
  "sweetpad.system.enableSentry": true
}
```

Then restart Visual Studio Code to apply the changes and reproduce the issue. The error report will be sent to the
SweetPad team. If everything is set up correctly, you will see the following message in the output panel (`Output` ->
`SweetPad Common`):

```json
{
  "message": "Sentry setup",
  "sentryIsEnabled": true
}
```

![sentry](/images/troubleshooting-sentry.png)
