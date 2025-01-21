import { Dispatch, SetStateAction } from "react";
import { TFilmesProps } from "./filmesTypes";

export type TAlteraProps = {
  filmeAtual: TFilmesProps;

  setFilmeAtual: Dispatch<SetStateAction<TFilmesProps>>;
};
