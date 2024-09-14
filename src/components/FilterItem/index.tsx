import { TouchableOpacity, TouchableOpacityProps, Text } from 'react-native'
import { tv, VariantProps } from 'tailwind-variants'

const variants = tv({
  base: 'rounded-8 min-w-[100px] items-center rounded border border-gray-600 bg-gray-600 p-3',
  variants: {
    selected: {
      true: 'border-green-500'
    }
  }
})

type FilterItemVariants = VariantProps<typeof variants>

type FilterItemProps = {
  text: string
  className?: string
} & FilterItemVariants &
  TouchableOpacityProps

export function FilterItem({
  className,
  selected,
  text,
  ...rest
}: FilterItemProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      className={variants({ selected })}
      {...rest}
    >
      <Text
        className={`font-robotoRegular uppercase ${selected ? 'text-green-500' : 'text-gray-200'}`}
      >
        {text}
      </Text>
    </TouchableOpacity>
  )
}
