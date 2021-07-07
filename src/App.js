import React from 'react';
import './App.css';
import NavBar from './Components/NavBar'

class App extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div>
        <NavBar mainText="Layout 3" text1="About" text2="Services"
                text3="Contact"/>
        {/* <div className="navBar">
          <ul id ="navList">
            <li ><a className="firstElement" href="#">Layout 3</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>    */}

        <div className="middleSpace">
          <div className="firstColumn">
            <h1 style={{fontFamily:"sans-serif",fontWeight:"normal" ,marginBottom:"1%",fontSize:"2.5em"}}>Blog Post Title</h1>
            <h2 style={{marginTop:"0%",fontFamily:"sans-serif",fontWeight:"normal"}}>by <a style={{textDecoration:"none"}} href="#">Test</a></h2>
            <hr style={{width:"100%",border:"solid #F0F0F0",borderWidth:"0.1px"}}></hr>
            <span style={{fontFamily:"sans-serif",fontSize:"1em",margin:"2% 0% 2% 0%"}}><i style={{paddingRight:"5px"}} class="fa fa-clock-o" aria-hidden="true"></i>Posted on August 24, 2013 at 9:00 PM</span>
            <hr style={{width:"100%",border:" solid #F0F0F0",borderWidth:"0.1px"}}></hr>
            <div className="colorBox">
              <span className="boxText" >900 x 300</span>
            </div>
            <hr style={{marginTop:"3%",width:"100%",border:" solid #F0F0F0",borderWidth:"0.1px"}}></hr>
            <h3 className="firstLorem">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi?</h3>
            <span className="loremText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</span>
            <span className="loremText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</span>
            <span className="loremText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</span>
            <span className="loremText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</span>
            <hr style={{marginTop:"3%",width:"100%",border:" solid #F0F0F0",borderWidth:"0.1px"}}></hr>
            <p className="copyright"> Copyright &copy; Your Website 2014</p>
          </div>

          <div className="secondColumn">
            
            <div className="blogSearch">
              <span style={{fontFamily:"sans-serif",fontSize:"1.2em",marginTop:"6%",
              marginLeft:"8%",marginBottom:"2%"}} >Blog Search</span>
              <div className="searchIcon">
                <input type="text" style={{width:"80%",height:"32px"}}></input>
                <button type="submit" className="searchButton"><i style={{}} class="fa fa-search fa-xs"></i></button>
              </div>
            </div>

            <div className="blogCategories">
              <span style={{fontSize:"1.3em",fontWeight:"500",marginLeft:"7%"}}>Blog Categories</span>
              <div className="blogCatDiv2">
                <div className="catColumn1">
                  <a style={{textDecoration:"none"}} href="">Category Name</a>
                  <a style={{textDecoration:"none"}} href="">Category Name</a>
                  <a style={{textDecoration:"none"}} href="">Category Name</a>
                  <a style={{textDecoration:"none"}} href="">Category Name</a>
                </div>
                <div className="catColumn2">
                  <a style={{textDecoration:"none"}} href="">Category Name</a>
                  <a style={{textDecoration:"none"}} href="">Category Name</a>
                  <a style={{textDecoration:"none"}} href="">Category Name</a>
                  <a style={{textDecoration:"none"}} href="">Category Name</a>
                </div>
              </div>
            </div>

            <div className="sideWidgetWall">
              <span style={{marginBottom:"0%",fontSize:"large",fontWeight:"500"}}>Side Widget Well</span>
              <div>
                <p style={{marginTop:"2%"}}>Lorem ipsum dolor sit amet, consectetur
                   adipiscing elit. Inventore, perspiciatis adipisci 
                   accusams laudantium odit aliquam repellat tempore 
                   quos aspernatur vero. 
                </p>
              </div>
            </div>
          
          </div>
        </div>
      </div>
    );
  }
}

export default App; 