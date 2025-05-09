import { useAppSelector } from "@/shared/hooks/useAppSelector";
import { Bet } from "../model/types";
import { selectStatusSortType } from "../model/selectStatusSortType";

export const useGetSortedBets = (bets: Bet[]) => {
     const statusSortType = useAppSelector(selectStatusSortType)
    switch (statusSortType) {
      case 'asc':
        return [...bets].sort((a, b) => {
          if (a.status < b.status) return -1;
          if (a.status > b.status) return 1;
          return 0;
        }); 
      case 'desc':
        return [...bets].sort((a, b) => {
         if (a.status < b.status) return 1;
         if (a.status > b.status) return -1;
        return 0;
        }); 
      default:
        return bets;
    }
  }
