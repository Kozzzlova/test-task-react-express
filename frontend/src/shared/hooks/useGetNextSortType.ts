import { SortType } from "@/features/FilteredBets/model/types";
import { useAppSelector } from "./useAppSelector";
import { selectStatusSortType } from "@/features/FilteredBets/model/selectStatusSortType";
import { useAppDispatch } from "./useAppDispatch";
import { setStatusSortType } from "@/features/FilteredBets/model/betsSlice";

export const useGetNextSortType = () => {
  const sortType = useAppSelector(selectStatusSortType);
  const dispatch = useAppDispatch();

  return () => {
    let nextSortType: SortType;
    switch (sortType) {
      case null:
        nextSortType = 'asc';
        break;
      case 'asc':
        nextSortType = 'desc';
        break;
      case 'desc':
        nextSortType = null;
        break;
      default:
        nextSortType = null;
    }

    dispatch(setStatusSortType(nextSortType));
  };
};