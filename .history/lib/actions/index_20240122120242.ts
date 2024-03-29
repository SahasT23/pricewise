"use server"

import Product from "../models/product.model";
import { connectToDB } from "../mongoose";
import { scrapeAmazonProduct } from "../scraper";

export async function scrapeAndStoreProduct(productUrl: string) {
    if(!productUrl) return;

    try {
        connectToDB();
        
        const scrapedProduct = await scrapeAmazonProduct(productUrl);

        if(!scrapedProduct) return;

        let product = scrapedProduct;

        const existingProduct = await Product.findOne({ url: scrapedProduct.url});

        if(existingProduct) {
            const updatedPriceHistory = [
                ...existingProduct.priceHistory,
                { price: scrapedProduct.currentPrice}
            ]

            product = {
                ...
            }
        }

    } catch (error: any) {
        throw new Error(`Failed to create/update product: ${error.message}`)
    }
}