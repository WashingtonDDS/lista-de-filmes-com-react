import { Dispatch, SetStateAction } from "react";
import { TFilmesProps } from "./filmesTypes";

export type TListaProps = {
  items: string[];
  setItems: Dispatch<SetStateAction<TFilmesProps[]>>;
};
