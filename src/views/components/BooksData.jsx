import React from 'react'

const BooksData = (props) => {
    const {daftarBuku} = props
    const {author, title, review, desc, price, discount, image, stock} = daftarBuku

    return (
        <div style={{ width: "550px", padding: "16px"}}>
            <div className="container align-items-center pb-3">             
                <div className="row">
                    <div className="col-md-6 shadow-sm">
                        <img style={{width:"200px"}} src={image} alt=""/>
                    </div>
                    <div className="col-md-6 text-left">
                        <p className="text-secondary">{author}</p>
                        <h4 className="font-weight-bolder p-0">{title}</h4>            
                        <p>{review}/5 Review</p>
                        <p className="text-secondary text-justify">{desc}</p>
                        {
                            discount > 0 ?
                            <p><span className="font-weight-bolder">${(price-(price*(discount/100))).toFixed(2)}</span><span style={{textDecoration:"line-through", color:"gray"}}>${price}</span></p>
                            : <p className="font-weight-bolder">${price}</p> 
                        }
                        {
                            stock > 0 ?
                            <input type="button" className="btn btn-outline-primary px-5" value="Buy Now!"/>
                            : <input type="button" className="btn btn-secondary px-5" value="Buy Now!" disabled/>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BooksData