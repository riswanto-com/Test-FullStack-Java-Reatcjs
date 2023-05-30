import { faQuestionCircle } from '@fortawesome/free-regular-svg-icons'
import { faUserLarge } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';

import EmploymentComponent from '../component/EmploymentComponent';
import EducationComponent from '../component/EducationComponent';
import SkillComponent from '../component/SkillComponent';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { API_URL } from './config'
import Swal from 'sweetalert2';
export default function FormData() {
  let navigate = useNavigate();

  const [field, setField] = useState({});
  function setValue(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;


    setField({
      ...field,
      [name]: value
    })

    console.log(field)
  }
  const OnSaveData = (e) => {
    e.preventDefault(false);
    axios.put(API_URL + "person/" + localStorage.usertoken, field).then(res => {
      if(res.data.status===true){
        Swal.fire({
          icon: 'success',
          position: 'top',
          text: "data success",
          showConfirmButton: false,
          timer: 1500
      });
      navigate("/");
      }else{
        Swal.fire({
          icon: 'error',
          position: 'top',
          text: "system errors",
          showConfirmButton: false,
          timer: 1500
      });
      }
    }).catch(e => {

    })
  }
  return (
    <>
      <Container className='mt-5 mb-5'>
        <Form onSubmit={OnSaveData}>
          <Row>
            <Col lg={12} className='text-center mt-5'>
              <h3>Form data diri</h3>
            </Col>
            <Col lg={12}>
              <Card>
                <Card.Body>
                  <Row>
                    <Col lg={12}>
                      <h5>Pesonal Details</h5>
                    </Col>
                    <Col lg={6} sm={6} className='mt-2'>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Wanted Job Title</Form.Label>
                        <Form.Control type="text" placeholder="Software Engineer" name="jobTitle" onChange={setValue} required />
                      </Form.Group>
                    </Col>
                    <Col lg={6} sm={6} className='mt-2 '>
                      <div className='form-upload'>
                        <label className='input-file-image'>
                          <FontAwesomeIcon icon={faUserLarge} className='icon-file' />
                          <Form.Control type="file" className="file-image" />
                        </label>
                        <label className='title-file'>Upload Photo</label>
                      </div>
                    </Col>
                    <Col lg={6} sm={6} className='mt-2'>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" placeholder="" name="nameFirst" onChange={setValue} required />
                      </Form.Group>
                    </Col>
                    <Col lg={6} sm={6} className='mt-2'>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" placeholder="" name="nameLast" onChange={setValue} required />
                      </Form.Group>
                    </Col>
                    <Col lg={6} sm={6} className='mt-2'>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="" name="email" onChange={setValue} required />
                      </Form.Group>
                    </Col>
                    <Col lg={6} sm={6} className='mt-2'>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control type="text" placeholder="" name="phone" onChange={setValue} required />
                      </Form.Group>
                    </Col>
                    <Col lg={6} sm={6} className='mt-2'>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Country</Form.Label>
                        <Form.Control type="text" placeholder="" name="country" onChange={setValue} required />
                      </Form.Group>
                    </Col>
                    <Col lg={6} sm={6} className='mt-2'>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>City</Form.Label>
                        <Form.Control type="text" placeholder="" name="city" onChange={setValue} required />
                      </Form.Group>
                    </Col>
                    <Col lg={6} sm={6} className='mt-2'>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="text" placeholder="" name="address" onChange={setValue} required />
                      </Form.Group>
                    </Col>
                    <Col lg={6} sm={6} className='mt-2'>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Postal Code</Form.Label>
                        <Form.Control type="text" placeholder="" name="postalCode" onChange={setValue} required />
                      </Form.Group>
                    </Col>
                    <Col lg={6} sm={6} className='mt-2'>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Driving License <FontAwesomeIcon icon={faQuestionCircle} className='text-info' /></Form.Label>
                        <Form.Control type="text" placeholder="" name="drivingLicense" onChange={setValue} required />
                      </Form.Group>
                    </Col>
                    <Col lg={6} sm={6} className='mt-2'>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Nationality <FontAwesomeIcon icon={faQuestionCircle} className='text-info' /></Form.Label>
                        <Form.Control type="text" placeholder="" name="nationality" onChange={setValue} required />
                      </Form.Group>
                    </Col>
                    <Col lg={6} sm={6} className='mt-2'>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Place of Birth</Form.Label>
                        <Form.Control type="text" placeholder="" name="placeOfBirth" onChange={setValue} required />
                      </Form.Group>
                    </Col>
                    <Col lg={6} sm={6} className='mt-2'>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Date of Birth <FontAwesomeIcon icon={faQuestionCircle} className='text-info' /></Form.Label>
                        <Form.Control type="date" placeholder="" name="dateOfBirth" onChange={setValue} required />
                      </Form.Group>
                    </Col>
                    <Col lg={12} className='mt-2 mb-5'>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label><h4>Professional Summary</h4> </Form.Label>
                        <br /><Form.Text className="text-muted mb-2">
                          Professional Summary Write 2-4 short & energetic sentences to interest the reader!Mention your role. Experience & most importantly-you biggest achievments. best qualities adn skill.
                        </Form.Text>
                        <Form.Control as="textarea" name="professionalSummary" onChange={setValue} required />
                      </Form.Group>
                    </Col>
                    <Col lg={12} className='mt-2 mb-2'>
                      <EmploymentComponent />
                    </Col>
                    <Col lg={12} className='mt-2 mb-2'>
                      <EducationComponent />
                    </Col>
                    <Col lg={12} className='mt-2 mb-2'>
                      <SkillComponent />
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col lg={{ span: 2, offset: 5 }} className='mt-5 mb-5 d-grid grap-2'>
              <Button type='submit'>Submit</Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </>
  )
}
