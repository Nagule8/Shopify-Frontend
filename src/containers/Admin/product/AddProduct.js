import React,{useState} from 'react';
import { useSelector, useDispatch } from "react-redux";
import {Button, Row, Col, Form, Image} from "react-bootstrap";

import {createProduct} from "../../../redux/actions/productActions";
import ProductDataService from "../../../services/product.service";
import ImageUploadService from '../../../services/imageUploadService.service';

const AddProduct = ({isShowing, hide}) => {
    const product = useSelector((state)=>state.createProduct);
    const categories = useSelector((state)=> state.allCategories.categories);

    var [imagename, setimagename] = useState("noimage.png");
    const dispatch = useDispatch();

    let imagesrc = "https://localhost:44385/Photos/" + imagename;

    const handleSubmit=async (e)=>{
        e.preventDefault();

        const name = e.target.Name.value;
        const description = e.target.Description.value;
        const price = e.target.Price.value;
        const categoryid = e.target.CategoryId.value;

        const data = {
            name,
            description,
            price,
            categoryid,
            imagename,
            
        };

        

        console.log("phot:",imagename);
        const res = await ProductDataService.create(data).catch((err) => {
            console.log("Error: ",err);
        });
        
        console.log(res);
        console.log(res.data);

        dispatch(createProduct(res.data));
    }
    console.log(product);

    const handleFileSelected=async (event)=>{
        event.preventDefault();

        setimagename(event.target.files[0].name);
        const formData = new FormData();
        formData.append(
            "images",
            event.target.files[0],
            event.target.files[0].name
        );

        console.log("image name:",imagename);

        await ImageUploadService.create(formData);
    }

    return (
        isShowing ? <div className="container">
                <Row>
                <Col sm={6}>
                    <Form onSubmit={handleSubmit}>
                                    
                        <Form.Group controlId="Name">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" name="Name" required
                            placeholder="Item name" />
                        </Form.Group>
                        <Form.Group controlId="Description">
                            <Form.Label>Description</Form.Label>
                            <Form.Control type="text" name="Description" required
                            placeholder="Item Description" />
                        </Form.Group>
                        <Form.Group controlId="Price">
                            <Form.Label>Price</Form.Label>
                            <Form.Control type="text" name="Price" required
                            placeholder="Item Price" />
                        </Form.Group>
                        <Form.Group controlId="CategoryId">
                            <Form.Label>CategoryId - 
                            {categories.map(ctg=><span>{ctg.id}:{ctg.name}</span>)}
                            </Form.Label>
                            <Form.Control as="select">
                            {categories.map(ctg=>
                                    <option key={ctg.categoryId}>{ctg.id}</option>
                                )
                            }
                            </Form.Control>
                        </Form.Group>  

                        <Form.Group>
                            <Button variant="primary" type="submit" >Add Product</Button>
                        </Form.Group>

                    </Form>
                </Col>

                <Col sm={6}>
                    <Image height="200px" width="200px" src={imagesrc}/>
                    <input onChange={handleFileSelected} type="File" />
                </Col>
                </Row>

            </div> : null
    )
}

export default AddProduct