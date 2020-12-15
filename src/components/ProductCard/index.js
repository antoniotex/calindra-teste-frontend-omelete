import React from 'react'
import './style.css'

const ProductCard = ({ product }) => {
    const discount = ((product.map.defaultPrice - product.map.salePrice) / product.map.defaultPrice * 100).toFixed(0)
    return (
        <div className='productCard'>
            {discount > 0 && <span className='productCard__discount'>-{ discount }%</span>}
            <img className='productCard__image' src={`https://static-store.worldticket.com.br/${product.map["images.url"][0]}`} title={product.map.name} alt={product.map.name} />
            <div className='productCard__info'>
                <span>{product.map.name}</span>
                <span>{product.map.defaultPrice}</span>
                <span>{product.map.salePrice}</span>
            </div>
        </div>
    )
}

export default ProductCard
