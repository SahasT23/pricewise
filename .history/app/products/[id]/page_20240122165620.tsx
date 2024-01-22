import { getProductByID } from "@/lib/actions"


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