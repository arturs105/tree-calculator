interface Props {
    checked: boolean
    onChanged: (value: boolean) => void
    label: string
}

export function BooleanInput(props: Props) {
    return (
        <label>
            <span>{props.label}</span>
            <input
                type="checkbox"
                checked={props.checked}
                onChange={(e) => props.onChanged(e.target.checked)}
            />
        </label>
    )
}
