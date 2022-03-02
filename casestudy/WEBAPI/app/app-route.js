const Router = require('express');

module.exports=(app)=>{
    const express=require('express');
    const ROUTER=express.Router();
    const UserController=require('./user-controller');

    ROUTER.get('/users',UserController.findAll);
    
    ROUTER.get('/users/:email',UserController.findOne);

    ROUTER.post('/users/add',UserController.createUser);

    ROUTER.put('/users/update/:email',UserController.updateUser);

    ROUTER.delete('/users/delete/:id',UserController.deleteUser);


    const productController=require('./product-controller');

    ROUTER.get('/products',productController.findAll);
    ROUTER.get('/products/:id',productController.findByPk);
    ROUTER.post('/products/add',productController.createProduct);
    ROUTER.put('/products/update/:id',productController.updateProduct);
    ROUTER.delete('/products/delete/:id',productController.deleteProduct);

    const orderController=require('./order-controller');

    ROUTER.get('/order',orderController.findAll);
    ROUTER.get('/orders/:id',orderController.findByPk);
    ROUTER.post('/orders/add',orderController.createOrder);
    // ROUTER.put('/products/update/:id',productController.updateProduct);
    // ROUTER.delete('/products/delete/:id',productController.deleteProduct);

    const AdminController=require('./login-controller');

    ROUTER.get('/logins',AdminController.findAll);
    ROUTER.get('/Logins/:id',AdminController.findByPk);
    ROUTER.post('/Logins/add',AdminController.createLogin);
    ROUTER.put('/Logins/update/:id',AdminController.updateLogin);
    ROUTER.delete('/Logins/delete/:id',AdminController.delete);

    
    app.use('/app',ROUTER);
};