const User = require("../schema/user.schema")

const create = async (req,res)=>{
    try {
        const data = req.body
        const user = new User(data)
        await user.save()
        res.statusCode = 200
        res.json({message: user})   
    }
    catch (error)
    {
        res.statusCode = 424
        res.json({error: error.message})
    }
}

const fetch = async (req,res)=>{
    const users = await User.find()
    if(users.length) return (
        res.statusCode = 200,
        res.json(users)
    )

    res.statusCode = 404
    res.json({message: "User collection is empty"})
}

const update = async (req,res)=>{
    try {
        const id = req.params.id
        const data = req.body
        await User.updateOne({_id: id}, data)
        res.statusCode = 200
        res.json({"success":true})
    }
    catch (error)
    {
       res.statusCode = 424
       res.json({error: error.message}) 
    }
}

const remove = async (req,res)=>{
    try {
        const id = req.params.id
        await User.deleteOne({_id: id})
        res.statusCode = 200
        res.json({"success":true})
        
    }
    catch(error)
    {
        res.statusCode = 424
        res.json(error)
    }
}

module.exports = {
    create,
    fetch,
    update,
    remove
}