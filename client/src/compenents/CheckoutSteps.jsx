import React from 'react'
import { Nav, NavItem, NavLink } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
const CheckoutSteps = ({ step1, step2, step3, step4, }) => {
    return (
        <Nav className='justify-content-center mb-4'>
            <NavItem>
                {step1 ? (
                    <LinkContainer to={"/login"}>
                        <NavLink>sign in</NavLink>
                    </LinkContainer>
                ) : <NavLink disabled>
                    sign in
                </NavLink>
                }
            </NavItem>

            <NavItem>
                {step2 ? (
                    <LinkContainer to={"/shipping"}>
                        <NavLink>Shipping </NavLink>
                    </LinkContainer>
                ) : <NavLink disabled>
                   Shipping
                </NavLink>
                }
            </NavItem>

            <NavItem>
                {step3 ? (
                    <LinkContainer to={"/payment"}>
                        <NavLink>payment</NavLink>
                    </LinkContainer>
                ) : <NavLink disabled>
                   payment
                </NavLink>
                }
            </NavItem>

            <NavItem>
                {step4 ? (
                    <LinkContainer to={"/placeorder"}>
                        <NavLink>place order</NavLink>
                    </LinkContainer>
                ) : <NavLink disabled>
                    place order
                </NavLink>
                }
            </NavItem>
        </Nav>
    )
}

export default CheckoutSteps