export const command = {
    // Name of the command
    command: "ls",

    // Function to execute when the user calls this command
    execute: async function(args, terminal) {
        if (args.length == 0) {
            // Print the current directory
            for (let [k, v] of Object.entries(terminal.fileManager.getContent(terminal.path.join("/")))) {
                terminal.addLog(`<p class="${(typeof v == 'object' ? 'path' : '')}">${k}</p>`)
            }
        } else {
            // Print the specified directory
            let files = terminal.fileManager.getContent(terminal.path.join("/") + "/" + args[0])
            if (typeof files == 'string') {
                terminal.addLog(`cd : ${args[0]} : Not a directory`)
            } else {
                for (let [k, v] of Object.entries(files)) {
                    terminal.addLog(`<p class="${(typeof v == 'object' ? 'path' : '')}">${k}</p>`)
                }
            }
        }
    },

    // Information to show when the user wants to (help [command])
    infos: `cat : cat [file]
    | See file's content
    `,

    // One-line information to show when the user calls help command
    simpleInfos: `cat [file]`
}