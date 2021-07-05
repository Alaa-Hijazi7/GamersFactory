import { Container } from "./style";
 
export default function Loader() {
  return (
    <Container>
      <svg viewBox="0 0 100 100">
        <defs>
          <filter id="shadow">
            <feDropShadow dx="0" dy="0" stdDeviation="1.5" floodColor="#272F40" />
          </filter>
        </defs>
        <circle id="spinner" style={{ fill: "transparent", stroke: "#0A64BE", strokeWidth: "7px", strokeLinecap: "round", filter: "url(#shadow)" }} cx="50" cy="50" r="45" />
      </svg>
    </Container>
  )
}