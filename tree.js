export const tree = {
    tree: {
        "social": {
            "telegram": "tel",
            "discord": "disc",
            "twitter": 'twitt',
            "test": {
                "coucou": "foo",
                "bar": {
                    "far": "boo"
                }
            }
        },
        "foo": "bar",
        "boo": "far"
    },

    // Function to format a given path (removes each '../')
    formatPath: function(path) {
        let _ = path.split("/").filter((v) => v != '')
        if (_[0] == "..") {_.splice(0, 1)}
        for (let i = 0; i < _.length-1; i++) {
            if (_[i+1] == "..") {
                // Remove the index and the following index
                // Remove 1 from the increment (to test if there are other path/../)
                _.splice(i, 2)
                i--
            }
        }

        if (_.includes("..")) {
            _ = this.formatPath(_.join("/"))
        }

        return _
    },

    // Return the content of a given path, null if the path is invalid
    getContent: function(path) {
        let parsedPath = this.formatPath(path)
        let resp = this.tree

        for (let dir of parsedPath) {
            if (dir in resp) {
                resp = resp[dir]
            } else {
                return null
            }
        }

        return resp
    }
}
