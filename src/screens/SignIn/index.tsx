import {
  ImageBackground,
  View,
  Text,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
  StatusBar
} from 'react-native'
import { useForm } from 'react-hook-form'
import { useNavigation } from '@react-navigation/native'

import background from '@assets/images/background.png'
import Logo from '@assets/images/logo.svg'
import { Input } from '@components/Input'
import { Button } from '@components/Button'
import { useAuth } from '@hooks/auth'
import { SignInFormData, signInFormResolver } from './validationSchema'

export function SignIn() {
  const navigation = useNavigation()
  const { signIn, loading } = useAuth()
  const statusBarHeight = StatusBar.currentHeight?.toFixed() || 0

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm<SignInFormData>({
    resolver: signInFormResolver
  })

  function handleNavigateToSignUp() {
    navigation.navigate('signup')
  }

  async function onSubmit(data: SignInFormData) {
    try {
      await signIn(data)
    } catch {
      Alert.alert('Login ou senha inválidos')
    }
  }

  return (
    <View className={`mt-[${statusBarHeight}] flex-1 bg-gray-700`}>
      <TouchableWithoutFeedback
        onPress={Keyboard.dismiss}
        accessible={false}
        className="flex-1"
      >
        <ImageBackground
          source={background}
          resizeMode="cover"
          className={`h-[70%] flex-1 pl-10 pr-10`}
        >
          <View className="mt-[55px] items-center">
            <Logo />
            <Text className="font-robotoRegular text-sm text-white">
              Treine sua mente e o seu corpo
            </Text>
          </View>

          <View className="mt-[200px] w-full">
            <Text className="mb-4 text-center font-robotoBold text-xl text-white">
              Acesse sua conta
            </Text>

            <Input
              {...register('email')}
              placeholder="E-mail"
              keyboardType="email-address"
              className="mb-4"
              onChangeText={value => setValue('email', value)}
              errorMessage={errors.email?.message}
            />

            <Input
              {...register('password')}
              placeholder="Senha"
              className="mb-4"
              secureTextEntry
              onChangeText={value => setValue('password', value)}
              errorMessage={errors.password?.message}
              returnKeyLabel="Acessar"
              onSubmitEditing={handleSubmit(onSubmit)}
            />

            <Button onPress={handleSubmit(onSubmit)} disabled={loading}>
              <Text className="font-robotoBold text-base text-white">
                Acessar
              </Text>
            </Button>
          </View>

          <View className="mb-7 mt-auto w-full">
            <Text className="mb-3 text-center font-robotoRegular text-base text-white">
              Ainda não tem acesso?
            </Text>

            <Button
              variant="outline"
              onPress={handleNavigateToSignUp}
              className="mb-4"
              disabled={loading}
            >
              <Text className="font-robotoRegular text-base text-green-500">
                Ainda não tem acesso?
              </Text>
            </Button>
          </View>
        </ImageBackground>
      </TouchableWithoutFeedback>
    </View>
  )
}
