import React, { useState } from "react";
import CategoryItem from "../CategoryItem/CategoryItem";
import Chevron from "../icons/Chevron";
import useStyles from "./style";

export default function Category({
  title,
  items,
  selected,
  selectItem,
  deSelectItem,
}) {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  if (!items || items.length === 0) return null;

  const stopPropagation = (e) => e.stopPropagation();
  const isChecked = items.every((item) => selected.includes(item));
  const handleChange = (e) => {
    stopPropagation(e);
    if (isChecked) return deSelectItem(items);
    selectItem(items);
  };

  return (
    <div className={`${classes.root} text-pink-500`}>
      <div className={`${classes.heading} bg-slate-700 font-bold tracking-wide text-xl`} onClick={toggle}>
        <h1 className={`${classes.title} `}>{title}</h1>
        <span className={`${classes.quantity}`}>quantity: {items.length}</span>
        <span className={classes.rightSide}>
          <span className={classes.checkbox}>
            <input
              type="checkbox"
              checked={isChecked}
              onClick={stopPropagation}
              onChange={handleChange}
            />
          </span>
          <Chevron
            width={30}
            height={30}
            className={`${classes.chevron} ${!isOpen && classes.chevronOpen}`}
          />
        </span>
      </div>

      <div
        className={`${classes.itemsWrapper} ${
          isOpen ? classes.open : classes.closed
        }`}
      >
        {items.map((item) => (
          <div key={item.uniqueId} className={classes.item}>
            <CategoryItem
              data={item}
              selectItem={selectItem}
              deSelectItem={deSelectItem}
              isChecked={selected.includes(item)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
