import React, { Component } from 'react'
import { connect } from 'react-redux'
import './index.css'

class ServicesRecents extends Component {
  constructor(props){
    super(props);
    this.state={
      services:{
        one: props.store.services[0].image,
        two: props.store.services[1].image,
        three: props.store.services[2].image
      },
      recentWork: {
        one: props.store.recentWork[0].image,
        two: props.store.recentWork[1].image,
        three: props.store.recentWork[2].image
      }
    }
    this.services = this.services.bind(this)
  }
  componentDidMount(){
    console.log(this.props)
    // calls on the picture Randomiser function every 3 seconds
    setInterval(()=>{this.services("services")},10000)
    // calls on the picture Randomiser function every 3 seconds
    setInterval(()=>{this.services("recentWork")},15000)

  }
  // Changes the Pictures at random, Ensures that no 2 pictures are the same
  services(TYPE){
    let one = parseInt(Math.random()*this.props.store.services.length)
    let two = parseInt(Math.random()*this.props.store.services.length)
    let three = parseInt(Math.random()*this.props.store.services.length)
    let oneRW = parseInt(Math.random()*this.props.store.recentWork.length)
    let twoRW = parseInt(Math.random()*this.props.store.recentWork.length)
    let threeRW = parseInt(Math.random()*this.props.store.recentWork.length)
    
    if(TYPE === "services"){
      if(one !== two && three !== two && one !== three){
        this.setState(()=>{
          return {
            ...this.state,
            services:{
              one: this.props.store.services[one].image,
              two: this.props.store.services[two].image,
              three: this.props.store.services[three].image
            }
          }
        })
      }else{
        this.services("services");
      }
    }
    if(TYPE === "recentWork"){
      if(oneRW !== twoRW && threeRW !== twoRW && oneRW !== threeRW){
        this.setState(()=>{
          return {
            ...this.state,
            recentWork:{
              one: this.props.store.recentWork[oneRW].image,
              two: this.props.store.recentWork[twoRW].image,
              three: this.props.store.recentWork[threeRW].image
            }
          }
        })
      }else{
        this.services("recentWork");
      }
    }
  }

  render(){
    return (
      <div>
        <div className="centering">
          {/* SERVICES */}
          <div className="SR">
            <div className="SRDiv">
              <img className="SRImage" src={this.state.services.one} alt="..." />
            </div>
            <div className="SRDiv hidden">
              <img className="SRImage" src={this.state.services.two} alt="..." />
            </div>
            <div className="SRDiv hidden">
              <img className="SRImage" src={this.state.services.three} alt="..." />
            </div>
          </div>
          {/* RECENT WORK */}
          <div className="SR">
            <div className="SRDiv">
              <img className="SRImage" src={this.state.recentWork.one} alt="..." />
            </div>
            <div className="SRDiv hidden">
              <img className="SRImage" src={this.state.recentWork.two} alt="..." />
            </div>
            <div className="SRDiv hidden">
              <img className="SRImage" src={this.state.recentWork.three} alt="..." />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state)=> {
  return{
    store: state
  }
}

export default connect(mapStateToProps)(ServicesRecents);