import {React,useState} from "react";
import emailjs from 'emailjs-com';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Cont from "./contact.jpg";
import dotenv from "dotenv";
import validator from 'validator';

const Contact = () => {



    const styles = {
        
            width: '60%', height: '70%',
            opacity:.8,
            textColor:'white',
        '@media (max-width:768px)': { // eslint-disable-line no-useless-computed-key
                width: '80%',
                height:'90%',
                zIndex:'0'
            }
        
    };

    const style2 = {
        display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
        mx: '2px', transform: 'scale(0.8)', width: '100%', height: '90vh', backgroundImage: `url(${Cont})`,
        backgroundPosition: 'center',
        backgroundSize: "cover",
        opacity:1,
        '@media (max-width:768px)': { // eslint-disable-line no-useless-computed-key
            position: 'relative',
            height:'150vh',
            zIndex: '0'
            
        }
    }

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [emailSent, setEmailSent] = useState(false);
    
    const isValidEmail = email => {
        // const regex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
        let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        return regEmail.test(String(email).toLowerCase());
    };

    const submit = () => {
        // alert( process.env.staging.REACT_APP_USER_ID);
        if (name && email && message && isValidEmail(email)) {
            // TODO - send mail


            // const serviceId = process.env.production.REACT_APP_SERVICE_ID;
            // const templateId = process.env.production.REACT_APP_TEMPLATE_ID;
            // const userId = process.env.production.REACT_APP_USER_ID;
           
            const serviceId = "service_m3nqksp";
            const templateId = "template_k7u0a3w";
            const userId = "user_Fz3i3SlNaV1wEBVocvcYa";
            const templateParams = {
                name,
                email,
                message
            };

            emailjs.send(serviceId, templateId, templateParams, userId)
                .then(response => console.log(response))
                .then(error => console.log(error));

            setName('');
            setEmail('');
            setMessage('');
            setEmailSent(true);
        } else {
            alert('Some error occured with input.Please verify all details are correct!');
        }
    }





    return (<>
        <div className="contactClass">
        <Box
            component="span"
            sx={style2}
        >
            
            <Card variant="outlined"  sx={styles}>
        <div className="card">
        <div><input type="text" placeholder="Your Name" value={name} onChange={e => setName(e.target.value)} /></div>
        <div><input type="email" placeholder="Your email address" value={email} onChange={e => setEmail(e.target.value)} /></div>
       <div> <textarea  placeholder="Your message" value={message} onChange={e => setMessage(e.target.value)}></textarea></div>
                    <div>

                        <Button variant="contained" color="success" onClick={submit} size="large" style={{fontSize:"1.5rem"}}>
                        Send Message
                       </Button>
                    </div>            
       <div> {emailSent ? <span>Thank you for your message, we will be in touch in no time!</span> : null}</div>
        </div>
            </Card>
        </Box>
        </div>
        </>
    );
};

export default Contact;