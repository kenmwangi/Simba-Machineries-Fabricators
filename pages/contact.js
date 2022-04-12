import React from "react";
import FormInput from "../components/FormInput";
import Layout from "../components/Layout";
import style from "../styles/contact.module.css";

function Contact() {
  const [values, setValues] = React.useState({
    username: "",
    email: "",
  });

  const inputs = [
    {
      id: 1,
      name: "Username",
      type: "text",
      placeholder: "Enter Username",
      errorMessage:
        "Username should contain 3-12 characters and should not include any special characters.",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,12}$",
      required: true,
    },
    {
      id: 2,
      name: "Email",
      type: "email",
      placeholder: "name@example.com",
      errorMessage: "Enter a  valid email",
      label: "Email",
      required: true,
    },
    // {
    //   id: 3,
    //   name: "Birthday",
    //   type: "date",
    //   placeholder: "Birthday",
    //   label: "Birthday",
    // },

    // {
    //   id: 4,
    //   name: "Confirm Password",
    //   type: "password",
    //   placeholder: "Confirm Password",
    //   label: "Confirm Password",
    // },
  ];
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };
  console.log(values);
  return (
    <Layout title="Contact | Kenya Simba Machineries and Fabricators">
      <form className={style.form} onSubmit={handleSubmit}>
        <h2>For Inqueries and Request a Quote</h2>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={handleChange}
            // label={input.label}
            //   name={input.name}
            //   placeholder={input.placeholder}
          />
        ))}
        <div>
          <label value="text">Message</label>
          <textarea
            className={style.textarea}
            placeholder="Enter your Inquiries or Quote Request"
          ></textarea>
          <button className="call__action">Submit</button>
        </div>
      </form>
    </Layout>
  );
}

export default Contact;
