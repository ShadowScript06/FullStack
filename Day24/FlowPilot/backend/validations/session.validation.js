const z=require("zod");

const createSessionSchema=z.object({
    title:z.string().min(3, "Tilt must be at least 3 characters.").max(100),
    plannedDuration:z.number({
        required_error:"plannedDuration is required"
    }).int().positive("plannedDuration must be greater than 0")

})

module .exports={
    createSessionSchema
}