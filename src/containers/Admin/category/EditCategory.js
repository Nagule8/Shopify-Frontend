import React from 'react';
import {Modal, Button, Row, Col, Form} from "react-bootstrap";
import HandleCategorySubmit from '../handleSubmit/handleCategorySubmit';

const EditCategory = ({editShow, item}) => {
    const {editCategory} = HandleCategorySubmit();    

    return (
        <div className="container">
             <Modal size="lg" aria-labelledby="contained-modal-title-vcenter" centered show={editShow}
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Edit Category
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Row>
                            <Col sm={6}>
                                <Form onSubmit={editCategory}>

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
                                    <Form.Group controlId="Slug">
                                        <Form.Label>Slug</Form.Label>
                                        <Form.Control type="text" name="Slug" required
                                        placeholder={item.slug} />
                                    </Form.Group>
                                    <Form.Group controlId="Sorting">
                                        <Form.Label>Sorting</Form.Label>
                                        <Form.Control type="text" name="Sorting" required
                                        placeholder={item.sorting} />
                                    </Form.Group>


                                    <Form.Group>
                                        <Button variant="primary" type="submit" >Update Category</Button>
                                    </Form.Group>

                                </Form>
                            </Col>
                        </Row>

                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="danger"  >Close</Button>
                    </Modal.Footer>

                </Modal>

        </div>
    );
};

export default EditCategory
