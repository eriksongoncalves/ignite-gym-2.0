import { ImageBackground, View, Text, SafeAreaView } from 'react-native'
import { useForm } from 'react-hook-form'
import { useNavigation, StackActions } from '@react-navigation/native'

import background from '@assets/images/background.png'
import Logo from '@assets/images/logo.svg'
import { Input } from '@components/Input'
import { Button } from '@components/Button'
import { SignInFormData, signInFormResolver } from './validationSchema'

export function SignIn() {
  const navigation = useNavigation()

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

  function handleNavigateToHome() {
    navigation.dispatch(StackActions.replace('home'))
  }

  function onSubmit(data: SignInFormData) {
    console.log(data)
    handleNavigateToHome()
  }

  return (
    <View className="flex-1 bg-gray-700">
      <ImageBackground
        source={background}
        resizeMode="cover"
        className={`h-[70%] flex-1 pl-10 pr-10`}
      >
        <SafeAreaView className="flex-1">
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
              autoFocus
              errorMessage={errors.email?.message}
            />

            <Input
              {...register('password')}
              placeholder="Senha"
              className="mb-4"
              secureTextEntry
              onChangeText={value => setValue('password', value)}
              errorMessage={errors.password?.message}
            />

            <Button onPress={handleSubmit(onSubmit)}>
              <Text className="font-robotoBold text-base text-white">
                Acessar
              </Text>
            </Button>
          </View>

          <View className="mt-auto w-full">
            <Text className="mb-3 text-center font-robotoRegular text-base text-white">
              Ainda não tem acesso?
            </Text>

            <Button
              variant="outline"
              onPress={handleNavigateToSignUp}
              className="mb-4"
            >
              <Text className="font-robotoRegular text-base text-green-500">
                Ainda não tem acesso?
              </Text>
            </Button>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </View>
  )
}
