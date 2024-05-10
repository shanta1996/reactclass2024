import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { DNA } from 'react-loader-spinner'
import Card from '../components/Card'
import { Helmet } from 'react-helmet'

const Products = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [limit,setLimit]=useState(8)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://fakestoreapi.com/products`)
                setProducts(response.data)
                setLoading(false)

            }
            catch (err) {
                console.log(err)
            }
        }
        setTimeout(() => {
            fetchData()
        }, 3000)
    }, [])

    const loadMore=()=>{
        setLimit(limit+5)
        // setProducts(limit.slice(0,limit+5))
    }
    return (
        <>

            {loading ? (
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
                    <DNA
                        visible={true}
                        height="200"
                        width="200"
                        ariaLabel="dna-loading"
                        wrapperStyle={{}}
                        wrapperClass="dna-wrapper"
                    />
                </div>
            ) : (
                <div className="container-fluid">
                    <div className="row row-cols-1 row-cols-md-4 g-4">
                        {products && products.slice(0, limit).map((items,index) => (
                            <Card data={items} key={index} />
                        ))}
                    </div>
                        <button onClick={loadMore} className="btn btn-dark">Load More Items</button>

                    
                </div>
            )}

        </>
    )
}

export default Products