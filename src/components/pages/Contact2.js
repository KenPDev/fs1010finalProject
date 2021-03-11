import React, { useState } from 'react'
import { Form, FormGroup, Col, Input, Label, Button, Container, CardBody, Card, CardText } from 'reactstrap'

const Contact2 = () => { // eslint-disable-line no-unused-vars
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [emailAddress, setEmailAddress] = useState("")
    const [comments, setcomments] = useState("")

    const formValid = () => { 
        if (firstName == "" || firstName == null) // eslint-disable-line 
        {
            alert("Enter your first name");
            return false;
        }
        if (lastName == "" || lastName == null) // eslint-disable-line 
        {
            alert("Enter your last name");
            return false;
        }
        if (emailAddress == "" || emailAddress == null) // eslint-disable-line 
        {
            alert("Enter your email address");
            return false;
        }
        if (comments == "" || comments == null) // eslint-disable-line 
        {
            alert("Why are you contacting me?");
            return false;
        }
        return true
}

const handleSubmit = async (event) => {
    event.preventDefault()
    const isValid = formValid()
    console.log(isValid)
    if (isValid === true) {
        const response = await fetch('/contact_form/entries', { // eslint-disable-line 
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({name: firstName, email: emailAddress, content: comments})
        })
    }
}
return (
    <Container>
        <Card style={{backgroundColor: 'gold', alignItems:'center', borderStyle:'none', paddingBottom:'310px', paddingTop:'50px'}}>
    <main className="contactPage">
        <h2>Contact Form</h2>
        <p>Thank you for your interest. Please contact me by filling out and submitting the form below. I will get back to you as soon as possible.</p>
        <section class="contactBox">
            <form name="myForm" onSubmit={handleSubmit}>
                <label for="firstName"><b>First Name</b></label>
                <br /><input type="text" value={firstName} onChange={e => setFirstName(e.target.value)} />
                <br /><br />
                
                <label for="lastName"><b>Last Name</b></label>
                <br /><input type="text" value={lastName} onChange={e => setLastName(e.target.value)} />
                <br /><br />
                
                <label for="myEmail"><b>Email</b></label>
                <br /><input type="email"  value={emailAddress} onChange={e => setEmailAddress(e.target.value)} />
                <br /><br />
                
                <label for="comments"><b>Why you are contacting me?</b></label>
                <br /><input type="textarea" value={comments} rows="5" cols="50" onChange={e => setcomments(e.target.value)} />
                <br /><br />

                <input type="submit" value="Submit" />
                <input type="reset" value="Reset"></input>
            </form>
        </section>
    </main>
    </Card>
    </Container>
    )
}

    export default Contact2