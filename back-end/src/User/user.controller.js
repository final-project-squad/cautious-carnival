const {User} = require('./user.model')

exports.getUser = async (req,res) => {
    try {
        res.status(200).send(req.user)
    } catch (error) {
        res.status(500).send({message:"User not found"})
    }
}

exports.createUser = async (res,req) => {
    try {
        const user = new User(req.)
    } catch (error) {
        
    }
}