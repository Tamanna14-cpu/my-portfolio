import { TextField, Button } from '@mui/material';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Navigation from '../Navigation/Navigation';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';

const Contact = () => {

    const sendMail = e => {

        let timerInterval
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Thanks for your feedback!',
            timer: 5000,
            timerProgressBar: true,
            didOpen: () => {
                Swal.showLoading()
            },
            willClose: () => {
                clearInterval(timerInterval)
            }
        }).then((result) => {
            /* Read more about handling dismissals below */
            if (result.dismiss === Swal.DismissReason.timer) {
                console.log('I was closed by the timer')
            }
        })

        emailjs.sendForm('service_hsxtw9e', 'template_fps3t7v', e.target, 'user_8h4CU0EmhrISgc1Tv5X6q')
            .then(res => {
                console.log(res);
            })
            .catch(err => console.log(err));

        e.preventDefault();
    }





    return (

        <Row >
            <Col xs={10} md={11}>

                <h1 className="my-5 text-center pt-5 font-monospace fw-bold">Contact Me</h1>

                <Row >
                    <Col md={8} >
                        <form>
                            <Row className="mt-5">
                                <Col xs={12} md={6}>
                                    <TextField required label="Your Name" variant="standard" className="w-100" name="name" />
                                </Col>
                                <Col xs={12} md={6}>
                                    <TextField required type="email" label="Email" variant="standard" className="w-100" name="user_email" />
                                </Col>
                            </Row>

                            <TextField required label="Subject" variant="standard" className="w-100 my-5" name="subject" />
                            <TextField required label="Your Message" variant="standard" className="w-100 mt-4" rows="2" name="message" />

                            <Button variant="outlined" onClick={sendMail} type="submit" className="w-25 mt-4 py-3">
                                <i class="fas fa-paper-plane me-5"></i>
                                Send
                            </Button>
                        </form>
                    </Col>

                    <Col md={4}>
                        <div class="mt-5 text-center">
                            <ul class="list-unstyled mb-0">
                                <li><i class="fas fa-map-marker-alt fa-2x"></i>
                                    <p>Sadar, Cumilla-3500, Bangladesh</p>
                                </li>

                                <li><i class="fas fa-phone mt-4 fa-2x"></i>
                                    <p>+8801736043362</p>
                                </li>

                                <li><i class="fas fa-envelope mt-4 fa-2x"></i>
                                    <p>tamannabithy14@gmail.com</p>
                                </li>
                            </ul>
                        </div>

                    </Col>
                </Row>

            </Col>

            <Col xs={2} md={1}>

                <Navigation></Navigation>

            </Col>
        </Row>

    );
};

export default Contact;