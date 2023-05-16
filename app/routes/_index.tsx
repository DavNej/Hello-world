import type { V2_MetaFunction } from '@remix-run/node'
import { json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'

export const meta: V2_MetaFunction = () => {
  return [{ title: 'Hello world' }]
}

export async function loader() {
  return json({ caption: process.env.CAPTION })
}

export default function Index() {
  const data = useLoaderData()
  return (
    <div className='flex flex-col justify-center items-center text-slate-50 h-screen w-screen'>
      <h1 className='text-5xl font-bold'>Hello world! 🌍</h1>
      <p className='mt-2'>
        ✨<span className='mx-2'>{data.caption}</span>✨
      </p>
    </div>
  )
}
