const Constants = {
  TRANSACTION_STATUS: {
    PENDING: 'PENDING',
    SUCCESS: 'SUCCESS',
    FAILED: 'FAILED',
  },
  SORT_BY: {
    NAME_ASC: 1,
    NAME_DESC: 2,
    DATE_NEW: 3,
    DATE_OLD: 4,
  },
  RESPONSE: {
    SUCCESS: 200,
    FORBIDDEN: 403,
    UNAUTHORIZED: 401,
    NOT_FOUND: 404,
    SERVER_ERROR: 500,
  },
};

export default Constants;
