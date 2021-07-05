import { useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import axios from "axios";
import Swal from "sweetalert2";
import pages from "@script/pages";
import Context from "@script/Context";
import useState from "@script/hooks/useState";
import { GlobalStyle } from "@style/global";
import Loader from "@component/Loader";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_BASE_URL;

global.Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
});

export default function App({ Component, pageProps }) {
  const [state, setState] = useState({});
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const pageData = pages[router.pathname];

  useEffect(() => localStorage.token && setState({ token: localStorage.token }), []);

  useEffect(() => {
    if (!state.token) return setLoading(false);
    axios.defaults.headers.Authorization = localStorage.token = state.token;
    setLoading(true);
    axios.get("/users/@me")
      .then(response => setState({
        player: {
          ...response.data.message,
          image: `${axios.defaults.baseURL}/users/${response.data.message._id}/avatar`
        }
      }))
      .catch(error => error.response.status === 401 && localStorage.removeItem("token"))
      .finally(() => setLoading(false));
  }, [state.token]);

  useEffect(() => !loading && !localStorage.token && !["login", "register"].includes(router.pathname.slice(1)) && router.push("/login"), [loading]);

  return (
    <>
      <Head>
        <title>Gamers Factory | {pageData?.title}</title>
        <script src="https://code.iconify.design/1/1.0.7/iconify.min.js"></script>
      </Head>
      <Context.Provider value={[state, setState]}>
        <GlobalStyle />
        {loading ? <Loader /> : (
          <main className="component">
            <Component {...pageProps} />
          </main>
        )}
      </Context.Provider>
    </>
  );
}
