export const command = {
    // Name of the command
    command: "cat",

    // Function to execute when the user calls this command
    execute: async function(args, terminal) {
        if (args.length == 0) {
            terminal.addLog(this.simpleInfos)
        } else {
            let path = terminal.fileManager.formatPath(terminal.path.join("/") + "/" + args[0]).join("/")
            let resp = terminal.fileManager.getContent(path)
            if (resp == null) {
                terminal.addLog(`cat : ${args[0]} : No such file or directory`)
            } else {
                // If the resp is a string (meanings it's a file), get the file path in the files directory. 
                // Else if the resp is an object (meaning it's a directory), returns an error to the user
                terminal.addLog(
                    (typeof resp == 'string' ? 
                        await fetch(`./files/${path}.txt`).then((res) => res.text()).then((text) => {return text}) : 
                        `cat : ${args[0]} : Is a directory`
                    )
                )
            }
        }
    },

    // Information to show when the user wants to (help [command])
    infos: `cat : cat [file]
    | See file's content`,

    // One-line information to show when the user calls help command
    simpleInfos: `cat [file]`
}