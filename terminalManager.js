import { tree } from "./tree.js"

export const terminalManager = {
    // List of the past commands to use them later if the user uses the up/down arrow key
    commandHistory: [],
    selectedCommand: 0,
    // Infos to show in fornt of each command
    user: "guest",
    domain: document.location.host, // maxew.dev
    path: "/",

    fileManager: tree,

    init: function() {
        $(".infos .user, .prefix .user").html(this.getUser())
        $(".infos .domain, .prefix .domain").html(this.getDomain())
        $(".infos .path, .prefix .path").html(this.getPath())
    },

    addLog: function(log) {
        // Add one line with the log to the logs area
        // Keeps the lining in the text of the log
        $(".logs").append('<div class="log">' + log.replaceAll('\n', '</br>') + '</div>')
        // Scrolls to the bottom of the page
        window.scrollTo(0, document.body.scrollHeight);

    },

    updateCommand: function() {

    },


    // Basic getters
    getPrefix: function() {
        return (this.user == "maxew" ? "#" : "$")
    }, 

    getUser: function() {
        return this.user;
    },

    getPath: function() {
        return this.path;
    },

    getDomain: function() {
        return this.domain;
    }
}