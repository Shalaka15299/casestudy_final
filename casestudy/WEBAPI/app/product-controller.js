const db=require('../db/models');
const Product=db.Product;



exports.findAll=(req,resp)=>{
    Product.findAll()
    .then(data=>resp.json(data))
    .catch(err=>{
        resp.status(500)
        .send({message:err.message || `Something went wrong`})
    })
};

exports.findByPk=(req,resp)=>{
    const id=parseInt(req.params.id);
    Product.findByPk(id)
    .then(data=>resp.json(data))
    .catch(err=>{
        resp.status(500)
        .send({message:err.message || `Something went wrong` })
    })
};

// //3. insert
exports.createProduct=(req,resp)=>{
    if(!req.body.productName){
        resp.status(400)
        .send({message:"Product name must be provided"});
    }
    if(!req.body.productSize){
        resp.status(400)
        .send({message:"Product size must be provided"});
    }
    if(!req.body.productPrice){
        resp.status(400)
        .send({message:"Product Price must be provided"});
    }
    if(!req.body.productImage){
        resp.status(400)
        .send({message:"Product Image must be provided"});
    }
    const newProduct={
        productName:req.body.productName,
        productSize:req.body.productSize,
        productPrice:req.body.productPrice,
        productImage:req.body.productImage,
        createdAt:req.body.createdAt,
        updatedAt:req.body.updatedAt
    }

    Product.create(newProduct)
    .then(data=>{resp.send(data);})
    .catch(err=>{
        resp.status(500)
        .send({message:err.message})
    })
};

// //4. update
exports.updateProduct=(req,resp)=>{
    const p_id=parseInt(req.params.id);
    Product.update(req.body,{where:{id:p_id}})
    .then(num=>{
        if(num==1){
            resp.send({message:`User with id ${p_id} is updates successfully.`});
        }else{
            resp.send({message:`Cannot update User with id=${p_id}. may be User not found or req.body is empty`});
        }
    })
    .catch((err)=>{
        resp.status(500)
        .send({message:err.message || "some error while updating data"})
    })
};

// //5. delete
exports.deleteProduct=(req,resp)=>{
    const p_id =parseInt(req.params.id);
    Product.destroy({where:{id:p_id}})
    // Product.destroy(req.body,{where:{id:p_id}})
    .then(num =>{
        if(num==1){
            resp.send({message:`Product is deleted successfully.`});
        }else{
            resp.send({message:`Cannot delete User with id=${p_id}.May be User not found`});
        }
    }

    )
    .catch((err)=>{
        resp.status(500)
        .send({message:err.message || "Could not delete User with id=" +p_id})
    })
};
