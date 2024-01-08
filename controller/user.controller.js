const User = require("../schema/user.schema")


const create = async (req,res)=>{
    try {
        const data = req.body
        const user = new User(data)
        await user.save()
        res.status(200).json({message: user})        
    }
    catch (error)
    {
        req.status(424).json({error: error.message})
    }
}

const fetch = async (req,res)=>{
    const users = await User.find()
    if(users.length) return res.status(200).json(users)

    res.status(404).json({message: "User collection is empty"})
}

const update = async (req,res)=>{
    try {
        const id = req.params.id
        const data = req.body
        await User.updateOne({_id: id}, data)
        res.status(200).json({"success":true})
    }
    catch (error)
    {
       res.status(424).json({error: error.message}) 
    }
}

const remove = async (req,res)=>{
    try {
        const id = req.params.id
        await User.deleteOne({_id: id})
        res.status(200).json({"success":true})
        
    }
    catch(error)
    {
        res.status(424).json(error)
    }
}

module.exports = {
    create,
    fetch,
    update,
    remove
}