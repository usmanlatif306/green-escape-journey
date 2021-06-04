import React from 'react'
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'
import { Grid } from '@material-ui/core'
import './Servicestyle.css'
import { useImage } from 'react-image'
function Service() {
    return (
        <div>
            {/* service page navbar start */}
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home">OUR-SERVICES</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <NavDropdown title="Resturants" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Convaince" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="shopping" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Hotels" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">More deets</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Dank memes
      </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

            <div  class="onediv"style={{ backgroundImage: "url(maintop.jpg)" }}></div><div class="bg-text">
 
  <h1 style={{fontSize:"200px",fontFamily:"Brush Script MT"}}>Our Services</h1>
  <p style={{fontFamily:"Brush Script MT",fontSize:"60px"}} >We Arrange Memorable tours fou you</p>
</div>

            {/* service page navbar start */}
            <br></br><br></br><br></br><br></br>
            {/* text */}
            <h1 style={{ color: "black", textAlign: 'center',fontFamily:"Helvetica",fontSize:"80px" }}>Hi Dear Clients!</h1>
            <br></br><br></br><br></br>
            <p  class="gridlogo" style={{  textAlign: 'center' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <br></br><br></br><br></br>
            {/* grid with logos */}
            <Grid item xs={12} container spacing={0} >
                <Grid item lg={3} sm={6} xs={12} ><img src="resturant.png" class="g1"></img><h2 class="logotext">Resturants</h2><p class="logotext"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p></Grid>
                <Grid item lg={3} sm={6} xs={12} ><img src="airplane.svg" class="g1" ></img><h2 class="logotext">Convaince</h2><p class="logotext"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p></Grid>
                <Grid item lg={3} sm={6} xs={12} ><img src="shoping.png" class="g1" ></img><h2 class="logotext">Shoping</h2><p class="logotext"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>  </Grid>
                <Grid item lg={3} sm={6} xs={12}><img src="hotel.png"  class="g1"></img><h2 class="logotext">Hotels</h2><p class="logotext"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p></Grid>
            </Grid>
            <br></br><br></br>
            
            <div class="lastdiv"  style={{ backgroundImage: "url(last.jpg)" }}><h1 style={{textAlign:"center",paddingTop:"100px"}}>Mortage one of the no one of the class </h1>
            <br></br><br></br>
            <div style={{backgroundColor:"white" , backgroundopacity:"0%"}}>
            <Grid  xs={12} spacing={-50}   container   >
                <Grid item lg={3} sm={6} xs={12}   style={{padding:"5px" }}><img src="sample.jpg" class="g1"></img><p class="logotext"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p></Grid><br></br>
                <Grid item lg={3} sm={6} xs={12} style={{padding:"5px" }}><img src="sample2.jpg" class="g1" ></img><p class="logotext"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p></Grid><br></br>
                <Grid item lg={3} sm={6} xs={12} style={{ padding:"5px" }}><img src="sample3.jpg" class="g1" ></img><p class="logotext"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>  </Grid>
                <Grid item lg={3} sm={6} xs={12}style={{ padding:"5px" }}><img src="sample4.jpg"  class="g1"></img><p class="logotext"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p></Grid>
            </Grid>
            </div>
            
            </div>
        </div>
    )
}
export default Service;