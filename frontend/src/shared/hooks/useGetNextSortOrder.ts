import { SortBy, SortOrder } from "@/features/FilteredBets/model/types";
import { useAppSelector } from "./useAppSelector";
import { useAppDispatch } from "./useAppDispatch";
import { selectSortBy, selectSortOrder } from "@/features/FilteredBets/model/selectSort";
import { setSortBy, setSortOrder } from "@/features/FilteredBets/model/betsSlice";

export const useGetNextSortOrder = (field: SortBy) => {
  const sortOrder = useAppSelector(selectSortOrder);
  const sortBy = useAppSelector(selectSortBy);
  const dispatch = useAppDispatch();
  

  return () => {
    if (sortBy === field) {
      let nextSortOrder: SortOrder;
    switch (sortOrder) {
      case undefined:
        nextSortOrder = 'asc';
        break;
      case 'asc':
        nextSortOrder = 'desc';
        break;
      case 'desc':
        nextSortOrder = undefined;
        break;
      default:
        nextSortOrder = undefined;
    }

    dispatch(setSortOrder(nextSortOrder));
    } else {
      dispatch(setSortOrder('asc'));
      dispatch(setSortBy(field))
    }
  };
};