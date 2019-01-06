import React from 'react'
import Header from '../../component/Header'
import Footer from '../../component/Footer'
import "./NotFound.css"
import {Link} from "react-router-dom"

const NotFound = () => {
    return (
        <div>
            <Header />
            <div id="notfound" style={{marginTop: '-120px'}}>
                <div className="notfound">
                    <div className="notfound-404">
                        <h1>Oops!</h1>
                        <h2>404 - The Page can't be found</h2>
                    </div>
                    <Link to="/">Go TO Homepage</Link>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default NotFound;



