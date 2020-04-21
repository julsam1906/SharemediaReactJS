import React, { useState } from 'react'
import { Menu, Layout } from 'antd'
import {
  DeleteOutlined,
  DesktopOutlined,
  VideoCameraOutlined,
  TrophyOutlined,
  HomeOutlined
} from '@ant-design/icons'
import { Redirect } from 'react-router-dom'

const MenuNav = (props) => {
  const [current, setCurrent] = useState(
    'home'
  )
  const handleClick = event => {
    setCurrent(event.key)
  }
  if (current === 'film' && props.url !== 'film') {
    return <Redirect push to={`/sharemedia/${props.name}/${current}`} />
  } else if (current === 'home' && props.url !== 'home') {
    return <Redirect push to={`/sharemedia/${props.name}/${current}`} />
  } else if (current === 'show' && props.url !== 'show') {
    return <Redirect push to={`/sharemedia/${props.name}/${current}`} />
  } else if (current === 'beer' && props.url !== 'beer') {
    return <Redirect push to={`/sharemedia/${props.name}/${current}`} />
  } else if (current === 'zero' && props.url !== 'zero') {
    return <Redirect push to={`/sharemedia/${props.name}/${current}`} />
  }
  return (
    <div>
      <Layout>
        <Menu onClick={handleClick} selectedKeys={[current]} mode='horizontal'>
          <Menu.Item key='home'>
            <HomeOutlined />
          Accueil
          </Menu.Item>
          <Menu.Item key='film'>
            <VideoCameraOutlined />
          Films
          </Menu.Item>
          <Menu.Item key='show'>
            <DesktopOutlined />
          Séries
          </Menu.Item>
          <Menu.Item key='beer'>
            <TrophyOutlined />
          Bières
          </Menu.Item>
          <Menu.Item key='zero'>
            <DeleteOutlined />
          Astuce zéro déchets
          </Menu.Item>
        </Menu>
      </Layout>
    </div>
  )
}

export default MenuNav
