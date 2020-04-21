import React from 'react'
import { Card } from 'antd'

const FicheBeer = ({ id: key, beers }) => {
  const beer = beers[key]

  return (
    <div>
      <Card
        id='image'
        style={{ width: 520 }}
        title={beer.titre}
        bordered={false}
        cover={<img alt='example' src={beer.image} height='250' />}
      />
      <output>Brasserie : {beer.brasserie}</output>
      <br />
      <output>Houblons : {beer.houblons}</output>
      <br />
      <output>Où la trouver : {beer.shop}</output>
    </div>
  )
}

export default FicheBeer
