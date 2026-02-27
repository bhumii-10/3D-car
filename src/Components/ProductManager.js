import React, {useState} from "react";

function ProductManager()
{
    //one product
    const [currentProduct, setCurrentProduct]= useState({
        id: "",
        name: "",
        category: "",
        price: ""
    });

    //product list
    const [productList, setProductList]= useState([]);

    //update input field (cuurent product)
    const handleInputChange= (event)=>
    {
        const{name, value} = event.target;

        setCurrentProduct({
            ...currentProduct,
            [name]: value
        });
    };


    //update product list (handle form)
    const handleSubmit= (event)=>
    {
        event.preventDefault();

        setProductList([...productList, currentProduct]);

        //clear input
        setCurrentProduct({
            id: "",
            name: "",
            category: "",
            price: ""
        });
    };

    return(
        <div style={{padding: "20px"}}>
            <h2>Enter product Details</h2>

            <form onSubmit={handleSubmit}>
                <input
                type="text"
                name= "id"
                placeholder="Enter product ID"
                value={currentProduct.id}
                onChange={handleInputChange}
                required></input><br/><br/>

                <input
                type="text"
                name= "name"
                placeholder="Enter product name"
                value={currentProduct.name}
                onChange={handleInputChange}
                required></input><br/><br/>

                <input
                type="text"
                name= "category"
                placeholder="Enter product category"
                value={currentProduct.category}
                onChange={handleInputChange}
                required></input><br/><br/>

                <input
                type="text"
                name= "price"
                placeholder="Enter product price"
                value={currentProduct.price}
                onChange={handleInputChange}
                required></input><br/><br/>

                <button type="submit">Add product</button>
            </form>
            <hr/>
            
            <h2>Product Details</h2>
            <table border= "1" cellPadding="10">
                <thead>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Category</th>
                    <th>Price</th>
                </thead>

                <tbody>
                    {productList.map((product, index)=>
                    (
                        <tr key={index}>
                            <td>{product.id}</td>
                            <td>{product.name}</td>
                            <td>{product.category}</td>
                            <td>{product.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
export default ProductManager;