import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Form, Col, Modal, Button, Row } from 'react-bootstrap'
import { year } from './Year';
import axios from 'axios';
import { API_URL } from '../page/config'
import Swal from 'sweetalert2';
export default function EducationComponent() {
    const [lgShow, setLgShow] = useState(false);
    const addEducation = (e) => {
        e.preventDefault();
        axios.post(API_URL+"education/"+localStorage.usertoken,field).then(
            res=>{
                if(res.data.status ===true){
                    setLgShow(false);
                    Swal.fire({
                        icon: 'success',
                        position: 'top',
                        text: "data tersimpan",
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
        <><Col lg={12}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label><h4>Education</h4> </Form.Label>
                <br />
                <Form.Text className="text-muted">
                    A veried education on your resume sums up the value learnings and background will bring to job
                </Form.Text>
            </Form.Group>
            <span className='btn-add' onClick={() => setLgShow(true)}><FontAwesomeIcon icon={faPlus} /> Add Education</span>
        </Col>
            <Modal
                size="lg"
                show={lgShow}
                onHide={() => setLgShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        Add Education
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Form onSubmit={addEducation}>
                        <Row>
                            <Col lg={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Name School/University</Form.Label>
                                    <Form.Control type='text' required name="nameUniversity" onChange={setValue} />
                                </Form.Group>
                            </Col>
                            <Col lg={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Grade</Form.Label>
                                    <Form.Control type='text' required name="grade" onChange={setValue} />
                                </Form.Group>
                            </Col>
                            <Col lg={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Major</Form.Label>
                                    <Form.Control type='text' required name="major" onChange={setValue} />
                                </Form.Group>
                            </Col>
                            <Col lg={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>City</Form.Label>
                                    <Form.Control type='text' required name="city" onChange={setValue} />
                                </Form.Group>
                            </Col>
                            <Col lg={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Start</Form.Label>
                                    <Form.Select required name="start" onChange={setValue}>
                                    <option value="">Choose Year</option>
                                        {
                                            year.map((start, index) => (
                                                <option key={index}>{start}</option>

                                            ))
                                        }
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col lg={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>End</Form.Label>
                                    <Form.Select required name="end" onChange={setValue}>
                                    <option value="">Choose Year</option>
                                        {
                                            year.map((end, index2) => (
                                                <option key={index2}>{end}</option>

                                            ))
                                        }
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col lg={{ span: 4, offset: 4 }}>
                                <Form.Group className="mb-3 d-grid">
                                    <Button type='submit'>Add</Button>
                                </Form.Group>
                            </Col>
                        </Row>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    )
}
