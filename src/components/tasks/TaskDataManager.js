const remoteURL = "http://localhost:5002"

export default {
    getTask(id) {
        return fetch(`${remoteURL}/tasks/${id}`)
            .then(response => response.json());
    },  
    getAllTasks() {
        return fetch(`${remoteURL}/tasks`)
            .then(response => response.json());
    },
    postTask(taskObject) {
        return fetch(`${remoteURL}/tasks`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(taskObject)
        }).then(response => response.json())
    },
    deleteTask(id) {
        return fetch(`${remoteURL}/tasks/${id}`,
        {method: "DELETE"
        }).then(response => response.json())
    },
    editTask(editedTask) {
        return fetch (`${remoteURL}/tasks/${editedTask.id}`,  {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(editedTask)
        }).then(response => response.json());
    }
}