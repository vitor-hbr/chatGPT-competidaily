import type { NextApiRequest, NextApiResponse } from "next";
import { themesData } from "../../src/data/mock";
import Theme from "../../src/model/Theme";

type Data = {
  themes: Theme[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ themes: themesData });
}
