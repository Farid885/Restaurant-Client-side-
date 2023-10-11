import React from "react";

function Form() {
  return (
    <form className="w-full lg:w-1/2 font-bigText anim in-up">
      <div className="border-b border-b-gray-300">
        <label className="text-sm uppercase tracking-wide" htmlFor="fName">
          full name
        </label>
        <input
          name="fName"
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
          name="tel"
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
          name="num"
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
          <input type="date" name="date" id="date" className="outline-none" />
        </div>
        <div className="flex gap-8 items-center">
          <label className="text-sm uppercase tracking-wide" htmlFor="time">
            time
          </label>
          <input type="time" name="time" id="time" className="outline-none" />
        </div>
      </div>
      <div className="flex justify-end mt-8">
        <button className="text-2xl uppercase">submit</button>
      </div>
    </form>
  );
}
export default Form;
