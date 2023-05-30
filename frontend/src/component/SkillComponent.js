import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Button, Col, Card, Form, Modal, Row } from 'react-bootstrap'
import { skills } from './Year';
export default function SkillComponent() {
    const [lgShow, setLgShow] = useState(false);
    return (
        <>
            <Col lg={12}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label><h4>Skill</h4> </Form.Label>
                    <br />
                    <Form.Text className="text-muted">
                        Choose 5 of the most important skills to show your talent! make sure they match the keywords of the listing is applying via an online system
                    </Form.Text>
                </Form.Group>
                <Card>
                    <Card.Body>
                        {
                            skills.map((res,index)=>(

                                <Button key={index} variant="outline-success" className='btn-skills'>{res} <FontAwesomeIcon icon={faPlus}/></Button>
                            ))
                        }
                    </Card.Body>
                </Card>
                <span className='btn-add mt-2' onClick={() => setLgShow(true)}><FontAwesomeIcon icon={faPlus} /> Add Skills</span>
            </Col>
            <Modal
                size="md"
                show={lgShow}
                onHide={() => setLgShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        Add Skills
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col lg={12}>
                            <Form.Group className="mb-3">
                                <Form.Label>Skill</Form.Label>
                                <Form.Control type='text' />
                            </Form.Group>
                        </Col>
                        <Col lg={12}>
                            <Form.Group className="mb-3">
                                <Button>Add Skill</Button>
                            </Form.Group>
                        </Col>
                    </Row>
                </Modal.Body>
            </Modal>
        </>
    )
}
