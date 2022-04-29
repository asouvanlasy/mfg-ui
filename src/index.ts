import { once, on, printConsole, Input, browser, Utility } from 'skyrimPlatform'
import * as sp from 'skyrimPlatform'
import { ExecuteCommand } from '@skyrim-platform/console-util'

browser.loadUrl('file:///Data/Platform/UI/index.html')

// This event runs on hot reload
once('tick', () => {
    browser.setVisible(false)
    browser.setFocused(false)
    printConsole('SP Hot Refresh')
})

// This event runs every frame (60fps)
on('update', () => {
    if (Input.isKeyPressed(2)) {
        printConsole('opening browser')
        browser.setVisible(true)
        browser.setFocused(true)
    }
})

// This event runs when the HTML button is pressed
on('browserMessage', (event) => {
    let command = event.arguments

    printConsole('received: ' + command) // This appropriately receives only the most recently pressed button

    // Using button event because Input.isKeyPressed isn't usable in browserMessage
    on('buttonEvent', () => {
        if (Input.isKeyPressed(3)) {
            printConsole('executing command: ' + command)
            ExecuteCommand(command + '') // Need to add blank string because command isn't a string (idk what type)

            browser.setVisible(false)
            browser.setFocused(false)
        }
    })
})