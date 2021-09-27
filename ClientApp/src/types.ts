export type PlantType = {
  id: number | undefined
  name: string
  type: string
  location: string
  watering: string
  pot: number
  description: string
}
export type VinylType = {
  id: number | undefined
  album: string
  artist: string
  releaseYear: number | undefined
  genre: string
}
export type CrystalType = {
  id: number | undefined
  name: string
  size: string
  color: string
  description: string
}
export type APIError = {
  errors: Record<string, string[]>
  status: number
  title: string
  traceId: string
  type: string
}
