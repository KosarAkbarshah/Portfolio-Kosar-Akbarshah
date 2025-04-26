"use client";
import React from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { Toaster, toast } from "sonner";
import { motion } from "framer-motion";
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { scale: 0 },
  show: { scale: 1 },
};

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const sendEmail = (params) => {
    const toastId = toast.loading("Sending your message, please wait...");

    emailjs
      .send(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        params,
        {
          publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
          limitRate: {
            throttle: 5000, //you can not send more than 1 email per 5 seconds using this API
          },
        }
      )
      .then(
        () => {
          toast.success(
            "message sent successfully, I will get back to you soon",
            { id: toastId }
          );
        },
        (error) => {
          toast.error("something went wrong, please try again", {
            id: toastId,
          });
        }
      );
  };

  const onSubmit = (data) => {
    const templateParams = {
      name: data.Name,
      email: data.email,
      message: data.message,
    };

    sendEmail(templateParams);
  };
  console.log(errors);

  return (
    <>
      <Toaster richColors={true} />

      <motion.form
        variants={container}
        initial="hidden"
        animate="show"
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-md w-full flex flex-col items-center justify-center space-y-4"
      >
        <motion.input
          variants={item}
          type="text"
          placeholder="Name"
          {...register("Name", {
            required: "Name is required",
            minLength: {
              value: 3,
              message: "Name must be at least 3 characters",
            },
          })}
          className="w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg"
        />
        {errors.Name && (
          <span className="inline-block self-start text-accent">
            {errors.Name.message}
          </span>
        )}
        <motion.input
          variants={item}
          type="email"
          placeholder="email"
          {...register("email", { required: "email is required" })}
          className="w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg"
        />
        {errors.email && (
          <span className="inline-block self-start text-accent">
            {errors.email.message}
          </span>
        )}

        <motion.textarea
          variants={item}
          placeholder="message"
          {...register("message", {
            required: "message is required",
            maxLength: {
              value: 500,
              message: "Message must be less than 500 characters",
            },
            minLength: {
              value: 10,
              message: "Message must be at least 10 characters",
            },
          })}
          className="w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg"
        />
        {errors.message && (
          <span className="inline-block self-start text-accent">
            {errors.message.message}
          </span>
        )}
        <motion.input
          variants={item}
          value="cast your message!"
          className="px-10 py-4 rounded-md shadow-lg bg-background border border-accent/30 border-solid backdrop-blur-sm hover:shadow-glass-sm
     hover:transition-all hover:scale-[1.02] hover:duration-500 cursor-pointer text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 capitalize"
          type="submit"
        />
      </motion.form>
    </>
  );
}
