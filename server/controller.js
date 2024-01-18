let data = [
    {id:0, description: 'Wash the Car', est_time: '1 hr'},
    {id:1, description: 'Clean the Bathrooms', est_time: '.5 hr'},
    {id:2, description: 'Mow the Lawn', est_time: '1.5 hrs'},
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
