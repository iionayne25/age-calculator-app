import path from "path";
import { fsPromises } from "fs/promises";

export default function handler(req, res) {
  const { day, month, year } = req.body;
  console.log("d/m/y: ", day, month, year);
  if (!day || !month || !year) {
    console.log("Data not found")
    return res
      .status(400)
      .json({ day: "", month: "", year: "" });
  }
 
  const result = { day: day, month: month, year: year};
  res.status(200).json(result);
 console.log(result)
}
