import React from 'react'
import { Layout } from 'antd'
import Header from './Header'
import MenuNav from './MenuNav'
import Prochain from './Prochain'
import NotFound from './NotFound'
import ZeroDechet from './ZeroDechet'
import '../App.css'
import AccueilFirebase from '../hoc/AccueilFirebase'
import Beer from './Beer'
import Series from './Series'
import Film from './Film'

const Accueil = (props) => {
  const url = window.location.href
  var vars = url.split('/')
  const current = vars[5]
  const key = vars[6]

  if (current === 'home' && key === undefined) {
    return (
      <div className='App'>
        <Layout>
          <Header titre='ShareMedia with friends' />
          <MenuNav name={props.match.params.pseudo} url='home' />
          <Prochain />
        </Layout>
      </div>
    )
  } else if (current === 'film' && (key === undefined || key === 'update')) {
    return (
      <div className='App'>
        <Layout>
          <Header titre='ShareMedia with friends' />
          <MenuNav name={props.match.params.pseudo} url='film' />
        </Layout>
        <Layout>
          <Film />
        </Layout>
      </div>
    )
  } else if (current === 'show' && key === undefined) {
    return (
      <div className='App'>
        <Layout>
          <Header titre='ShareMedia with friends' />
          <MenuNav name={props.match.params.pseudo} url='show' />
        </Layout>
        <Layout>
          <Series />
        </Layout>
      </div>
    )
  } else if (current === 'beer' && key === undefined) {
    return (
      <div className='App'>
        <Layout>
          <Header titre='ShareMedia with friends' />
          <MenuNav name={props.match.params.pseudo} url='beer' />
        </Layout>
        <Layout>
          <Beer />
        </Layout>
      </div>
    )
  } else if (current === 'zero') {
    return (
      <div className='App'>
        <Layout>
          <Header titre='ShareMedia with friends' />
          <MenuNav name={props.match.params.pseudo} url='zero' />
        </Layout>
        <Layout>
          <ZeroDechet key={key} recettes={props.zeros} />
        </Layout>
      </div>
    )
  }
  return (
    <div className='App'>
      <NotFound />
    </div>
  )
}

const WrappedComponent = AccueilFirebase(Accueil)

export default WrappedComponent
