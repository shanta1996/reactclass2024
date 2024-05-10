import React from 'react'
import Book from './Book'
import TestNav from './TestNav'
import { Helmet } from 'react-helmet'
const First = () => {
  return (
    <>
    <Helmet>
      <title>First page</title>
      
    </Helmet>

    <TestNav/>
    <p>This is a First component</p>
    <Book/>
    </>
  )
}

export default First