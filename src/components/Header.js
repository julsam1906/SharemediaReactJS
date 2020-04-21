import React from 'react'
import './Header.css'
import { Typography } from 'antd'

const { Title } = Typography

const Header = ({ titre }) => {
  return (
    <div>
      <Title>{titre}</Title>
    </div>
  )
}

export default Header
