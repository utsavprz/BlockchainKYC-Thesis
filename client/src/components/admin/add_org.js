import React,{useEffect} from "react";
import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Addorg (props){
  useEffect(() => {
    document.title='Admin | Add Org'
    props.cleanState()
    // eslint-disable-next-line
},[])
    return(
      <Container className="mt-5 mb-5 addkyc-container">
      <Form onSubmit={props.handleSubmit} >
        <Form.Group>
          <Form.Label>Name:</Form.Label>
          <Form.Control  type="text" name="orgName" value={props.orgName} onChange={props.handleChange}/>
        </Form.Group>
        <Form.Group >
          <Form.Label>ethAddress:</Form.Label>
            <Form.Control  type="text" name="ethAddress" value={props.ethAddress} onChange={props.handleChange}/>
          </Form.Group>
          <br/>
          <Button variant="primary" type="submit" value="Submit" >Submit</Button>
      </Form>
      <div style={{margin:"auto",width:"100%",padding:"10px",color:"green"}}>
            {props.error? <p style={{color:"red"}}>{props.errormsg}</p> :
            props.loading ? <p style={{color:'blue'}}>In Transaction...</p>:
            props.added && <p>Org added successfully</p>}
        </div>
  </Container>
    );
  }