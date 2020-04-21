import { Carousel, Row, Col } from 'antd'
import React from 'react'
import Image from './Image'
import './Caroussel.css'

const Caroussel = () => {
  return (
    <Carousel autoplay>
      <div>
        <Row>
          <Col>
            <Image src='../img/GOT.jpg' />
          </Col>
          <Col>
            <Image src='../img/chernobyl.jpg' />
          </Col>
          <Col>
            <Image src='../img/breakingbad.jpg' />
          </Col>
          <Col>
            <Image src='../img/parasite.jpeg' />
          </Col>
        </Row>
      </div>
      <div>
        <Row>
          <Col>
            <Image src='../img/greenbook.jpeg' />
          </Col>
          <Col>
            <Image src='../img/joker.jpeg' />
          </Col>
          <Col>
            <Image src='../img/once.jpeg' />
          </Col>
          <Col>
            <Image src='../img/ozark.jpeg' />
          </Col>
        </Row>
      </div>
      <div>
        <Row>
          <Col>
            <Image src='../img/peaky.png' />
          </Col>
          <Col>
            <Image src='../img/retourZombie.jpeg' />
          </Col>
          <Col>
            <Image src='../img/star9.jpeg' />
          </Col>
          <Col>
            <Image src='../img/vice.jpeg' />
          </Col>
        </Row>
      </div>
      <div>
        <Row>
          <Col>
            <Image src='../img/GOT.jpg' />
          </Col>
          <Col>
            <Image src='../img/chernobyl.jpg' />
          </Col>
          <Col>
            <Image src='../img/breakingbad.jpg' />
          </Col>
          <Col>
            <Image src='../img/peaky.png' />
          </Col>
        </Row>
      </div>
    </Carousel>
  )
}

export default Caroussel
