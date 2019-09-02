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
    }
}
