const db=require("../db/models");
const Order=db.Order;


exports.findAll=(req,resp)=>{
    Order.findAll()
    .then(data=>resp.json(data))
    .catch(err=>{
        resp.status(500)
        .send({message:err.message || `Something went wrong`})
    })
};

exports.findByPk=(req,resp)=>{
    const id=parseInt(req.params.id);
    Order.findByPk(id)
    .then(data=>resp.json(data))
    .catch(err=>{
        resp.status(500)
        .send({message:err.message || `Something went wrong` })
    })
};

// //3. insert
exports.createOrder=(req,resp)=>{
    // if(!req.body.productName){
    //     resp.status(400)
    //     .send({message:"Product name must be provided"});
    // }
    // if(!req.body.productSize){
    //     resp.status(400)
    //     .send({message:"Product size must be provided"});
    // }
    // if(!req.body.productPrice){
    //     resp.status(400)
    //     .send({message:"Product Price must be provided"});
    // }
    // if(!req.body.productImage){
    //     resp.status(400)
    //     .send({message:"Product Image must be provided"});
    // }
    const newOrder={
        userid:req.body.userid,
        userName:req.body.userName,
        // userAddress:req.body.userAddress,
        paymentMode:req.body.paymentMode,  
        grandTotal:req.body.grandTotal,   
        orderStatus:req.body.orderStatus,   
        createdAt:req.body.createdAt,
        updatedAt:req.body.updatedAt
    }

    Order.create(newOrder)
    .then(data=>{resp.send(data);})
    .catch(err=>{
        resp.status(500)
        .send({message:err.message})
    })
};
