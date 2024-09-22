import { useEffect } from 'react'
import {
  View,
  StatusBar,
  SafeAreaView,
  Text,
  Platform,
  Image,
  Dimensions
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import AntDesign from '@expo/vector-icons/AntDesign'

import { Button } from '@components/Button'
import theme from '@shared/tailwindConfig'
import PersonIcon from '@assets/images/person.svg'
import AlterIcon from '@assets/images/alter.svg'
import RepetitionsIcon from '@assets/images/repetitions.svg'

const data = {
  id: '1',
  image:
    'https://pratiquefitness.com.br/blog/wp-content/uploads/2023/07/Exercicio-puxada-beneficios-variacoes-e-como-fazer-2.jpg',
  title: 'Puxada frontal',
  series: 3,
  repetitions: 12
}

const windowWidth = Dimensions.get('window').width

export function Exercise() {
  const navigation = useNavigation<any>()
  const statusBarHeight = parseInt(StatusBar.currentHeight?.toFixed() || '0')

  useEffect(() => {
    navigation?.setOptions({
      tabBarStyle: { display: 'none' },
      tabBarVisible: false
    })
    return () =>
      navigation.setOptions({
        tabBarStyle: undefined,
        tabBarVisible: undefined
      })
  }, [])

  return (
    <View className="flex-1 bg-gray-700">
      <SafeAreaView
        className="flex-1"
        style={{
          paddingTop: Platform.OS === 'ios' ? 0 : statusBarHeight
        }}
      >
        {/* HEADER */}
        <View className="bg-gray-600 pb-5 pl-8 pr-8 pt-4">
          <Button
            variant="link"
            onPress={() => navigation.navigate('home_tab')}
            className="self-start"
          >
            <AntDesign
              name="arrowleft"
              size={24}
              color={theme.colors.green['500']}
            />
          </Button>
          <View className="w-full flex-row items-center justify-between">
            <Text className="font-robotoBold text-xl text-white">
              Puxada frontal
            </Text>
            <View className="mt-3 flex-row">
              <PersonIcon />

              <Text className="ml-1 font-robotoRegular text-base text-gray-200">
                Costas
              </Text>
            </View>
          </View>
        </View>

        <View className="mt-8 flex-1 pl-8 pr-8">
          <Image
            source={{ uri: data.image }}
            width={windowWidth - 64}
            height={windowWidth - 64}
          />

          <View className="mt-3 w-full rounded-lg bg-gray-600 p-4 pt-5">
            <View className="mb-6 flex-row items-center justify-center">
              <AlterIcon />
              <Text className="ml-1 mr-10 font-robotoRegular text-lg text-gray-200">
                {data.series} séries
              </Text>

              <RepetitionsIcon />
              <Text className="ml-1 font-robotoRegular text-lg text-gray-200">
                {data.repetitions} repetições
              </Text>
            </View>
            <Button>
              <Text className="font-robotoBold text-base text-white">
                Marcar como realizado
              </Text>
            </Button>
          </View>
        </View>
      </SafeAreaView>
    </View>
  )
}
