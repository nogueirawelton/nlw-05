import { http } from './app';
import "../websocket/client";
import "../websocket/admin";

http.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT} !`)
})