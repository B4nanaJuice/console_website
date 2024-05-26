export const command = {
    // Name of the command
    command: "cat",

    // Function to execute when the user calls this command
    execute: async function(args, terminal) {
        if (args.length == 0) {
            terminal.addLog(this.simpleInfos)
        } else {
            let resp = terminal.fileManager.getContent(terminal.path + "/" + args[0])
            if (resp == null) {
                terminal.addLog(`cat : ${args[0]} : No such file or directory`)
            } else {
                terminal.addLog((typeof resp == 'string' ? resp : `cat : ${args[0]} : Is a directory`))
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