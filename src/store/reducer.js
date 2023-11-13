const appReducer = (pervState, action) => {
  switch (action.type) {
    case "SET_DATA": {
      let allData = action.payload.reduce((acc, curr) => {
        if (acc[curr.id]) acc[curr.id].push(curr);
        else acc[curr.id] = [curr];

        return acc;
      }, {});

      allData = Object.keys(allData).map(category=> ({ category, items: [...allData[category]] }));
      return { ...pervState, allData };
    }

    case "START_LOADING": {
      return { ...pervState, isLoading: true };
    }
    case "END_LOADING": {
      return { ...pervState, isLoading: false };
    }

    case "SELECT_ITEM": {
      const { item } = action.payload;
      const { allData } = pervState;

      // change the isSelected proprty of allData
      const categoryIndex = allData.findIndex((el) => el.category === item.id);
      const { category, items } = allData[categoryIndex];
      const updatedItems = items.map((element) => {
        if (element.uniqueId === item.uniqueId) {
          element.isSelected = true;
          return element;
        } else {
          return element;
        }
      });

      // in second step we update allData base in ~updatedItems~
      allData[categoryIndex].items = updatedItems;

      return { ...pervState, allData };
    }

    case "DESELECT_ITEM": {
      const { item } = action.payload;
      const { allData } = pervState;

      // change the isSelected proprty of allData
      const categoryIndex = allData.findIndex((el) => el.category === item.id);
      const { category, items } = allData[categoryIndex];
      const updatedItems = items.map((element) => {
        if (element.uniqueId === item.uniqueId) {
          element.isSelected = false;
          return element;
        } else {
          return element;
        }
      });

      // in second step we update allData base in ~updatedItems~
      allData[categoryIndex].items = updatedItems;

      return { ...pervState, allData };
    }

    default: {
      return pervState;
    }
  }
};

export default appReducer;
