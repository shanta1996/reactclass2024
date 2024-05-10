import React from 'react'
// import Card from '../components/Card'
import { Helmet } from 'react-helmet'
import IncreamentDecrement from '../components/IncreamentDecrement'
import Mytextform from '../components/Mytextform'
import DataFetch from '../components/DataFetch'
import CardContainer from '../components/CardContainer'
import ComD from '../context/ComD'
import ComA from '../context/ComA'
import Show from '../context/Show'
import Memo from '../hooks/Memo'
import ParentCom from '../hooks/ParentCom'
// import LoadMore from '../components/LoadMore'

const HomePage = () => {
  return (
    <>
    <Helmet>
      <title>Ecommerce</title>
    </Helmet>
    {/* <Carousel/> */}
    {/* <ComA/> */}
    <Show/>
    <Memo/>
    <ParentCom/>

    <CardContainer/>
    <IncreamentDecrement/>
    <DataFetch/>
    {/* <LoadMore/> */}

    <div className="container">
      <h1>Enter here to analyze below</h1>
    <Mytextform/>
    </div>
    </>

  )
}

export default HomePage