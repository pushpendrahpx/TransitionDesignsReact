import React, { Component } from 'react'
import './Navbar.css';
import { Link } from 'react-router-dom';
class Navbar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            toggle:false
        }
    }

    render() {
            let navbarContent;

            if(this.state.toggle === true){
                
                navbarContent = <div className='Main-Navbar-Inside-Content'>
                    <div className='Navbar-item click' onClick={()=>{this.state.toggle === false ? this.setState({toggle:true}):this.setState({toggle:false})}} >
                            
                        </div>
                </div>;
            }else{
                navbarContent = <span></span>;
            }


        return (
            <div className='Main-Navbar'>
                {navbarContent}
                <div className='Main-Navbar-Title'>{this.props.title}</div>

                

                <div className='Navbar-content'>
                    <div className='Navbar-Outside-content'>
                        <Link to='/login'><div className='Navbar-item click'>
                            Home
                        </div></Link>
                        <div className='Navbar-item click'>
                            Accounts
                        </div>
                        <div className='Navbar-item click'>
                            Settings
                        </div>
                        <div className='Navbar-item click' onClick={()=>{this.state.toggle === false ? this.setState({toggle:true}):this.setState({toggle:false})}} >
                             Icon 
                        </div>
                    </div>
                </div>

                
            </div>
        )
    }
}

export default Navbar;