import { Dispatch, SetStateAction } from "react";
import { FilmesProps } from "./filmesInterfaces";

export interface AlteraProps {
  modalAlterar: boolean;
  filmeAtual: FilmesProps;
  filmes: FilmesProps[];
  setFilmeAtual: Dispatch<SetStateAction<FilmesProps>>;
  setFilmes: Dispatch<SetStateAction<FilmesProps[]>>;
  setModalAlterar: Dispatch<SetStateAction<boolean>>;
}
