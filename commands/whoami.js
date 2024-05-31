export const command = {
    // Name of the command
    command: "whoami",

    // Function to execute when the user calls this command
    execute: async function(args, terminal) {
        terminal.addLog(terminal.getUser())
    },

    // Information to show when the user wants to (help [command])
    infos: `whoami : whoami
    | Tells you who you are`,

    // One-line information to show when the user calls help command
    simpleInfos: `whoami`
}