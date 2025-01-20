import { Dispatch, SetStateAction } from "react";
import { TFilmesProps } from "./filmesTypes";

export type TCadastraProps = {
  setFilmes: Dispatch<SetStateAction<TFilmesProps[]>>;
};
