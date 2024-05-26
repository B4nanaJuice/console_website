export const tree = {
    tree: {
        "social": {
            "telegram": "ma_x_ew",
            "discord": "b4nanajuice",
            "twitter": 'Here is my Twitter ! <a href="https://www.twitter.com/ma_x_ew" target="_blank">ma_x_ew</a>',
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

    // Return the content of a given path, null if the path is invalid
    getContent: function(path) {
        let parsedPath = path.split("/").filter((v) => v != '')
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