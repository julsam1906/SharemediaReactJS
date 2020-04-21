import React from 'react'
import AjouterBieres from './AjouterBieres'
import beerFirebase from '../hoc/beerFirebase'
import { Row, Col } from 'antd'
import FicheBeer from './FicheBeer'

const Beer = (props) => {
  return (
    <div>
      <Row>
        <Col>
          {
            Object.keys(props.beers)
              .map(key =>
                <FicheBeer
                  key={key}
                  id={key}
                  beers={props.beers}
                />
              )
          }
        </Col>
        <Col span={10}>
          <AjouterBieres
            produitName='Nom de la bière'
            shop='Liste des magasins'
            brasserie='Nom de la brasserie'
            houblons='Nom du ou des houblons'
            image='Nom de la photo : (...).jpeg'
            descriptif='Commentaires'
            addBeer={props.addBeer}
          />
        </Col>
      </Row>
    </div>
  )
}

const WrappedComponent = beerFirebase(Beer)
export default WrappedComponent
