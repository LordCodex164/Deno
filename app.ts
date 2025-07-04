
import { Application, Router } from "@oak/oak";

const router = new Router();

router.get("/", (ctx) => {
  ctx.response.body = "Hello from oak";
});

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

app.listen({port: 3133});
