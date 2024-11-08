import app from "./app.js";
import Connect from "./config/db_connection.js";

Connect();

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server Running on Port ${PORT}`);
});
