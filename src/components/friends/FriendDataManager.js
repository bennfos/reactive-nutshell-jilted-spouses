const remoteURL = "http://localhost:5002"

export default {
    getUsers(query) {
        return fetch(`${remoteURL}/users/?username=${query}`)
            .then(response => response.json());
    }
}

