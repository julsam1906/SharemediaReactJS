import { Card } from 'antd'
import React from 'react'

const Image = ({ src }) => {
  return (
    <Card style={{ width: 300 }}>
      <div>
        <img alt='example' width='100%' src={src} />
      </div>
    </Card>
  )
}

export default Image
