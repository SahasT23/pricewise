import { getProductByID } from "@/lib/actions"
import { redirect } from "next"

type Props = {
    params: { id: string }
}

const ProductDetails = ({ params: {id} }: Props) => {
    const product = await getProductByID(id);

    if(!product) redirect('/')

    return (
        <div>{id}</div>
    )
}

export default ProductDetails