import { useEffect, useState, useCallback } from 'react';
import { toast } from 'react-toastify';

function Form() {
  const [generatedCaptcha, setGeneratedCaptcha] = useState('');
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    password: '',
    captcha: '',
  });
  console.log(inputs);

  const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const generateCaptcha = () => {
    let text = '';
    for (let i = 0; i < 3; i++) {
      text += String.fromCharCode(randomNumber(65, 90));
      text += String.fromCharCode(randomNumber(97, 122));
      text += String.fromCharCode(randomNumber(48, 57));
    }

    setGeneratedCaptcha(text);
  };

  const handleChange = e => {
    const { name, value } = e.target;
    const updatedInputs = { ...inputs, [name]: value };

    setInputs(updatedInputs);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (generatedCaptcha === inputs.captcha) {
      toast.success('Login SuccessFull', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1500,
      });
      generateCaptcha();
    } else {
      toast.error('Login Failed', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1500,
      });
      generateCaptcha();
    }
    setInputs({ name: '', email: '', password: '', captcha: '' });
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#0d0d0d] flex justify-center items-center p-4"
    >
      <form
        onSubmit={handleSubmit}
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#69e8f9] text-white ">
            Roc8🚀
          </p>
          <p className="text-white py-4">Sign Up to Continue</p>
        </div>
        <input
          className="bg-[#0d0d0d] p-2 border-b-2 border-[#69e8f9] outline-none text-white"
          type="text"
          placeholder="Name"
          name="name"
          value={inputs.name}
          onChange={handleChange}
        />
        <input
          className="my-4 p-2 bg-[#0d0d0d] border-b-2 border-[#69e8f9] outline-none text-white"
          type="email"
          placeholder="Email"
          name="email"
          value={inputs.email}
          onChange={handleChange}
        />
        <input
          className="my-4 p-2 bg-[#0d0d0d] border-b-2 border-[#69e8f9] outline-none text-white"
          type="password"
          placeholder="Password"
          name="password"
          value={inputs.password}
          onChange={handleChange}
        />
        <div className="flex text-white justify-between items-center  p-2">
          <button
            onClick={generateCaptcha}
            className="border-2 border-[#69e8f9] p-2"
          >
            Generate Captcha
          </button>
          <p className="border-2 border-[#69e8f9] p-2">
            Generated Captcha: {generatedCaptcha}
          </p>
        </div>
        <input
          className="my-4 p-2 bg-[#0d0d0d] border-b-2 border-[#69e8f9] outline-none text-white"
          type="text"
          placeholder="Enter Captcha"
          name="captcha"
          value={inputs.captcha}
          onChange={handleChange}
        />
        <button className="w-full flex justify-center text-white border-2 hover:border-[#69e8f9] text-[#69e8f9] px-4 py-3 my-8 mx-auto flex items-center rounded-[3px]">
          Let's Goo
        </button>
      </form>
    </div>
  );
}

export default Form;
