import { TextField, Button } from '@mui/material';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Navigation from '../Navigation/Navigation';
import emailjs from 'emailjs-com';
// import Swal from 'sweetalert2';

const Contact = () => {

    const sendMail = e => {

        // let timerInterval
        // Swal.fire({
        //     position: 'center',
        //     icon: 'success',
        //     title: 'Thanks for your feedback!',
        //     timer: 5000,
        //     timerProgressBar: true,
        //     didOpen: () => {
        //         Swal.showLoading()
        //     },
        //     willClose: () => {
        //         clearInterval(timerInterval)
        //     }
        // }).then((result) => {
        //     /* Read more about handling dismissals below */
        //     if (result.dismiss === Swal.DismissReason.timer) {
        //         console.log('I was closed by the timer')
        //     }
        // })

        emailjs.sendForm('service_ki28aik', 'template_gf8z7cj', e.target, 'user_8h4CU0EmhrISgc1Tv5X6q')
            .then(res => {
                if (res) {
                    alert('successful');
                }

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

                        <form onSubmit={sendMail}>
                            <Row className="mt-5">
                                <Col xs={12} md={6}>
                                    <TextField required label="Your Name" variant="standard" className="w-100" name="name" />
                                </Col>
                                <Col xs={12} md={6}>
                                    <TextField required type="email" label="Email" variant="standard" className="w-100" name="email" />
                                </Col>
                            </Row>

                            <TextField required label="Subject" variant="standard" className="w-100 my-5" name="subject" />
                            <TextField required label="Your Message" variant="standard" className="w-100 mt-4" rows="2" name="message" />

                            <Button variant="contained" type="submit" className=" mt-4 py-2">
                                <i class="fas fa-paper-plane me-3"></i>
                                Send
                            </Button>
                        </form>

                    </Col>

                    <Col md={4}>
                        <div class="mt-5 pt-3 text-center">
                            <ul class="list-unstyled mb-0">
                                <li><i class="fas fa-map-marker-alt fa-2x"></i>
                                    <p>Cumilla, Bangladesh</p>
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