import { useDrag } from "react-dnd";
import { useAppState } from "./AppStateContext";
import { DragItem } from "./DragItem";
export const useItemDrag = (item: DragItem) => {
  const { dispatch } = useAppState();
  const [, drag] = useDrag({
    item, // this contains the data about the dragged Item
    begin: () =>
      // is called when we start dragging an item
      dispatch({
        type: "SET_DRAGGED_ITEM",
        payload: item,
      }),
    end: () => dispatch({ type: "SET_DRAGGED_ITEM", payload: undefined }), // is called when we relese the item
  });
  return { drag };
};
