import { NumberField } from "@/Types/field"
import { View,Text,Switch } from "react-native"


type Props = {
  field: NumberField
}

export function NumberFieldView({ field }: Props) {
  return (
    <View>
      <Text>{field.label}: {field.value}</Text>

    </View>
  )
}