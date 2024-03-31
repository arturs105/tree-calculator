import { MultiplierDetails } from "../Models/Models";

interface Props {
    selectedOptionId: number
    options: MultiplierDetails[]
    onChanged: (selectedId: number) => void
    label?: string
}

export function MultiplierPicker(props: Props) {
    const options = props.options.map((multiplierDetails) => {
        return <option key={multiplierDetails.id} value={multiplierDetails.id}>{multiplierDetails.label}</option>
    })

    const label = <span>{props.label}</span>

    return (
        <label className="multiplier-details-input">
        { props.label !== undefined && label }
            <select
                value={props.selectedOptionId}
                onChange={(e) => props.onChanged(+e.target.value)}
                className="input-field"
            >
                {options}
            </select>
        </label>
    )
}