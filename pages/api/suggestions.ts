import type { NextApiRequest, NextApiResponse } from 'next';
import { suggestionsData } from '../../src/data/mock';
import Suggestion from '../../src/model/Suggestion';

type Data = {
  suggestions: Suggestion[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  setTimeout(() => {
    res.status(200).json({ suggestions: suggestionsData });
  }, 300);
}
