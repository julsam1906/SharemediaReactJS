import React from 'react'
import AjouterFilms from './AjouterFilms'
import filmFirebase from '../hoc/filmFirebase'
import { Row, Col, Spin } from 'antd'
import FicheFilm from './FicheFilm'
import ModifierFilm from './ModifierFilm'

const Film = (props) => {
  const url = window.location.href
  var vars = url.split('/')
  const update = vars[6]
  const keyID = vars[7]

  if (update === 'update') {
    return (
      <div>
        <ModifierFilm keyID={keyID} films={props.films} updateFilm={props.updateFilm} />
      </div>
    )
  }
  return (
    <div>
      <Row>
        <Col>
          <Spin spinning={Object.keys(props.films).length === 0} size='large' />
        </Col>
        <Col>
          {
            Object.keys(props.films)
              .map(key =>
                <FicheFilm
                  key={key}
                  id={key}
                  films={props.films}
                  deleteFilm={props.deleteFilm}
                />
              )
          }
        </Col>
        <Col span={10}>
          <AjouterFilms
            title='Titre du film'
            plateform='Nom des plateformes'
            realisateur='Nom du réalisateur'
            url='Lien youtube bande annonce'
            descriptif='Commentaires'
            addFilms={props.addFilms}
            MAJ={props.MAJ}
          />
        </Col>
      </Row>
    </div>
  )
}

const WrappedComponent = filmFirebase(Film)
export default WrappedComponent
