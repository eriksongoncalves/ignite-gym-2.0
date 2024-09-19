import { useState } from 'react'
import {
  View,
  Image,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Text,
  Alert
} from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import { useForm } from 'react-hook-form'

import { useAuth } from '@hooks/auth'
import { Button } from '@components/Button'
import { Input } from '@components/Input'
import { ProfileFormData, profileFormResolver } from './validationSchema'
import { ScrollView } from 'react-native-gesture-handler'

type File = {
  uri: string
  name: string
  type: string
}

export function Profile() {
  const [profilePicture, setProfilePicture] = useState<File>()
  const { updateProfile, loading } = useAuth()
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm<ProfileFormData>({
    resolver: profileFormResolver
  })

  async function onSubmit(data: ProfileFormData) {
    try {
      Keyboard.dismiss()

      let formData: FormData

      if (profilePicture) {
        formData = new FormData()
        formData.append('image', profilePicture as any)

        await updateProfile({
          id: '123456',
          ...data,
          image: formData
        })
        Alert.alert('Data saved')
      }
    } catch {
      Alert.alert('Something went wrong')
    }
  }

  async function handleSelectPicture() {
    try {
      ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.7
      }).then(response => {
        if (response.assets) {
          const asset = response.assets[0]

          setProfilePicture({
            uri: asset.uri!,
            name: asset.fileName!,
            type: asset.type!
          })
        }
      })
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log('Could not open gallery', e)
    }
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} className="flex-1">
      <ScrollView className="flex-1" bounces={false}>
        <View className="flex-1 bg-gray-700 pb-10">
          {/* FOTO */}
          <View className="mb-9 mt-6 w-full items-center">
            <Image
              source={{
                uri:
                  profilePicture?.uri ||
                  'https://avatars.githubusercontent.com/u/13559274?s=150&v=4'
              }}
              className="mb-3 h-[148px] w-[148px] rounded-full border-2 border-gray-400"
            />
            <Button variant="link" onPress={handleSelectPicture}>
              <Text className="font-robotoBold text-base text-green-500">
                Alterar foto
              </Text>
            </Button>
          </View>

          {/* FORM */}
          <View className="pl-8 pr-8">
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
              className="mb-12"
              onChangeText={value => setValue('email', value)}
              errorMessage={errors.email?.message}
            />

            <Text className="mb-2 font-robotoBold text-base text-gray-200">
              Alterar senha
            </Text>

            <Input
              {...register('old_password')}
              placeholder="Senha antiga"
              className="mb-4"
              secureTextEntry
              onChangeText={value => setValue('old_password', value)}
              errorMessage={errors.old_password?.message}
            />

            <Input
              {...register('new_password')}
              placeholder="Nova senha"
              className="mb-8"
              secureTextEntry
              onChangeText={value => setValue('new_password', value)}
              errorMessage={errors.new_password?.message}
            />

            <Button onPress={handleSubmit(onSubmit)} disabled={loading}>
              <Text className="font-robotoBold text-base text-white">
                Atualizar
              </Text>
            </Button>
          </View>
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  )
}
