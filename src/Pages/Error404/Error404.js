import React, { Component } from 'react'
import './Error404.css';
import Navbar from '../../Components/Major/Navbar';

class Error404 extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div className='Error-Container'>
                <Navbar title='Askilly' />
                <div className='Error-title'>
                    Sorry We are not Here !!

                    <br />
                    <form>
                        <input className='Error-input' type='text' placeholder='Search Something new ...'/>
                       <br /> <button className='Error-btn'>Search</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Error404