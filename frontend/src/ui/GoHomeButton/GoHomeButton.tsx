import { useNavigate } from "react-router";
import "./GoHomeButton.css";
export function GoHomeButton() {
  const navigate = useNavigate();
  return (
    <button className="home-icon-button" title="Início">
      <i className=" ph ph-house-line" onClick={() => navigate("/")}></i>
    </button>
  );
}
