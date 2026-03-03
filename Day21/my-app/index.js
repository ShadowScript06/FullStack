const users = [];
let currUser = 1;

const express = require("express");
require("dotenv").config();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const app = express();
const adminRoutes=require("./routes/adminRoutes");




app.use(express.json());
app.use("/admin",adminRoutes);



function authMiddleware(req,res,next){
    const authHeader=req.headers.authorization;

    if(!authHeader){
        return res.status(401).json({
            message:"No token provided."
        })
    }

    const token=authHeader.split(" ")[1];

    try{
        const decoded=jwt.verify(token,process.env.JWY_SECRET);

        req.user=decoded;
    }catch(err){
        return res.status(401).json({
            message:"Invalid token"
        });
    }
}

app.post("register", async (request, response) => {
  const { email, password } = request.body;
  if (!email || !password)
    return response.status(400).json({
      message: "All fields Required.",
    });

  const hasedPassword = await bcrypt.hash(password, 10);

  const user = {
    id: currUser,
    email,
    password: hasedPassword,
  };

  users.push(user);

  currUser++;

  response.json({
    message: "user registered succesfully",
  });
});

app.post("/login", async (request, response) => {
  const { email, password } = request.body;

  const user = users.find((u) => u.email === email);

  if (!user) {
    return response.status(400).json({
      message: "User not found.",
    });
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return response.status(400).json({
      message: "Incorrect Password.",
    });
  }

  const token = jwt.sign(
    {
      id: user.id,
      email: user.email,
    },
    process.env.JWT_SECRET,
    { expiresIn: "1h" },
  );

  response.status(200).json({
    message:"login succesful",
    token
  })
});

app.get("/", (request, response) => {
  response.send("hello world");
});

app.get("/dashboard",authMiddleware,(req,res)=>{
    res.json({
        message:"Welcome to Dashboard",
        user:req.user
    })
})

app.listen(5000, () => {
  console.log("server is running on Port 5000");
});
