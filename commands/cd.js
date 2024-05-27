export const command = {
    // Name of the command
    command: "cd",

    // Function to execute when the user calls this command
    execute: async function(args, terminal) {
        if (args.length == 0) {
            terminal.addLog(this.simpleInfos)
        } else {
            let resp = terminal.fileManager.getContent(terminal.path.join("/") + "/" + args[0])
            if (resp == null) {
                terminal.addLog(`cd : ${args[0]} : No such file or directory`)
            } else {
                if (typeof resp == 'object') {
                    terminal.path = terminal.fileManager.formatPath(terminal.path.join("/") + "/" + args[0])
                    terminal.init()
                } else {
                    terminal.addLog(`cd : ${args[0]} : Not a directory`)
                }
            }
        }
        
    },

    // Information to show when the user wants to (help [command])
    infos: `cd : cd [path]
    | Change the location
    `,

    // One-line information to show when the user calls help command
    simpleInfos: `cd [path]`
}