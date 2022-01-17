import React,{useEffect, useState} from "react";
import {useDispatch, useSelector } from "react-redux";
import {Table} from "react-bootstrap";
import { ButtonToolbar,Button} from "react-bootstrap";

import Toastify from "../ToastNotification/Toastify";
import AddToggle from "./toggle/AddToggle";
import EditToggle from "./toggle/EditToggle";
import AddCategory from "./category/AddCategory";
import EditCategory from "./category/EditCategory";
import FetchCategory from "../../fetchData/FetchCategory";

const Category =()=>{
    const categories = useSelector((state)=> state.allCategories.categories);
    const {fetchCategories, deleteItem} = FetchCategory();
    const {isShowing, toggle} = AddToggle();
    const {editShow, editToggle} = EditToggle();

    const [SpecificCategory, setSpecificCategory] = useState("");

    useEffect(()=>{
        fetchCategories();
    },[]);

    const showFun = (item)=>{
        setSpecificCategory(item);
        editToggle();
    }

    return(
        
        <div>
            
                <Table className="mt-4" striped bordered hover size="sm" >
                    <thead>
                        <tr>
                        <th>Name</th>
                        <th>Slug</th>
                        <th>Sorting</th>
                        </tr>
                    </thead>
                    <tbody>
                        {categories.map(item=>
                            
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>{item.slug}</td>
                                <td>{item.sorting}</td>
                                <td>
                                <ButtonToolbar>
                                        <Button className="mr-2" variant="info"
                                        onClick={()=>{showFun(item)}}>
                                            Edit
                                        </Button>
                                        <Button className="mr-2" variant="danger"
                                        onClick={()=>{
                                            //notifyWarning(item.name + "Deleted.");
                                            deleteItem(item);
                                            }} >
                                            Delete
                                        </Button>
                                    </ButtonToolbar>
                                </td>
                                
                            </tr>)}
                    </tbody>

                </Table>
                {
                    isShowing ? <Button className="mr-2" variant="danger" 
                    onClick={toggle}>
                        Close
                    </Button> :
                    <Button className="mr-2" variant="info" 
                    onClick={()=>{
                        toggle();
                    }}>
                        Add Category
                    </Button>
                }
                
                <AddCategory isShowing= {isShowing} />
                <EditCategory editShow={editShow} item={SpecificCategory} />
                
            </div>
    );
};

export default Category;