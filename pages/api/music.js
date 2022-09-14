// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { musics } from "../../data/Data";

export default function handler(req, res) {
  res.status(200).json(musics);
}
