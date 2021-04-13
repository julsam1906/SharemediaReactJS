import React, { Component } from 'react'

// Firebase
import base from '../base'

const beerApi = WrappedComponent => (
  class HOC extends Component {
    state = {
      beers: {},
      current: '',
      urlApi: 'http://localhost:8080/sharemedia'
    }

    getAll() {
      const urlBiere = this.state.urlApi+'/biere/all'
      this.ref = fetch(urlBiere, {
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

    componentDidUpdate(){
      this.getAll()
    }

    componentWillUnmount() {
      base.removeBinding(this.ref)
    }

    addBeer = beer => {
      const urlPost = this.state.urlApi + '/biere/save'
      const beers = { ...this.state.beers }
      console.log(JSON.stringify(beer))
      fetch(urlPost, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
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
      const urlPost = this.state.urlApi + '/biere/update'
      const beers = { ...this.state.beers }
      console.log(JSON.stringify(beer))
      fetch(urlPost, {
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
      fetch(this.state.urlApi + '/biere/delete?key=' + titre, {
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
          getAll={this.getAll}
          beers={this.state.beers}
          {...this.props}
        />
      )
    }
  }
)
export default beerApi
