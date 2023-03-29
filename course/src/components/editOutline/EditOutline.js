import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './EditOutline.css';
import OutlineElement from "./OutlineElement";

export default function EditOutline (){
    const [primary, setPrimary] = useState([]);
    let navigate= useNavigate();
    function back(){
        navigate('/Outline1');
    }
const setEditOutline = (e) => {
  fetch('http://localhost:3333/api/getEditOutline').then((res) => {
        res.json().then(data => {
            setPrimary(data)
        })
    })
}

useEffect(()=>{setEditOutline();},[primary])
const editOutlineElements =primary.map(editOutline=> <OutlineElement key = {editOutline._id} courseNumber = {editOutline.courseNumber} prof = {editOutline.profName} timeStamp = {editOutline.timeStamp}/> ) 

return (
<div>
    <button id="backBtn2" onClick={back}>Back</button>
    <div className="element">
        {editOutlineElements}
    </div>
</div>
)
}
