import React, { Component } from 'react'
import {
    Form,
    Button
  } from 'antd'
  import { Input } from 'antd'

const { TextArea } = Input;
  

class AjouterFilms extends Component {
    state = {
        title: '',
        plateform: '',
        url: '',
        descriptif:''
    }

    handleChange = event => {
        const { name, value } = event.target
        this.setState({ [name]: value })
      }
    
      handleSubmit = e => {
        e.preventDefault()
        const films = { ...this.state }
        this.props.addFilms(films)
        // Reset
        Object.keys(films).forEach(item => {
        films[item] = ''
        })
        this.setState({ ...films })
      }

  render () {
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    }
    return (
      <div className='App'>
        <Form {...formItemLayout} >
        <Input placeholder={this.props.title} name='title' maxLength='50' value={this.state.title} onChange={this.handleChange} required/>
        <br />
        <Input placeholder={this.props.plateform} name='plateform' maxLength='100' value={this.state.plateform} onChange={this.handleChange} />
        <br />
        <Input placeholder={this.props.url} name='url' maxLength='100' value={this.state.url} onChange={this.handleChange} />
        <br />
        <TextArea rows={3} placeholder={this.props.descriptif} name='descriptif' value={this.state.descriptif} onChange={this.handleChange} />
        <br /> 
        <Button type="primary" htmlType="submit" onClick={this.handleSubmit}>
          Enregistrer
        </Button>
        </Form>
      </div>
    )
  }
}

export default AjouterFilms
