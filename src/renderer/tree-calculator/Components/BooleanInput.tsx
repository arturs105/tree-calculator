interface Props {
    value: boolean
    onChanged: (value: boolean) => void
    label: string
}

export function BooleanInput(props: Props) {
    return (
        <label>
            <span>{props.label}</span>
            <input
                type="checkbox"
                onChange={(e) => props.onChanged(e.target.checked)}
            />
        </label>
    )
}
