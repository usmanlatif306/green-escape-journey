import React from 'react'
import "./AB.css";
import { Grid } from "@material-ui/core";
import {Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

export const Ab = () => {
    return (
        
        

       
        <div class="container" id="main">
            <div class="row">
              <div class="col-lg-3 col-sm-12">
               <div class="logo"><img src="airtel.png" alt="my name" class="pic"/></div>
              </div>
              <div   class="col-lg-5 col-sm-12 nab">

                  <ul class="navbar justify-content-center" class="alig">
                    <li class="nav-item">
                      <a class="nav-link active" aria-current="page" href="#">Active</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link " id="ltwo" l href="#">Link</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">Link</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#"  >Disabled</a>
                    </li>
                    
                  </ul>
                  

              
              </div>
              <div  class="col-lg-4 col-sm-12 btns mt-1 d-flex justify-content-center">
                <button type="button" class="btn btn-primary btn-sm me-4 ml-5 ">Small button</button>
                <button type="button " class="btn btn-secondary btn-sm ms-3 " id="button">Small button</button>
               
              </div>
            </div>
            </div>


  


      
   
  );
}

            
    
export default Ab;
