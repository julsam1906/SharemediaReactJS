import React from 'react'
import AjouterSeries from './AjouterSeries'
import serieFirebase from '../hoc/serieFirebase'
import { Row, Col } from 'antd'
import FicheSerie from './FicheSerie'

const Series = (props) => {
  return (
    <div>
      <Row>
        <Col>
          {
            Object.keys(props.series)
              .map(key =>
                <FicheSerie
                  key={key}
                  id={key}
                  series={props.series}
                />
              )
          }
        </Col>
        <Col span={10}>
          <AjouterSeries
            titre='Titre de la serie'
            plateforme='Nom des plateformes'
            realisateur='Nom du réalisateur'
            lien='Lien youtube bande annonce'
            descriptif='Commentaires'
            addSerie={props.addSerie}
          />
        </Col>
      </Row>
    </div>
  )
}

const WrappedComponent = serieFirebase(Series)
export default WrappedComponent
