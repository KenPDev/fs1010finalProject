import React, { useState } from 'react'
import { Form, FormGroup, Col, Input, Label, Button, Container, CardBody, Card, CardText } from 'reactstrap'

const Contact2 = () => {

    const [firstName, setFirstName] = useState("")

    const formValid = () => {
        if (firstName == "" || firstName == null)
        {
            alert("Enter your first name");
            return false;
        }
        alert('submitted foorm!')
    }

    return (
        <main className="contactPage">
            <h2>Contact Form</h2>
            <p>Thank you for your interest. Please contact me by filling out and submitting the form below. I will get back to you as soon as possible.</p>
            <section class="contactBox">
                <form name="myForm" onSubmit={formValid}>
                    <label for="firstName"><b>First Name</b></label>
                    <br /><input type="text" value={firstName} onChange={e => setFirstName(e.target.value)} />
                    <br /><br />
                    <label for="lastName"><b>Last Name</b></label>
                    <br /><input type="text" name="lastName" id="lastName" />
                    <br /><br />
                    <label for="myEmail"><b>Email</b></label>
                    <br /><input type="email" name="myEmail" id="myEmail" />
                    <br /><br />
                    <label for="address"><b>Company or Organization</b></label>
                    <br /><textarea rows="3" cols="50" name="address" id="address"></textarea>
                    <br /><br />
                    <label for="comments"><b>Why you are contacting me</b></label>
                    <br /><textarea rows="6" cols="50" name="comments" id="comments"></textarea>
                    <br /><br />
                    <input type="submit" value="Submit" />
                    <input type="reset" value="Reset"></input>
                </form>
            </section>
        </main>
      )
    }

    export default Contact2