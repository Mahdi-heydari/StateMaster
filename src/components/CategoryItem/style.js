import { createUseStyles } from "react-jss";
import colors from "../../constants/colors";

export default createUseStyles({
    root: {
        padding: [10, 16],
        backgroundColor: "#2C3333",
        color:"white",
        borderRadius: 5,
    },
    contentWrapper: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    id: {
        fontSize: 20,
        fontWeight: 400,
    },
    date: {
        fontSize: 22,
        fontWeight: 400,
    },
    checkbox: {
        lineHeight: 0,
        '& > input': {
            width: 20,
            height: 20,
        }
    }
})