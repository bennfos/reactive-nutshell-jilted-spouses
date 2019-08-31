const remoteURL = "http://localhost:5002"

export default {
    getNewsItem(id) {
        return fetch(`${remoteURL}/news/${id}`)
            .then(response => response.json());
    },
    getAllNews() {
        return fetch(`${remoteURL}/news`)
            .then(response => response.json());
    },
    postNewsItem(newsObject) {
        return fetch(`${remoteURL}/news`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newsObject)
        }).then(response => response.json())
    },
    deleteNewsItem(id) {
        return fetch(`${remoteURL}/news/${id}`,
        {method: "DELETE"
        }).then(response => response.json())
    },
    editNewsItem(editedNewsItem) {
        return fetch (`${remoteURL}/events/${editedNewsItem.id}`,  {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(editedNewsItem)
        }).then(response => response.json());
    }
}