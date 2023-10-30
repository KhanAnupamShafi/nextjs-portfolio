'use client';

import { postEntry } from '@/utils/action';
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import Loader from './ui/Loader';
import SuccessToast from './ui/SuccessToast';

export type MyFormData = {
  name: string;
  email: string;
  subject?: string;
  body: string;
};

const ContactMe = () => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [loader, setLoader] = useState(false);

  const [formData, setFormData] = useState<MyFormData>({
    name: '',
    email: '',
    subject: '',
    body: '',
  });
  const emailData: {
    name: string;
    subject: string;
    message: string;
    reply_to: string;
  } = {
    name: formData.name,
    subject: formData.subject || 'No Subject',
    message: formData.body,
    reply_to: formData.email,
  };

  const formRef = useRef<HTMLFormElement>(null);

  // console.log(emailData);
  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(e);
    if (formRef.current) {
      emailjs
        .send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_IDD!,
          emailData,
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
        )
        .then(
          (result) => {
            console.log(result);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoader(true);
    const result = await postEntry(formData);
    console.log(result);
    sendEmail(e);
    // Reset the form data to its initial state
    if (result.success) {
      setShowSuccess(true); // Show the success toast
      setLoader(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        body: '',
      });

      setTimeout(() => {
        setShowSuccess(false);
      }, 3000);
    }
  };

  return (
    <div className="max-w-screen space-y-2 pt-5 pb-8">
      <div className="h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
        <h3 className="absolute top-1 sm:top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
          Contact
        </h3>

        <div className="sm:mt-0 flex flex-col md:space-y-8 space-y-2">
          <h4 className="text-lg font-semibold text-center w-full my-10 flex gap-2 flex-col">
            I&apos;m ready to connect.
            <span className="decoration-[#F7AB0A]/50 border border-x-4 p-1 ml-2">
              Let&apos;s have a chat
            </span>
          </h4>

          <div className="md:w-full">
            <form
              ref={formRef}
              // onSubmit={onSubmit}
              onSubmit={handleSubmit}
              className="flex flex-col space-y-2 mx-auto text-emerald-600">
              <div className="md:flex md:space-x-2 ">
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Name"
                  className="contactInput w-full"
                  type="text"
                  required
                />
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email"
                  className="contactInput w-full"
                  type="email"
                  required
                />
              </div>

              <input
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                placeholder="Subject"
                className="contactInput"
                type="text"
              />

              <textarea
                name="body"
                value={formData.body}
                onChange={handleInputChange}
                placeholder="Message"
                className="contactInput"
                required
              />
              {!loader ? (
                <button
                  type="submit"
                  className="bg-theme-light hover:bg-theme-dark py-5 px-10 rounded-md text-black font-bold text-lg">
                  Submit
                </button>
              ) : (
                <Loader />
              )}
              {showSuccess && (
                <SuccessToast>Thank You !</SuccessToast>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
