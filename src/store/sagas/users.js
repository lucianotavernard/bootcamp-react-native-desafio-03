import { put, call, select } from "redux-saga/effects";

import api from "~/services/api";

import { Creators as UsersActions } from "~/store/ducks/users";

export function* addUser(action) {
  try {
    const { user, coordenates } = action.payload;
    const { data } = yield call(api.get, `users/${user}`);

    const useIsDuplicated = yield select(state =>
      state.users.data.find(user => user.id === data.id)
    );

    if (useIsDuplicated) {
      yield put(UsersActions.addUserFailure("O usuário já existe na lista!"));

      return;
    }

    const repositoryData = {
      id: data.id,
      url: data.html_url,
      name: data.name || user,
      avatar_url: data.avatar_url,
      username: data.login,
      coordenates
    };

    yield put(UsersActions.addUserSuccess(repositoryData));
  } catch (error) {
    yield put(UsersActions.addUserFailure("O usuário informado não existe"));
  }
}
