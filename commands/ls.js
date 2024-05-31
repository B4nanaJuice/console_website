export const command = {
    // Name of the command
    command: "ls",

    // Function to execute when the user calls this command
    execute: async function(args, terminal) {
        if (args.length == 0) {
            // Print the current directory
            let files = terminal.fileManager.getContent(terminal.path.join("/"))
            let keys = Object.keys(files)
            keys.sort()
            for (let k of keys) {
                terminal.addLog(`<p class="${(typeof files[k] == 'object' ? 'path' : '')}">${k}</p>`)
            }
        } else {
            // Print the specified directory
            let files = terminal.fileManager.getContent(terminal.path.join("/") + "/" + args[0])
            // If the wanted thing is a file
            if (typeof files == 'string') {
                terminal.addLog(`ls : ${args[0]} : Not a directory`)
            // If the path is unknown
            } else if (files == null) {
                terminal.addLog(`ls : cannot access '${args[0]}': No such file or directory`)
            // If the thing is not a string and not null
            } else {
                let keys = Object.keys(files)
                keys.sort()
                for (let k of keys) {
                    terminal.addLog(`<p class="${(typeof files[k] == 'object' ? 'path' : '')}">${k}</p>`)
                }
            }
        }
    },

    // Information to show when the user wants to (help [command])
    infos: `ls : ls [directory]
    | See directory's content`,

    // One-line information to show when the user calls help command
    simpleInfos: `ls [directory]`
}