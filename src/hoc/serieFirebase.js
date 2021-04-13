import React, { Component } from 'react'

// Firebase
import base from '../base'

const serieApi = WrappedComponent => (
  class HOC extends Component {
    state = {
      series: {},
      current: '',
      urlApi: 'http://localhost:8080/sharemedia'
    }

    getAll() {
      const urlSerie = this.state.urlApi+'/serie/all'
      this.ref = fetch(urlSerie, {
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
              series: result
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

    addSerie = serie => {
      const urlPost = this.state.urlApi + '/serie/save'
      const series = { ...this.state.series }
      console.log(JSON.stringify(serie))
      fetch(urlPost, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(serie)
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
      this.setState({ series })
      this.getAll()
    }

    updateSerie = serie => {
      const urlPost = this.state.urlApi + '/serie/update'
      const series = { ...this.state.series }
      console.log(JSON.stringify(serie))
      fetch(urlPost, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf8',
          'Accept': 'application/json'
        },
        body: JSON.stringify(serie)
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
      this.setState({ series })
      this.getAll()
    }

    deleteSerie = titre => {
      fetch(this.state.urlApi + '/serie/delete?key=' + titre, {
        method: 'DELETE',
      })
        .then(res => res.text()) // or res.json()
        .then(res => console.log(res))
      this.getAll()
    }

    render() {
      return (
        <WrappedComponent
          addSerie={this.addSerie}
          updateSerie={this.updateSerie}
          deleteSerie={this.deleteSerie}
          series={this.state.series}
          getAll={this.getAll}
          {...this.props}
        />
      )
    }
  }
)
export default serieApi
