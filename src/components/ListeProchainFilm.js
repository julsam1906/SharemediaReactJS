import React from 'react'
import Carte from './Carte'
import { Row, Col } from 'antd'

const ListeProchainFilm = () => {
  return (
    <div className='app'>
      <Row>
        <Col>
          <Carte
            src='https://fr.web.img5.acsta.net/pictures/20/02/21/17/40/5715909.jpg'
            titre='Mourir peut attendre'
            description='https://www.youtube.com/watch?v=V4aZSRaa81s'
            date='11 Nov 2020'
          />
        </Col>
        <Col>
          <Carte
            src='/img/wonder.jpeg'
            titre='Wonder Woman 1984'
            description='https://www.youtube.com/watch?v=sfM7_JLk-84'
            date='12 Août 2020'
          />
        </Col>
        <Col>
          <Carte
            src='/img/kaamelott.jpeg'
            titre='Kaamelott Le film'
            description='https://www.youtube.com/watch?v=hCKPvMT1E1I'
            date='29 Juil 2020'
          />
        </Col>
        <Col>
          <Carte
            src='/img/tenet.jpeg'
            titre='Tenet'
            description='https://www.youtube.com/watch?v=39TzzjPmQbg'
            date='22 Juil 2020'
          />
        </Col>
      </Row>
    </div>
  )
}

export default ListeProchainFilm
