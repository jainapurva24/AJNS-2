import { useState } from "react";


function Add() {
    const [name,setName] = useState("");
    const [description,setDescription] = useState("");
    const [price,setPrice] = useState("");
    const [quantity,setQuantity] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const addProduct = {name,description,price,quantity};
        const response = await fetch("http://localhost:3000/add-product",{
            method: "POST",
            body: JSON.stringify(addProduct),
            headers: {
                "Content-Type": "application/json",
            }
        })
        const result = await response.json();
        if(response.ok) {
            console.log(result);
            setName("");
            setDescription("");
            setPrice("");
            setQuantity("");
            alert("Product added successfully");
        }
        if(!response.ok) {
            console.log(result.error);            
        }
    }

    return(
        
            <form onClick={handleSubmit}>
                <h3>Add Product</h3>
                <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Product name" required/><br></br><br></br>
                <input type="text" value={description} onChange={(e)=>setDescription(e.target.value)} placeholder="Product description" required/><br></br><br></br>
                <input type="number" value={price} onChange={(e)=>setPrice(e.target.value)} placeholder="Product price" required/><br></br><br></br>
                <input type="number" value={quantity} onChange={(e)=>setQuantity(e.target.value)} placeholder="Product quantity" required/><br></br><br></br>
                <button type="submit" style={{padding:"10px"}}>Add</button>
            </form>
       
    )
}

export default Add;
