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
cmd.addCommand("./commands/ls.js")

cmd.addCommand("./commands/test.js")

// Add welcome message
terminal.addLog(`Hello you ! And welcome on my website :D
If you don't know where to start or what to do, I recommand you tu use the command 'help'.
Have fun here !`)

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

        // Execute the command if it exists
        if (command in cmd.commands) {
            cmd.commands[command].execute(parsedCommand, terminal)
        // If the command is the help command
        } else if (command == "help") {
            // If the user wants to ask help for on specific command
            if (parsedCommand.length > 0 && parsedCommand[0] != "") {
                // If the command is known, print the infos of the command
                if (parsedCommand[0] in cmd.commands && cmd.commands[parsedCommand[0]].infos) {
                    terminal.addLog(cmd.commands[parsedCommand[0]].infos)
                } else {
                    terminal.addLog(`help: no help topics match '${command}'.`)
                }
            } else {
                // Print some messages
                terminal.addLog(`MXW pseudo-bash, version 1.0.0(1)-release (x86_64-pc-linux-GNU)
                These commands are defined internally. Type 'help' to see this list.
                Type 'help [command]' to find out more about the function 'command'.
                Use 'cat info' to find out more about this website.

                Here are all the commands you can use :
                `)

                // Show all small infos of each command
                for (const [key, value] of Object.entries(cmd.commands)) {
                    if (value.simpleInfos) {terminal.addLog("| " + value.simpleInfos)}
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