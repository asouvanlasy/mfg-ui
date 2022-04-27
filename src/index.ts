import { once, on, printConsole, Input, browser } from 'skyrimPlatform'
import * as sp from 'skyrimPlatform'
import { ExecuteCommand } from '@skyrim-platform/console-util'

browser.loadUrl('file:///Data/Platform/UI/index.html')

// This event runs when this plugin is compiled
once('tick', () => {
    browser.setVisible(false)
    browser.setFocused(false)
    printConsole('SP Hot Refresh')
})

// This event runs when any button is pressed
on('buttonEvent', (event) => {
    if (Input.isKeyPressed(2)) {
        printConsole('opening browser')
        browser.setVisible(true)
        browser.setFocused(true)
    }
})

// This event runs when it the HTML button is pressed
on('browserMessage', (event) => {
    let command = event.arguments

    on('buttonEvent', (event) => {
        if (Input.isKeyPressed(3)) {
            printConsole('executing command: ' + command)
            browser.setVisible(false)
            browser.setFocused(false)
            ExecuteCommand(command + '')
        }
    })
})