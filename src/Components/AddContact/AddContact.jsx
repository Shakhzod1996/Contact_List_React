import React from "react";
import Auxe from "../../huc/Auxe";
import "./AddContact.css";

export default function AddContact(props) {
  return (
    <div className="add-contact">
      <Auxe>
        <h1 className="add-h1">Add Contact</h1>

        <form className="form" onSubmit={props.submitHandler}>
          <div>
            <label htmlFor="first">Your Name: </label> <br />
            <input onChange={props.nameChangeHandler} type="text" id="first" required />
          </div>
          <div>
            <label htmlFor="second">Your Surname: </label> <br />
            <input type="text" onChange={props.surnameChangeHandler} id="second" required/>
          </div>

          <div>
            <label htmlFor="third">Phone Number: </label> <br />
            <input onChange={props.numberChangeHandler} type="number" id="third" required/>
          </div>

          <select className="add-select" defaultValue='family' onChange={props.categoryChangeHandler} id="select">
            <option  value="family">Family</option>
            <option value="friends">Friends</option>
            <option value="group">Group</option>
            <option value="classmates">Classmates</option>
          </select>

          <button className="button" type="submit">
            Submit
          </button>
        </form>
      </Auxe>
    </div>
  );
}
