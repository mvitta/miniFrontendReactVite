import { ResponseGolang } from '../types/types'

export default async function getBooks(): Promise<ResponseGolang> {
  const response = await fetch(import.meta.env.VITE_API_URL)
  const data: ResponseGolang = await response.json()
  return data
}
