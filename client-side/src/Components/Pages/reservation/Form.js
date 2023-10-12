import React from "react";
import { agent } from "../../Agent";
import { useState, useEffect } from "react";
const initialFormState = {
  name: "",
  phone: "",
  person: "",
  date: "",
  time: "",
};

function Form() {
  const [inputState, setInputState] = useState(initialFormState);

  useEffect(() => {
    console.log(inputState);
  }, [inputState]);

  /**
   *
   * @param {React.ChangeEvent<HTMLInputElement>} event
   */

  function handleChangeInput(event) {
    setInputState((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  }

  /**
   *
   * @param {React.FormEvent<HTMLFormElement>} event
   */

  const onFormSubmit = async (event) => {
    console.log("event", event);
    event.preventDefault();

    console.log("inputState", inputState);
    await agent.Users.Create(inputState);
    setInputState(initialFormState)  //reset
    


  };

  return (
    <form onSubmit={onFormSubmit} className="w-full lg:w-1/2 font-bigText anim in-up">
      <div className="border-b border-b-gray-300">
        <label className="text-sm uppercase tracking-wide" htmlFor="fName">
          full name
        </label>
        <input
          value={inputState.name}
          onChange={handleChangeInput}
          name="name"
          id="fName"
          type="text"
          className="w-full outline-none"
          aria-invalid="false"
        />
      </div>
      <div className="border-b border-b-gray-300 mt-8">
        <label className="text-sm uppercase tracking-wide" htmlFor="tel">
          phone number
        </label>
        <input
          value={inputState.phone}
          onChange={handleChangeInput}
          name="phone"
          id="tel"
          type="tel"
          className="w-full outline-none"
          aria-invalid="false"
        />
      </div>
      <div className="border-b border-b-gray-300 mt-8">
        <label className="text-sm uppercase tracking-wide" htmlFor="num">
          persons
        </label>
        <input
          onChange={handleChangeInput}
          name="person"
          value={inputState.person}
          id="num"
          type="number"
          className="w-full outline-none"
          aria-invalid="false"
        />
      </div>
      <div className="flex justify-between border-b border-b-gray-300 mt-8">
        <div className="flex gap-8 items-center">
          <label className="text-sm uppercase tracking-wide" htmlFor="date">
            date
          </label>
          <input
            value={inputState.date}
            onChange={handleChangeInput}
            type="date"
            name="date"
            id="date"
            className="outline-none"
          />
        </div>
        <div className="flex gap-8 items-center">
          <label className="text-sm uppercase tracking-wide" htmlFor="time">
            time
          </label>
          <input
            value={inputState.time}
            onChange={handleChangeInput}
            type="time"
            name="time"
            id="time"
            className="outline-none"
          />
        </div>
      </div>
      <div className="flex justify-end mt-8">
        <button className="text-2xl uppercase">submit</button>
      </div>
    </form>
  );
}
export default Form;
