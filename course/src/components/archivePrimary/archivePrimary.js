import React, { useEffect, useRef } from "react";
import './archive.css'

export default function ArchivePrimary(props){
    return(
        <div className="listArchive">
        Course number: {props.courseNumber}, Professor: {props.prof}
        </div>
    )
}