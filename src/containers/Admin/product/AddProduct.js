import React from 'react';
import { useSelector } from "react-redux";
import {Button, Row, Col, Form} from "react-bootstrap";

import HandleProductSubmit from '../handleSubmit/handleProductSubmit';

const AddProduct = ({isShowing, hide}) => {
    const categories = useSelector((state)=> state.allCategories.categories);
    const {addProduct, uploadImage } = HandleProductSubmit();

    return (
        isShowing ? <div className="container">
                <Row>
                <Col sm={6}>
                    <Form onSubmit={addProduct}>
                                    
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
                    <input onChange={uploadImage} type="File" />
                </Col>
                </Row>

            </div> : null
    )
}

export default AddProduct