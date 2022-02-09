import { useState } from "react";
import {Button} from '@mui/material';
import './modal.css';
import {createProduct} from '../../services/products';
import { useNavigate } from "react-router-dom";

const Modal = ({ show , addProduct ,setShowModal}) => {
  const[closeModal ,setCloseModal] = useState(false);
  const [categoryName, setCategoryName] = useState("");
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [salary, setSalary] = useState("");
  const navigate = useNavigate();
  
  const newProduct = {
    _id :Math.round(Math.random() * 100),
    category:{_id :Math.round(Math.random() * 100),name : categoryName},
    image : image,
    price : salary,
    name : name,
  };
  const handleSubmitt= (e)=> {
    e.preventDefault();
    
  };
  const handleClick = () =>{
    setCloseModal(!closeModal);
    setShowModal(false);
    console.log(image,name,salary,categoryName);
    createProduct(newProduct).then(response => console.log(response.data));
    // addProduct({
    // id :Math.round(Math.random() * 100),
    // category:{name : categoryName},
    // image : image,
    // price : salary,
    // name : name,
    // })
    // createProduct(newProduct).then(data =>{
    //   if(data){
    //     setProducts(...products ,newProduct.data);
    //     console.log(data);
    //     navigate('/products');
    //   }
    // });
    // setName('');
    // setSalary("");
    // setImage("");
    // setCategoryName("");
  }
    return ( <>
    {show &&<div className={closeModal ? "hidden" : "clear"}>
                <div className="backdrop"></div>
                <div className="overlay">
                    <form onSubmit={handleSubmitt}>
                    <div>
                      <label>Category Name</label>
                      <input type='text' value={categoryName} onChange={(e)=>setCategoryName(e.target.value)}/>
                    </div>
                    <div>
                      <label>Product Image</label>
                      <input type='file' value={image} onChange={(e)=>setImage(e.target.value)}/>
                    </div>
                    <div>
                      <div className="label">Price</div>
                      <input type='number' value={salary} onChange={(e)=>setSalary(e.target.value)}/>
                    </div>
                    <div>
                      <div className="label">Name</div>
                      <input type='text' value={name} onChange={(e)=>setName(e.target.value)}/>
                    </div>
                    <Button variant="outlined" type="submit" onClick={()=>handleClick()}>
                        ADD
                    </Button>
                    </form>
                </div>
                </div>
    }
    </> );
}

export default Modal;
