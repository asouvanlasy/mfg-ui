import { Debug, once, on, printConsole, Input } from 'skyrimPlatform'
import * as sp from 'skyrimPlatform'
// import * as pu from '@skyrim-platform/papyrus-util/MiscUtil'
import * as cu from '@skyrim-platform/console-util'

once('tick', () => {
    printConsole('Hello! You can view this in the Skyrim ~ console on the Main Menu when the game runs')
})



once('update', () => {
    printConsole('setting mfg...')
    cu.ExecuteCommand('mfg expression 2 100')
})