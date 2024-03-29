import { getProductByID } from "@/lib/actions"
import Image from "next/image";
import { redirect } from "next/navigation";

type Props = {
    params: { id: string }
}

const ProductDetails =  async ({ params: {id} }: Props) => {
    const product = await getProductByID(id);

    if(!product) redirect('/')

    return (
        <div className="product-container">
            <div cla>
                <div>
                    <Image
                        src={product.image}
                        alt={product.title}
                        width={580}
                        height={400}
                        className="mx-auto"
                    />
                </div>
            </div>
        </div>
    )
}

export default ProductDetails