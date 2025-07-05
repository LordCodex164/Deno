import { Application, Router } from "@oak/oak";

const router = new Router();

//creating our routes

router.get("/todos", (ctx) => {});

router.post("/todos", (ctx) => {});

router.put("/todos", (ctx) => {});

router.delete("/todos", (ctx) => {});

export default router