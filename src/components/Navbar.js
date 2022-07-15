import React, { useContext } from 'react'
import { Navbar as NavbarBs, Container, Button } from 'react-bootstrap'
import SideBarContext from '../context/SideBarContext'

function Navbar() {

    const sideBarCtx = useContext(SideBarContext);

    return (
        <NavbarBs sticky='top' className='bg-white shadow-sm mb-3'>
            <Container>
                <div className='d-flex justify-content-center align-items-center'>
                    <h1>Task Manager</h1>
                </div>
                <Button onClick={sideBarCtx.openSideBar} variant='outline-primary' className='rounded-circle' style={{ height: "3rem", width: "3rem" }}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </Button>
            </Container>
        </NavbarBs>
    )
}

export default Navbar