import { useNavigate } from "react-router";
export function GoHomeButton() {
  const navigate = useNavigate();
  return <i className="ph ph-house-line" onClick={() => navigate("/")}></i>;
}
