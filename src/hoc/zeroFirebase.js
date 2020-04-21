import React, { Component } from 'react'

// Firebase
import base from '../base'

const zeroFirebase = WrappedComponent => (
  class HOC extends Component {
    state = {
      zeros: {},
      current: '',
      urlApi: 'http://apisharemedia-env.eba-ikiwv3pt.ca-central-1.elasticbeanstalk.com/'
    }

    getAll() {
      const urlZero = 'http://apisharemedia-env.eba-ikiwv3pt.ca-central-1.elasticbeanstalk.com/sharemedia/allZeros'
      this.ref = fetch(urlZero, {
        //mode: 'no-cors',
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Credentials": true
        }
      })
        .then(res =>
          res.json()
        )
        .then(
          (result) => {
            console.log('test: ' + result)
            this.setState({
              zeros: result
            });
          },
          (error) => {
            this.setState({
              error
            });
          }
        )
    }

    componentDidMount() {
      const url = window.location.href
      var vars = url.split('/')
      const current = vars[5]
      this.setState({ current })
      this.getAll()

    }

    componentWillUnmount() {
      base.removeBinding(this.ref)
    }

    addZero = zero => {
      const urlPost = this.state.urlApi + 'sharemedia/saveZero'
      const zeros = { ...this.state.zeros }
      console.log(JSON.stringify(zero))
      fetch(urlPost, {
        mode: 'no-cors',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf8',
          'Accept': 'application/json'
        },
        body: JSON.stringify(zero)
      })
        .then(
          (result) => {
            console.log('test: ' + result)
          },
          (error) => {
            this.setState({
              error
            });
          }
        )
      this.setState({ zeros })
      this.getAll()
    }

    updateZero = zero => {
      const urlPost = this.state.urlApi + 'sharemedia/updateZero'
      const zeros = { ...this.state.zeros }
      console.log(JSON.stringify(zero))
      fetch(urlPost, {
        mode: 'no-cors',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf8',
          'Accept': 'application/json'
        },
        body: JSON.stringify(zero)
      })
        .then(
          (result) => {
            console.log('test: ' + result)
          },
          (error) => {
            this.setState({
              error
            });
          }
        )
      this.setState({ zeros })
      this.getAll()
    }

    deleteZero = titre => {
      fetch(this.state.urlApi + 'sharemedia/deleteZero?titre=' + titre, {
        method: 'DELETE',
      })
        .then(res => res.text()) // or res.json()
        .then(res => console.log(res))
      this.getAll()
    }

    render() {
      return (
        <WrappedComponent
          addZero={this.addZero}
          updateZero={this.updateZero}
          deleteZero={this.deleteZero}
          zeros={this.state.zeros}
          {...this.props}
        />
      )
    }
  }
)
export default zeroFirebase
