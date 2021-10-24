import React from 'react'
import {AffairType} from "./HW2";
import classes from './Affairs.module.css'

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType
    deleteAffairCallback: ( _id: number  ) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => { props.deleteAffairCallback(props.affair._id) }

    return (
        <div className={classes['affair']}>
            {props.affair.name + ' Priority: ' + props.affair.priority}
            <button className={classes['btn-delete']} onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair
