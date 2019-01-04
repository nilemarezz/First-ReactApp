import React, { Component } from 'react';


class Header extends Component {

    constructor(props){
        super(props);
        this.state = {date : new Date()}
        setInterval(() => this.tick(),1000)
    }
    
    tick(){
        this.setState({date : new Date()})
    }

    render() {
        return (
            <div >
                <nav className="navbar navbar-expand-md bg-dark navbar-dark">
                    
                    <p className="navbar-brand" href="#"> <img style={{width:'50px'}} src='/images/logo/logo.png' alt='Logo'/>เฮลตี้ คาเฟ่ </p>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <p className="nav-link" >Link</p>
                            </li>
                            <li className="nav-item">
                                <p className="nav-link" href="#">Link</p>
                            </li>
                            <li className="nav-item">
                                <p className="nav-link" href="#">Link</p>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    } 


}

export default Header;
