import React, { useReducer } from "react";
// import './App.css';
import { MultiplierDetails, TreeDetails, availableCitiesMultipliers, availableLocationMultipliers, availableTreeCuttingReasons, availableTreeMultipliers } from './Models/Models'
import { TreeDetailsInput } from "./Components/TreeDetailsInput";
import { AppState, appRedcuer } from "./AppReducer";
import { MultiplierPicker } from "./Components/MultiplierPicker";
import { BooleanInput } from "./Components/BooleanInput";
import { NumberInput } from "./Components/NumberInput";

const initialAppState: AppState = {
    trees: [{
        id: 0,
        diameter: 0,
        count: 1,
        multiplier: availableTreeMultipliers[0]
    }],
    treeCuttingReason: availableTreeCuttingReasons[0],
    cityMultiplier: availableCitiesMultipliers[2],
    locationMultiplier: availableLocationMultipliers[0],
    municipalityMultiplier: 0.5,
    usePointSeventMultiplier: true
}

function calculateTotalCost(state: AppState): number {
    return state.trees.reduce((result, current) =>
        result + calculateCostForTree(
            current,
            state.treeCuttingReason,
            state.cityMultiplier,
            state.locationMultiplier,
            state.municipalityMultiplier,
            state.usePointSeventMultiplier),
        0
    )
}

function calculateCostForTree(
    treeDetails: TreeDetails, 
    cuttingReason: MultiplierDetails, 
    cityMultiplier: MultiplierDetails, 
    locationMultiplier: MultiplierDetails,
    municipalityMultiplier: number,
    usePointSeventMultiplier: boolean
): number {
    const diameterFactor = usePointSeventMultiplier ? 0.702804 : 1
    return treeDetails.diameter / diameterFactor
        * treeDetails.multiplier.multiplier 
        * cuttingReason.multiplier 
        * treeDetails.count
        * cityMultiplier.multiplier
        * locationMultiplier.multiplier
        * municipalityMultiplier
}

function TreeCalculator() {
    const [state, dispatch] = useReducer(appRedcuer, initialAppState)

    const treeInputs = state.trees.map(treeDetails => 
        <TreeDetailsInput
            treeDetails={treeDetails} dispatchAction={dispatch} key={treeDetails.id} />
    )

    return (
        <div className="app" >
            <h1>Koku ciršanas izmaksu kalkulators</h1>
            <form>
                {treeInputs}
                <br/>
                <button id="add-button" onClick={(e) => { e.preventDefault(); dispatch({type: 'add-tree'})}}>+ Pievienot</button>
                <br/>

                <div className="multiplier-picker-container">
                    <MultiplierPicker
                        options={availableTreeCuttingReasons}
                        selectedOptionId={state.treeCuttingReason.id}
                        onChanged={(id) => dispatch({ type: 'set-cutting-reason', reasonId: id })}
                        label="Ciršanas iemesls: "
                    />

                    <br/>

                    <MultiplierPicker
                        options={availableCitiesMultipliers}
                        selectedOptionId={state.cityMultiplier.id}
                        onChanged={(id) => dispatch({ type: 'set-city-multiplier', multiplierId: id})}
                        label="Pilsēta: "
                    />

                    <br/>

                    <MultiplierPicker
                        options={availableLocationMultipliers}
                        selectedOptionId={state.locationMultiplier.id}
                        onChanged={(id) => dispatch({ type: 'set-location-multiplier', multiplierId: id })}
                        label="Atrašanās vieta: "
                    />

                    <br/>

                    <NumberInput
                        value={state.municipalityMultiplier}
                        onChanged={(multiplier) => dispatch({type: 'set-municipality-multiplier', multiplier: multiplier})}
                        label="Pašvaldības koeficients: "
                    />

                    <br/>

                    <BooleanInput
                        checked={state.usePointSeventMultiplier}
                        onChanged={(value) => dispatch({type: 'set-use-point-seven-multiplier', value: value})}
                        label="Izmantot koeficientu 0,702804: "
                    />
                </div>
                <h2>Izmaksas: {calculateTotalCost(state).toFixed(2)} €</h2>
            </form>
        </div>
    );
}

export { TreeCalculator }
