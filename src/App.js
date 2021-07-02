import React from 'react';
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div>

        <div className="navBar">
          <ul id ="navList">
            <li ><a className="firstElement" href="#">Layout 3</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>   

        <div className="middleSpace">
          <div className="firstColumn">
            <h1 style={{marginBottom:"1%"}}>Blog Post Title</h1>
            <h2 style={{marginTop:"0%"}}>by <a style={{textDecoration:"none"}} href="#">Test</a></h2>
            <hr style={{width:"100%",border:" solid gray",borderWidth:"0.1px"}}></hr>
            <span style={{margin:"2% 0% 2% 0%"}}>Posted on August 24, 2013 at 9:00 PM</span>
            <hr style={{width:"100%",border:" solid gray",borderWidth:"0.1px"}}></hr>
            <div className="colorBox">
              <span style={{fontSize:"70px",color:"#969696"}}>900X300</span>
            </div>
            <hr style={{marginTop:"3%",width:"100%",border:" solid gray",borderWidth:"0.1px"}}></hr>
            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h3>
            <span className="loremText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</span>
            <span className="loremText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</span>
            <span className="loremText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</span>
            <span className="loremText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</span>
            <hr style={{marginTop:"3%",width:"100%",border:" solid gray",borderWidth:"0.1px"}}></hr>
            <p className="copyright"> Copyright &copy; Your Website 2014</p>
          </div>

          <div className="secondColumn">
            
            <div className="blogSearch">
              <span>Blog Search</span>
              <input type="text" style={{width:"60%",height:"22px"}}></input>
              <button></button>
            </div>

            <div className="blogCategories">
              <span>Blog Categories</span>
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
              <span>Side Widget Well</span>
              <div>
                <p>Lorem ipsum dolor sit amet, consectetur
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