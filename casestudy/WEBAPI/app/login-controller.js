// const db= require('../db/models');
// const Login= db.Login;
const db=require('../db/models');
const login=db.login;

exports.findAll=(req,resp)=>{
    login.findAll()
        .then(data=>resp.json(data))
        .catch(err=>{
            resp.status(500)
                .send({message:err.message||
                `Something went wrong`})
        });
};

// 2. seelct * from Logins where id=?=>findByPK

exports.findByPk=(req,resp)=>{
    const id=parseInt(req.params.id);
    login.findByPk(id)
        .then(data=>resp.json(data))
        .catch(err=>{
            resp.status(500)
                .send({message:err.message||
                `Something went wrong`})
        });
};

//3. insert into users(firstName, lastName,createdAt, updatedAt)
exports.createLogin=(req,resp)=>{
    if(!req.body.username){
        resp.status(400)
            .send({message:"Login Name must be provided"});
        }
    
        const newLogin={
            username:req.body.username,
            password:req.body.password,
            createdAt:new Date(),
            updatedAt:new Date()
        }
        login.create(newLogin)
            .then(data=>resp.send(data))
            .catch(err=>{
                resp.status(500)
                    .send({message:err.message || `Cannot insert value in Login table`})
            })
    };
    
    //4. update users set firstName=?, lastName=?, ccreatedAt=?, updatedAt=?
    //where id=? =>update()
    exports.updateLogin=(req,resp)=>{
        const c_id = parseInt(req.params.id);
    
        login.update(req.body,{where:{id:c_id}})
            .then(num=>{
                if(num>1){
                    resp.send({message: `Login with id ${id} updated succeessfully.`})
                }
                else{
                    resp.send({message:`Cannot update Login with id=${id}. May be Login was not found or req.body is empty!`})
                }
            })
            .catch(err=>{
                resp.status(500)
                    .send({message:err.message})
            })
    };
    
    //5. Delete users where id=?=>delete()
    exports.delete=(req,resp)=>{
        const c_id = parseInt(req.params.id);
        login.destroy({where:{id:c_id}})
        .then(num=>{
            if(num==1){
                resp.send({message: `Login with id ${id} deleted succeessfully.`})
            }
            else{
                resp.send({message:`Cannot delete Login with id=${id}. May be Login was not found or req.body is empty!`})
            }
        })
        .catch(err=>{
            resp.status(500)
                .send({message:err.message || "Could not delete Login with id=" + id})
        })
    }