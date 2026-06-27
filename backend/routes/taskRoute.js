const express = require('express');
const router = express.Router();


router.post('/tasks', async(req, res) =>{
    const[title, description, assignedTo, priority, dueDate] = req.body;

    if(!title || !description || !assignedTo || !priority || !dueDate){
        return res.status(400).json({error: "All fields are require"})
    }

    const task = await task.create({title, description, assignedTo, priority, dueDate});

    try{
        res.status(201).json({
        task:{
            title: task.title,
            description: task.description,
            assignedTo: task.assignedTo,
            priority: task.priority,
            dueDate: task.dueDate
        }
    })
    } catch(err){
        console.log(err);
    }
});

router.get('/tasks', async(req, res) =>{
    try{
        const tasks = await tasks.findAll(req.params);
    } catch(err){
        console.log(err);
    }
})


router.get('/tasks:id', async(req, res) =>{
    try{
        const tasks = await tasks.findById(req.params.id);
    } catch(err){
        console.log(err);
    }
})


