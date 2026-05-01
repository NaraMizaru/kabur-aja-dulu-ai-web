import {Response} from 'express';

export const successResponse = (
    res: Response,
    data: any,
    message = 'Success',
    status = 200
) => {
    return res.status(status).json({
        success: true,
        message,
        data,
    });
};

export const errorResponse = (
    res: Response,
    message = 'Error',
    status = 500,
    errors?: any
) => {
    return res.status(status).json({
        success: false,
        message,
        errors,
    });
};

export const zodErrorResponse = (res: Response, issues: any) => {
    const errors = issues.map((err: any) => ({
        field: err.path[0],
        message: err.message,
    }));

    return res.status(400).json({
        success: false,
        message: 'Validation error',
        errors,
    });
};