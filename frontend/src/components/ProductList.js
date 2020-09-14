import React from 'react';

const ProductList = ({products}) => {

    return (
        <>
            {products.map((product, key) => (
                    <div key = {key}>
                        <p>{product.name}</p>
                        <p>{product.price}</p>
                        <img src={product.imgUrl} />
                    </div>
            ))}
        </>
    );

}

export default ProductList;