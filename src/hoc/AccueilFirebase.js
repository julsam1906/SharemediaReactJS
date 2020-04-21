import React, { Component } from 'react'

const AccueilFirebase = WrappedComponent => (
  class HOC extends Component {
    state = {
      pseudo: this.props.match.params.pseudo,
      current: '',
      zeros: {},
      beers: {},
      films: {},
      series: {},
      MAJ: false
    }

    getAll() {
      const urlFilm = 'http://apisharemedia-env.eba-ikiwv3pt.ca-central-1.elasticbeanstalk.com/sharemedia/allFilms'
      const urlSerie = 'http://apisharemedia-env.eba-ikiwv3pt.ca-central-1.elasticbeanstalk.com/sharemedia/allSeries'
      const urlZero = 'http://apisharemedia-env.eba-ikiwv3pt.ca-central-1.elasticbeanstalk.com/sharemedia/allZeros'
      const urlBiere= 'http://apisharemedia-env.eba-ikiwv3pt.ca-central-1.elasticbeanstalk.com/sharemedia/allBieres'
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

      this.ref = fetch(urlFilm, {
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
              films: result
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


    render() {
      return (
        <WrappedComponent
          pseudo={this.state.pseudo}
          zeros={this.state.zeros}
          films={this.state.films}
          beers={this.state.beers}
          series={this.state.series}
          {...this.props}
        />
      )
    }
  }
)
export default AccueilFirebase
