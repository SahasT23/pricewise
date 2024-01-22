type Props = {
    params: { id: string }
}

const ProductDetails = ({ params: {id} }: Props) => {
    const product = await getProduct

    return (
        <div>{id}</div>
    )
}

export default ProductDetails