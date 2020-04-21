import React from 'react'
import Header from './Header'
import Login from './Login'
import Caroussel from './Caroussel'
import './Connexion.css'
import { Layout } from 'antd'

const Connexion = () => {
  return (
    <div className='App'>
      <Layout>
        <Header titre='ShareMedia with friends' />
      </Layout>
      <Layout>
        <Caroussel />
      </Layout>
      <Layout>
        <Login />
      </Layout>
    </div>
  )
}

export default Connexion
