// @flow

import type {Action, DefaultReducer} from '../../Types/DefaultProps';
import {
  REQ_TRANSACTION_LIST,
  REQ_TRANSACTION_LIST_FAILED,
  REQ_TRANSACTION_LIST_SUCCESS,
} from '../../Redux';

type InitialState = {
  transaction: DefaultReducer,
};

const initialState: InitialState = {
  transaction: {
    loading: false,
    error: false,
    errorMessage: '',
    data: [],
  },
};

export const transactionStore = (state = initialState, action: Action) => {
  switch (action.type) {
    case REQ_TRANSACTION_LIST:
      return {
        ...state,
        transaction: {
          ...state.transaction,
          loading: true,
          error: false,
        },
      };
    case REQ_TRANSACTION_LIST_SUCCESS:
      return {
        ...state,
        transaction: {
          ...state.transaction,
          loading: false,
          error: false,
          errorMessage: '',
          data: action.payload,
        },
      };
    case REQ_TRANSACTION_LIST_FAILED:
      return {
        ...state,
        transaction: {
          ...state.transaction,
          loading: false,
          error: true,
          errorMessage: action.errorMessage,
        },
      };
    default: {
      return {...state};
    }
  }
};
