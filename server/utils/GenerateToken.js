import jwt from 'jsonwebtoken'

const generateToken = (id)=>{
    return jwt.sign({
        id
    },process.env.JWT_SECRET,{
        expiresIn:'6d'
    })
}

export default generateToken