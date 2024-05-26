import { commandManager } from "./commandManager.js"
import { terminalManager } from "./terminalManager.js"
import { tree } from "./tree.js"

var cmd = commandManager
var terminal = terminalManager
terminalManager.init()

// Add each command into the commandManager
cmd.addCommand("./commands/clear.js")
cmd.addCommand("./commands/exit.js")
cmd.addCommand("./commands/echo.js")
cmd.addCommand("./commands/whoami.js")

cmd.addCommand("./commands/cd.js")
cmd.addCommand("./commands/cat.js")

$('body').on("click", function(event) {
    $(".commandContent").focus()
})


$('body').keydown(function(event) {

    // If the user pressed the enter key
    if (event.keyCode == 13) {
        // Get the content of the command input and add it as a log
        let commandContent = $(".commandContent").val()
        terminal.addLog($(".prefix").html() + commandContent)
        // Parse the command to get command and arguments
        let parsedCommand = commandContent.split(" ")
        // Get the command fropm the parsedCommand
        let command = parsedCommand.shift()

        // Add the command to the command history if the command is not empty
        if (command != "") {
            terminal.commandHistory.push(commandContent)
            // Set the command cursor to the last item
            terminal.selectedCommand = terminal.commandHistory.length
        }

        // If the command exists
        if (command in cmd.commands) {
            cmd.commands[command].execute(parsedCommand, terminal)
        // If the command is the help command
        } else if (command == "help") {
            // If the user wants to ask help for on specific command
            if (parsedCommand.length > 0 && parsedCommand[0] != "") {
                // If the command is known, print the infos of the command
                if (parsedCommand[0] in cmd.commands) {
                    terminal.addLog(cmd.commands[parsedCommand[0]].infos)
                } else {
                    terminal.addLog(`help: no help topics match '${command}'.`)
                }
            } else {
                // Show all small infos of each command
                for (const [key, value] of Object.entries(cmd.commands)) {
                    terminal.addLog(value.simpleInfos)
                }
            }
        } else if (command == "") {
        // If the command does not exist
        } else {
            terminal.addLog(`${command} : command not found`)
        }

        // Clear the input of the command
        $(".commandContent").val("")
    } else if (event.keyCode == 38) { // keyArrowUp
        if (terminal.selectedCommand > 0) {
            terminal.selectedCommand--
            $(".commandContent").val(terminal.commandHistory[terminal.selectedCommand])
        }
    } else if (event.keyCode == 40) { // keyArrowDown
        if (terminal.selectedCommand < terminal.commandHistory.length) {
            terminal.selectedCommand++
            let command = ""
            if (terminal.selectedCommand != terminal.commandHistory.length) {
                command = terminal.commandHistory[terminal.selectedCommand]
            }
            $(".commandContent").val(command)
        }
    }
})