import { getProductByID } from "@/lib/actions"
import { redirect } from "next/navigation";

type Props = {
    params: { id: string }
}

const ProductDetails =  async ({ params: {id} }: Props) => {
    const product = await getProductByID(id);

    if(!product) redirect('/')

    return (
        <div class>
            {product.title}
        </div>
    )
}

export default ProductDetails