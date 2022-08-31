import type { NextApiRequest, NextApiResponse } from 'next';
import vimdb from 'vimdb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(await new vimdb('en-US').getShow(req.query.id?.toString()!));
}
