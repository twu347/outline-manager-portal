import React, { useEffect, useState } from "react";
import ArchivePrimary from "../archivePrimary/archivePrimary";

function Archive (){
    const [primary, setPrimary] = useState([]);

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
        {archiveElements}
    </div>
)
}


export default Archive;