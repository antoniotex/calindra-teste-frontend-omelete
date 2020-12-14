import React from 'react'

const ProductCard = ({ product }) => {
    return (
        <div>
            <img width='200' src={`https://static-store.worldticket.com.br/${product.map["images.url"][0]}`} title={product.map.name} alt={product.map.name} />
            <span>{product.map.name}</span>
            <span>{product.map.defaultPrice}</span>
            <span>{product.map.salePrice}</span>
            <span>Desconto: { ((product.map.defaultPrice - product.map.salePrice) / product.map.defaultPrice * 100).toFixed(0) }</span>
        </div>
    )
}

export default ProductCard
