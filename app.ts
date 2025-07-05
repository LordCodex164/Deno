
import { Application, Router } from "@oak/oak";
import todosRoutes from "./routes/todo.ts"

const router = new Router();

//creating a middleware with deno
router.use(async (ctx, next) => {
    console.log("First Middleware")
    ctx.response.body = "First Middleware"
    await next()
})

//how to enable cors with deno
router.use(async (ctx, next) => {
    ctx.response.headers.set("Access-Control-Allow-Origin", "*")
    ctx.response.headers.set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE")
    ctx.response.headers.set("Access-Control-Allow-Headers", "Content-Type")
    await next()
})

router.get("/", (ctx) => {
  ctx.response.body = "Hello from oak";
});

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());
//registered todosRoutes
app.use(todosRoutes.routes())
app.use(todosRoutes.allowedMethods())

app.listen({port: 3133});
