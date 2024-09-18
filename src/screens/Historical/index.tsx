import { SectionList, View, Text } from 'react-native'

const data = [
  {
    title: '2022-08-26',
    data: [
      {
        category: 'Costas',
        exercise: 'Puxada frontal',
        hour: '08:56'
      },
      {
        category: 'Costas',
        exercise: 'Remada unilateral',
        hour: '08:32'
      }
    ]
  },
  {
    title: '2022-08-26',
    data: [
      {
        category: 'Costas',
        exercise: 'Puxada frontal',
        hour: '11:24'
      }
    ]
  }
]

export function Historical() {
  return (
    <View className="flex-1 bg-gray-700">
      <View className="pl-8 pr-8">
        <SectionList
          sections={data}
          keyExtractor={item => item.exercise}
          renderItem={({ item }) => (
            <View className="rounded-8 mb-3 flex-row items-center rounded bg-gray-500 p-2">
              <View className="flex-row items-center p-2">
                <View className="flex-1">
                  <Text className="font-robotoBold text-base text-white">
                    {item.category}
                  </Text>
                  <Text className="font-robotoRegular text-lg text-gray-100">
                    {item.exercise}
                  </Text>
                </View>

                <Text className="font-robotoRegular text-gray-300">
                  {item.hour}
                </Text>
              </View>
            </View>
          )}
          renderSectionHeader={({ section: { title } }) => (
            <Text className="mb-3 mt-10 font-robotoBold text-gray-200">
              {title}
            </Text>
          )}
        />
      </View>
    </View>
  )
}
