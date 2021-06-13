const { PrismaClient, Prisma } = require('@prisma/client');
const jwt = require('jsonwebtoken');
const prisma = new PrismaClient()

module.exports = async (req, res) => {
    
    try {
        const cookie = req.cookies['jwt'];
        const claims = jwt.verify(cookie,"segredinho");
        
        if(!claims){
            return res.status(401).send({
                message:"Unauthorized"
            })
        }
    
        const user = await prisma.usuario.findUnique({
            where: {
              id: claims._id,
            },
        });
          
        res.send(user);
    } catch (e) {
        
        return res.status(401).send({
            message:"Unauthorized"
        })
    }
    
};