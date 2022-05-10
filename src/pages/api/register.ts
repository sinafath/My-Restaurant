
import type { NextApiRequest, NextApiResponse } from 'next'
import {API_URL} from '../../Config'
import cookie from "cookie"

export default async (req: NextApiRequest, res:NextApiResponse) => {
    if (req.method === 'POST') {
        const { identifier, password } = req.body
        const APiResponse = await fetch(`${API_URL}/api/auth/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                identifier,
                password,
            }),
        })
        if (APiResponse.ok) {
            // Set Cookie
            const data = await APiResponse.json()
            res.setHeader(
                'Set-Cookie',
                cookie.serialize('token', data.jwt, {
                    httpOnly: true,
                    secure: process.env.NODE_ENV !== 'development',
                    maxAge: 60 * 60 * 24 * 7 * 4 , // 1 month
                    sameSite: 'strict',
                    path: '/',
                })
            )

            res.status(200).json({ user: data.user })
        } else {
            res
            .status(APiResponse.status)
            .json({ message: APiResponse.statusText })
        }
    } else {
        res.setHeader('Allow', ['POST'])
        res.status(405).json({ message: `Method ${req.method} not allowed` })
    }
}