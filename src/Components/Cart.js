import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Orders from './Orders';


function Cart() {

    const [show, setShow] = useState(false);
    return (
        <>
            <Button variant="light" onClick={() => setShow(!show)} className="me-2 position-relative" >
                <i class="bi bi-bag-heart"></i>
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    3
                    <span class="visually-hidden">cart</span>
                </span>
            </Button>
            <Offcanvas show={show} onHide={() => setShow(!show)} placement={'end'}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Your Cart:</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Orders />
                    <div className='text-center'>
                        <Button variant='primary mt-3'>Check Out</Button>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}

export default Cart
