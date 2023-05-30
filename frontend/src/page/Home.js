import axios from 'axios'
import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { API_URL } from './config'
export default function Home() {
  let navigate = useNavigate();
  useEffect(()=>{
    localStorage.removeItem("usertoken");
  },[])
  const CreateData = () => {
    const params = {
      id: 0
    }
    axios.post(API_URL + 'person', params).then(res => {
      console.log(res.data);
      if(res.data.status ===true){
        localStorage.setItem("usertoken", res.data.data.id);
        navigate('/form-data-diri')
      }else{
        navigate('/')
      }
    }).catch(e => {
      console.log(e)
    })
  }
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h4>Selamat Datang di Website Kami</h4>
            <p>Segera Lengkapi Data Diri Anda <Link onClick={() => CreateData()}>Disini</Link></p>
          </Col>
        </Row>
      </Container>
    </>
  )
}
