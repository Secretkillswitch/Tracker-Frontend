import { CheckboxFieldView } from "@/components/CheckboxField";
import { NumberFieldView } from "@/components/NumberField";
import { CheckboxField, NumberField } from "@/Types/field";
import { Text, View } from "react-native";

export default function Index() {
  const test = {
  id: "1",
  label: "Words",
  weight: 1,
  type: "checkbox",
  checked: true
  } satisfies CheckboxField

  const test2 = {
  id: "2",
  label: "Words2",
  weight: 1,
  type: "number",
  value: 2
  } satisfies NumberField

  
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <CheckboxFieldView field={test} />
      <NumberFieldView field={test2} />
    </View>
  );
}
