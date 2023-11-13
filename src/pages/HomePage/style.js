import { createUseStyles } from 'react-jss'
import createMediaQuery from '../../utilities/createMediaQuery'
import colors from '../../constants/colors'

export default createUseStyles({
    homeRoot: {
        padding: [0, 24],
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        [createMediaQuery(768, null)]: {
            flexDirection: 'row',
        }
    },
    categoriesWrapper: {
        // backgroundColor: colors.c01,
        width: '100%',
        padding: [20, 16],
        margin: [30, 0],
        borderRadius: 5,
        [createMediaQuery(768, null)]: {
            width: '49%',
            '&:first-child': {
                marginRight: '1%'

            }
        }
    }
})