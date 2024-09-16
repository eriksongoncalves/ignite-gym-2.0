import { ReactNode } from 'react'

export type SignInCredentials = Credentials

export type User = {
  id: string
  name: string
  email: string
}

export type SignUpInput = Omit<User, 'id'> & {
  password: string
}

export type AuthContextProps = {
  user: User | undefined
  loading: boolean
  signIn(credentials: SignInCredentials): Promise<void>
  signOut(): Promise<void>
  signUp(data: SignUpInput): Promise<void>
  forgotPassword: (email: string) => void
}

export type AuthProviderProps = {
  children: ReactNode
}
