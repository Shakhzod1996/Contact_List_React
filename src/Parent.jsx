import React, { Component, createElement } from "react";
import AddContact from "./Components/AddContact/AddContact";
import ShowContact from "./Components/ShowContact/ShowContact";

export default class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arr: [],

      obj: {
        name: undefined,
        surname: undefined,
        number: undefined,
        select: "family",
      },

      newArr: [],
    };
  }

  removeListHandler = (e) => {
    this.setState({
      newArr: this.state.arr.filter((item) => {
        return item.select !== e.target.id;
      }),
    });
  };

  buttonHandler = (e) => {
    if (e.target.textContent==='all') {
      this.setState({
        newArr: [...this.state.arr]
      })
    } else {
      this.setState({
        newArr: [...this.state.arr.filter(item => item.select === e.target.textContent),]
      })
    }
  };

  nameChangeHandler = (e) => {
    let obj1 = {
      name: e.target.value,
    };
    this.setState({ obj: { ...this.state.obj, ...obj1 } });
  };

  surnameChangeHandler = (e) => {
    let obj1 = {
      surname: e.target.value,
    };
    this.setState({ obj: { ...this.state.obj, ...obj1 } });
  };

  numberChangeHandler = (e) => {
    let obj1 = {
      number: e.target.value,
    };
    this.setState({ obj: { ...this.state.obj, ...obj1 } });
  };

  categoryChangeHandler = (e) => {
    let obj1 = {
      select: e.target.value,
    };
    this.setState({ obj: { ...this.state.obj, ...obj1 } });
  };

  submitHandler = (e) => {
    e.preventDefault();
    this.setState({
      arr: [...this.state.arr, { ...this.state.obj }],
      newArr: [...this.state.newArr, { ...this.state.obj }],
    });

    console.log(this.state.newArr);

    e.target.reset();
  };

  render() {
    return (
      <div className="Parent">
        <AddContact
          submitHandler={this.submitHandler}
          nameChangeHandler={this.nameChangeHandler}
          surnameChangeHandler={this.surnameChangeHandler}
          numberChangeHandler={this.numberChangeHandler}
          categoryChangeHandler={this.categoryChangeHandler}
        />
        <ShowContact
          arr={this.state.newArr}
          buttonHandler={this.buttonHandler}
          removeListHandler={this.removeListHandler}
        />
      </div>
    );
  }
}
