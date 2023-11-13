import { createUseStyles } from "react-jss";
import colors from "../../constants/colors";

export default createUseStyles({
  root: {},
  item: {
    marginBottom: 8,
  },
  heading: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: [10, 20],
    // backgroundColor: colors.c04,
    marginBottom: 12,
    borderRadius: 5,
    cursor: "pointer",
  },
  title: {
    width: 50,
    height: 50,
    borderRadius: "50%",
    backgroundColor: "#86FFF4",
    fontSize: 24,
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    lineHeight: "24px",
    margin: 0,
  },
  // quantity: {
  //   // fontSize: 20,
  //   // fontWeight: 400,
  // },
  checkbox: {
    lineHeight: 0,
    marginRight: 12,
    "& > input": {
      width: 20,
      height: 20,
    },
  },
  closed: {
    height: 0,
  },
  open: {
    hight: "auto",
  },
  itemsWrapper: {
    position: "relative",
    overflow: "hidden",
  },
  rightSide: {
    display: "flex",
    alignItems: "center",
  },
  chevron: {
    transition: "all 300ms linear",
  },
  chevronOpen: {
    transform: "rotateZ(180deg)",
  },
});
