import { Form, Link } from "react-router-dom";
import { FormInput, SubmitBtn } from "../components";
import { Link } from "react-router-dom";

const Register = () => {
  return <section className="h-screen grid place-items-center">
    <Form className="card flex flex-col w-96 p-8 bg-base-100 shadow-lg gap-y-4">
      <h4 className="text-4xl text-center font-bold">
        Login
        </h4>
   
      <FormInput
        type="text"
        label="Username"
        name="indentifier"
      />

      <FormInput 
        type="password"
        label="Password"
        name="password"
        />
        
        <div className="mt-4">
          <SubmitBtn text="REGISTER" />
        </div>

        <p className="text-center"> 
            Not a member yet?
            <Link to="/login" className="link link-primary ml-2">Login</Link>
        </p>
    </Form>
  </section>
}

export default Register;