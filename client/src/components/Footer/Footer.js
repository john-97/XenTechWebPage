import React, { Component } from 'react'
import './index.css'
import { NavLink } from 'react-router-dom'

export default class Footer extends Component {
  render() {
    return (
      <div id="footer">
        <div className="centering">
        <div className="main">
            {/* LINKS */}
            <div className="LinkDiv">
              <ul className="LinkUl">
                <li className="LinkFooter"><NavLink 
                  to='/1'
                  activeClassName="red">One</NavLink></li>
                <li className="LinkFooter"><NavLink 
                  to='/2'
                  activeClassName="red">Two</NavLink></li>
                <li className="LinkFooter"><NavLink 
                  to='/3'
                  activeClassName="red">Three</NavLink></li>
                <li className="LinkFooter"><NavLink 
                  to='/4'
                  activeClassName="red">Four</NavLink></li>
                <li className="LinkFooter"><NavLink 
                  to='/5'
                  activeClassName="red">Five</NavLink></li>
              </ul>
            </div>
            <div>
              copyright info
            </div>
          </div>
        </div>
      </div>
    )
  }
}
