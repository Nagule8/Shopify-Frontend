import React,{useState} from 'react';
import { useSelector, useDispatch } from "react-redux";
import {Button, Row, Col, Form} from "react-bootstrap";
import Dexie from 'dexie';

import {createCategory} from "../../../redux/actions/productActions";
import CategoryDataService from '../../../services/category.service';


const AddCategory = ({isShowing}) =>  {
    const category = useSelector((state)=>state.createCategory);
    const dispatch = useDispatch();

    //store in indexDB
    const saveCategoryInOffline =  (data) => {
            console.log("data",data);
            //set the database
            const db = new Dexie("category");
            //create the database store
            db.version(1).stores({
                postCategory: "name"
            })

            //adding data to the indexDB
             db.postCategory.add({
                name: data.name
            }).then(()=>{
                console.log("Data stored in IndexDB.")
            });

            db.open()
            .then(()=>{
                console.log("Data stored in IndexDB.")
            })
            .catch((err) => {
                console.warn("Dexie error: ",err.stack || err);
            })

            
    }

    //post the category into the server
    const handleSubmit=async (e)=>{
        e.preventDefault();

        const name = e.target.Name.value;
        const data = {
            name
        }

        await CategoryDataService.create(data)
        .catch( (err) => {
            console.log("Error: ",err);            
            //storing data in indexDB
            saveCategoryInOffline(data);
            //Background sync
            if ( !navigator.onLine && 'serviceWorker' in navigator) {
                navigator.serviceWorker.register('./sw.js')
                  .then(() => navigator.serviceWorker.ready)
                  .then(registration => {
                    if ('SyncManager' in window) {
                      registration.sync.register('offline-category');
                      console.log("Sync registered.")
                    }
                })
            }
            
        });
    }
    console.log(category);

    return (
        isShowing ? <div className="container">
                <Row>
                    <Col sm={6}>
                        <Form onSubmit={handleSubmit}>
                            
                            
                            <Form.Group controlId="Name">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" name="Name" required
                                placeholder="Category name" />
                            </Form.Group>


                            <Form.Group>
                                <Button id="add-category" variant="primary" type="submit" >Add Category</Button>
                            </Form.Group>

                        </Form>
                    </Col>
                </Row>

            </div> : null
    )
} ;

export default AddCategory