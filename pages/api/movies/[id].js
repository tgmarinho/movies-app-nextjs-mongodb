import { ObjectID } from "mongodb";
import { connectToDatabase } from "../../../util/mongodb";

export default async (req, res) => {
  const { db } = await connectToDatabase();

  const {
    query: { id },
  } = req;

  console.log("thiago", id);
  console.log(typeof id);
  const movie = await db.collection("movies").findOne({ _id: ObjectID(id) });
  console.log("movie", movie);
  res.json(movie);
};
