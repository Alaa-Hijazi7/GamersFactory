import { useState, useContext } from "react";
import { MainNav } from "./style";
import Context from "@script/Context";
import axios from "axios";

export default function MainNavbar() {
  const [open, setOpen] = useState(false);
  const [{ player }] = useContext(Context);
  const [ID, setID] = useState();

  function sendFriendRequest(event) {
    event.preventDefault();
    if (player?.friends?.find(friend => friend.user == ID)) return;
    axios.post("/friends/send", { id: ID })
      .then(() => {
        Toast.fire({
          text: "Friend request sent",
          icon: "success"
        });
      })
      .catch(error => {
        Toast.fire({
          text: error.response.data.message,
          icon: "error"
        });
      });
  }

  return (
    <MainNav open={open}>
      {open &&
        <form onSubmit={sendFriendRequest}>
          <input type="text" value={ID} onChange={event => setID(event.target.value)} name="add-friend__input" id="add-friend__input" placeholder="add friend by id" />
        </form>}
      <div onClick={() => setOpen(!open)}>
        <button className="add-friend__btn">
          <span className="iconify" data-icon="akar-icons:person-add" data-inline="false"></span>
          Add Friend
        </button>
        <div className="shadow" />
      </div>
    </MainNav>
  )
}