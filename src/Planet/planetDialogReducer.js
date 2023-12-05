export const PlanetDialogActionKind = {
  OPEN: "OPEN",
  CLOSE: "CLOSE",
};

export const planetDialogReducer = (state, action) => {
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
