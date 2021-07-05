import { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Context from "@script/Context";
import Link from "@component/Link";
import { Section } from "@style/login";
import brand from "../assets/images/brand.png";
import useState from "@hook/useState";

export default function Home() {
  const [state, setState] = useContext(Context);
  const router = useRouter();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const handleChange = event => setForm({ [event.target.name]: event.target.value });

  function submitForm(event) {
    event.preventDefault();
    axios.post("/auth/login", form)
      .then(response => {
        setState({ token: response.data.message.token });
        Toast.fire({
          text: "Logged in successfully",
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
          <h2>Welcome Back</h2>
          <p>Go inside the best gamers social network!</p>
          <div className="line" />
          <form onSubmit={submitForm}>
            <div className="input-container">
              <label className="label-form" htmlFor="login-email">Your Email</label>
              <input autoComplete="off" onChange={handleChange} type="email" name="email" id="login-email" placeholder="Enter email address" className="input-form" required />
            </div>
            <div className="input-container mt-1">
              <label className="label-form" htmlFor="login-password">Your Password</label>
              <input autoComplete="off" onChange={handleChange} type="password" name="password" id="login-password" placeholder="Enter password" className="input-form" required />
            </div>
            <button className="primary-btn mt-2">Login</button>
            <h6 className="register-link">Don’t have an account? <span><Link href="register">Register</Link></span></h6>
          </form>
        </div>
      </div>
    </Section>
  );
}
