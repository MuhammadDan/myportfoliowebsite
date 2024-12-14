import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
const Connection = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const UserInfo = {
      name: data.name,
      email: data.email,
      message: data.message
    };
    try {
        await axios.post("https://getform.io/f/bqooylnb",UserInfo);
        toast.success("Your message is sent");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong")
      
    }
  };
  return (
    <>
      <div
        name="Contact"
        className="my-16 md:px-20 px-4 mx-auto container max-w-screen-2xl overflow-hidden"
      >
        <h1 className="md:text-3xl text-lg font-bold mb-5">Contact me</h1>
        <span>Please fill out the form below to contact me</span>
        <div className="flex flex-col items-center justify-center mt-5">
          <form onSubmit={handleSubmit(onSubmit)}
            className="bg-slate-200 md:w-96 px-8 py-6 rounded-xl"
          >
            <h1 className="text-xl font-semibold mb-4">Send your message</h1>
            <div className="flex flex-col mb-4">
              <label className="block text-gray-700 mb-1">Full Name</label>
              <input
                className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                {...register("name", { required: true })}
                name="name"
                type="text"
                placeholder="Enter fullname"
              />
              {errors.name && <span>This field is required</span>}
            </div>
            <div className="flex flex-col mb-4">
              <label className="block text-gray-700 mb-1">Email Address</label>
              <input
                className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                {...register("email", { required: true })}
                name="email"
                type="text"
                placeholder="Enter your EmailAddress"
              />
              {errors.email && <span>This field is required</span>}
            </div>
            <div className="flex flex-col mb-4">
              <label className="block text-gray-700 mb-1">Message</label>
              <textarea
                className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                {...register("message", { required: true })}
                name="message"
                type="text"
                placeholder="Enter your message"
              />
              {errors.message && <span>This field is required</span>}
            </div>
            <button
              type="submit"
              className="bg-black text-white rounded-xl px-3 py-2 hover:bg-slate-700 duration-300"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Connection;
