const app = require("./server/app.server");
port = process.env.PORT;
const { connectDb } = require("./db/connection");

connectDb()
  .then(() => {
    app.listen(port, () => {
      console.log(`server listen in the port ${port}`);
    });
  })
  .catch((err) => {
    console.log("mongodb connection failed");
  });
