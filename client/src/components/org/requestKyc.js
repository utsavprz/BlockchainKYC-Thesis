import React,{useEffect} from "react";
import {Form , Container, Button } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css'


export default function Requestkyc(props){
    useEffect(() => {
        document.title='Request KYC'
        props.cleanState()
        // eslint-disable-next-line
    },[])
    return(
        <Container  className="mt-5 mb-5 addkyc-container">
        <h2 >Request Customer KYC </h2>
            <Form  onSubmit={props.onRequest}>
                <Form.Group>
                    <Form.Label>Eth Address</Form.Label>
                    <Form.Control type="text" name="eth_address" onChange={props.handleChange}></Form.Control>
                </Form.Group>
                <br/>
                <Button variant="primary" type="submit" value="Submit" >Request</Button>
            </Form>
            <div style={{margin:"auto",width:"80%",padding:"10px",color:"green"}}>
                {props.loading ? <p style={{color:'blue'}}>Requesting Customer KYC...</p>: 
                props.error? <p style={{color:"red"}}>{props.errormsg}</p>:props.req && <p>Customer KYC Requested</p>}
            </div>
        </Container>
    )
}