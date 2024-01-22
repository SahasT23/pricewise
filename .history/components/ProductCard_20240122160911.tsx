import React from 'react'
import { Product } from '@/types'
import Link from 'next/link';
import Image from 'next/image';

interface Props {
    product: Product;
}

const ProductCard = ({product}: Props) => {
  return (
    <Link href={`/products/${product._id}`} className='product-card'>
        <div>
            <Image
                src={product.image}
                alt={product.name}
            />
        </div>
    </Link>
  )
}

export default ProductCard