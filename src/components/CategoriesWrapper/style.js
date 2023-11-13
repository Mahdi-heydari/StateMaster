import { createUseStyles } from "react-jss";
import colors from "../../constants/colors";

export default createUseStyles({
  root: {},
  title: {
    fontSize: 30,
    lineHeight: "30px",
    textAlign: "center",
    marginBottom: 16,
  },
  actionArea: {
    marginBottom: 20,
    display: "flex",
    justifyContent: "start",
    alignItems: "end",
  },
  button: {
    all: "unset",
    backgroundColor:"#86FFF4",
    color: "black",
    padding: [16, 24],
    borderRadius: 5,
    fontSize: 24,
    marginLeft: "auto",
    fontWeight: "bold",
    cursor: "pointer",
  },
  disabled: {
    opacity: 0.5,
    cursor: "not-allowed",
  },
});
