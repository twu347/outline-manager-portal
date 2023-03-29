import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ArchivePrimary from "../archivePrimary/archivePrimary";
import './archive.css'
function Archive (){
    const [primary, setPrimary] = useState([]);
    let navigate= useNavigate();
    function back(){
        navigate('/Outline1');
    }
const setArchive = (e) => {
  fetch('http://localhost:3333/api/getDoc').then((res) => {
        res.json().then(data => {
            setPrimary(data)
        })
    })
}

useEffect(()=>{setArchive();},[primary])
const archiveElements =primary.map(archive=> <ArchivePrimary key = {archive._id} courseNumber = {archive.courseNumber} prof = {archive.profName}/> ) 

return (
<div>
    <button class="homeBtn2" onClick={back}>Back to Edit Outline</button>
    <div className="element">
        {archiveElements}
    </div>
</div>
)
}


export default Archive;