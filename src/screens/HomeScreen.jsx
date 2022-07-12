import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import CategoriesBar from '../components/categoriesBar/CategoriesBar'
import Videos from '../components/videos/Videos'

const HomeScreen = () => {
  return (
    <Container>
        <CategoriesBar />
        <Row>
            {
                [...new Array(20)].map(() => (
                    <Col lg={3} md={4}>
                    <Videos />
                    </Col>
                ))
            }
        </Row>
    </Container>
  )
}

export default HomeScreen