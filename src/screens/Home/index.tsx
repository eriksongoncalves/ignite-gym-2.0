import { useState } from 'react'
import { Text, View, Image } from 'react-native'

import { useNavigation } from '@react-navigation/native'

import LogoutIcon from '@assets/images/logout.svg'
import { Button } from '@components/Button'
import { FilterItem } from '@components/FilterItem'
import { FlatList } from 'react-native-gesture-handler'

const exercisesList = ['COSTAS', 'BÍCEPS', 'TRÍCEPS', 'OMBRO', 'PERNA']

export function Home() {
  const navigation = useNavigation()

  const [filterSelected, setFilterSelected] = useState('COSTAS')

  return (
    <View className="flex-1 bg-gray-700">
      <View className="h-[148px] flex-row items-center bg-gray-600 pl-8 pr-8 pt-5">
        <View className="flex-1 flex-row items-center">
          <Image
            source={{
              uri: 'https://avatars.githubusercontent.com/u/13559274?s=96&v=4'
            }}
            className="mr-4 h-[64px] w-[64px] rounded-full border border-gray-400"
          />

          <View className="flex">
            <Text className="font-robotoRegular text-base text-white">
              Olá,
            </Text>
            <Text className="font-robotoBold text-base text-white">
              Erikson Gonçalves
            </Text>
          </View>
        </View>
        <View>
          <Button variant="link" onPress={() => {}}>
            <LogoutIcon width={24} height={24} />
          </Button>
        </View>
      </View>

      <View>
        <FlatList
          className="ml-8 mt-10"
          horizontal
          showsHorizontalScrollIndicator={false}
          data={exercisesList}
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
    </View>
  )
}
