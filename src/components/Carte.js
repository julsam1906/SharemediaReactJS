import React from 'react'
import { Card, Anchor, Typography } from 'antd'
import {
  CalendarOutlined
} from '@ant-design/icons'

const { Link } = Anchor
const { Text } = Typography
const { Meta } = Card

const Carte = ({ src, titre, description, date }) => {
  return (
    <div className='app'>
      <Card
        hoverable
        style={{ width: 180 }}
        cover={<img alt='example' src={src} height='250' />}
      >
        <Meta title={titre} />
        <Anchor>
          <Link href={description} title='Bande annonce' target='_blank' />
        </Anchor>
        <CalendarOutlined />
        <Text type='secondary'>{date}</Text>
      </Card>
    </div>
  )
}

export default Carte
