const catchErrors = function (handler) {
  return async function wrappedHandler(req, res, next) {
    try {
      return await handler(req, res, next);
    } catch (err) {
      next(err);
    }
  };
};

export default catchErrors;
