export const command = {
    // Name of the command
    command: "echo",

    // Function to execute when the user calls this command
    execute: async function(args, terminal) {
        terminal.addLog((args.length == 0 ? this.simpleInfos : args.join(" ")))
    },

    // Information to show when the user wants to (help [command])
    infos: `echo : echo [args...]
    | Just repeats what you say. You can play with it and put some HTML tags (or JS code but this would be being evil)
    `,

    // One-line information to show when the user calls help command
    simpleInfos: `echo [args...]`
}