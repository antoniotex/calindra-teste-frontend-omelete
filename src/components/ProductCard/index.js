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
                <div className='productCard__prices'>
                    <span className={`productCard__prices--${discount > 0 ? 'discount' : 'default'}`} > R${parseFloat(product.map.defaultPrice).toFixed(2).toString().replace('.', ',')} </span>
                    { discount > 0 && <span className='productCard__prices--default'>R${parseFloat(product.map.salePrice).toFixed(2).toString().replace('.', ',')}</span> }
                </div>
            </div>
        </div>
    )
}

export default ProductCard
