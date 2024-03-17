import { TreeDetails, availableTreeMultipliers } from "../Models/Models";
import { AppAction, SetDiameter } from "../AppReducer";
import { MultiplierPicker } from "./MultiplierPicker";

interface Props {
    treeDetails: TreeDetails
    dispatchAction: (action: AppAction) => void
}

function TreeDetailsInput(props: Props) {
    return (
        <div className="tree-details-input" >
            <label htmlFor="diameter">Diametrs (cm):</label>
            <input
                type="text"
                name="diameter"
                defaultValue={0}
                onChange={(e) =>
                    props.dispatchAction({ type: 'set-diameter', id: props.treeDetails.id, diameter: +e.target.value })
                }
                className="input-field"
            />

            <label htmlFor="count">Daudzums:</label>
            <input
                type="number"
                name="count"
                defaultValue={1}
                onChange={(e) =>
                    props.dispatchAction({ type: 'set-count', id: props.treeDetails.id, count: +e.target.value })
                }
                className="input-field"
            />

            <MultiplierPicker
                options={availableTreeMultipliers}
                selectedOptionId={props.treeDetails.multiplier.id}
                onChanged={(id) => props.dispatchAction({ type: 'set-tree-multiplier', id: props.treeDetails.id, multiplierId: id }) }
            />

            <button className="remove-button" onClick={() => props.dispatchAction({ type: 'remove-tree', id: props.treeDetails.id })}>Noņemt</button>
        </div>
    )
}

export { TreeDetailsInput }