import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import AnchorLink from 'react-anchor-link-smooth-scroll';
<<<<<<< Updated upstream
import './Landing.css';
=======
import Logo from './Logo';
>>>>>>> Stashed changes
class Landing extends React.Component{
	render(){
		return(
			<div style={{ backgroundImage: 'URL(/images/bgg23.png)', backgroundRepeat: "no-repeat", backgroundSize: "100%" }} >

            <div id="news" class="row"  >
              <div class="col-2 col-md-2 col-sm-2"></div>
              <div class="col-4 col-md-4 col-sm-4"> <AnchorLink class="hoverBtn" href="#two"><img src="/images/11.png" alt="logo 512" width="100%" /></AnchorLink></div>
              <div class="col-4 col-md-4 col-sm-4"> <AnchorLink class="hoverBtn" href="#one"><img src="/images/44.png" alt="logo 512" width="100%" /></AnchorLink></div>
              <div class="col-2 col-md-2 col-sm-2"></div>
            </div>

            <div class="row">
              <div class="col-4 col-md-4 col-sm-4" mar><AnchorLink class="hoverBtn" href="#six1"><img src="/images/22.png" alt="logo 512" width="100%" style={{ marginTop: "50px" }} /></AnchorLink></div>
              <div class="col-4 col-md-4 col-sm-4"><img src="/images/Logopng.png" alt="logo 512" width="100%" /></div>
              <div class="col-4 col-md-4 col-sm-4" ><AnchorLink class="hoverBtn" href="#one"><img src="/images/555.png" alt="logo 512" width="100%" style={{ marginTop: "50px" }} /></AnchorLink></div>
            </div>

            <div class="row">
              <div class="col-2 col-md-2 col-sm-2"></div>
              <div class="col-4 col-md-4 col-sm-4"><img src="/images/33.png" alt="logo 512" width="100%" /></div>
              <div class="col-4 col-md-4 col-sm-4"><img src="/images/66.png" alt="logo 512" width="100%" /></div>
              <div class="col-2 col-md-2 col-sm-2"></div>
            </div>
            


            <br />
            <br />
           

            {/* แถวสอง */}
            <div   style={{ backgroundImage: 'URL(/images/body.png)', backgroundRepeat: "no-repeat", backgroundSize: "100%" }} >
              <br/>
              <br />
            <br />
            <br />
            <br />
            <br id="two" />
            <br />
              <div  class="row" style={{marginLeft:"10%"}}>

                <div class="col-2 col-md-2 col-sm-2"><img src="/images/2.1.1.png" alt="logo 512" width="90%"  style={{marginLeft:"50%"}}/></div>
                <div class="col-4 col-md-4 col-sm-4"><img src="/images/2.3.png" alt="logo 512" width="60%" /></div>
                <div class="col-4 col-md-4 col-sm-4"><img src="/images/2.4.png" alt="logo 512" width="60%" /></div>
                <div class="col-2 col-md-2 col-sm-2"><img src="/images/2.2.2.png" alt="logo 512" width="45%" style={{marginLeft:"-120%"}} /></div>
              </div>

              <div class="row" style={{marginLeft:"10%"}}>
                <div class="col-1 col-md-1 col-sm-1"><img src="/images/2.3.3.png" alt="logo 512" width="300%"  style={{marginLeft:"-100%"}}/></div>
                <div class="col-4 col-md-4 col-sm-4"><img src="/images/2.7.png" alt="logo 512" width="60%" /></div>
                <div class="col-2 col-md-2 col-sm-2"></div>
                <div class="col-4 col-md-4 col-sm-4"><img src="/images/2.2.png" alt="logo 512" width="60%" /></div>
                <div class="col-1 col-md-1 col-sm-1"><img src="/images/2.4.4.png" alt="logo 512" width="140%"  style={{marginLeft:"-250%"}}/></div>
              </div>
              <br />
            <br />
              <div class="row" style={{marginLeft:"5%"}} >
              
              <div class="col-2 col-md-2 col-sm-2"><img src="/images/2.5.5.png" alt="logo 512" width="180%"  style={{marginLeft:"50%" ,marginTop:"10%"}}/></div>
                <div class="col-4 col-md-4 col-sm-4"><img src="/images/2.8.png" alt="logo 512" width="60%" style={{marginTop:"10%"}}/></div>
                <div class="col-1 col-md-1 col-sm-1"></div>
               
                <div class="col-4 col-md-4 col-sm-4"><img src="/images/2.6.png" alt="logo 512" width="60%" /></div>
                <div class="col-1 col-md-1 col-sm-1"><img src="/images/2.6.6.png" alt="logo 512" width="390%"  style={{marginLeft:"-350%"}}/></div>
              </div> 
              
            <br />
            <br />
              <div class="row" style={{marginLeft:"10%"}}>

                <div class="col-2 col-md-2 col-sm-2"></div>
                <div class="col-4 col-md-4 col-sm-4"></div>
                <div class="col-4 col-md-4 col-sm-4"><img src="/images/2.5.png" alt="logo 512" width="60%"style={{marginTop:"-20%"}} /></div>
                <div class="col-2 col-md-2 col-sm-2"><img src="/images/2.7.7.png" alt="logo 512" width="100%"  style={{marginLeft:"-100%"}}/></div>
              </div>
<<<<<<< Updated upstream
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            </div>
            <div >
              <div class="row" style={{ backgroundImage: 'URL(/images/bg2.png)', backgroundRepeat: "no-repeat", backgroundSize: "100%" }} >
                <div class="col-1 col-md-1 col-sm-1" ></div>
                <div class="col-10 col-md-10 col-sm-10" id="one" >
=======
              <Logo />
              
         
         
                
            </div>








            {/* แถวสอง */}
            <div id="one">
              <div class="row" style={{ backgroundImage: 'URL(/images/bg2.png)', backgroundRepeat: "no-repeat", backgroundSize: "100%" }} >
                <div class="col-1 col-md-1 col-sm-1" ></div>

                {/* style={{backgroundImage: 'URL(/images/bggg.png)' ,backgroundSize:"cover",backgroundPosition:"center" }} */}
                <div class="col-10 col-md-10 col-sm-10"  >
>>>>>>> Stashed changes
                  <Carousel >
                    <Carousel.Item  >
                      <center >
                        <img src="/images/fishhh.png" alt="logo 512" width="40%" style={{ marginTop: "38%" }} />
                        <p style={{ color: "black", fontSize: "50px", marginTop: "-15px" }}>fish</p>
                      </center>
                      <Carousel.Caption style={{ paddingTop: "100px" }}></Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item >
                      <center>
                        <img src="/images/seal.png" alt="logo 512" width="40%" style={{ marginTop: "38%" }} />

                        <p style={{ color: "black", fontSize: "50px", marginTop: "-15px" }}>Walnut</p>
                      </center>
<<<<<<< Updated upstream
                      <Carousel.Caption></Carousel.Caption>
=======
                      <Carousel.Caption >

                      </Carousel.Caption>
>>>>>>> Stashed changes
                    </Carousel.Item>

                    <Carousel.Item >
                      <center>
                        <img src="/images/walnut.png" alt="logo 512" width="40%" style={{ marginTop: "38%" }} />
                        <p style={{ color: "black", fontSize: "50px", marginTop: "-15px" }}>Walrus</p>
                      </center>
                      <Carousel.Caption></Carousel.Caption>
                    </Carousel.Item>

                  </Carousel>
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                </div>
                <div class="col-1 col-md-1 col-sm-1"></div>

              </div>

            </div>
            
          </div>
		);
	}
}


export default Landing;