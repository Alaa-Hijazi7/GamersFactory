import axios from "axios";
import { DirectMessagesDiv } from "./style";

export default function DirectMessages({ data, setOpenChat, setActivePrivetMessage }) {
  return (
    <DirectMessagesDiv onClick={() => {
      setOpenChat(true);
      setActivePrivetMessage(data);
    }}>
      <div>
        <img src={`${axios.defaults.baseURL}/users/${data.user}/avatar`} alt={data?.name} />
        <div>
          <h6>{data.name}</h6>
          <p>Hello ?</p>
        </div>
      </div>
      <h6>24 min ago</h6>
    </DirectMessagesDiv>
  )
}