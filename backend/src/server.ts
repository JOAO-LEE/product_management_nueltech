import app from "./app";
import "dotenv/config";

app.listen(process.env.PORT, () => {
  console.log("APP RUNNING ON PORT 3000")
});