// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { connect } from '../../../database/db';
import { db } from '../../../database';

type Data = {
    massage: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

    if(process.env.NODE_ENV === 'production') {
        return res.status(401).json({massage : "No tienes Acceso a este servicio"})
    }

    await db.connect()

    await db.disconnect()
  res.status(200).json({ massage: 'Proceso Realizado corretamente' })
}
