const multer = require("multer");
const responseHelper = require("./response.helper");
const cloudinary = require("cloudinary").v2;
const cloudinaryStorage = require("cloudinary-multer");
const fs = require("fs");
const path = require("path");

const IS_DEV = process.env.NODE_ENV === "dev";

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

const storage = IS_DEV
    ? multer.diskStorage({
        destination: (req, file, cb) => cb(null, "public/images"),
        filename: (req, file, cb) => {
            const fileName = `${Date.now()}_${file.originalname}`;
            return cb(null, fileName);
        },
    })
    : cloudinaryStorage({
        cloudinary,
    });

const multerStorage = multer({ storage });
console.log("env is", process.env.NODE_ENV);

const uploadSingleFile = (req, res, next) => {
    multerStorage.single("file")(req, res, (error) => {
        console.log("file request", req.file);
        if (error) {
            console.log("error in file upload", error);
            return responseHelper.badRequest(res, "File Upload Error");
        }
        console.log("file upload success send message", req.file, req.body);
        req.imageUrl = req.file
            ? IS_DEV
                ? req.file?.filename
                : `${req.file?.public_id}.${req.file.format}`
            : undefined;
        console.log("image url", req.imageUrl);
        return next();
        // return responseHelper.success(res, null, "file upload success")
    });
};

const uploadMultipleFile = (req, res, next) => {
    multerStorage.array("files", 5)(req, res, (error) => {
        console.log("multi file request", req.files)
        if (error) {
            console.log("error in file upload", error)
            return responseHelper.badRequest(res, "Files Upload Error")
        }
        console.log("Multi file upload success send message", req.files, req.body)
        const imagesUrl = IS_DEV ? req.files.map(({ filename }) => filename) : req.files.map(({ public_id, format }) => `${public_id}.${format}`);

        req.imagesUrl = imagesUrl;
        return next();
        // return responseHelper.success(res, null, "Multi file upload success")
    });
};

//local directory
const removeSingleImageFile = (fileName) => {
    try {
        if (!IS_DEV) {
            const fileNameSplitList = fileName.split(".");
            const fileNameWithoutExt = fileNameSplitList.splice(
                0,
                fileNameSplitList?.length - 1
            );
            cloudinary.uploader.destroy(fileNameWithoutExt, (error, result) => {
                if (error) {
                    console.log("error in file remove", error);
                    return responseHelper.badRequest(
                        res,
                        "Cloudinary File Remove  Error"
                    );
                }
                // return responseHelper.success(res, result, "Cloudinary file Remove success")
            });
        } else {
            const filePath = path.join(__dirname, "../../public/images", fileName);
            if (fs.existsSync(filePath)) {
                fs.unlink(filePath, (error) => {
                    if (error) {
                        console.log({ fileRemoveError: error });
                        return responseHelper.badRequest(res, "Local File Remove  Error");
                    }
                    console.log("file remove successfully", filePath);
                    //  return responseHelper.success(res, null, "Local file Remove success")
                });
            }
            //  return responseHelper.success(res, null, "Local file Not exist success")
        }
    } catch (error) {
        return responseHelper.requestfailure(res, " File Remove exceptiion  Error");
    }
};

const removeMultiImageFileIndex = (fileName, res) => {
    try {
        if (!IS_DEV) {
            const fileNameSplitList = fileName.split(".");
            const fileNameWithoutExt = fileNameSplitList.splice(
                0,
                fileNameSplitList?.length - 1
            );
            cloudinary.uploader.destroy(fileNameWithoutExt, (error, result) => {
                if (error) {
                    console.log("error in file remove", error);
                    throw new Error(" Multi Cloudinary File Remove Error");
                }
                console.log(result, "Cloudinary file Remove success");
                // if (isLastIndex) {
                //     //  return responseHelper.success(res, null, "Multi Cloudinary files Remove success")
                // }
            });
        } else {
            const filePath = path.join(__dirname, "../../public/images", fileName);
            if (fs.existsSync(filePath)) {
                fs.unlink(filePath, (error) => {
                    if (error) {
                        console.log({ fileRemoveError: error });
                        throw new Error("Local File Remove  Error");
                    }
                    console.log("file remove successfully", filePath);
                    // if (isLastIndex) {
                    //     //   return responseHelper.success(res, null, "Multi Local files Remove success")
                    // }
                });
            }
        }
    } catch (error) {
        console.log("file remove excep", error);
        throw new Error("Multi File Remove exceptiion  Error");
    }
};

const removeMultipleImageFiles = (fileNameList, res) => {
    try {
        if (fileNameList) {
            const nameList = typeof fileNameList === "string" ? [fileNameList] : fileNameList

            for (let i = 0; i < nameList?.length; i++) {
                removeMultiImageFileIndex(nameList[i], res);
            }
        }
    } catch (error) {
        console.log({ error: error.message });
        return responseHelper.requestfailure(
            res,
            "Multi Files Remove exceptiion  Error"
        );
    }
};

module.exports = {
    uploadSingleFile,
    uploadMultipleFile,
    removeSingleImageFile,
    removeMultipleImageFiles,
};
