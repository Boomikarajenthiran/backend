import { Component } from "react";


class Header extends Component{
    render(){

// const styles ={

//     backgroundColor : "green ",
//     color: "white",
//     padding:"20px",
//     display: "flex",
//     // justify-content:"space-between",
//     align-items:"center"
    

// }
// className="Header" style={styles}

        return(
 
            <header className="Header">
               
            <h1 style={{margin:"0",
                fontSize: "30px",
                letterSpacing:"2px"
            }}
            >
            MYCREATION
            </h1>
             
             <nav>
                <a href="/">Home</a>

                 <a href="/">About</a>

                  <a href="/">Contact</a>
             </nav>
            </header>
        )
    }
}

export default Header 