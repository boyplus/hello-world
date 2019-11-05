 import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Landing from './Landing';
import Logo from './Logo';
import Content5 from './Content5';
import './App.css'


import { Button } from 'react-bootstrap';

import Carousel from 'react-bootstrap/Carousel'
export default class App extends React.Component {
  render() {
    const resizeMode =  'center';
    const text = 'This is some text inlaid in an <Image />';

    return (
      <div className="main" style={{backgroundColor:"#E5E5E5"}}>
        <div class="container-fluid">
          <Landing />
          <Logo />
          <Content5 />
          <br />
          <br/>
          <br/>
          <div  class="row" style={{backgroundImage:'URL(/images/BG3.png)', backgroundRepeat: "no-repeat", backgroundSize: "100%"}}>
            <div   class="col-2 col-md-2 col-sm-2"><img src="/images/Logopng.png" width="100%" style={{marginLeft:"10%",marginTop:"10%"}} />
            </div>
            <div id="six1" class="row" style={{ width: "100%"}}>
              <div class="col-12 col-md-12 col-sm-12"><img src="/images/All3.png" width="80%" style={{marginLeft:"10%",marginTop:"-10%"}} /></div>
            </div>

            <div class="row" style={{ width: "100%" }}>            
              <div class="col-2 col-md-2 col-sm-2"></div>
              <div class="col-1 col-md-1 col-sm-1"></div>
              <div class="col-1 col-md-1 col-sm-1"><img src="/images/11.png" alt="logo 512" width="150%" /></div>
              <div class="col-1 col-md-1 col-sm-1"><img src="/images/22.png" alt="logo 512" width="150%" /></div>
              <div class="col-1 col-md-1 col-sm-1"><img src="/images/33.png" alt="logo 512" width="150%" /></div>
              <div class="col-1 col-md-1 col-sm-1"><img src="/images/44.png" alt="logo 512" width="150%" /></div>
              <div class="col-1 col-md-1 col-sm-1"><img src="/images/555.png" alt="logo 512" width="150%" /></div>
              <div class="col-1 col-md-1 col-sm-1"><img src="/images/66.png" alt="logo 512" width="150%" /></div>
              <div class="col-1 col-md-1 col-sm-1"></div>
              <div class="col-2 col-md-2 col-sm-2"></div>
            </div>

          <div class="row" id="bottom" style={{ width: "100%" }}>
            <div class="col-2 col-md-2 col-sm-2" ></div>
            <div class="col-2 col-md-2 col-sm-2" ></div>
            <div class="col-2 col-md-2 col-sm-2" style={{ marginLeft: "3%" }}>
              <a href="https://www.facebook.com/SITHelloWorld/"><img src="/images/fb.png" alt="logo 512" width="200%" style={{ marginBottom: "-140%" }} /></a>
            </div>
          </div>
         <img src="/images/Vector.png" alt="logo 512" width="100%"  />
          </div>
        </div>
          {/* หน้าห้า */}
        </div>
    )

  }


}
