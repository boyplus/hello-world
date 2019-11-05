import React from 'react';
import Home from './components/Home';
// import 'bootstrap/dist/css/bootstrap.min.css';

import { Button } from 'reactstrap';


export default class App extends React.Component {
  render() {
    const resizeMode = 'center';
    const text = 'This is some text inlaid in an <Image />';


    return (

      // <div style={{ backgroundImage: 'URL(/images/bg.png)' }}>
      <div style={{ backgroundColor: "#E5E5E5" }}>
         <Button color="primary">primary</Button>{' '}
        <div class="container">
          <br />
          <br />

          <div id="news" class="row">
            <div class="col-2 col-md-2"></div>
            <div class="col-2 col-md-2"><img src="/images/cir.png" alt="logo 512" width="150%" /></div>
            <div class="col-2 col-md-2"></div>
            <div class="col-2 col-md-2"></div>
            <div class="col-2 col-md-2"><img src="/images/cir.png" alt="logo 512" width="150%" /></div>
            <div class="col-2 col-md-2"></div>


          </div>

          <div class="row">

            <div class="col-2 col-md-2" mar>  <a href="#bottom"><img src="/images/cir.png" alt="logo 512" width="150%" style={{ marginTop: "50px" }} /></a></div>
            <div class="col-2 col-md-2" > </div>
            <div class="col-4 col-md-4"><img src="/images/Logopng.png" alt="logo 512" width="125%" /></div>

            <div class="col-2 col-md-2" > </div>
            <div class="col-2 col-md-2" >  <a href="https://translate.google.com"><img src="/images/cir.png" alt="logo 512" width="150%" style={{ marginTop: "50px" }} /></a></div>

          </div>


          <div class="row">
            <div class="col-2 col-md-2"></div>
            <div class="col-2 col-md-2"><img src="/images/cir.png" alt="logo 512" width="150%" /></div>
            <div class="col-2 col-md-2"></div>
            <div class="col-2 col-md-2"></div>
            <div class="col-2 col-md-2"><img src="/images/cir.png" alt="logo 512" width="150%" /></div>
            <div class="col-2 col-md-2"></div>


          </div>




          <div class="row" id="bottom" style={{ marginTop: "100%" }}>
            <div class="col-2 col-md-2" ></div>
            <div class="col-2 col-md-2" ></div>
            <div class="col-2 col-md-2" style={{ marginLeft: "3%" }}>
              <a href="https://www.facebook.com/SITHelloWorld/"><img src="/images/fb.png" alt="logo 512" width="200%" style={{ marginBottom: "-40%" }} /></a>
            </div>
            <div class="col-12 col-md-12" ><img src="/images/Vector.png" alt="logo 512" width="143%" style={{ marginLeft: "-24.5%" }} /></div>

          </div>



        </div>

      </div >
    )

  }


}
