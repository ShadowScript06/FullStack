const z=require("zod");

const registerSchema=z.object({
    name:z.string().min(3 ,"Name must be at least 3 characters").max(30),
    email:z.email("Invalid email format"),
    password:z.string().min(6).max(30)
});

const loginSchema=z.object({
    email:z.email(),
    password:z.string().min(6, "Password must be at least 6 characters")
})

module.exports={
    registerSchema,
    loginSchema
}