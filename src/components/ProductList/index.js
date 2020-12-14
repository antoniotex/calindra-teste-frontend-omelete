import React, { useContext } from 'react'
import { ProductsContext } from '../../contexts/productsContext'

const ProductList = () => {
    const { products } = useContext(ProductsContext)
    return (
        <section>
            {console.log(products[1].map["images.url"])}
            {products.map((item, index) => (
                <div key={index}>
                    <img width='200' src={`https://static-store.worldticket.com.br/${item.map["images.url"][0]}`} title={item.map.name} alt={item.map.name} />
                    <span>{item.map.name}</span>
                    <span>{item.map.defaultPrice}</span>
                    <span>{item.map.salePrice}</span>
                    <span>Desconto: { ((item.map.defaultPrice - item.map.salePrice) / item.map.defaultPrice * 100).toFixed(0) }</span>
                </div>
            ))}
        </section>
    )
}

export default ProductList
