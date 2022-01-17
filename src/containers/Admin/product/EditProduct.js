import React from 'react';
import { useSelector } from "react-redux";
import {Modal, Button, Row, Col, Form} from "react-bootstrap";

import HandleProductSubmit from '../handleSubmit/handleProductSubmit';

const EditProduct = ({editShow, item}) => {

    const categories = useSelector((state)=> state.allCategories.categories);
    const {editProduct, uploadImage } = HandleProductSubmit();

    console.log("showing",editShow);
    console.log(item);

    

    return (
        <div className="container">
             <Modal size="lg" aria-labelledby="contained-modal-title-vcenter" centered show={editShow}
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Edit Product
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Row>
                            <Col sm={6}>
                                <Form onSubmit={editProduct}>
                                   <Form.Group controlId="Id">
                                        <Form.Label>Id</Form.Label>
                                        <Form.Control type="text" name="Id" required
                                        disabled 
                                        placeholder={item.id} />
                                    </Form.Group>
                                    <Form.Group controlId="Name">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control type="text" name="Name" required
                                        placeholder={item.name} />
                                    </Form.Group>
                                    <Form.Group controlId="Description">
                                        <Form.Label>Description</Form.Label>
                                        <Form.Control type="text" name="Description" required 
                                        placeholder={item.description} />
                                    </Form.Group>
                                    <Form.Group controlId="Price">
                                        <Form.Label>Price</Form.Label>
                                        <Form.Control type="text" name="Price" required
                                        placeholder={item.price} />
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
                                        <Button variant="primary" type="submit" >Update Category</Button>
                                    </Form.Group>

                                </Form>
                            </Col>

                            <Col sm={6}>
                                <input onChange={uploadImage} type="File" />
                            </Col>
                        </Row>

                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="danger" >Close</Button>
                    </Modal.Footer>

                </Modal>

        </div>
    );
};

export default EditProduct
