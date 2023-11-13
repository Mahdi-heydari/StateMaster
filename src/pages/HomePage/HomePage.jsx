/* eslint-disable no-unused-vars */
import useStyles from "./style";
import { useAppContext } from "../../store";
import { useEffect } from "react";
import { deSelecetItem, loadData, selectItem } from "../../store/action";
import CategoriesWrapper from "../../components/CategoriesWrapper/CategoriesWrapper"
import data from "../../services/data";

export default function HomePage() {
  const { state, dispatch } = useAppContext();
  const { allData } = state;
  const classes = useStyles();

  useEffect(
    function () {
      dispatch(loadData());
    },
    [dispatch]
  );

  const add = (items) => {
    items.forEach((item) => dispatch(selectItem(item)));
  };

  const deleteItem = (items) => {
    items.forEach((item) => dispatch(deSelecetItem(item)));
  };

  // separate categorizedItems and selectedItems from ~allData~
  function filterSelected(category) {
    return !category.items.every(item=> item.isSelected);
  }

  function filterUnSelected(category) {
    return !category.items.every(item=> !item.isSelected);
  }

  function filterSelectedItems (item){
    return !item.isSelected
  };
  
  function filterDeselectedItems (item){
    return item.isSelected

  }

  return (
    <div className={`${classes.homeRoot} text-gray-500 font-sans font-semibold`}>
      <div className={`${classes.content}`}>
        <div className={`${classes.categoriesWrapper} bg-gray-800`}>
          <CategoriesWrapper items={allData} predicate={filterSelected} itemsPredicate={filterSelectedItems}  title="All Data" actionTitle={"Add"} submit={add} />
        </div>

        <div className={`${classes.categoriesWrapper} bg-gray-800 `}>
          <CategoriesWrapper items={allData} predicate={filterUnSelected} itemsPredicate={filterDeselectedItems} title="Selected Data" actionTitle={"Delete"} submit={deleteItem} />
        </div>
      </div>
    </div>
  );
}
