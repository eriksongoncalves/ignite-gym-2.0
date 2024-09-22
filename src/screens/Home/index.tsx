import { useState } from 'react'
import { Text, View, Image, FlatList, StatusBar } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import LogoutIcon from '@assets/images/logout.svg'
import ArrowRightIcon from '@assets/images/arrow-right.svg'

import { Button } from '@components/Button'
import { FilterItem } from '@components/FilterItem'
import { useAuth } from '@hooks/auth'

const exercisesCategoriesList = [
  'COSTAS',
  'BÍCEPS',
  'TRÍCEPS',
  'OMBRO',
  'PERNA'
]

const exercisesList = [
  {
    id: '1',
    image:
      'https://pratiquefitness.com.br/blog/wp-content/uploads/2023/07/Exercicio-puxada-beneficios-variacoes-e-como-fazer-2.jpg',
    title: 'Puxada frontal',
    series: 3,
    repetitions: 12
  },
  {
    id: '2',
    image:
      'https://blog.ciaathletica.com.br/wp-content/uploads/2023/05/Cia-Athletica-Remada-curvada-Autores-Grupo-S2-Marketing-Freepik.jpg',
    title: 'Remada curvada',
    series: 2,
    repetitions: 12
  },
  {
    id: '3',
    image: 'https://www.origym.com.br/banners/remada-unilateral.jpg',
    title: 'Remada unilateral',
    series: 3,
    repetitions: 12
  },
  {
    id: '4',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo75Y5bklVLecBJglEmP3wPmx3cbCm23m0EQ&s',
    title: 'Levantamento terra',
    series: 3,
    repetitions: 12
  }
]

export function Home() {
  const navigation = useNavigation()
  const { user, signOut } = useAuth()
  const statusBarHeight = StatusBar.currentHeight?.toFixed() || 0

  const [filterSelected, setFilterSelected] = useState('COSTAS')

  return (
    <View className={`mt-[${statusBarHeight}] flex-1 bg-gray-700`}>
      {/* HEADER */}
      <View className="flex-row items-center bg-gray-600 pb-5 pl-8 pr-8 pt-5">
        <View className="flex-1 flex-row items-center">
          <Image
            source={{
              uri: 'https://avatars.githubusercontent.com/u/13559274?s=96&v=4'
            }}
            className="mr-4 h-16 w-16 rounded-full border-2 border-gray-400"
          />

          <View>
            <Text className="font-robotoRegular text-base text-white">
              Olá,
            </Text>
            <Text className="font-robotoBold text-base text-white">
              {user?.name}
            </Text>
          </View>
        </View>
        <View>
          <Button variant="link" onPress={signOut}>
            <LogoutIcon width={24} height={24} />
          </Button>
        </View>
      </View>

      {/* FILTERS CATEGORIES */}
      <View>
        <FlatList
          className="ml-8 mt-10"
          horizontal
          showsHorizontalScrollIndicator={false}
          data={exercisesCategoriesList}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <View className="mr-3">
              <FilterItem
                text={item}
                selected={filterSelected === item}
                onPress={() => setFilterSelected(item)}
              />
            </View>
          )}
        />
      </View>

      <View className="mt-10 flex-row items-center justify-between pl-8 pr-8">
        <Text className="font-robotoBold text-base text-gray-200">
          Exercícios
        </Text>
        <Text className="font-robotoRegular text-sm text-gray-200">4</Text>
      </View>

      <View className="mt-3 flex-1 pl-8 pr-8">
        <FlatList
          className="flex-1"
          bounces={false}
          showsVerticalScrollIndicator={false}
          data={exercisesList}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <View className="rounded-8 mb-3 flex-row items-center rounded bg-gray-500 p-2 pr-5">
              <Image
                source={{ uri: item.image }}
                width={67}
                height={67}
                className="mr-4 rounded-md"
              />

              <View className="mr-2 flex-1">
                <Text className="font-robotoBold text-lg text-white">
                  {item.title}
                </Text>
                <Text className="mt-2 font-robotoBold text-lg text-white">
                  <Text className="font-robotoRegular text-sm text-gray-200">
                    {item.series} séries {item.repetitions} repetições
                  </Text>
                </Text>
              </View>

              <Button variant="link">
                <ArrowRightIcon width={9} height={16} />
              </Button>
            </View>
          )}
        />
      </View>
    </View>
  )
}
