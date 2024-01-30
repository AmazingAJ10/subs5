import React from 'react';
import { NavBar, EditSub } from "./ui-components";
import { useParams } from "react-router-dom";
import "./App.css";

function SubEdit(){
    return <Put />
}

    function Put(){
        const { cid } = useParams();
        console.log("fount it!"+{cid});
        return (
            <div><header className="App-header">
            <NavBar/>
            <EditSub idProp={cid}/>
            </header></div>
        );
    }

export default SubEdit