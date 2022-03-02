const db=require('../db/models');
const User=db.User;
const bcrypt = require('bcrypt');

exports.findAll=(req,resp)=>{
    User.findAll()
    .then(data=>resp.json(data))
    .catch(err=>{
        resp.status(500)
        .send({message:err.message || `Something went wrong`})
    })
};
//Get user by email ID for login
exports.findOne = (req, resp) => {
    const email = req.params.email;
    User.findOne({ where: { userEmail: email } })
        .then(data => resp.json(data))
        .catch(err => {
            resp.status(500)
                .send({ message: err.message || `Something went wrong` })
        })
};

exports.findByPk=(req,resp)=>{
    const id=parseInt(req.params.id);
    User.findByPk(id)
    .then(data=>resp.json(data))
    .catch(err=>{
        resp.status(500)
        .send({message:err.message || `Something went wrong` })
    })
};

// //3. insert
// 

//Create New User
exports.createUser = (req, resp) => {

    if (!req.body.userName) {
        resp.status(400)
            .send({ message: "User name must be provided" });
    }

    if (!req.body.userEmail) {

        resp.status(500)
            .send({ message: "Email name must be provided" });

    }

    if (!req.body.Phone) {

        resp.status(400)
            .send({ message: "Phone number must be provided" });

    }

    if (!req.body.password) {

        resp.status(500)
            .send({ message: "password must be provided" });

    }
    bcrypt.hash(req.body.password, 10, function (err, hash) {

        if (err) {
            console.log("eerror block")
            resp.status(500)
                .send({ message: err.message })
        } else {
            console.log("else block")
            const newUser = {

                userName: req.body.userName,
                userEmail: req.body.userEmail,
                Phone: req.body.Phone,
                password: hash,
                createdAt: req.body.createdAt,
                updatedAt: req.body.updatedAt

            }

            console.log(newUser,">>>>>>>>>>>>>>>>")

            User.create(newUser).then(data => { resp.send(data); })

        }
    })

};

// //4. update
// exports.updateUser=(req,resp)=>{
//     const u_id=parseInt(req.params.id);
//     User.update(req.body,{where:{id:u_id}})
//     .then(num=>{
//         if(num==1){
//             resp.send({message:`User with id ${id} is updates successfully.`});
//         }else{
//             resp.send({message:`Cannot update User with id=${id}. may be User not found or req.body is empty`});
//         }
//     })
//     .catch((err)=>{
//         resp.status(500)
//         .send({message:err.message || "some error while updating data"})
//     })
// };

// //4. update

exports.updateUser = (req, resp) => {
    const email = req.params.email;

    bcrypt.hash(req.body.password, 10, function (err, hash) {

        if (err) {
            console.log("eerror block")
            resp.status(500)
                .send({ message: err.message })
        } else {
           User.update({"password" : hash}, { where: { userEmail: email } })
            .then(num => {
            console.log(num)
            if (num == 1) {
                resp.send({ message: `User with email ${email} is updates successfully.` });
            } else {
                resp.send({ message: `Cannot update User with email=${email}. may be User not found or req.body is empty` });
            }
        })

        .catch((err) => {
            resp.status(500)
                .send({ message: err.message || "some error while updating data" })
        })
    }})
};

// //5. delete
// exports.deleteUser=(req,resp)=>{
//     const u_id =parseInt(req.body.params);
//     User.destroy({where:{id:u_id}})
//     .then(num =>{
//         if(num==1){
//             resp.send({message:`User with id ${id} is deleted successfully.`});
//         }else{
//             resp.send({message:`Cannot delete User with id=${id}.May be User not found`});
//         }
//     }

//     )
//     .catch((err)=>{
//         resp.status(500)
//         .send({message:err.message || "Could not delete User with id=" +id})
//     })
// };

// //5. delete

exports.deleteUser = (req, resp) => {
    const u_id = parseInt(req.params.id);
    User.destroy({ where: { id: u_id } })
        .then(num => {
            if (num == 1) {
                resp.send({ message: `User with id ${u_id} is deleted successfully.` });
            } else {
                resp.send({ message: `Cannot delete User with id=${u_id}.May be User not found` });
            }
        }

        )
        .catch((err) => {
            resp.status(500)
                .send({ message: err.message || "Could not delete User with id=" + id })
        })

};
