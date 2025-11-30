export const reqValidator = (schema) => {
  return (req, res, next) => {
    console.log("Request Validator Middleware");
    const result = schema.safeParse({
        body: req.body,
        params: req.params,
        query : req.query
    });
    if(!result.success){
        return res.status(400).json({
            status : "FAILURE",
            message: result.error.issues[0].message,
            data   : null
        });
    }
    // console.log(result.data);
    req.validated = result.data;
    next();
  };
};