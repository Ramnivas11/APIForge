const { apiRequestSchema } = require("../validators/api.validator");
const { executeRequest } = require("../services/api.service");

const testApi = async (req, res) => {
    try {
        const validatedData = apiRequestSchema.parse(req.body);

        const result = await executeRequest(validatedData);

        return res.status(result.status).json(result);

    } catch (err) {

        return res.status(400).json({
            success: false,
            message: err.errors || err.message,
        });

    }
};

module.exports = {
    testApi,
};