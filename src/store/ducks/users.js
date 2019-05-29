export const Types = {
  ADD_REQUEST: "users/ADD_REQUEST",
  ADD_SUCCESS: "users/ADD_SUCCESS",
  ADD_FAILURE: "users/ADD_FAILURE"
};

const initialState = {
  data: [
    {
      id: 19474041,
      name: "Luciano Tavernard",
      username: "ltavernard",
      avatar_url: "https://avatars1.githubusercontent.com/u/19474041?v=4",
      coordenates: {
        latitude: -5.81622313,
        longitude: -35.21520224
      }
    }
  ],
  error: null,
  loading: false
};

export default function users(state = initialState, action) {
  switch (action.type) {
    case Types.ADD_REQUEST:
      return { ...state, loading: true };
    case Types.ADD_SUCCESS:
      return {
        ...state,
        data: [...state.data, action.payload.user],
        error: null,
        loading: false
      };
    case Types.ADD_FAILURE:
      return { ...state, error: action.payload.error, loading: false };
    default:
      return state;
  }
}

export const Creators = {
  addUserRequest: user => ({
    type: Types.ADD_REQUEST,
    payload: {
      user
    }
  }),

  addUserSuccess: user => ({
    type: Types.ADD_SUCCESS,
    payload: {
      user
    }
  }),

  addUserFailure: error => ({
    type: Types.ADD_FAILURE,
    payload: {
      error
    }
  })
};
