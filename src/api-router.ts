import { Router } from "express";
import { apiController } from "./api-controller";

class ApiRoutes {
    public router: Router = Router();

    constructor() {
        this.config();
    }

    private config(): void {

        this.router.get("/inputs", apiController.getInputs);

        this.router.post("/inputs/add", apiController.addInput);

    }
}

export const apiRouter = new ApiRoutes().router;
