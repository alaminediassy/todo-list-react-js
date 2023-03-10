import React from "react";
import {useState} from "react";
import Item from "./Item";
import {v4 as uuidv4} from "uuid";

export default function Form(){
    //Cration des state
    const [dataArr, setDataArr] = useState([
        {txt: "Promener le chien", id: uuidv4},
        {txt: "Coder avec react", id: uuidv4},
        {txt: "Faire du Sport",id: uuidv4()}
    ]);

    //Création de la fonction de suppression

    const deletElement = id=>{
        const filterdState = dataArr.filter(item => {
            return item.id !== id;
        })
        setDataArr(filterdState);
    }

    return(
        <div className="m-auto px-4 col-12 col-sm-10 col-lg-6">
            <form className="mb-3">
                <label htmlFor="todo" className="form-label mt-3">Chose à faire</label>
                <input className="form-control" id="todo"/>
                <button className="mt-2 btn btn-primary d-block">Envoyer</button>
            </form>

            <h2>Liste des choses à faire : </h2>
            <ul className="list-group"></ul>
            {dataArr.map(item => {
                return(
                    <Item
                    txt={item.txt}
                    key={item.id}
                    id={item.id}
                    delFunc={deletElement}
                    />
                )
            })}
        </div>
    )
}