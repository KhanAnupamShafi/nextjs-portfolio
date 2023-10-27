'use client';

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const ContactMe = () => {
  // const onSubmit = handleSubmit((formData) => {
  //   window.location.href = `mailto:${formData.email}?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message}`;
  // });

  return (
    <div className="max-w-screen space-y-2 pt-5 pb-8">
      <div className="h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
          Contact
        </h3>

        <div className="mt-20 flex flex-col md:space-y-8 space-y-2">
          <h4 className="text-lg font-semibold text-center w-full">
            I&apos;m ready to connect.
            <span className="decoration-[#F7AB0A]/50 border border-x-4 p-1 ml-2">
              Let&apos;s have a chat
            </span>
          </h4>

          <div className="md:w-full">
            <form
              // onSubmit={onSubmit}
              className="flex flex-col space-y-2 mx-auto">
              <div className="md:flex md:space-x-2 ">
                <input
                  name="name"
                  placeholder="Name"
                  className="contactInput w-full"
                  type="text"
                />
                <input
                  name="email"
                  placeholder="Email"
                  className="contactInput w-full"
                  type="email"
                />
              </div>

              <input
                name="subject"
                placeholder="Subject"
                className="contactInput"
                type="text"
              />

              <textarea
                name="message"
                placeholder="Message"
                className="contactInput"
              />
              <button
                type="submit"
                className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
