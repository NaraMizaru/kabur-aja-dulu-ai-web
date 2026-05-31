import {NextFunction, Request, Response} from "express";
import {errorResponse} from "../utils/response";
import supabase from "../config/supabase";

export const auth = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const header = req.headers.authorization;
        if (!header) {
            return errorResponse(res, 'Unauthorized', 401);
        }

        const token = header.split(' ')[1];
        if (!token) {
            return errorResponse(res, 'Unauthorized', 401);
        }

        const {data: {user}, error} = await supabase.auth.getUser(token);
        if (error) {
            return errorResponse(res, 'Unauthorized', 401);
        }

        if (!user) {
            return errorResponse(res, 'Unauthorized', 401);
        }

        req.user = user;
        next();
    } catch (error) {
        return errorResponse(res, 'Unauthorized', 401);
    }
}