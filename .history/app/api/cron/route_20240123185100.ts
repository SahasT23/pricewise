import Product from "@/lib/models/product.model";
import { connectToDB } from "@/lib/mongoose";
import { generateEmailBody } from "@/lib/nodemailer";
import { scrapeAmazonProduct } from "@/lib/scraper";
import { getAveragePrice, getHighestPrice, getLowestPrice, getEmailNotifType } from "@/lib/utils";

export async function GET() {
    try {
        connectToDB();

        const products = await Product.find({});

        if(!products) throw new Error("No products found");

        const updatedProducts = await Promise.all(
            products.map(async (currentProduct) => {
                const scrapedProduct = await scrapeAmazonProduct(currentProduct.url);
            
                if(!scrapedProduct) throw new Error("No product found");

                const updatedPriceHistory: any = [
                    ...currentProduct.priceHistory,
                    { price: scrapedProduct.currentPrice}
                ]

                const product = {
                    ...scrapedProduct,
                    priceHistory: updatedPriceHistory,
                    lowestPrice: getLowestPrice(updatedPriceHistory),
                    highestPrice: getHighestPrice(updatedPriceHistory),
                    averagePrice: getAveragePrice(updatedPriceHistory),
                }

                const updatedProduct = await Product.findOneAndUpdate({ url: scrapedProduct.url },
                    product,
                    { upsert: true, new: true}
                );

                    const emailNotifType = getEmailNotifType(scrapedProduct,
                    currentProduct)
                    
                    if(emailNotifType && updatedProduct.users.length > 0) {
                        const productInfo = {
                            title: updatedProduct.title,
                            url: updatedProduct.url,
                        }

                        const emailContent = generateEmailBody(productInfo, emailNotifType);

                        const userEmails = updatedProd
                    }
                })
        )

    } catch (error) {
        throw new Error(`Error in GET: $(error)`)
    }
}