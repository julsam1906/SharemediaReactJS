import React, { Component } from 'react'

// Firebase
import base from '../base'

const serieFirebase = WrappedComponent => (
  class HOC extends Component {
    state = {
      series: {},
      current: '',
      urlApi: 'http://apisharemedia-env.eba-ikiwv3pt.ca-central-1.elasticbeanstalk.com/'
    }

    getAll() {
      const urlSerie = 'http://apisharemedia-env.eba-ikiwv3pt.ca-central-1.elasticbeanstalk.com/sharemedia/allSeries'
      this.ref = fetch(urlSerie, {
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

    componentWillUnmount() {
      base.removeBinding(this.ref)
    }

    addSerie = serie => {
      const urlPost = this.state.urlApi + 'sharemedia/saveSerie'
      const series = { ...this.state.series }
      console.log(JSON.stringify(serie))
      fetch(urlPost, {
        mode: 'no-cors',
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

    updateSerie = serie => {
      const urlPost = this.state.urlApi + 'sharemedia/updateSerie'
      const series = { ...this.state.series }
      console.log(JSON.stringify(serie))
      fetch(urlPost, {
        mode: 'no-cors',
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
      fetch(this.state.urlApi + 'sharemedia/deleteSerie?titre=' + titre, {
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
          {...this.props}
        />
      )
    }
  }
)
export default serieFirebase
