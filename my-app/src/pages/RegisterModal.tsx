import './RegisterModal.css'

export default function RegisterModal(){
    return(
        <header className="register-popup">
            <div>
                <input type="text" placeholder="Enter Username" name="uname" required />
                <input type='Email' placeholder='Enter Email' />
                <input type="password" placeholder="Enter Password" name="psw" required />
                <button type="submit">Register</button>
                {/* <input type="checkbox" checked name="remember"> Remember me </input> */}
            </div>

            <div className="container" >
            <button className="cancelbtn">Cancel</button>
            </div>
        </header>
    )
}