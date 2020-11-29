import React, {useState} from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand, 
    Nav, 
    NavItem, 
    Button
} from 'reactstrap'; //these are the reactstrap imports (Navbar & NavbarBrand)

const Sitebar = (props) => { //component Sitebar is named to avoid a naming conflict with the Navbar.
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => { //in the toolbar we get a hamburger icon pop up. 
        let newIsOpen = !isOpen; //when you click on the burger the logout button appears to logout.
        setIsOpen(newIsOpen);
    }

    return ( //Navbar is the rendering single parent element which holds the child element (NavbarBrand)
        <Navbar color="faded" light expands="md"> 
            <NavbarBrand href="/">Workout Log</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <Button onClick={props.clickLogout}>Logout</Button>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    )
}

export default Sitebar;