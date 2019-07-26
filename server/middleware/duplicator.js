const duplicator =  (req,res,next) => {
    req.neq = 2*req.params.id;
    next();
};

module.exports = duplicator;