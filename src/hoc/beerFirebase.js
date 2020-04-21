import React, { Component } from 'react'

// Firebase
import base from '../base'

const beerFirebase = WrappedComponent => (
  class HOC extends Component {
    state = {
      beers: {},
      current: '',
      urlApi: 'http://apisharemedia-env.eba-ikiwv3pt.ca-central-1.elasticbeanstalk.com/'
    }

    getAll() {
      const urlBiere = 'http://apisharemedia-env.eba-ikiwv3pt.ca-central-1.elasticbeanstalk.com/sharemedia/allBieres'
      this.ref = fetch(urlBiere, {
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
              beers: result
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

    addBeer = beer => {
      const urlPost = this.state.urlApi + 'sharemedia/saveBiere'
      const beers = { ...this.state.beers }
      console.log(JSON.stringify(beer))
      fetch(urlPost, {
        mode: 'no-cors',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf8',
          'Accept': 'application/json'
        },
        body: JSON.stringify(beer)
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
      this.setState({ beers })
      this.getAll()
    }

    updateBiere = beer => {
      const urlPost = this.state.urlApi + 'sharemedia/updateBiere'
      const beers = { ...this.state.beers }
      console.log(JSON.stringify(beer))
      fetch(urlPost, {
        mode: 'no-cors',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf8',
          'Accept': 'application/json'
        },
        body: JSON.stringify(beer)
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
      this.setState({ beers })
      this.getAll()
    }

    deleteBiere = titre => {
      fetch(this.state.urlApi + 'sharemedia/deleteBiere?titre=' + titre, {
        method: 'DELETE',
      })
        .then(res => res.text()) // or res.json()
        .then(res => console.log(res))
      this.getAll()
    }

    render() {
      return (
        <WrappedComponent
          addBeer={this.addBeer}
          updateBiere={this.updateBiere}
          deleteBiere={this.deleteBiere}
          beers={this.state.beers}
          {...this.props}
        />
      )
    }
  }
)
export default beerFirebase
