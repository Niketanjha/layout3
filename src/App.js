import React from 'react';
import './App.css';
import NavBar from './Components/NavBar'
import TitleBar from './Components/titleBar';
import HorizontalLine from './Components/HorizontalLine';
import PostedWithClock from './Components/PostedWithClock';
import ColorBox from './Components/ColorBox';
import Texts from './Components/Texts';
import BlogSearchBox from './Components/BlogSearchBox';
import BlogCategories from './Components/BlogCategories';
import SideWidgetWall from './Components/SideWidgetWall';

class App extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div>
        <NavBar mainText="Layout 3" text1="About" text2="Services" text3="Contact"/>    
        <div className="middleSpace">
          <div className="firstColumn">
            <TitleBar title="Blog Post Title" by="Test"/>
            <HorizontalLine />
            <PostedWithClock text="Posted on August 24, 2013 at 9:00 PM"/>
            <HorizontalLine />
            <ColorBox height="35vh" width="100%" backgroundColor="#CCCCCC" text="900 x 300"/>
            <HorizontalLine marginTop="3%" />
            <Texts text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."/>
            <HorizontalLine marginTop="3%"/>
            <p className="copyright"> Copyright &copy; Your Website 2014</p>
          </div>

          <div className="secondColumn">
            <BlogSearchBox text="Blog Search"/> 
            <BlogCategories href="#" title="Blog Categories" text="Category Name"/>
            <SideWidgetWall title="Side Widget Well" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Inventore, perspiciatis adipisci accusams laudantium odit aliquam repellat tempore quos aspernatur vero."/>
          </div>
        </div>
      </div>
    );
  }
}

export default App; 