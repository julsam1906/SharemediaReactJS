import React, { Component } from 'react'
import {
    Form,
    Button
  } from 'antd'
  import { Input } from 'antd'

const { TextArea } = Input;
  

class AjouterBieres extends Component {
    state = {
        titre: '',
        image: '',
        houblons: '',
        descriptif: '',
        brasserie: '',
        shop:''
    }

    handleChange = event => {
        const { name, value } = event.target
        this.setState({ [name]: value })
      }
    
      handleSubmit = e => {
        e.preventDefault()
        const beer = { ...this.state }
        this.props.addBeer(beer)
        // Reset
        Object.keys(beer).forEach(item => {
        beer[item] = ''
        })
        this.setState({ ...beer })
      }

  render () {
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    }
    return (
      <div className='App'>
        <Form {...formItemLayout} >
        <Input placeholder={this.props.produitName} name='titre' maxLength='30' value={this.state.titre} onChange={this.handleChange} />
        <br />
        <Input placeholder={this.props.brasserie} name='brasserie' maxLength='100' value={this.state.brasserie} onChange={this.handleChange} />
        <br />
        <Input placeholder={this.props.houblons} name='houblons' maxLength='100' value={this.state.houblons} onChange={this.handleChange} />
        <br />
        <Input placeholder={this.props.shop} name='shop' maxLength='100' value={this.state.shop} onChange={this.handleChange} />
        <br />
        <Input placeholder={this.props.image} name='image' maxLength='100' value={this.state.image} onChange={this.handleChange} />
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

export default AjouterBieres
