import React,{useEffect} from "react";
import {Form , Container, Button } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../styles/kyc_styles.css'; 


export default function Addkyc(props) {
    useEffect(() => {
      document.title = 'Add KYC';
      props.cleanState();
      // eslint-disable-next-line
    }, []);
  
    return (
      <Container className="mt-5 mb-5 addkyc-container"> {/* Apply container styles */}
        <h2>Add new KYC</h2> {/* Apply h2 styles */}
        <Form onSubmit={props.handleSubmit}>
          <Form.Group>
            <Form.Label>Eth Address:</Form.Label>
            <Form.Control type="text" name="eth_address" onChange={props.handleChange} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Name:</Form.Label>
            <Form.Control type="text" name="name" onChange={props.handleJsonChange} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Father's Name:</Form.Label>
            <Form.Control type="text" name="fathername" onChange={props.handleJsonChange} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Mother's Name:</Form.Label>
            <Form.Control type="text" name="mothername" onChange={props.handleJsonChange} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Grandfather's Name:</Form.Label>
            <Form.Control type="text" name="grandfathername" onChange={props.handleJsonChange} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Temporary Address:</Form.Label>
            <Form.Control type="text" name="taddress" onChange={props.handleJsonChange} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Permanent Address:</Form.Label>
            <Form.Control type="text" name="paddress" onChange={props.handleJsonChange} />
          </Form.Group>
          <Form.Group>
            <Form.Label>DOB:</Form.Label>
            <Form.Control type="date" name="dob" onChange={props.handleJsonChange} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Citizenship number:</Form.Label>
            <Form.Control type="text" name="citizenship_no" onChange={props.handleJsonChange} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Phone Number:</Form.Label>
            <Form.Control type="number" name="phone" onChange={props.handleJsonChange} />
          </Form.Group>
          <br />
          <Form.Group>
            <Form.Label>Your Photo:</Form.Label>
            <Form.Control type="file" name="p_photo" onChange={props.captureFile} />
          </Form.Group>
          <br />
          <Form.Group>
            <Form.Label>Citizenship Front:</Form.Label>
            <Form.Control type="file" name="citizenship_front" onChange={props.captureFile} />
          </Form.Group>
          <br />
          <Form.Group>
            <Form.Label>Citizenship Back:</Form.Label>
            <Form.Control type="file" name="citizenship_back" onChange={props.captureFile} />
          </Form.Group>
          <br />
          <Button variant="primary" type="submit" value="Submit">Add</Button>
        </Form>
        <div className="status-message">
          {props.loading ? <p>Adding Customer KYC...</p>
            : props.error ? <p className="error-message">{props.errormsg}</p> : props.added && <p>Customer KYC Added</p>}
        </div>
      </Container>
    );
  }