import express from 'express'
import ViteExpress from 'vite-express'
import morgan from 'morgan'
import * as controller from './controller.js'
import  cors from 'cors'

const app = express()

//middleware
app.use(morgan('dev'))
app.use(express.urlencoded({extended: false}))
app.use(express.static('public'))
app.use(express.json())
app.use(cors({
  origin:'*'
}))

// get all tasks
app.get('/tasks', controller.getTasks)

// add task
app.post('/tasks', controller.addTask)

// remove task
app.delete('/tasks/:id', controller.removeTask)

// edit task
app.put('/tasks', controller.updateTask)

//door to the server 
ViteExpress.listen(app, 3000, () => console.log(`Welcome! Report to http://localhost:3000`))