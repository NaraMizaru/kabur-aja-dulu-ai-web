import {existsSync, mkdirSync} from "fs";
import multer from "multer";
import path from "path";

const uploadDir = "storage/uploads";

if (!existsSync(uploadDir)) {
    mkdirSync(uploadDir, {recursive: true});
}

const storage = multer.diskStorage({
    destination: (_, __, cb) => {
        cb(null, uploadDir);
    },

    filename: (_, file, cb) => {
        const uniqueName = `${Date.now()}-${file.originalname}`;
        cb(null, uniqueName);
    },
});

export const upload = multer({
    storage,
    fileFilter: (_, file, cb) => {
        const ext = path.extname(file.originalname);

        if (ext !== ".pdf") {
            return cb(new Error("Only PDF files are allowed"));
        }

        cb(null, true);
    },
});
