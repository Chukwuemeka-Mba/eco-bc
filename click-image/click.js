import React from 'react'
import './click.css';
 export default function click(){
     return(   <>

        <div class="container">
                <div class="screen">
                    <div class="screen__content">
                    
                    <img src={plastic} className="App-logo" alt="logo" />
                    <br></br>
                    <button >Click</button>
                    <br></br>
                    <h1>
                      Plastic Bottles
                    </h1>
                    <p>
                      Reusable<br></br>
                      Plastic bottles are typically used to store liquids such as water, soft drinks, motor oil, cooking oil, medicine, shampoo, milk, and ink. The size ranges from very small bottles to large carboys. Consumer blow molded containers often have integral handles or are shaped to facilitate grasping.
                    </p>
                    </div>
                    <div class="screen__background">
                        <span class="screen__background__shape screen__background__shape4"></span>
                        <span class="screen__background__shape screen__background__shape3"></span>		
                        <span class="screen__background__shape screen__background__shape2"></span>
                        <span class="screen__background__shape screen__background__shape1"></span>
                    </div>		
                </div>
            </div>
          </>
        
          );
          
        }
        