export const commandManager = {
    commands: {},

    addCommand: async function(file) {
        // Open the file
        const {command} = await import(file)
        // Import the command and put the content of the command into the dict
        this.commands[command.command] = command
    }
}