import { CheckboxField } from "@/Types/field"
import { View,Text,Switch } from "react-native"


type Props = {
  field: CheckboxField
}

export function CheckboxFieldView({ field }: Props) {
  return (
    <View style={{ flexDirection: "row" }}>
      <Text>{field.label}   </Text>
      <Switch value={field.checked} />
    </View>
  )
}