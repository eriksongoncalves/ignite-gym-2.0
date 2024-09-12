import { ImageBackground, View, Text, SafeAreaView } from 'react-native'
import { useForm } from 'react-hook-form'
import { useNavigation } from '@react-navigation/native'

import background from '@assets/images/background.png'
import Logo from '@assets/images/logo.svg'
import { Input } from '@components/Input'
import { Button } from '@components/Button'
import { SignUpFormData, signUpFormResolver } from './validationSchema'

export function SignUp() {
  const navigation = useNavigation()
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm<SignUpFormData>({
    resolver: signUpFormResolver
  })

  function onSubmit(data: SignUpFormData) {
    console.log('>>> SignUp', data)
  }

  return (
    <View className="flex-1 bg-gray-700">
      <ImageBackground
        source={background}
        resizeMode="cover"
        className={`h-[60%] flex-1 pl-10 pr-10`}
      >
        <SafeAreaView className="flex-1">
          <View className="mt-[55px] items-center">
            <Logo />
            <Text className="font-robotoRegular text-sm text-white">
              Treine sua mente e o seu corpo
            </Text>
          </View>

          <View className="mt-[100px] w-full">
            <Text className="mb-4 text-center font-robotoBold text-xl text-white">
              Crie sua conta
            </Text>

            <Input
              {...register('name')}
              autoFocus
              placeholder="Nome"
              className="mb-4"
              onChangeText={value => setValue('name', value)}
              errorMessage={errors.name?.message}
            />

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
            />

            <Input
              {...register('confirm_password')}
              placeholder="Confirme a senha"
              className="mb-4"
              secureTextEntry
              onChangeText={value => setValue('confirm_password', value)}
              errorMessage={errors.confirm_password?.message}
            />

            <Button onPress={handleSubmit(onSubmit)}>
              <Text className="font-robotoBold text-base text-white">
                Criar e acessar
              </Text>
            </Button>
          </View>

          <View className="mt-auto w-full">
            <Button
              variant="outline"
              onPress={navigation.goBack}
              className="mb-4"
            >
              <Text className="font-robotoRegular text-base text-green-500">
                Voltar para o login
              </Text>
            </Button>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </View>
  )
}
