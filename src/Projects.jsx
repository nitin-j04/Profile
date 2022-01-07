import React from "react";
import Proj from "./Proj";

import Proj1 from "./Proj1";
import {TrackerList} from "./TrackerList";
import { CryptoList } from "./CryptoList";


const Projects = () => {


    const styles = {

        display:'flex',
        flexDirection:'row',
        // border:'2px solid black',
        padding:'20dp',
        width:'90%',
        flexWrap:'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        '@media (max-width:768px)':{
            flexDirection:'column',
            
        }
        

    };


    return (
        <>
        <div style={{width:'100%',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
        <div className="projects" style={styles}>
           
                <Proj link="https://my-meal-google.herokuapp.com/"
                      title="myMeal"
                      date="August 2021"
                    tech=" Techstack used:(html,css,javascript,nodejs,mongoDb)">
                   
                    {/* <iframe src="https://my-meal-google.herokuapp.com/" />       */}
               
                </Proj>
                <Proj link="https://nitin-j04.github.io/Profile"
                      title="Profile"
                      date="December 2021" 
                      tech="Techstack used:(Reactjs)"
                      />

                <Proj1 itemData={TrackerList}
                             title="CovidTracker"
                             date="October 2021"
                             tech="Techstack used:Android"
                 />
                <Proj1 itemData={CryptoList}
                    title="CryptoAlert"
                    date="November 2021"
                    tech="Techstack used:Android"
                />  

                     
            </div>
            </div>
        </>
    );
};

export default Projects;