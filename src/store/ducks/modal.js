export const Types = {
  SHOW: 'modal/SHOW',
  HIDE: 'modal/HIDE',
};

const initialState = {
  visible: false,
  coordinates: {},
};

export default function modal(state = initialState, action) {
  switch (action.type) {
    case Types.SHOW:
      return {
        ...state,
        visible: true,
        coordinates: action.payload.coordinates,
      };
    case Types.HIDE:
      return { ...state, visible: false };
    default:
      return state;
  }
}

export const Creators = {
  showModal: coordinates => ({
    type: Types.SHOW,
    payload: {
      coordinates,
    },
  }),

  hideModal: () => ({
    type: Types.HIDE,
  }),
};
