import { Upload, message, Button } from 'antd'
import { UploadOutlined } from '@ant-design/icons'
import React from 'react'
import '../App.css'

const UploadImage = () => {
  const props = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
      authorization: 'authorization-text'
    },
    onChange (info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList)
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`)
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`)
      }
    }
  }

  return (
    <div className='UploadImage'>
      <Upload {...props} accept='.jpeg'>
        <Button id='boutonUpload'>
          <UploadOutlined /> Click to Upload
        </Button>
      </Upload>
    </div>
  )
}
export default UploadImage
