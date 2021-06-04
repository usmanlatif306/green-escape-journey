import React from 'react'
import Navbar from './components/Navbar'
import {Row,Col,Container,Card,Accordion,Button } from 'react-bootstrap'

import './About.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

 import {faArrowRight } from '@fortawesome/free-solid-svg-icons'

const About = () => {
    return (
        <div>
           <Navbar/>


           
       
        <header class=" py-5 mb-5 c782">
            <div class="container h-100">
                <div class="row h-100 align-items-center">
                    <div class="col-lg-12">
                        <h1 class="display-4 text-white mt-5 mb-2 c780">About Gej</h1>
                        <p class="lead mb-5 text-white-50 c781">Jeg is a tour company thats provide refreshment in whole the pakistan .Come and join us. Our team have hiegh knowledege about tourism.you can contact us by our website .</p>
                    </div>
                </div>
            </div>
        </header>
    
        <div class="container">
            <div class="row">
                <div class="col-md-8 mb-5">
                    <h2  class="c780">What We Do</h2>
                    <hr />
                    <p class="c781">We are a leading online travel company in Pakistan providing a 'best in class' customer experience with the goal to be 'Pakistans's Travel Planner'. Through our website, www.yatra.com, our mobile applications and our other associated platforms,!</p>
                    <p class="c781">Jeg is a tour company thats provide refreshment in whole the pakistan .Come and join us. Our team have hiegh knowledege about tourism.you can contact us by our website ..</p>
                    <a class="btn c785 c782 btn-lg" href="/serve">Go to our Services »</a>
                </div>
                <div class="col-md-4 mb-5">
                    <h2 class="c780">Contact Us</h2>
                    <hr />
                    <address>
                        <strong class="c780">Our office Address</strong>
                        <br />
                        dtype goal street no 7
                        <br />
                        Madina town street no 5
                        <br />
                    </address>
                    <address>
                        <h4 title="Phone "class="c780">Phone</h4>
                        0303000263
                       
                        <h4 title="Email"  class="c780">E:mail</h4>
                        <a href="mailto:#">mianshahzaib101@gmail.com</a>
                    </address>
                </div>
            </div>
            <h2 class="text-center  c780">Our Team</h2>
            <br /> <br />
            <div class="row">
                <div class="col-md-6 mb-5">
                    <div class=" h-100">
                    <img class=" rounded-circle mx-auto d-block c786 " src="fav.jpg" alt="..." />
                        <div class="card-body">
                            <h4 class="card-title text-center c780">Muhammad Shahzaib</h4>
                            <p class="card-text" class="c781">He is backend developer with year 11 experience in zesoloution samnabad.Live in Faisalabad</p>
                        </div>
                       
                    </div>
                </div>
              
                <div class="col-md-6 mb-5">
                    <div class=" h-100">
                        <img class=" rounded-circle mx-auto d-block c786" src="hassan.jpg" alt="..." />
                        <div class="card-body">
                            <h4 class="card-title text-center c780">Muhammad Hassan</h4>
                            <p class="card-text" class="c781">He is frondend developer with year 5 experience in zesoloution samnabad.Live in Kamalia</p>
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>

        
        






        


        
      
        <footer class="py-5 bg-dark">
            <div class="container"><p class="m-0 text-center text-white">Copyright &copy; Your Website 2021</p></div>
        </footer>
       
        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js"></script>
      
        <script src="js/scripts.js"></script>
           {/* <div className="c201">
           <br></br>
<div className="c506">
           <Container class="m-auto" >
  <Row>
    <Col>
    <br></br><h2 className="cheading" style={{textAlign:"center"}}>Our Team</h2> <p className="ctext">Our team and text. Professional tours Aranger.  Fully Honest with our work. You can see our old tours.</p>
    <FontAwesomeIcon icon={faArrowRight }  style={{ fontSize:"50px" }}   color="lightgreen"/> 
    <div   ><img src="fav2.jpg" alt="" className="c203" /><br></br><h4 className="cheading"  style={{textAlign:"center"}}>Muhammd Hassan</h4>
    </div>
    </Col>
    <Col>
    <img src="fav.jpg" alt="" className="c202"/><br></br><br></br><h3 className="cheading"   style={{textAlign:"left"}}>CEO :: Mian Shahzaib</h3></Col>
  </Row>
  <br></br><br></br>
  <br></br>
</Container></div>


 <Container fluid  >
  <Row className="c205">
    <Col lg={3}  md={4} sm={6} xs={12} >  <h4 className="cheading"  style={{textAlign:"center"}}>About me </h4>  <p className="ctext">Jeg is a tour company thats provide refreshment in whole the pakistan .Come and join us. Our team have hiegh knowledege about tourism.you can contact us by our website .</p> <Accordion>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
        Read More
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body className="ctext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Card.Body>
    </Accordion.Collapse>
  </Card>
  
</Accordion> </Col>
    <Col lg={3} md={4} sm={6}  xs={12}>  <h4  className="cheading"  style={{textAlign:"center"}}>what we do </h4>  <p className="ctext">We are a leading online travel company in Pakistan providing a 'best in class' customer experience with the goal to be 'Pakistans's Travel Planner'. Through our website, www.yatra.com, our mobile applications and our other associated platforms,.</p> <Accordion>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
        Read More
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body className="ctext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Card.Body>
    </Accordion.Collapse>
  </Card>
  
</Accordion>   </Col>
    <Col lg={3} md={4} sm={6}  xs={12} > <h4 className="cheading"  style={{textAlign:"center"}}>How it work </h4>  <p className="ctext" >Travel Agent Sign Up |Become a Cab Vendor |Register Your Hotel |Register Your Homestay |Sell Holiday Packages |Sell Your Activities |List Your Bus Inventory |Advertise With Us</p> <Accordion>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
        Read More
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body className="ctext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Card.Body>
    </Accordion.Collapse>
  </Card>
  
</Accordion>   </Col>
    <Col lg={3} md={4} sm={6}  xs={12} >  <h4 className="cheading"  style={{textAlign:"center"}}>Contact us  </h4>  <p className="ctext" >For contact us you can go to our contact page here is a form you can fill it and then our team response to you as soon as possible</p> <Accordion>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
        Read More
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body className="ctext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Card.Body>
    </Accordion.Collapse>
  </Card>
  
</Accordion>  </Col>
    </Row>
  
</Container>
           </div>
            */}
        </div>
    )
}

export default About
