import React, { Component } from "react";
import { Link } from "react-router-dom"
import './Header.css'

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    let navActive = false;
    let nav_btn = document.querySelector('#nav-btn');
    let nav = document.querySelector('#nav');
    nav_btn.addEventListener('click',function () {
        navActive = !navActive;
        if (navActive){
            nav.className ='active';
        }
        else{
            nav.className ='';
        }
    })
  }


  render() {
    return (
      <div>
        <nav id="nav">
          <div class="back-circle back-circle-1"></div>


          <ul>
            <li class="link link-1"><Link to="/">Home</Link></li>
            <li class="link link-2"><Link to="/product">Product</Link></li>
            <li class="link link-3"><Link to="/order">Orders</Link></li>
            <li class="link link-4"><Link to="/about">About</Link></li>
          </ul>
          <div class="back-circle back-circle-2"></div>
          <div class="back-circle back-circle-3"></div>
          <div class="nav-btn" id="nav-btn">
            <div class="nav-bars">
              <div class="bar bar-1"></div>
              <div class="bar bar-2"></div>
              <div class="bar bar-3"></div>
            </div>

          </div>

        </nav>
      </div>
    )
  }
}

export default Header;