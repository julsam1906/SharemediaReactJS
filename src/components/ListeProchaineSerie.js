import React, { Component } from 'react'
import Carte from './Carte'
import { Row, Col } from 'antd'

class ListeProchaineSerie extends Component {
  render () {
    return (
      <div className='app'>
        <Row>
          <Col>
            <Carte
              src='/img/penny.jpeg'
              titre='Penny Dreadful : City of Angels'
              description='https://www.youtube.com/watch?v=_WqFMwMiF3I'
              date='26 Avr 2020'
            />
          </Col>
          <Col>
            <Carte
              src='/img/most.jpeg'
              titre='Most dangerous game'
              description='https://www.youtube.com/watch?v=lkG_nDoMT0M'
              date='6 Avr 2020'
            />
          </Col>
          <Col>
            <Carte
              src='/img/iKnow.jpeg'
              titre='I know this much is true'
              description='https://www.youtube.com/watch?v=U4KBGydqlVk'
              date='10 Mai 2020'
            />
          </Col>
          <Col>
            <Carte
              src='/img/snow.jpeg'
              titre='Snowpiercer'
              description='https://www.youtube.com/watch?v=dHPlJMx3q80'
              date='17 Mai 2020'
            />
          </Col>
        </Row>
      </div>
    )
  }
}

export default ListeProchaineSerie
