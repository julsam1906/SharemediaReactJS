import React, { Component } from 'react'
import {
    Form,
    Button
  } from 'antd'
  import { Input } from 'antd'

const { TextArea } = Input;
  

class Ajouter extends Component {
    state = {
        titre: '',
        image: '',
        ingredients: '',
        recette: '',
        astuce: ''
    }

    handleChange = event => {
        const { name, value } = event.target
        this.setState({ [name]: value })
      }
    
      handleSubmit = e => {
        e.preventDefault()
        const zero = { ...this.state }
        this.props.ajouterZero(zero)
        // Reset
        Object.keys(zero).forEach(item => {
        zero[item] = ''
        })
        this.setState({ ...zero })
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
        <Input placeholder={this.props.imageLink} name='image' maxLength='100' value={this.state.image} onChange={this.handleChange} />
        <br />  
        <TextArea rows={3} placeholder={this.props.ingredientsListe} name='ingredients' value={this.state.ingredients} onChange={this.handleChange} />
        <br />
        <TextArea rows={3} placeholder={this.props.recetteDetail} name='recette' value={this.state.recette} onChange={this.handleChange} />
        <br />
        <TextArea rows={3} placeholder={this.props.astuce} name='astuce' value={this.state.astuce} onChange={this.handleChange} />  
        <br />
        <Button type="primary" htmlType="submit" onClick={this.handleSubmit}>
          Enregistrer
        </Button>
        </Form>
      </div>
    )
  }
}

export default Ajouter
