const BASE_URL = 'http://localhost:3000'

export const getTasks = async () => {
  try {
    const response = await fetch(`${BASE_URL}/tasks`)
    return await response.json()
  } catch (error) {
    console.log(error)
  }
}

export const addTask = async (task) => {
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

export const removeTask = async (id) => {
  const response = await fetch(`${BASE_URL}/tasks/${id}`, {
    method: 'DELETE',
  })
  return await response.json()
}

export const updateTask = async (task) => {
  const response = await fetch(`${BASE_URL}/tasks/${task.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(task)
  })
  return await response.json()
}
