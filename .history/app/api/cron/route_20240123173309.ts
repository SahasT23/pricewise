import Product from "@/lib/models/product.model";
import { connectToDB } from "@/lib/mongoose";

export async function GET() {
    try {
        connectToDB
    } catch (error) {
        
    }
}