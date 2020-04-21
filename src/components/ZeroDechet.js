import React from 'react'
import Ajouter from './Ajouter'
import CardZero from './CardZero'
import { Row, Descriptions, Button, Col } from 'antd'
import { useHistory } from 'react-router-dom'
import zeroFirebase from '../hoc/zeroFirebase'

const ZeroDechet = (props) => {
  const url = window.location.href
  var vars = url.split('/')
  const key = vars[6]
  const pseudo = vars[4]
  const current = vars[5]

  const history = useHistory()
  const handleClick = () => {
    history.push(`/sharemedia/${pseudo}/${current}`)
  }

  if (key !== undefined) {
    const recette = props.recettes[key]
    return (
      <div>
        <div>
          <Descriptions title={recette.titre} layout='vertical' bordered>
            <Descriptions.Item label='Liste des ingrédients'>
              {recette.ingredients}
            </Descriptions.Item>
            <Descriptions.Item label='Recette'>
              {recette.recette}
            </Descriptions.Item>
            <Descriptions.Item label='Astuces/Conseils'>
              {recette.astuce}
            </Descriptions.Item>
          </Descriptions>
        </div>
        <footer>
          <Button onClick={handleClick}>Retour</Button>
        </footer>
      </div>
    )
  }
  return (
    <div>
      <Row>
        <Col>
          {
            Object.keys(props.zeros)
              .map(key =>
                <CardZero
                  key={key}
                  id={key}
                  recettes={props.zeros}
                  supprimerZero={props.deleteZero}
                />
              )
          }
        </Col>
        <Col span={10}>
          <Ajouter
            ajouterZero={props.addZero}
            produitName='Nom de la recette'
            imageLink='Image : http://....jpeg'
            ingredientsListe='Liste des ingrédients'
            recetteDetail='Description de la recette'
            astuce='Astuce personnelle'
          />
        </Col>
      </Row>
    </div>
  )
}

const WrappedComponent = zeroFirebase(ZeroDechet)

export default WrappedComponent
