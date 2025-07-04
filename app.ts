// const text = "This is a learning curve"

// const encoder = new TextEncoder();

// const data = encoder.encode(text)

// Deno.writeFile("message.txt", data).then(() => {
//     console.log("Wrote to File!")
// })  

const handler = (req: any) => {
    return new Response("hello there")
}


Deno.serve({ port: 3133 }, handler);
