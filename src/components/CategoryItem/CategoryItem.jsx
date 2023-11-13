import useStyles from './style'

export default function CategoryItem({ data, selectItem, deSelectItem, isChecked }) {
    const classes = useStyles();
    const hanldeChange= e=> {
        e.stopPropagation()
        if(isChecked) return deSelectItem(data)
        selectItem(data)
    }
    let date = new Date(data.created)
    date = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`

    return(
        <div className={classes.root}>
            <div className={classes.contentWrapper}>

                <span className={classes.id}># {data.uniqueId}</span>
                <span className={classes.date}>{date}</span>
                <span className={classes.checkbox}>
                    <input type='checkbox' onChange={hanldeChange} checked={isChecked} />
                    </span>
            </div>
        </div>
    )
}