import { useHistory } from "react-router-dom";
import decode from "jwt-decode";
import { useDispatch } from "react-redux";
export const useAuth = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));
  if (user?.token) {
    const d = decode(user?.token);
    if (d.exp * 1000 < new Date().getTime()) {
      dispatch({ type: "LOGOUT" });
      history.replace("/session-expired");
    }
  } else {
    // console.log(this.props);
    history.replace("/auth?req=k");
  }
};
