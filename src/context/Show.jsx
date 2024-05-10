import React from 'react'
import ComA from './ComA'
import GlobalValueProvider from './GlobalValue'
import DataCounter from '../hooks/DataCounter'
const Show = () => {
    return (
        <>
        <DataCounter/>
        <br />
            <GlobalValueProvider>
                <ComA />
            </GlobalValueProvider>
        </>
    )
}

export default Show