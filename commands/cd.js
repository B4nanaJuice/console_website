export const command = {
    // Name of the command
    command: "cd",

    // Function to execute when the user calls this command
    execute: async function(args, terminal) {
        if (args.length == 0) {
            terminal.addLog(this.simpleInfos)
        } else {
            // Hardcode starts here
            if (args[0] == "social" && terminal.path == "/") {
                terminal.path = "/social"
                terminal.init()
            } else if (["../", "/"].includes(args[0]) && terminal.path == "/social") {
                terminal.path = "/"
                terminal.init()
            }
            // Hardcode ends here
        }
        
    },

    // Information to show when the user wants to (help [command])
    infos: `cd : cd [path]
    | Change the location
    `,

    // One-line information to show when the user calls help command
    simpleInfos: `cd [path]`
}