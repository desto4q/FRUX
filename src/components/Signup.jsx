import React from 'react'
import { Link } from 'react-router-dom'

let options = [
    {
        name: "google",
        fnc: "",
        img: "https://cdn-icons-png.flaticon.com/512/300/300221.png",
    },
    {
        name: "google",
        fnc: "",
        img: "",
    },
    {
        name: "google",
        fnc: "",
        img: "",
    },
]

function Signup() {''
  return (
    <div className='signup'>
        <span className='signup_element'></span>
        <span className='signup_box'>
            <h2>Get Started</h2>
            <div className='account'>
                Already have an account
                {/* <Link>Signin</Link> */}
                <a href="">Sigin</a>
            </div>
            <form action="">
                <div className='header'>Sign up</div>
                <div>
                    <label htmlFor="">Email address</label>
                    <input type="text" name="" id="" placeholder='enter email here......'/>
                </div>
                <div>
                    <label htmlFor="">Password</label>
                    <input type="text" name="" id="" placeholder='enter password here....'/>
                </div>
                <span>
                    <input type="checkbox" placeholder='' />
                    <p>remember me</p>
                </span>
                <button className='button'>Sign up</button>
                <div className='line'>-------- or --------</div>
                <span className='signup_alt'>
                    {options.map(({fnc,img})=>{
                        return(
                            <div>
                                <img src={img} alt="" />
                            </div>
                        )
                    })}
                </span>
            </form>
        </span>
    </div>
  )
}

export default Signup