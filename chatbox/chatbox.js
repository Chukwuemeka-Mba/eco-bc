import React from 'react'
import './signup.css';
 export default function signup(){
     return( <>

     <div class="container">
             <div class="screen">
                 <div class="screen__content">
                 
                 <div class="chat-head">
             <h2>Chat Box</h2>
            
           </div>
           <div class="bottom-bar">
           <div class="chat">
             <input type="text" placeholder="Type a message..." />
             <button type="submit"><i class="fas fa-paper-plane"></i></button>
           </div>
         </div>
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