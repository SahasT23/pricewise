import { getProductByID } from "@/lib/actions"
import { redirect } from "next/navigation";

type Props = {
    params: { id: string }
}

const ProductDetails =  async ({ params: {id} }: Props) => {
    const product = await getProductByID(id);

    if(!product) redirect('/')

    return (
        div
    )
}

export default ProductDetails