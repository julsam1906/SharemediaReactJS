import React, { Component } from 'react'
import {
    Form,
    Button
  } from 'antd'
  import { Input } from 'antd'

const { TextArea } = Input;
  

class AjouterSeries extends Component {
    state = {
        titre: '',
        plateforme: '',
        realisateur: '',
        lien: '',
        descriptif:''
    }

    handleChange = event => {
        const { name, value } = event.target
        this.setState({ [name]: value })
      }
    
      handleSubmit = e => {
        e.preventDefault()
        const serie = { ...this.state }
        this.props.addSerie(serie)
        // Reset
        Object.keys(serie).forEach(item => {
        serie[item] = ''
        })
        this.setState({ ...serie })
      }

  render () {
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    }
    return (
      <div className='App'>
        <Form {...formItemLayout} >
        <Input placeholder={this.props.titre} name='titre' maxLength='30' value={this.state.titre} onChange={this.handleChange} required/>
        <br />
        <Input placeholder={this.props.plateforme} name='plateforme' maxLength='100' value={this.state.plateforme} onChange={this.handleChange} />
        <br />
        <Input placeholder={this.props.lien} name='lien' maxLength='100' value={this.state.lien} onChange={this.handleChange} />
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

export default AjouterSeries
