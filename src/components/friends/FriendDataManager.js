const remoteURL = "http://localhost:5002"

export default {
    getUsers(query) {
        return fetch(`${remoteURL}/users/?username=${query}`)
            .then(response => response.json());
    },

    saveConnection(connectionObject) {
        return fetch(`${remoteURL}/connections`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(connectionObject)
        }).then(response => response.json());
    },

    getConnections() {
        return fetch(`${remoteURL}/connections`)
            .then(response => response.json())
    },

    deleteConnection(id) {
        return fetch(`${remoteURL}/connections/${id}`,
            {
                method: "DELETE"
            }).then(response => response.json());
    },

    getUser(id) {
        return fetch(`${remoteURL}/users/${id}`)
            .then(response => response.json());
    },

    getAllUsers() {
        return fetch(`${remoteURL}/users`)
            .then(response => response.json());
    }
}
