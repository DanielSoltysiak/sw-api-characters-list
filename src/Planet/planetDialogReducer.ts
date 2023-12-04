import { PlanetData } from "../types";

export enum PlanetDialogActionKind {
  OPEN = "OPEN",
  CLOSE = "CLOSE",
}

interface PlanetDialogState {
  isOpen: boolean;
  data?: PlanetData;
}

interface PlanetDialogAction {
  type: PlanetDialogActionKind;
  payload?: PlanetData;
}

export const planetDialogReducer = (
  state: PlanetDialogState,
  action: PlanetDialogAction
) => {
  const { type, payload } = action;
  switch (type) {
    case PlanetDialogActionKind.OPEN:
      return {
        isOpen: true,
        data: payload,
      };
    case PlanetDialogActionKind.CLOSE:
      return {
        ...state,
        isOpen: false,
      };
    default:
      return state;
  }
};
