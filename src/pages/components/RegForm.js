import React, {Component} from "react";
import "./RegForm.css"
import "./check.php"


    
    const RegForm = () => {
        return (
        
            <div>
                <h1>Regform</h1>
                <form action="check.php" method="post">
                    <input type="text" className="formCon" name="login" id="login" placeholder="login"></input><br>
                    </br>
                    <input type="text" className="formCon" name="name" id="name" placeholder="name"></input><br>
                    </br>
                    <input type="text" className="formCon" name="password" id="password" placeholder="password"></input><br>
                    </br>
                    <button>Registration</button>
                </form>
            </div>
            
        )
}

export default RegForm