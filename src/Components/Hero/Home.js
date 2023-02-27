import React from 'react'
import './Home.css'
import hero from  "../pic/hero.jpg"
import skill1 from "../pic/skill1.jpg"
import skill2 from "../pic/skill2.jpg"
import skill3 from "../pic/skill3.jpg"
import { Typewriter } from 'react-simple-typewriter'
 
const Home = () => {
  return (
    <>
     <section className='hero' id='home' >
     <div className=' container f_flex top'>
        <div className='left top'>
            <h3>Welcome to my world</h3>
            <h1>Hi I am<span>John lee</span>
            </h1>
            <h2>
                a <span> 
    
             <Typewriter words={['Proffesional Coder', 'Developer']}/>
          </span>
            </h2>
            <p>Perfection is achieved not when there is nothing more to add, but rather when there is nothing more to take awa</p>
            <div className='hero_btn d_flex'>
                <div className='col_1'>
                    <h4>FIND WITH ME</h4>
                    <div className='button'>
                    <button className='btn_shadow'>
                        <i className='fab  fa-facebook-f'></i>
                        </button>
                        <button className='btn_shadow'>
                        <i className='fab  fa-instagram'></i>
                        </button>
                        <button className='btn_shadow'>
                        <i className='fab  fa-linkedin-in '></i>
                        </button>
                    </div>
                </div>
                <div className='col_1'>
               <h4>BEST SKIKILLS ON</h4>
               <button className='btn_shadow'> 
                <img src={skill1} alt=''/>
               </button>
               <button className='btn_shadow'> 
                <img src={skill2} alt=''/>
               </button>
               <button className='btn_shadow'> 
                <img src={skill3} alt=''/>
               </button>
                </div>
            </div>
        </div>
            <div className='right'>
            <div className='right_img'>
            <img src={hero} alt='' class='right_img'/>
            </div>      
        </div>
        </div>        
     </section>
    </>
  )
}

export default Home
