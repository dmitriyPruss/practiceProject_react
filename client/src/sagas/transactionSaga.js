import { put } from 'redux-saga/effects';
import ACTION from '../actions/actionTypes';

export function * getTransactionsSaga () {
  yield put({ type: ACTION.GET_TRANSACTIONS_REQUEST });
  try {
    // const { data: transactions } = yield API.getTransactions();

    yield put({
      type: ACTION.GET_TRANSACTIONS_SUCCESS,
      transactions: transactions,
    });
  } catch (error) {
    yield put({ type: ACTION.GET_TRANSACTIONS_ERROR, error: error });
  }
}

export function * getUsersSaga () {
  // отправить экшн ACTION_TYPES.GET_USERS_REQUEST
  yield put(getUsersRequest()); // отправка екшна
  // yield put({ type: ACTION_TYPES.GET_USERS_REQUEST }); // отправка екшна

  try {
    //   юзеры = загрузка()
    const { data: users } = yield API.getUsers();
    //   отправить экшн  ACTION_TYPES.GET_USERS_SUCCESS

    yield put(getUsersSuccess(users));
    // yield put({
    //   type: ACTION_TYPES.GET_USERS_SUCCESS,
    //   users: users,
    // });
  } catch (e) {
    //    отправить экшн  ACTION_TYPES.GET_USERS_ERROR
    yield put(getUsersError(e));
  }
}
