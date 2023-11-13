import { useState } from "react";
import useStyle from "./style";
import Category from "../Category/Category";

export default function CategoriesWrapper({
  items,
  title,
  actionTitle,
  submit,
  predicate,
  itemsPredicate
}) {
  const classes = useStyle();
  const [selected, setSelected] = useState([]);

  const selectItem = (item) => {
    if (Array.isArray(item)) return setSelected([...selected, ...item]);

    return setSelected([...selected, item]);
  };

  const deSelectItem = (item) => {
    if (Array.isArray(item)) {
      return setSelected(selected.filter((elem) => !item.includes(elem)));
    }

    setSelected(selected.filter((elem) => elem.uniqueId !== item.uniqueId));
  };

  const actionHanlder = () => {
    submit(selected);
    setSelected([]);
  };
  if (!items) return null;


  return (
    <div className={`${classes.root}`}>
      <h1 className={`${classes.title} text-white`}>{title}</h1>
      <div className={classes.actionArea}>
        <button className={`${classes.button}`} onClick={actionHanlder}>
          {actionTitle}
        </button>
      </div>

      {items.filter(predicate).map((item) => (
        <Category
          key={item.category}
          items={item.items.filter(itemsPredicate)}
          title={item.category}
          deSelectItem={deSelectItem}
          selectItem={selectItem}
          selected={selected}
        />
      ))}
    </div>
  );
}
