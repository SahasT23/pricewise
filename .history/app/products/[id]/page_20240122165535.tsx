import { getProductByID } from "@/lib/actions"

type Props = {
    params: { id: string }
}

const ProductDetails = ({ params: {id} }: Props) => {
    const product = await getProductByID(id);

    if(!)

    return (
        <div>{id}</div>
    )
}

export default ProductDetails