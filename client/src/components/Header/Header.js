import React, { Component } from 'react'
import './index.css'
import { NavLink } from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <div id="header">
        <div className="centering">
          <div className="main">
              {/* LOGO */}
            <div className="Logo">
              Logo
            </div>
            {/* LINKS */}
            <div className="LinkDiv">
              <ul className="LinkUl">
                <li className="Link"><NavLink 
                  to='/1'
                  activeClassName="red">One</NavLink></li>
                <li className="Link"><NavLink 
                  to='/2'
                  activeClassName="red">Two</NavLink></li>
                <li className="Link"><NavLink 
                  to='/3'
                  activeClassName="red">Three</NavLink></li>
                <li className="Link"><NavLink 
                  to='/4'
                  activeClassName="red">Four</NavLink></li>
                <li className="Link"><NavLink 
                  to='/5'
                  activeClassName="red">Five</NavLink></li>
              </ul>
            </div>
          </div>
          <div className="mainBottom">
            <div className="intro">
              <div className="mainIntro">
                Intro
              </div>
              <div className="subIntro">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti beatae,
              </div>
            </div>
            <div className="carousellDiv">
              <div className="bd-example">
                <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                  <ol className="carousel-indicators">
                    <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                  </ol>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLGczmcUM0wcSx7661oBGBXB_6JKGcZk5I5xChKDCPuiUEGPbH" className="d-block w-100 h80" alt="..." />
                      <div className="carousel-caption d-none d-md-block">
                        <h5>First slide label</h5>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQyJyjuhHLlO-E96XWgnbCammK8Bu2Jffmps_H7NRBjjDfjGBF" className="d-block w-100 h80" alt="..." />
                      <div className="carousel-caption d-none d-md-block">
                        <h5>Second slide label</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr_n5D_1XymTyeYMjzxXAJSWa4JwdBl7rzvaW9f2Kzaj0mG_b_" className="d-block w-100 h80" alt="..." />
                      <div className="carousel-caption d-none d-md-block">
                        <h5>Third slide label</h5>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                      </div>
                    </div>
                  </div>
                  <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                  </a>
                  <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Header
