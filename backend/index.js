const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const { type } = require("os");

app.use(express.json());
app.use(cors());

// Conexao do dbmongo

mongoose.connect("mongodb+srv://rafaelestevao:72Mx2te6HD5rPUGr@projetointegrador.j0fauyb.mongodb.net/projetointegrador");

// API

app.get("/",(req,res)=>{
    res.send("Express App is Running")
})

// image storage

const storage = multer.diskStorage({
    destination: './upload/images',
    filename:(req,file,cb)=>{
        return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({storage:storage})

//Upload endpoint

app.use('/images',express.static('upload/images'))

app.post("/upload",upload.single('product'),(req,res)=>{
    res.json({
        success:1,
        image_url:`http://localhost:${port}/images/${req.file.filename}`
    })
})

// Schema for Creating Products

const Product = mongoose.model("Product",{
    id: {
        type: Number,
        required:true,
    },
    name:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    date:{
        type:Date,
        default:Date.now,
    },
    available:{
        type:Boolean,
        default:true,
    },
})

app.post('/addproduct',async(req,res)=>{
    let products = await Product.find({});
    let id;
    if(products.length>0){
        let last_product_array = products.slice(-1);
        let last_product = last_product_array[0];
        id = last_product.id+1;
    }
    else{
        id=1;
    }
    const product = new Product({
        id:id,
        name:req.body.name,
        image:req.body.image,
        category:req.body.category,
        price:req.body.price,
    });
    console.log(product);
    await product.save();
    console.log("Saved");
    res.json({
        success:true,
        name:req.body.name,
    })
})

//API for deleting Products

app.post('/removeproduct',async (req,res)=>{
    await Product.findOneAndDelete({id:req.body.id});
    console.log("Removed");
    res.json({
        success:true,
        name:req.body.name
    })
})

//API for getting all products

app.get('/allproducts',async (req,res)=>{
    let products = await Product.find({});
    console.log("All Products Fetched");
    res.send(products);
})

/// User Model
const Users = mongoose.model('Users',{
    name:{
        type:String,
    },
    email:{
        type:String,
        unique:true,
    },
    password:{
        type:String,
    },
    cartData:{
        type:Object,
    },
    date:{
        type:Date,
        default:Date.now,
    }
})

// Endpoint for registering the user - CORRIGIDO
app.post('/signup', async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // Validação básica
        if (!username || !email || !password) {
            return res.status(400).json({ success: false, errors: "Preencha todos os campos!" });
        }

        // Verifica se o e-mail já existe
        const existingUser = await Users.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ success: false, errors: "E-mail já cadastrado!" });
        }

        // Cria o carrinho vazio
        const cartData = {};
        for (let i = 0; i < 300; i++) cartData[i] = 0;

        // Salva o usuário
        const user = new Users({
            name: username,
            email,
            password,
            cartData,
        });
        await user.save();

        // Gera o token JWT
        const token = jwt.sign({ user: { id: user._id } }, 'secret_ecom');
        
        // Retorna resposta JSON
        res.json({ success: true, token });

    } catch (error) {
        console.error("Erro no cadastro:", error);
        res.status(500).json({ success: false, errors: "Erro interno no servidor." });
    }
});



//endpoint for user login

app.post('/login',async(req,res) =>{
    let user = await Users.findOne({email:req.body.email});
    if(user) {
        const passCompare = req.body.password === user.password;
        if (passCompare) {
            const data = {
                user: {
                    id: user.id
                }
            }
            const token = jwt.sign(data,'secret_ecom');
            res.json({success:true,token});
        }
        else{
            res.json({success:false,errors:"Wrong Password"});
        }
    }
    else{
        res.json({success:false,errors:"Wrong Email"})
    }
})

//endpoint for newcollection data

app.get('/newcollections',async (req,res)=>{
    let products = await Product.find({});
    let newcollection = products.slice(1).slice(-8);
    console.log("NewCollection Fetched");
    res.send(newcollection);
})

//endpoint for cart
    const fetchUser = async (req,res,next)=>{
        const token = req.header('auth-token');
        if(!token) {
            res.status(401).send({errors:"Please Login"})
        }
        else{
        try {
            const data = jwt.verify(token,'secret_ecom');
            req.user = data.user;
            next();
        } catch (error) {
            res.status(401).send({errors:"please authenticate using a valid token"})
        }
        }
    }


app.post('/addtocart', fetchUser,async(req,res)=>{
    
    let userData = await Users.findOne({_id:req.user.id});
    userData.cartData[req.body.item] +=1;
    await Users.findOneAndUpdate({_id:req.user.id},{cartData:userData.cartData});
    res.send("Added")
})


app.listen(port,(error)=>{
    if (!error) {
        console.log("Server Running on Port" +port)
    }
    else{
        console.log("Error:"+error)
    }
})
