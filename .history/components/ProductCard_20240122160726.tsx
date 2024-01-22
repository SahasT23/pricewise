import React from 'react'
import { Product } from '@/types'
import Link from 'next/link';

interface Props {
    product: Product;
}

const ProductCard = ({product}: Props) => {
  return (
    <Link href={`/products/${product}`}>ProductCard</LinkLink>
  )
}

export default ProductCard