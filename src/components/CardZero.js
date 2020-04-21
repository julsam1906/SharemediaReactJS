import React from 'react'
import { Card, Button } from 'antd'
import { useHistory } from 'react-router-dom'

const CardZero = ({ id: key, recettes, supprimerZero }) => {
  const recette = recettes[key]
  const url = window.location.href
  var vars = url.split('/')
  const current = vars[5]
  const pseudo = vars[4]
  const history = useHistory()
  const handleClick = () => {
    history.push(`/sharemedia/${pseudo}/${current}/${key}`)
  }

  return (
    <div>
      <Card id='image' style={{ width: 420 }} title={recette.titre} bordered={false} cover={<img alt='example' src={recette.image} height='250' />}>
        <Button onClick={handleClick}>
            Voir la préparation
        </Button>
        <Button onClick={() => supprimerZero(recette.titre)}>
            Supprimer
        </Button>
      </Card>
    </div>
  )
}

export default CardZero
