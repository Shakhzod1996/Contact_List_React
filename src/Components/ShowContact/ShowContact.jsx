import React from "react";
import Auxe from "../../huc/Auxe";
import ButtonFilter from "./ButtonFilter";
import "./ShowContact.css";

export default function ShowContact(props) {
  const btns = ["all", "family", "friends", "group", 'classmates'];
  return (
    <div className="show-contact">
      <Auxe>
        <h1 className="contact-h1">Contacts</h1>
        <div className="btns">
          <ButtonFilter
            buttonHandler={props.buttonHandler}
            btns={btns} />
        </div>
        <ul className="ul">
          {props.arr.map((item, index) => (
            <li key={index}>
              <p>{item.name}</p>
              <p>{item.surname}</p>
              <p>{item.number}</p>
              <p className="select">{item.select}</p>
              <button className="close" id={item.select}  onClick={props.removeListHandler}>x</button>
            </li>
          ))}
        </ul>
      </Auxe>
    </div>
  );
}
