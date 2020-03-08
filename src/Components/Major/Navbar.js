import React, { Component } from 'react'
import './Navbar.css';
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
                
                navbarContent = <div>On</div>;
            }else{
                navbarContent = <div>Off</div>;
            }
        return (
            <div className='Main-Navbar'>
                <div className='Main-Navbar-Title'>{this.props.title}</div>

                {navbarContent}

                <div className='Navbar-content'>
                    <div className='Navbar-Outside-content'>
                        <div className='Navbar-item click'>
                            Accounts
                        </div>
                        <div className='Navbar-item click'>
                            Accounts
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