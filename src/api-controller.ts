import { Request, Response } from "express";
import { IButtonInput } from "./models/button-input";

let inputs: IButtonInput[] = [];

export class ApiController {
    public addInput(req: Request, res: Response) {
        // get input object from request body
        const buttonInput = req.body as IButtonInput;
        // add to array
        inputs.push(buttonInput);
        // return success
        res.status(204).send();
    }

    public getInputs(req: Request, res: Response) {
        // send current array of input objects
        res.json(inputs);
        // clear out inputs array
        inputs = [];
    }
}

export const apiController = new ApiController();
