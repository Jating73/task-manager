import React, { useContext } from 'react'
import { Stack, Offcanvas } from 'react-bootstrap'
import SideBarContext from '../context/SideBarContext';
import { Link } from 'react-router-dom';

function Sidebar({ isOpen }) {

    const sideBarCtx = useContext(SideBarContext);

    return (
        <Offcanvas show={isOpen} onHide={sideBarCtx.closeSideBar} placement='end'>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Sidebar</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Stack gap={3}>
                    <Link to='/' className='nav-link' onClick={sideBarCtx.closeSideBar}>Home</Link>
                    <Link to='/create-task' className='nav-link' onClick={sideBarCtx.closeSideBar}>Create Task</Link>
                    <Link to='/tasks' className='nav-link' onClick={sideBarCtx.closeSideBar}>Tasks</Link>
                    <Link to='/users' className='nav-link' onClick={sideBarCtx.closeSideBar}>Users</Link>
                </Stack>
            </Offcanvas.Body>
        </Offcanvas>
    )
}

export default Sidebar
