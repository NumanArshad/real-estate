const { property: propertyModel, blogs: blogsModel } = require("../../models");

const { model } = require("mongoose");
const { paginationProps } = require("../../helpers/pagination.helper");
const responseHelper = require("../../helpers/response.helper");
const { removeMultipleImageFiles } = require("../../helpers/uploadImages.helper");
const { getTopThreeActiveSaleAgents } = require("./users.controller");
const { getApprovedBlogsByFilter } = require("./blogs.controller");
const addProperty = async (req, res) => {
    try {
        const { id } = req.token_decoded;

        const newProperty = await propertyModel.create({
            ...req.body,
            images: req.imagesUrl,
            createdBy: id

        });
        if (newProperty) {
            return responseHelper.success(
                res,
                newProperty,
                "Property Added Successfully!"
            );
        }
    } catch (error) {
        removeMultipleImageFiles(req.imagesUrl, res);
        return responseHelper.requestfailure(res, error);
    }
};

const updateProperty = async (req, res) => {
    try {

        removeMultipleImageFiles(req.body.deleteImages, res);
        const payload = { ...req.body }
        if (req.imagesUrl?.length) {
            const payloadImages = typeof payload.images === "string" ? [payload.images] : payload.images
            payload.images = [...(payloadImages ?? []), ...req.imagesUrl]
        }
        const updatedProperty = await propertyModel.findByIdAndUpdate(
            { _id: req?.params?.id },
            payload,
            { new: true }
        );
        if (updatedProperty) {
            return responseHelper.success(
                res,
                updatedProperty,
                "Property Updated Successfully!"
            );
        }
    } catch (error) {
        return responseHelper.requestfailure(res, error);
    }
};
const getAllProperties = async (req, res) => {
    try {
        const { skip, limit } = paginationProps(req);
        const responseData = await propertyModel
            .find()
            .skip(skip)
            .limit(limit)
            .sort({ created_at: -1 });
        const total = await propertyModel.find().countDocuments();
        return responseHelper.success(res, { responseData, total }, "Success");
    } catch (error) {
        return responseHelper.requestfailure(res, error);
    }
};

const getSingleProperty = async (req, res) => {
    return responseHelper.success(res, req.propertyDetail, "Success");
};

// const activateInActiveProperty = async (req, res) => {
//     try {
//         const isActive = req.body.isActive
//         const propertyDetail = await propertyModel.findByIdAndUpdate({ _id: req.params.id }, { isActive }, { new: true })
//         if (propertyDetail) {
//             return responseHelper.success(res, propertyDetail, `Property ${isActive ? `activated` : `in activated`} successfully!`)
//         }
//         return responseHelper.requestfailure(res, `Property ${isActive ? `activate` : `in-activate`} failure!`)
//       } catch (error) {
//         return responseHelper.requestfailure(res, error);
//       }
// };

const activateInActiveProperty = async (req, res) => {
    try {
        const isActive = req.body.isActive;
        const propertyDetail = await propertyModel.findByIdAndUpdate(
            { _id: req.params.id },
            { isActive },
            { new: true }
        );
        if (propertyDetail) {
            return responseHelper.success(
                res,
                propertyDetail,
                `Property ${isActive ? `activated` : `in activated`} successfully!`
            );
        }
        return responseHelper.requestfailure(
            res,
            `Property ${isActive ? `activate` : `in-activate`} failure!`
        );
    } catch (error) {
        return responseHelper.requestfailure(res, error);
    }
};

const propertyById = async (req, res, next) => {
    try {
        const propertyDetail = await propertyModel.findById({ _id: req.params.id }).populate("createdBy", { first_name: 1, last_name: 1, profile: 1 });
        console.log({ propertyDetail });
        if (propertyDetail) {
            req.propertyDetail = propertyDetail;
            return next();
        }
        return responseHelper.requestfailure(res, "Property not found");
    } catch (error) {
        return responseHelper.requestfailure(res, error);
    }
};

///////////////////////////Public API method ////////////////////////
//Home page api of sale agent blo

const getAllActiveProperties = async (req, res) => {
    try {

        const { skip, limit } = paginationProps(req)

        const searchQuery = { isActive: true }
        if (req.query?.text) {
            searchQuery["$text"] = { $search: req.query?.text }
        }
        if (req.query?.status) {
            searchQuery["$or"] = [{ status: req.query?.status }]
        }

        const data = await propertyModel.find(searchQuery).skip(skip).limit(limit).sort({ created_at: -1 });
        const total = await propertyModel.find(searchQuery).countDocuments();

        const propertiesByCategory = await propertyModel.aggregate([
            { $match: { isActive: true } },
            { $group: { _id: '$type', count: { $sum: 1 } } },
        ])


        const topTHreeActiveSaleAgent = await getTopThreeActiveSaleAgents(req)

        const approvedBlogsList = await getApprovedBlogsByFilter(req)
        return responseHelper.success(res, {
            activeProperties: {
                data, total
            },
            propertiesByCategory,
            saleAgents: topTHreeActiveSaleAgent,
            approvedBlogsList
        }, "Success")

    }
    catch (error) {

        return responseHelper.requestfailure(res, error)
    }
}

const getAllPropertiesDropDownOptions = async (req, res) => {
    try {
        const data = await propertyModel.find({ isActive: true }, { title: 1 }).sort({ created_at: -1 });
        return responseHelper.success(res, data, "Success")
    }
    catch (error) {
        return responseHelper.requestfailure(res, error)
    }
}



///property detail with agent information of property
const propertyDetail = async (req, res) => {
    try {
        console.log(req.propertyDetail)
        return responseHelper.success(
            res,
            req.propertyDetail,
            `Success!`
        );
    } catch (error) {
        console.log("err")
        return responseHelper.requestfailure(res, error);
    }
};

// ///properties list on sale agent detail in public api
// const propertiesBySaleAgentId = async (saleAgentId) => {
//     try {
//         const properties = await propertyModel.find(
//             { saleAgentId },
//         );
//         return properties
//     }
//     catch (error) {
//         throw new Error(error)
//     }
// }
module.exports = {
    addProperty,
    updateProperty,
    getAllProperties,
    getSingleProperty,
    propertyById,
    activateInActiveProperty,
    getAllActiveProperties,
    propertyDetail,

    getAllPropertiesDropDownOptions
};
