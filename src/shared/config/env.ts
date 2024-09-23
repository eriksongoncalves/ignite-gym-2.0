import { z } from 'zod'

const envSchema = z.object({
  EXPO_PUBLIC_ONE_SIGNAL_API_KEY: z.string()
})

// eslint-disable-next-line no-underscore-dangle
const _env = envSchema.safeParse(process.env)

if (_env.success === false) {
  // eslint-disable-next-line no-console
  console.error('Invalid enviroment variables!', _env.error.format())
  throw new Error('Invalid enviroment variables!')
}

export const env = _env.data
