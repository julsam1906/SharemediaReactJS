import React from 'react'
import Header from './components/Header'
import './App.css'
import { Layout } from 'antd'

const App = () => {
  return (
    <div className='App'>
      <Layout>
        <Header titre='ShareMedia with friends' />
      </Layout>
    </div>
  )
}

export default App
