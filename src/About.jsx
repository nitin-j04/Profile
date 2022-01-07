import React,{useState} from "react";
import Avatar from '@mui/material/Avatar';
import GitHubIcon from '@mui/icons-material/GitHub';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import Skills from "./Skills";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Image from "./laptop.jpg";
import profile from "./profile.jpg";

const Resume ="https://drive.google.com/file/d/1vvXx6fjurhuNsRfvL6aYshUhBxqCclTp/view?usp=sharing";

const About = ()=>{
    const [hover, setHover] = useState(false);
    const [hover1, setHover1] = useState(false);

    const style1 = { width: '90%', height: '90%',
     display: 'flex', alignItems: 'center', 
     justifyContent: 'center',
        backgroundImage: `url(${Image})`,
        backgroundPosition:'center',
        backgroundSize:"cover",
        position:'relative',
        zIndex:'-1',

    opacity:".6" ,
    '@media (max-width:768px)': { // eslint-disable-line no-useless-computed-key
           background:'none',
        zIndex: '-1'

        }

    };

   

    return (
        <>

           
            <div className="about">
                <Paper elevation={5} sx={style1}> </Paper>
                <div className="profile">

                    <div className="icon">
                    <Avatar
                            onMouseEnter={() => {
                                setHover1(true);
                            }}
                            onMouseLeave={() => {
                                setHover1(false);
                            }}
                        
                        src={profile}
                            alt="N"
                            sx={(hover1 ? { width: "60%", height: "30%", position: 'relative', top: 0, left: 0, marginBottom: "2vh"
                                         , '@media (max-width:768px)': { height: "100%",width:"30%" }}
                                        :
                                       { width: "50%", height: "20%", position: 'relative', top: 0, left: 0, marginBottom: "2vh"
                                    , '@media (max-width:768px)': { height: "100%",width:"30%" } })}
                            

                    />
                        <Link href="https://github.com/nitin-j04" target={"_blank"}  >
                        
                        <Button variant="outlined" 
                                onMouseEnter={() => {
                                    setHover(true);
                                }}
                                onMouseLeave={() => {
                                    setHover(false);
                                }}
                                style={ (hover ? {background:'black',color:'white'  } : null)}
                              > <GitHubIcon fontSize="large"  /> 
                      </Button>
                      </Link>
                    </div>
                    <div className="details">
                        <h1 >I'm Nitin Pilania</h1>
                        <p style={{marginBottom:'1vh'}}>Student at NIT Kurukshetra</p>
                        
                            {/* <h2 style={{ textDecorationStyle: 'bold', marginBottom: '1vh' }}>Techinacl skills:</h2> */}
                        <Skills />
                            {/* <li>Web development<br/>
                            (html,css,Reactjs,nodejs,MySQL,MongoDB)
                            </li>
                            <li>Android Development</li>
                            <li>DSA</li>
                        </ul> */}
                        <a href={`${Resume}`} download target={"_blank"} > <Button variant="contained" >Download CV</Button></a>
                    </div>

                </div>
               
            </div>
         
        </>
    );
};

export default About;