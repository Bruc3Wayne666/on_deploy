import classes from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = props => {
    const path = '/dialogs/' + props.person.id

    return (
        <div className={classes.dialog}>
            <NavLink className={classes.dialog} to={path} activeClassName={classes.active}>{props.person.name}</NavLink>
        </div>
    )
}

export default DialogItem