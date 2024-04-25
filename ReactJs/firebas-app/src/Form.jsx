import React from 'react';
import { getDatabase, ref, set } from "firebase/database";
import { v4 as uuidv4 } from 'uuid';
export default function Form() {


    const formValidation = (form_inputs) => {
        const data = {};
        for (let inp of form_inputs) {
            // console.log(inp.name, inp.value);
            if (inp.value == "") {
                if (inp.nextElementSibling) {
                    inp.nextElementSibling.innerText = "Please fill the data";
                }
            } else {
                if (inp.nextElementSibling) {
                    data[inp.name] = inp.value;
                    inp.nextElementSibling.innerText = "";
                }
            }

        }
        return data;
    }

    const formSubmitHandler = (e) => {
        e.preventDefault();
        const data = formValidation(e.target);
        if(data.name != "" && data.email != "" && data.contact != ""){
            const db = getDatabase();
            const user_id = uuidv4();
            console.log(user_id);
            set(
                ref(db,"students/" + user_id),
                data
            )
            e.target.reset();
        }
    }

    return (
        <div>
            <form onSubmit={formSubmitHandler} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" action="#" method="post">
                <div>
                    <label htmlFor="name" className="block mb-4">
                        Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-400"
                        required=""
                        placeholder='Your Name'
                    />
                    <span className='text-red-600'></span>
                </div>
                <div>
                    <label htmlFor="email" className="block mb-4">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-400"
                        required=""
                        placeholder='Your Email'
                    />
                    <span className='text-red-600'></span>
                </div>
                <div>
                    <label htmlFor="contact" className="block mb-4">
                        Contact
                    </label>
                    <input
                        type="text"
                        id="contact"
                        name="contact"
                        className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-400"
                        required=""
                        placeholder='Your Contact'
                    />
                    <span className='text-red-600'></span>
                </div>
                <div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white 
                        mt-3 rounded-md py-2 px-4 
                        hover:bg-blue-600 focus:outline-none 
                        focus:bg-blue-600"
                        defaultValue={"Save"}
                        name='button'
                    >
                        Submit
                    </button>
                </div>
            </form>

        </div>
    )
}
