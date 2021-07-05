import { useContext, useEffect, useMemo, useRef } from "react";
import Context from "@script/Context";
import {
  Section, AsideFriend, PendingDiv,
  MainSection, GroupSection,
  SingleGroup, MainNav,
  SingleNewsStyle, DirectChatBox
} from "@style/home";
import ReactTooltip from "react-tooltip";
import useState from "@hook/useState";
import axios from "axios";
import Modal from "react-modal";
import { useRouter } from "next/router";
import DirectMessages from "../components/DirectMessages";
import Pending from "../components/Pending";
import MainNavbar from "../components/MainNavbar";
import ChatComponent from "../components/ChatComponent";
import { io } from "socket.io-client";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#151C2C",
    border: "none",
    color: "white",
    borderRadius: "13px",
    width: "30rem"
  }
};

export default function Home() {
  const [state, setState] = useContext(Context);
  const [isTablet, changeIsTablet] = useState();
  const [openAsideFriend, setOpenAsideFriend] = useState(false);
  const [openAsideGroups, setOpenAsideGroups] = useState(false);
  const [activePrivetMessage, setActivePrivetMessage] = useState();
  const [openChat, setOpenChat] = useState(false);
  const [category, setCategory] = useState(0);
  const [games, setGames] = useState([]);
  const [groups, setGroups] = useState([]);
  const [createRoom, setCreateRoom] = useState(false);
  const [messages, setMessages] = useState({});
  const socket = useMemo(() => io(axios.defaults.baseURL, { auth: { token: state.token } }), [state.token]);

  const router = useRouter();

  useEffect(() => {
    changeIsTablet(Boolean(window.innerWidth <= 769));
    window.addEventListener("resize", () => {
      changeIsTablet(Boolean(window.innerWidth <= 769));
    });
  }, []);

  useEffect(() => {
    axios.get("/games").then(response => setGames(response.data.message));
    axios.get("/groups").then(response => setGroups(response.data.message)).catch(() => undefined);
  }, [state.player]);


  const { player } = state;

  const toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });


  function Form() {
    const [form, setForm] = useState({ image: "", name: "", description: "" });

    const handleChange = event => setForm({ [event.target.name]: event.target.value });

    async function createGroup(event) {
      event.preventDefault();

      axios.post("/groups", { ...form, image: await toBase64(form.image) })
        .then(() => {
          axios.get("/groups").then(response => setGroups(response.data.message))
        });
    }

    return (
      <form onSubmit={createGroup}>
        <div className="input-container">
          <label className="label-form" htmlFor="group-title">Group title</label>
          <input onChange={handleChange} id="group-title" type="text" name="name" placeholder="Enter group name" required />
        </div>
        <div className="input-container mt-1">
          <label className="label-form" htmlFor="group-description">Group description</label>
          <textarea onChange={handleChange} id="group-description" maxlength="50" name="description" placeholder="Enter group description" required />
        </div>
        <div className="upload-image__div">
          <input onChange={event => setForm({ image: event.target.files[0] })} type="file" name="image" id="upload-image" required />
          <h4 htmlFor="upload-image">Upload group image</h4>
          <label htmlFor="upload-image" className="upload-image__label">
            <span className="iconify" data-icon="heroicons-outline:upload" data-inline="false"></span>
          </label>
        </div>
        <div className="mt-2">
          <button className="primary-btn">Submit</button>
        </div>
      </form>
    )
  }

  function Group({ data, selected }) {
    return (
      <SingleGroup selected={selected}>
        <img src={`${axios.defaults.baseURL}/groups/${data._id}/image`} alt={data.name} />
        <div>
          <h3>{data.name}</h3>
          <p>{data.description}</p>
        </div>
      </SingleGroup>
    )
  }

  function SingleNews({ data }) {
    return (
      <SingleNewsStyle randomColor={Math.floor(Math.random() * 16777215).toString(16)} background={`${axios.defaults.baseURL}/games/${data.gameID}/articles/${data.id}/image`}>
        <div className="background-image" />
        <div>
          <h1>{data.title}</h1>
          <p>{data.description}</p>
        </div>
      </SingleNewsStyle>
    )
  }
  function FriendsComponent() {
    const [settings, openSettings] = useState(false);

    function CopyComponent() {
      const [copyId, setCopyId] = useState("Copy ID");
      return (
        <h3 data-tip={copyId}
          data-event-off="click"
          data-effect="solid"
          clickable="true"
          onClick={() => {
            navigator.clipboard.writeText(player?._id);
            setCopyId("Copied!");
          }}
        >
          {player?._id}
          <span className="iconify" style={{ marginInlineStart: "1rem", cursor: "pointer" }} data-icon="bx:bxs-copy" data-inline="false" />
        </h3>
      );
    }
    return (
      <AsideFriend isTablet={isTablet} open={openAsideFriend}>
        <nav>
          <div>
            <img src={player?.image} alt={player?.name} />
            <div>
              <h2>{player?.name}</h2>
              <CopyComponent />
            </div>
          </div>
          <div onClick={() => openSettings(true)}>
            <span className="iconify edit" data-icon="eva:settings-2-fill" data-inline="false" />
          </div>
        </nav>
        <Modal isOpen={settings}
          ariaHideApp={false}
          onRequestClose={() => openSettings(false)}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div className="flex-end">
            <div onClick={() => openSettings(false)}>
              <span className="iconify" style={{
                color: "#FF4848", cursor: "pointer",
                fontSize: "1.2rem", background: "white",
                borderRadius: "5px", padding: "1px",
              }} data-icon="bi:x-square-fill" data-inline="false"></span>
            </div>
          </div>
          <div className="input-container">
            <label className="label-form" htmlFor="register-email">who can send message<span className="tip">(soon)</span></label>
            <select value="Friends" disabled>
              <option value="All">All</option>
              <option value="Friends">Just Friends</option>
              <option value="specific">Specific Friends</option>
            </select>
          </div>
          <div className="input-container mt-1">
            <label className="label-form" htmlFor="register-email">My favorite games<span className="tip">(soon)</span></label>
            <select value="All" disabled>
              <option value="All">All</option>
              <option value="Fortnite">Fortnite</option>
              <option value="Grand">Grand</option>
              <option value="etc..">etc..</option>
            </select>
          </div>
          <div className="input-container mt-1">
            <label className="label-form" htmlFor="register-email">language<span className="tip">(soon)</span></label>
            <select value="English" disabled>
              <option value="English">English</option>
              <option value="Arabic">Arabic</option>
              <option value="etc">etc..</option>
            </select>
          </div>
          <div className="logout-container" onClick={() => {
            localStorage.removeItem("token");
            setState({ token: undefined, player: undefined });
            Toast.fire({
              text: "See you soon 👋",
              icon: "success"
            });
            router.push("/login");
            openSettings(false);
          }}>
            <h5><span className="iconify" data-icon="fe:logout" data-inline="false"></span>Logout</h5>
          </div>
        </Modal>

        {openChat ? (
          <ChatComponent socket={socket} activePrivetMessage={activePrivetMessage} setOpenChat={setOpenChat} />
        ) : (
          <>
            <h5>Direct Messages</h5>
            <div className="direct-messages__container">
              {player?.friends?.filter(friend => friend.status === 2)?.length !== 0 ? player?.friends?.filter(friend => friend.status === 2)?.map((data, index) => (
                <DirectMessages key={index} data={data} setOpenChat={setOpenChat} setActivePrivetMessage={setActivePrivetMessage} />
              )) : <p className="not-found__text">You don't have any friends yet, add one</p>}
            </div>
          </>
        )}
        {openChat || (
          player?.friends?.filter(friend => friend.status === 1)?.length !== 0 &&
          <>
            <h5>Pending</h5>
            <div className="pending__container">
              {player?.friends?.filter(friend => friend.status === 1)?.map((data, index) => (
                <Pending key={index} data={data} />
              ))}
            </div>
          </>
        )}
      </AsideFriend>
    )
  }
  function ArticlesComponent() {
    return (
      <div className="news-container">
        {category === 0 ? games.map(game => ({ ...game.articles[0], gameID: game._id, id: 0 })).map((article, index) => <SingleNews key={index} data={article} />) : games[category - 1].articles.map((article, index) => <SingleNews key={index} data={{ ...article, gameID: games[category - 1]._id, id: index }} />)}
      </div>
    )
  }
  return (
    <Section>
      <ReactTooltip />
      <FriendsComponent />
      <div className="open-aside-icon">
        {(isTablet && !openAsideFriend) && <div onClick={() => {
          setOpenAsideFriend(true);
          setOpenAsideGroups(false);
        }}>
          <span className="iconify" data-icon="fa-solid:user-friends" data-inline="false"></span>
        </div>}
        {(isTablet && !openAsideGroups) && <div onClick={() => {
          setOpenAsideGroups(true);
          setOpenAsideFriend(false);
        }}>
          <span className="iconify" data-icon="cryptocurrency:chat" data-inline="false"></span>
        </div>}
      </div>
      {((isTablet && openAsideFriend) || (isTablet && openAsideGroups)) && <div onClick={() => {
        setOpenAsideFriend(false);
        setOpenAsideGroups(false);
      }} style={{
        position: "fixed",
        top: "3rem",
        left: 0,
        width: "100%",
        height: "100%",
      }}></div>}

      <MainSection>
        <MainNavbar />
        <header>
          <h1>{category === 0 ? "All Categories" : games[category - 1].name}</h1>
          <ul>
            <li onClick={() => setCategory(0)} className={category === 0 ? "active-category" : ""}>All categories</li>
            {games.map(({ name }, index) => (
              <li className={category === index + 1 ? "active-category" : ""} onClick={() => setCategory(index + 1)} key={index}>{name}</li>
            ))}
          </ul>
        </header>
        <h2>News &gt;</h2>
        <ArticlesComponent />
      </MainSection>

      <GroupSection open={openAsideGroups}>
        <Modal isOpen={createRoom}
          ariaHideApp={false}
          onRequestClose={() => setCreateRoom(false)}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <Form />
        </Modal>
        <div className="create-new-group" onClick={() => setCreateRoom(true)}>
          <span className="iconify" data-icon="uil:create-dashboard" data-inline="false"></span>
        </div>
        <h5>Group Chat</h5>
        {groups.map((group, index) => <Group data={group} key={index} />)}
        {/* <Group selected /> */}
      </GroupSection>
    </Section>
  )
}
