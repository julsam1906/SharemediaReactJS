import React, { Component } from 'react'
import { Button } from 'antd'
import { LoginOutlined } from '@ant-design/icons'
import { Redirect } from 'react-router-dom'

class Login extends Component {
  state = {
    pseudo: '',
    goToApp: false
  }

  handleChange = event => {
    const pseudo = event.target.value
    this.setState({ pseudo })
  }

  goToApp = event => {
    event.preventDefault()
    this.setState({ goToApp: true })
  }

  render () {

    if (this.state.goToApp) {
      return <Redirect push to={`/sharemedia/${this.state.pseudo}/home`} />
    }

    return (
    <div>
      <br />
      <input
        type='text'
        placeholder='Identifiant'
        value={this.state.pseudo}
        onChange={this.handleChange}
        pattern='[A-Za-z-]{1,}'
        required
      />
      <br />
      <br />
      <Button type='primary' onClick={this.goToApp} shape='round' icon={<LoginOutlined />} size='large'>
      Login
      </Button>
    </div>
    )
  }
}

export default Login
