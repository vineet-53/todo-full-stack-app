const express = require('express')
const router = express.Router(); 
const {createTodo ,deletedTodo, updateTodo} = require('../../controllers/todoController')

// create todo
router.post("/create-todo" , createTodo);
router.delete('/delete-todo/:todoId', deletedTodo )
router.put('/update-todo/:todoId' , updateTodo)
router.get('/' , (req ,res)=> { 
    return res.json({ 
        message : "Todo routes"
    })
})
module.exports = router