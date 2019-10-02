const remoteURL = "http://localhost:5002"

export default {
  get(id) {
    return fetch(`${remoteURL}/owners/${id}`)
      .then(result => result.json())
  },
  getAll() {
    return fetch(`${remoteURL}/owners`)
      .then(result => result.json())
  },
  delete(id) {
    return fetch(`http://localhost:5002/owners/${id}`, {
      method: "DELETE"
    })
      .then(result => result.json())
  },
  post(newOwner) {
    return fetch(`${remoteURL}/owners`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newOwner)
    }).then(data => data.json())
  },
  update(editOwner) {
    return fetch(`${remoteURL}/owners/${editOwner.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editOwner)
    }).then(data => data.json());
  }
}