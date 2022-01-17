import React from 'react';
import {Button, Row, Col, Form} from "react-bootstrap";
import "../../../Style/AddButton.css";
import HandleCategorySubmit from '../handleSubmit/handleCategorySubmit';

const AddCategory = ({isShowing}) =>  {
    const {addCategory} = HandleCategorySubmit();    

    return (
        isShowing ? <div className="container">
                <Row>
                    <Col sm={6}>
                        <Form onSubmit={addCategory}>
                            
                            
                            <Form.Group controlId="Name">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" name="Name" required
                                placeholder="Category name" />
                            </Form.Group>


                            <Form.Group>
                                <Button className="add__button" type="submit">
                                        Add Category
                                </Button>
                            </Form.Group>

                        </Form>
                    </Col>
                </Row>
            </div> : null
    )
} ;

export default AddCategory