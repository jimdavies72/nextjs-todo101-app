import dbConnection from "@/lib/db";
import mongoose from "mongoose";

export async function register() {

  //console.log("conn state before: ", mongoose.connection.readyState);
  await dbConnection();
  //if (mongoose.connection.readyState === 0) {
  //}
  //console.log("conn state after: ", mongoose.connection.readyState);
}
