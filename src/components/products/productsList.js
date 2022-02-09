import React from 'react';
import { useState,  useEffect} from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import '../../theme/productsList.css';

import {
    Container,
    Box,
    Button,
    Typography,
    Grid,
    Link
    } from '@mui/material';

import Title from "../common/pageTitle";
import {getProducts , deleteProduct , createProduct,getProductById} from '../../services/products';
import Modal from '../modal/modal';

function ProductsList( {logout} ) {

    const [hover, setHover] = useState(false);
    const[showModal ,setShowModal] = useState(false);
    const [products, setProducts] = useState([
        // {
        //     id: 1,
        //     "name": "Product Name",
        //     "price": 55,
        //     "image": "/products/product-1.png",
        //     "category": {
        //         "_id": "cat_id",
        //         "name": "cat_name"
        //     }
        // },
        // {
        //     id: 2,
        //     "name": "Product Name",
        //     "price": 55,
        //     "image": "/products/product-2.jpg",
        //     "category": {
        //         "_id": "cat_id",
        //         "name": "cat_name"
        //     }
        // },
        // {
        //     id: 3,
        //     "name": "Product Name",
        //     "price": 55,
        //     "image": "/products/product-3.jpg",
        //     "category": {
        //         "_id": "cat_id",
        //         "name": "cat_name"
        //     }
        // }
        // ,
        // {
        //     id: 4,
        //     "name": "Product Name",
        //     "price": 55,
        //     "image": "/products/product-4.jpg",
        //     "category": {
        //         "_id": "cat_id",
        //         "name": "cat_name"
        //     }
        // }
        // ,
        // {
        //     id: 5,
        //     "name": "Product Name",
        //     "price": 55,
        //     "image": "/products/product-5.jpg",
        //     "category": {
        //         "_id": "cat_id",
        //         "name": "cat_name"
        //     }
        // }
        // ,
        // {
        //     id: 6,
        //     "name": "Product Name",
        //     "price": 55,
        //     "image": "/products/product-6.jpg",
        //     "category": {
        //         "_id": "cat_id",
        //         "name": "cat_name"
        //     }
        // }
    ]);
    useEffect(() => {
        getProducts().then((data)=>{
            console.log(data);
            setProducts(data);
        })
    }, []);
    const handleDelete = (deletedId) =>{
        deleteProduct(deletedId).then((response)=>{console.log(response.data);
        });
        // const filterProduct = products.filter((product) => product.id !== deletedId);
        // setProducts(filterProduct);
    }
    const addNewProduct = (newProduct)=>{
        let clonedProduct =[...products];
          clonedProduct.push(newProduct);
          setProducts(clonedProduct);
        // createProduct(newProduct).then(data => {
        // })
    };
    
    const edit = (updatedId)=>{
        const newProducts = products.map((product) =>{
            if(product.id === updatedId){
                const updated = {
                    ...product,
                    isComplete: !product.isComplete,
                  }
                  return updated;
                }
          
                return product;
              });
          
              setProducts(newProducts);
            }
          
            
        

    
    useEffect(() => {
        // getProducts().then(data => {
        //    setProducts(data.languages)
        // });

        // console.log(hover);
    }, [hover]);
    return (
      <>
        <Container maxWidth="lg">
            <Box
                className="titleRow"
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    p: 1,
                    m: 1,
                    borderRadius: 1,
                }}
            >
                <div>
                    <Title text="All Products"/>
                </div>
                <div>
                    <Button variant="outlined" onClick={()=>setShowModal(!showModal)}>
                        Create New Product
                    </Button>
                    <Button variant="outlined">
                        Manage Categories
                    </Button>
                </div>

            </Box>
            
            {/* <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} /> */}
            <Grid container rowSpacing={5} columnSpacing={{ xs: 1, sm: 2, md: 3 }} className="productsList">
                {products.map((product,index) => (
                    <Grid key={index} item xs={12} sm={6} md={3} className="productBox">
                        <div className="productContent" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
                            <Link href="#" color="inherit">
                                <img src={`http://localhost:3000`+product.image} alt="product img"/>
                                <b>{product.price}</b>
                                <Typography variant="h6"  align="left">{product.name}</Typography>
                                <small>{product.category.name}</small>
                            </Link>
                            { hover ? 
                                <div className='productActions'>
                                    <Button variant="outlined">
                                        <DeleteIcon onClick={()=>handleDelete(product.id)}/>
                                    </Button>
                                    <Button variant="outlined">
                                        <EditIcon onClick={edit}/>
                                    </Button>
                                </div>
                            : null }
                        </div>
                    </Grid>
                ))}

            </Grid>

                {/* <Button variant="contained">Hello World</Button> */}
            
        </Container>
        <Modal show={showModal} addProduct={(newProduct)=>addNewProduct(newProduct) }  setShowModal={setShowModal}/>
        </> 
    )
}

export default ProductsList;
