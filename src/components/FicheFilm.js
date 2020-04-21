import React from 'react'
import { Card, Col, Button } from 'antd'
import ReactPlayer from 'react-player'
import { useHistory } from 'react-router-dom'

const FicheFilm = ({ id: key, films, deleteFilm }) => {
  const film = films[key]
  const titre = film.title
  const lien = 'https://www.google.com/search?q=' + titre.replace(' ', '+') + ''
  const url = window.location.href
  var vars = url.split('/')
  const current = vars[5]
  const pseudo = vars[4]
  const history = useHistory()
  const youtube = film.url + '?showinfo=0&enablejsapi=1&origin=http://localhost:3000'
  const handleClick = () => {
    history.push(`/sharemedia/${pseudo}/${current}/update/${key}`)
  }
  const handleClick2 = () => {
    deleteFilm(film.title)
  }
  return (
    <div>
      <Col span={40}>
        <Card
          id='film'
          title={film.title}
          bordered={false}
        >
          <ReactPlayer
            url={youtube}
          />
          <a href={lien} target='_blank' rel='noopener noreferrer'>
            {film.title}
          </a>
          <br />
          <output hidden={film.plateform === ''}>
          Visible sur : {film.plateform}
          </output>
          <br />
          <output hidden={film.descriptif === ''}>
          Commentaires : {film.descriptif}
          </output>
          <br />
          <Button onClick={handleClick}>Modifier</Button>
          <Button onClick={handleClick2}>Supprimer</Button>
        </Card>
      </Col>
    </div>
  )
}

export default FicheFilm
