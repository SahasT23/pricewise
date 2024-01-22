import React from 'react'
import { Product } from '@/types'

interface Props {
    product: Product;
}

const ProductCard = ({product}: Props) => {
  return (
    <div>ProductCard</>
  )
}

export default ProductCard