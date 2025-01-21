import { Dispatch, SetStateAction } from "react";
import { TFilmesProps } from "./filmesTypes";

export type TAlteraProps = {
  filmeAtual: TFilmesProps;
  filmes: TFilmesProps[];
  setFilmeAtual: Dispatch<SetStateAction<TFilmesProps>>;
  setFilmes: Dispatch<SetStateAction<TFilmesProps[]>>;
};
