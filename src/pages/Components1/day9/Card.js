import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHeart as faFilledHeart,faTrash} from '@fortawesome/free-solid-svg-icons'
import { faHeart,faTrashAlt } from '@fortawesome/free-regular-svg-icons'
import {Fade} from 'react-reveal';
export default function Card(props) {
    return (
        <div className="inktoberCard"  >
            <Fade clear cascade>
            <h1 className ="upLess">
                <span style ={{fontWeight:"bold", color: "#333"}}>{props.title}</span>
                <FontAwesomeIcon
                    className={`${props.notLikes}Show icon`}
                    onClick={() => props.handleLike(props.i)}
                    id="outerHeart"
                    style={{
                        color: props.active.includes(props.i) ? "#ff8080" : "",
                        position: "absolute", right: 10, top: 10
                    }}
                    icon={props.active.includes(props.i) ? faFilledHeart : faHeart} />

                <FontAwesomeIcon
                    id="icon"
                    style={{position: "absolute", right: 10, top: 10 }}
                    onClick={() => props.handleLike(props.i)}
                    className={`${!props.notLikes}Show`}
                    icon={faTrashAlt} />
            </h1>
            <h2 style ={{color: "#666",marginTop:"-15px"}}>Day: {props.day}</h2>
            <img  src={props.src} />
            </Fade>
        </div>
    )
}