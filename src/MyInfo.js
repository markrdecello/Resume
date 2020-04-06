import React from 'react'

function MyInfo(props){
    return (
    <div>
        <h2 style={{display: !props.info.firstName && "none"}}>Full Name: {props.info.firstName} {props.info.midName} {props.info.lastName}</h2>
        <p style={{color: !props.info.major && "#888888"}}>Major: {props.info.major}</p>
        <p>Degree: {props.info.degree}</p>
    </div>
    )
}

export default MyInfo