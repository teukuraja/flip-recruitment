type Action = {
  type: string,
  payload: any,
  errorMessage: string,
};

type DefaultReducer = {
  loading: boolean,
  error: boolean,
  errorMessage: string,
  data: any,
};

export {Action, DefaultReducer};
