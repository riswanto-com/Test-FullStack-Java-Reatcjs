import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Button, Col, Form, Modal, Row } from 'react-bootstrap'
import Swal from 'sweetalert2';
import axios from 'axios';
import { API_URL } from '../page/config'
export default function EmploymentComponent() {
    const [lgShow, setLgShow] = useState(false);
    const AddEmployment = (e) => {
        e.preventDefault(false);
        axios.post(API_URL+"employment/"+localStorage.usertoken,field).then(
            res=>{
                if(res.data.status ===true){
                    setLgShow(false);
                    Swal.fire({
                        icon: 'success',
                        position: 'top',
                        text: "data save",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            }
        ).catch(e=>{

        })
    }
    const [field, setField] = useState({});
    function setValue(e) {
        const target = e.target;
        const value = target.value;
        const name = target.name;


        setField({
            ...field,
            [name]: value
        })
    }
    return (
        <>
            <Col lg={12}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label><h4>Employment History</h4> </Form.Label>
                    <br /><Form.Text className="text-muted">
                        Show Your relevant expirience (last 10 years). Use bullet points to note your archievements.if possible-use numbers/facts
                        (Achieved X. measures by Y, by doing Z)
                    </Form.Text>
                </Form.Group>
                <span className='btn-add' onClick={() => setLgShow(true)}><FontAwesomeIcon icon={faPlus} /> Add Employment</span>
            </Col>
            <Modal
                size="lg"
                show={lgShow}
                onHide={() => setLgShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        Add Employment
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={AddEmployment}>
                        <Row>
                            <Col lg={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Name Company</Form.Label>
                                    <Form.Control required name="nameCompany" onChange={setValue} type='text' />
                                </Form.Group>
                            </Col>
                            <Col lg={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Position</Form.Label>
                                    <Form.Control required name="position" onChange={setValue} type='text' />
                                </Form.Group>
                            </Col>
                            <Col lg={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Start</Form.Label>
                                    <Form.Control required name="start" onChange={setValue} type='date' />
                                </Form.Group>
                            </Col>
                            <Col lg={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>End</Form.Label>
                                    <Form.Control required name="end" onChange={setValue} type='date' />
                                </Form.Group>
                            </Col>
                            <Col lg={12}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Job Desc</Form.Label>
                                    <Form.Control as="textarea" required name="jobDesc" onChange={setValue} />
                                </Form.Group>
                            </Col>
                            <Col lg={{span:4,offset:4}}>
                                <Form.Group className="mb-3 d-grid">
                                    <Button type="submit">Add</Button>
                                </Form.Group>
                            </Col>
                        </Row>
                    </Form>

                </Modal.Body>
            </Modal>
        </>

    )
}
