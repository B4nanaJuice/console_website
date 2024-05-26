export const command = {
    // Name of the command
    command: "clear",

    // Function to execute when the user calls this command
    execute: async function(args, terminal) {
        $(".logs").html("")
    },

    // Information to show when the user wants to (help [command])
    infos: `clear : clear
    | Clears the terminal
    `,

    // One-line information to show when the user calls help command
    simpleInfos: `clear`
}