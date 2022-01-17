import React,{useState} from 'react';
import { useDispatch } from 'react-redux';
import {Form, Button} from "react-bootstrap";
import { Redirect, useHistory } from 'react-router-dom';

import "../../Style/Login.css";
import RegisterUserDataService from '../../services/registeruser.service';
import { createUser } from '../../redux/actions/userActions';

const SignUp = () => {
    const [reDirect, setreDirect] = useState(false)
    const dispatch = useDispatch();

    const handleSubmit = async (e)=>{
        e.preventDefault();

        const Username = (e.target.Username.value);
        const Email = (e.target.Email.value);
        const Role = (e.target.Role.value);
        const Password = (e.target.Password.value);


        const data = {Username,Email,Role,Password};
        console.log(data);

        const res = await RegisterUserDataService.create(data).catch((err) => {
            console.log("Error: ",err);
        });

        dispatch(createUser(res.data));
        setreDirect(true);
    }

    if(reDirect){
        return <Redirect to="/login" /> 
    }

    return (
        <div className="login">
            <Form className="login__form" onSubmit={handleSubmit} >
            <h1>Sign Ups,Here</h1>
                <Form.Group controlId="Username" >
                    <Form.Control type="text" name="Username" required
                    placeholder=" Username" className="Form__control" />
                </Form.Group>
                <Form.Group controlId="Email">
                    <Form.Control type="text" name="Email" required
                    placeholder=" Email" className="Form__control" />
                </Form.Group>

                <Form.Group controlId="Role">
                    <Form.Control as="select" className="Form__control">
                        <option >User</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="Password">
                    <Form.Control type="password" name="Password" required
                    placeholder=" Password" className="Form__control" />
                </Form.Group>

                <Form.Group>
                    <Button type="submit" className="submit__btn" >Sign Up!</Button>
                </Form.Group>
            </Form>
            
            <a href="/Login">Existing User?</a>        
        </div>
    )
}

export default SignUp
