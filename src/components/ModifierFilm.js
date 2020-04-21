import React, { Component } from 'react'
import {
  Form,
  Button
} from 'antd'
import { Input } from 'antd'
import { Redirect } from 'react-router-dom'

const { TextArea } = Input;


class ModifierFilm extends Component {
  state = {
    title: '',
    plateform: '',
    url: '',
    descriptif: '',
    key: this.props.keyID,
    history: false
  }

  componentDidMount() {
    const film = this.props.films[this.props.keyID]
    this.setState({ title: film.title })
    this.setState({ plateform: film.plateform })
    this.setState({ url: film.url })
    this.setState({ descriptif: film.descriptif })
  }

  handleChange = event => {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }

  handleClick = () => {
    this.setState({ history: true })
  }

  handleSubmit = e => {
    e.preventDefault()
    const films = { ...this.state }
    this.props.updateFilm(films)
    this.setState({ ...films })
    this.setState({ history: true })
  }

  render() {
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    }
    const url = window.location.href
    var vars = url.split('/')
    const current = vars[5]
    const pseudo = vars[4]

    if (this.state.history) {
      return <Redirect push to={`/sharemedia/${pseudo}/${current}`} />
    }
    return (
      <div className='App'>
        <Form {...formItemLayout} >
          <Input name='title' maxLength='50' value={this.state.title} onChange={this.handleChange} required />
          <br />
          <Input name='plateform' maxLength='100' value={this.state.plateform} onChange={this.handleChange} />
          <br />
          <Input name='url' maxLength='100' value={this.state.url} onChange={this.handleChange} />
          <br />
          <TextArea rows={3} name='descriptif' value={this.state.descriptif} onChange={this.handleChange} />
          <br />
          <Button type="primary" htmlType="submit" onClick={this.handleSubmit}>
            Enregistrer
        </Button>
          <Button type="primary" onClick={this.handleClick}>
            Retour
        </Button>
        </Form>
      </div>
    )
  }
}

export default ModifierFilm
