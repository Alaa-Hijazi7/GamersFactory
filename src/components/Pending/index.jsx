import { PendingDiv } from "./style";
import axios from "axios";
import { useContext } from "react";
import Context from "@script/Context";

export default function Pending({ data }) {
  const [state, setState] = useContext(Context);
  return (
    <PendingDiv>
      <div>
        <img src={`${axios.defaults.baseURL}/users/${data.user}/avatar`} alt={data.name} />
        <h6>{data.name}</h6>
      </div>
      <div className="actions">
        <div onClick={() => {
          axios.post("friends/send", { id: data.user }).then(() => {
            setState({
              player: {
                ...state.player,
                friends: [
                  ...state.player.friends.filter(friend => friend.user !== data.user),
                  { ...data, status: 2 }
                ]
              }
            })
          })
        }}>
          <span className="iconify" data-icon="mdi:check-bold" data-inline="false" />
        </div>
        <div onClick={() => {
          axios.post("friends/send", { id: data.user }, { params: { reject: true } }).then(() => {
            setState({ player: { ...state.player, friends: state.player.friends.filter(friend => friend.user !== data.user) } })
          })
        }}>
          <span className="iconify" data-icon="mdi:alpha-x" data-inline="false"></span>
        </div>
      </div>
    </PendingDiv>
  )
}