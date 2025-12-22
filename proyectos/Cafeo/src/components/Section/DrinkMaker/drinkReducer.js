import { DRINK_STEPS } from './drinkData';

export const ACTIONS = {
  SELECT_BASE: 'SELECT_BASE',
  SELECT_MILK: 'SELECT_MILK',
  TOGGLE_EXTRA: 'TOGGLE_EXTRA',
  RESET: 'RESET',
};

export const initialState = {
  base: null,
  milk: null,
  extras: [],
  currentStep: DRINK_STEPS.BASE,
};

export const drinkReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SELECT_BASE:
      return {
        ...state,
        base: action.payload,
        currentStep: DRINK_STEPS.MILK,
      };
    case ACTIONS.SELECT_MILK:
      return {
        ...state,
        milk: action.payload,
        currentStep: DRINK_STEPS.EXTRAS,
      };
    case ACTIONS.TOGGLE_EXTRA: {
      const exists = state.extras.includes(action.payload);

      return {
        ...state,
        extras: exists
          ? state.extras.filter((e) => e !== action.payload)
          : [...state.extras, action.payload],
      };
    }

    case ACTIONS.RESET:
      return initialState;

    default:
      return state;
  }
};
