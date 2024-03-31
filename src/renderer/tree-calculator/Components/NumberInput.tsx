interface Props {
    value: number
    onChanged: (value: number) => void
    label: string
}

export function NumberInput(props: Props) {
    return (
        <label>
            <span>{props.label}</span>
            <input
                type="number"
                min={0} 
                max={1}
                step={0.1}
                value={props.value} 
                onChange={(e) => props.onChanged(+e.target.value)}
                className="number-input"
            />
        </label>
    )
}
