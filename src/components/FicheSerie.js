import React from 'react'
import { Card, Col } from 'antd'
import ReactPlayer from 'react-player'

const FicheSerie = ({ id: key, series }) => {
  const serie = series[key]
  const titre = serie.titre
  const lien = 'https://fr.wikipedia.org/wiki/' + titre.replace(' ', '_').replace('.', '._') + ''
  return (
    <div>
      <Col span={40}>
        <Card
          id='serie'
          title={serie.titre}
          bordered={false}
        >
          <ReactPlayer url={serie.lien} />
          <a href={lien} target='_blank' rel='noopener noreferrer'>
            {serie.titre}
          </a>
          <br />
          <output hidden={serie.plateforme === ''}>
          Visible sur : {serie.plateforme}
          </output>
          <output hidden={serie.descriptif === ''}>
          Commentaires : {serie.descriptif}
          </output>
        </Card>
      </Col>
    </div>
  )
}

export default FicheSerie
