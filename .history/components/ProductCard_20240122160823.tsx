import React from 'react'
import { Product } from '@/types'
import Link from 'next/link';

interface Props {
    product: Product;
}

const ProductCard = ({product}: Props) => {
  return (
    <Link href={`/products/${product._id}`} className='product-card'>
        <div>
            
        </div>
    </Link>
  )
}

export default ProductCard