export const command = {
    // Name of the command
    command: "test",

    // Function to execute when the user calls this command
    execute: async function(args, terminal) {
        terminal.addLog("hewo ~")
    },
}