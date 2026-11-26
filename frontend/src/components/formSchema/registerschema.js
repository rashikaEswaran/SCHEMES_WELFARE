import z from "zod";
export const registerschema=z.object(
    {
        name:z.string().min(3,"Enter a valid name"),
        age:z.coerce.number().min(18,"permission denied"),
        email:z.string().email("enter valid email"),
        password:z.string().min(8,"password should be 8 chars"),
        panid:z.string().min(18,"id should be 18 chars"),
        aadharid:z.coerce.number().min(16,"should be 16")

    }
)