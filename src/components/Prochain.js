import React from 'react'
import { Collapse } from 'antd'
import ListeProchainFilm from './ListeProchainFilm'
import ListeProchaineSerie from './ListeProchaineSerie'

const { Panel } = Collapse

function callback (key) {
  console.log(key)
}

const Prochain = () => {
  return (
    <div className='app'>
      <Collapse defaultActiveKey={['1']} onChange={callback}>
        <Panel header='Les films à venir' key='1'>
          <ListeProchainFilm />
        </Panel>
        <Panel header='Les séries à venir' key='2'>
          <ListeProchaineSerie />
        </Panel>
      </Collapse>
    </div>
  )
}

export default Prochain
