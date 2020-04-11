import React from 'react'

const ProductCart = (props) => {
    const {productData} = props
    const {nama, harga, desc, discount, stock} = productData

    return (
        <div style={{
                border:"1px solid black",
                width : "240px",
                padding : "16px",
                borderRadius : "7px"
            }}>
            {/* <h3>Nama : {nama}</h3>
            <h4>Price : {harga}</h4>
            {
                discount > 0 ?
                <h4>diskon {discount}% menjadi {harga-(harga*(discount/100))} </h4>
                : null 
            }
            <p>Description : {desc}</p> */}

            <h3>Nama : {nama}</h3>
            {
                stock > 0 ?
                
                    <>
                    <h4>Price : {harga}</h4>
                    <p>Description : {desc}</p>
                    {
                        discount > 0 ?
                        <h4>diskon {discount}% menjadi {harga-(harga*(discount/100))} </h4>
                        : null 
                    }
                    </>
                
                : "stock habis"
            }
            
            
            
        </div>
    )
}

export default ProductCart