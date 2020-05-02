import React from 'react'
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'
import './Header.css'


class Header extends React.Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div>
                <Navbar bg='dark' variant='dark' fixed='top' className='navbar'>
                    <div className='container mwidth'>
                        <Navbar.Brand href='#home'><h3>DoubleC</h3></Navbar.Brand>
                        <Nav className='mr-auto'>
                            <Nav.Link href='#home'><h4>首頁</h4></Nav.Link>
                            <Nav.Link href='#features'><h4>牌組</h4></Nav.Link>
                            <Nav.Link href='#pricing'><h4>比賽</h4></Nav.Link>
                        </Nav>
                        <Form inline>
                            <FormControl type='text' placeholder='Search' className='mr-sm-2' />
                            <Button variant='outline-info'>Search</Button>
                        </Form>
                    </div>

                </Navbar>
            </div>
        )
    }
}

export default Header