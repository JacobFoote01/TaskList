const BASE_URL = 'http://localhost:3000'

async function getTasks() {
  try {
    const response = await fetch(`${BASE_URL}/tasks`)
    return await response.json()
  } catch (error) {
    console.log(error)
  }
}

async function addTask(task) {
  const response = await fetch(`${BASE_URL}/tasks`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(task)
  })

  const json = await response.json()
  return json;
}

async function removeTask(id) {
  const response = await fetch(`${BASE_URL}/tasks/${id}`, {
    method: 'DELETE',
  })
  return await response.json()
}

async function updateTask(task) {
  const response = await fetch(`${BASE_URL}/tasks/${task.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(task)
  })
  return await response.json()
}

export default { getTasks, addTask, removeTask, updateTask }