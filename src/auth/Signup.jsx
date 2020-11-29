import React, {useState} from 'react';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';

const Signup = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    let handleSubmit = (event) => {
        event.preventDefault(); //this prevents the page from refreshing when we submit the form
        fetch('http://localhost:3000/user/register', {
            method: 'POST', 
            body: JSON.stringify({user: {username: username, password: password}}),
            headers: new Headers ({
                'Content-Type': 'application/json' //this lets our server know what type of info we are sending to it, so it can decide if it cna handle it and what to do with it. 
            })
        }) .then(
            (response) => response.json() //the resolves the promise from fetch and calling for the response to be in JSON form. 
        ) .then((data) => {
            props.updateToken(data.sessionToken)
        })
    }

    return (
        <div>
            <h1>Sign Up</h1>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor="username">Username</Label>
                    <Input onChange={(e) => setUsername(e.target.value)} name="username" value={username} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="password">Password</Label>
                    <Input onChange={(e) => setPassword(e.target.value)} name="password" value={password} />
                </FormGroup>
                <Button type="submit">Signup</Button>
            </Form>
        </div>
    )
}

export default Signup;