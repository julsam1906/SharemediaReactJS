import React, { Component } from 'react'

// Firebase
import base from '../base'

const filmApi = WrappedComponent => (
  class HOC extends Component {
    state = {
      films: {},
      current: '',
      MAJ: false,
      urlApi: 'http://localhost:8080/sharemedia'
    }

    getAll() {
      const urlFilm = this.state.urlApi+'/film/all'
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

    componentWillUnmount() {
      base.removeBinding(this.ref)
    }

    addFilms = film => {
      const urlPost = this.state.urlApi+'/film/save'
      const films = { ...this.state.films }
      console.log(JSON.stringify(film))
      fetch(urlPost, {
        mode: 'no-cors',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf8',
          'Accept': 'application/json'
        },
        body: JSON.stringify(film)
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
      this.setState({ films })
      this.getAll()
    }

    updateFilm = film => {
      const urlPost = this.state.urlApi+'/film/update'
      const films = { ...this.state.films }
      console.log(JSON.stringify(film))
      fetch(urlPost, {
        mode: 'no-cors',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf8',
          'Accept': 'application/json'
        },
        body: JSON.stringify(film)
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
      this.setState({ films })
      this.getAll()
    }

    deleteFilm = title => {
      fetch(this.state.urlApi+'/film/delete?key=' + title, {
        method: 'DELETE',
      })
        .then(res => res.text()) // or res.json()
        .then(res => console.log(res))
      this.getAll()
    }

    render() {
      return (
        <WrappedComponent
          addFilms={this.addFilms}
          updateFilm={this.updateFilm}
          deleteFilm={this.deleteFilm}
          films={this.state.films}
          MAJ={this.state.MAJ}
          {...this.props}
        />
      )
    }
  }
)
export default filmApi
