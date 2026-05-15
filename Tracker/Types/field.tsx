export interface Field{
    id: string
    label: string
    weight: number
}

export interface CheckboxField extends Field{
    type: "checkbox"
    checked: boolean
}

export interface TextField extends Field{
    type: "text"
    value: string
}

export interface NumberField extends Field{
    type: "number"
    value: number
}

export type TrackerField =
    | CheckboxField
    | TextField
    | NumberField