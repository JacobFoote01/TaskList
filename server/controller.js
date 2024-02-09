let data = [
    {id:0, Description: 'Wash the Car', Time: '1 hr'},
    {id:1, Description: 'Clean the Bathrooms', Time: '30 min'},
    {id:2, Description: 'Mow the Lawn', Time: '1 hr'},
]

function getTasks(req, res) {
    res.json(data)
}

function addTask(req, res) {
    data.push({
        id: Math.floor(Math.random() * 100000000),
        ...req.body
    })
    res.json(data)
}

function removeTask(req, res) {
    const { id } = req.params

    data = data.filter((task) => {
        return task.id !== Number(id)
    })

    res.json(data)
}

function updateTask(req, res) {
     data = data.map((task) => {
        if (task.id === Number(req.body.id)) {
            return req.body
        }
        return task
     })
     res.json(data)
}



export {
    getTasks,
    addTask,
    removeTask,
    updateTask
}
