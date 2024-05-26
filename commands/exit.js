export const command = {
    // Name of the command
    command: "exit",

    // Function to execute when the user calls this command
    execute: async function(args, terminal) {
        terminal.addLog(`Bye !`)
        close()        
    },

    // Information to show when the user wants to (help [command])
    infos: `exit : exit
    | Nothing very interesting... It just closes the tab (if it works on your machine)
    `,

    // One-line information to show when the user calls help command
    simpleInfos: `exit`
}