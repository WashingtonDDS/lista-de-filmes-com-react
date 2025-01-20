import { Dispatch, SetStateAction } from "react";
import { TFilmesProps } from "./filmesTypes";

export type TListaProps = {
  itens: TFilmesProps[];
  setItens: Dispatch<SetStateAction<TFilmesProps[]>>;
  lidarComOAlterar: (filme: TFilmesProps) => void;
};
