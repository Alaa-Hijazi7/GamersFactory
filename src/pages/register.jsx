import { useContext, useEffect } from "react";
import Context from "@script/Context";
import axios from "axios";
import Link from "@component/Link";
import { Section } from "@style/register";
import brand from "../assets/images/brand.png";
import useState from "@hook/useState";
import { useRouter } from "next/router";

export default function Register() {
  const router = useRouter();
  const [state, setState] = useContext(Context);
  const [form, setForm] = useState({
    name: "",
    gender: "",
    avatar: "",
    email: "",
    password: ""
  });
  const handleChange = event => setForm({ [event.target.name]: event.target.value });

  const toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });

  async function submitForm(event) {
    event.preventDefault();

    axios.post("/auth/register", { ...form, avatar: await toBase64(form.avatar) })
      .then(response => {
        setState({ token: response.data.message.token });
        Toast.fire({
          text: "Registered successfully",
          icon: "success"
        });
        router.push("/");
      })
      .catch(error => {
        Toast.fire({
          text: error.response.data.message,
          icon: "error"
        });
      });
  }

  useEffect(() => state.player && router.push("/"), [state.player]);
  return (
    <Section>
      <div className="split left">
        <nav><img src={brand} alt="logo" /></nav>
        <div className="centered">
          <figure>
            <span className="iconify" style={{ color: "#AACDFF" }} data-icon="dashicons:format-quote" data-inline="false"></span>
            <blockquote cite="https://www.brainyquote.com/quotes/hideo_kojima_696181">
              <p>I always observe the people who pass by when I ride an escalator. I'll never see most of them again,
                so I imagine a lot of things about their lives... about the day ahead of them.</p>
            </blockquote>
            <figcaption>—Hideo Kojima</figcaption>
          </figure>
        </div>
      </div>
      <div className="split right">
        <div className="centered">
          <nav><img src={brand} alt="logo" /></nav>
          <h2>Register Individual Account!</h2>
          <p>For the purpose of gamers regulation, your details are required.!</p>
          <div className="line" />
          <form onSubmit={submitForm}>
            <div className="input-container">
              <label className="label-form" htmlFor="register-name">Your name</label>
              <input onChange={handleChange} type="name" name="name" id="register-name" placeholder="Enter your name" className="input-form" required />
            </div>
            <div className="input-container">
              <label className="label-form" htmlFor="register-email">Email address*</label>
              <input onChange={handleChange} type="email" name="email" id="register-email" placeholder="Enter email address" className="input-form" required />
            </div>
            <div className="input-container mt-1">
              <label className="label-form" htmlFor="register-password">Create password*</label>
              <input onChange={handleChange} type="password" name="password" id="register-password" placeholder="Enter password" className="input-form" required />
            </div>
            <div className="row">
              <select onChange={handleChange} name="gender" id="register-gender__input" required>
                <option value="">Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              <input onChange={handleChange} type="date" name="birth_date" id="birthday" required />
            </div>

            <div className="upload-image__div">
              <input onChange={event => setForm({ avatar: event.target.files[0] })} type="file" name="avatar" id="upload-image" required />
              <h4 htmlFor="upload-image">upload your image</h4>
              <label htmlFor="upload-image" className="upload-image__label">
                <span className="iconify" data-icon="heroicons-outline:upload" data-inline="false"></span>
              </label>
            </div>
            <button className="primary-btn mt-1">Register</button>
            <h6 className="login-link">I have Account let's go <span><Link href="login">Back</Link></span></h6>
          </form>
        </div>
      </div>
    </Section>
  )
}