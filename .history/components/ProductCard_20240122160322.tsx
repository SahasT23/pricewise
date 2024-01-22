import React from 'react'
import { Props } from 'react-responsive-carousel/lib/ts/components/Thumbs'

interface Props {
    product: Product;
}

const ProductCard = ({product}: Props) => {
  return (
    <div>ProductCard</div>
  )
}

export default ProductCard