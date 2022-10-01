const { contactUs: ContactUsModal } = require("../../models");

const responseHelper = require("../../helpers/response.helper");

const addContactUs = async (req, res) => {
    try {

        const contactUsResponse = await ContactUsModal.create(req.body);
        if (contactUsResponse) {
            return responseHelper.success(
                res,
                contactUsResponse,
                "Contact Us Added Successfully!"
            );
        }
    } catch (error) {
        return responseHelper.requestfailure(res, error);
    }
};


const getAllContactUsList = async (req, res) => {
    try {
        const responseData = await ContactUsModal
            .find()
        return responseHelper.success(res, responseData, "Success");
    } catch (error) {
        return responseHelper.requestfailure(res, error);
    }
};

module.exports = {
    addContactUs,
    getAllContactUsList,
};