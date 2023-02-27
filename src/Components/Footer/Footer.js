import React from "react"
import "./Footer.css";

const Footer = () => {
  return (
    <>
             
       <footer>    
         <div className='conatiner text-center top'> 
           {/* <div className='img'>
             <img src={ } alt='' /> 
           </div>   */}
           <div className='icon'>
                    <button className='social  '>
                        <i className='fab  fa-facebook-f'></i>
                        </button>
                        <button className='social '>
                        <i className='fab  fa-instagram'><a href="https://www.instagram.com" >instagram</a></i>
                        </button>
                        <button className='social '>
                        <i className='fab  fa-linkedin-in '></i>
                        </button> 
                        </div> 
                        <p>© 2021. All rights reserved by GorkCoder-Themes.</p>                                 
                </div>
        </footer>     
    </>
  )
}

export default Footer