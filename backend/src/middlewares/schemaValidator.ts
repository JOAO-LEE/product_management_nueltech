import { Request, Response, NextFunction } from "express";
import { ZodSchema } from "zod";

const validate =
  <T>(schema: ZodSchema<T>) =>
  (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse(req.body);
    if (!result.success) {
      return res
        .status(400)
        .json({ message: "Validation error", errors: result.error.flatten() });
    }

    req.body = result.data;
    next();
  };

export default validate;
