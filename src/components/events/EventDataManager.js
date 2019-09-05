const remoteURL = "http://localhost:5002"

export default {
    getEvent(id) {
        return fetch(`${remoteURL}/events/${id}`)
            .then(response => response.json());
    },  
    getAllEvents(userId) {
        return fetch(`${remoteURL}/events/?userId=${userId}`)
            .then(response => response.json());
    },

    getUserEvents(userId) {
        return fetch(`${remoteURL}/users/${userId}?_embed=events`)
            .then(response => response.json());
    },

    postEvent(eventObject) {
        return fetch(`${remoteURL}/events`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(eventObject)
        }).then(response => response.json())
    },
    deleteEvent(id) {
        return fetch(`${remoteURL}/events/${id}`,
        {method: "DELETE"
        }).then(response => response.json())
    },
    editEvent(editedEvent) {
        return fetch (`${remoteURL}/events/${editedEvent.id}`,  {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(editedEvent)
        }).then(response => response.json());
    }
}