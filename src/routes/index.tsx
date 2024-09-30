import { LinkingOptions, NavigationContainer } from '@react-navigation/native'
import { useAuth } from '@hooks/auth'

import { AppTabRoutes } from './app.tab.routes'
import { AuthStackRoutes } from './auth.stack.routes'

const linking: LinkingOptions<ReactNavigation.RootParamList> = {
  prefixes: ['ignitegym://', 'com.teste.ignitegym://'],
  config: {
    screens: {
      exercise: {
        path: 'exercise/:exerciseId',
        exact: true,
        parse: {
          exerciseId: (exerciseId: string) => exerciseId
        }
      }
    }
  }
}

export function Routes() {
  const { user } = useAuth()

  return (
    <NavigationContainer linking={linking}>
      {user?.id ? <AppTabRoutes /> : <AuthStackRoutes />}
    </NavigationContainer>
  )
}
