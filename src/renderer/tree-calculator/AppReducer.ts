import { TreeDetails, MultiplierDetails, availableTreeMultipliers, availableTreeCuttingReasons, availableCitiesMultipliers, availableLocationMultipliers } from "./Models/Models"

interface AppState {
    trees: TreeDetails[]
    treeCuttingReason: MultiplierDetails
    cityMultiplier: MultiplierDetails
    locationMultiplier: MultiplierDetails
}

type AddTree = {
    type: 'add-tree'
}

type RemoveTree = {
    type: 'remove-tree'
    id: number
}

type SetDiameter = {
    type: 'set-diameter'
    id: number
    diameter: number
}

type SetCount = {
    type: 'set-count'
    id: number
    count: number
}

type SetTreeMultiplier = {
    type: 'set-tree-multiplier'
    id: number
    multiplierId: number
}

type SetCuttingReason = {
    type: 'set-cutting-reason'
    reasonId: number
}

type SetCityMultiplier = {
    type: 'set-city-multiplier'
    multiplierId: number
}

type SetLocationMultiplier = {
    type: 'set-location-multiplier'
    multiplierId: number
}

type AppAction = AddTree
    | RemoveTree
    | SetDiameter
    | SetCount
    | SetTreeMultiplier
    | SetCuttingReason
    | SetCityMultiplier
    | SetLocationMultiplier

function appRedcuer(state: AppState, action: AppAction): AppState {
    switch (action.type) {
        case 'add-tree':
            return { ...state, trees: [
                ...state.trees,
                TreeDetails.createDefault()
            ]}
        case 'set-diameter':
            return {
                ...state,
                trees: state.trees.map(tree => {
                    if (tree.id == action.id) {
                        return { ...tree, diameter: action.diameter }
                    } else {
                        return tree
                    }
                })        
            }
        case 'set-count':
            return {
                ...state,
                trees: state.trees.map(tree =>{
                    if (tree.id == action.id) {
                        return { ...tree, count: action.count }
                    } else {
                        return tree
                    }
                })
            }
        case 'set-tree-multiplier':
            const multiplier = availableTreeMultipliers.find(
                (multiplier) => multiplier.id === action.multiplierId
            )!

            return {
                ...state,
                trees: state.trees.map(tree =>{
                    if (tree.id == action.id) {
                        return { ...tree, multiplier: multiplier }
                    } else {
                        return tree
                    }
                })
            }
        case 'set-cutting-reason':
            const treeCuttingReason = availableTreeCuttingReasons.find(
                (reason) => reason.id == action.reasonId
            )!
            return {
                ...state,
                treeCuttingReason: treeCuttingReason
            }
        case 'remove-tree':
            return {
                ...state,
                trees: state.trees.filter(tree => tree.id != action.id)
            }

        case 'set-city-multiplier':
            const cityMultiplier = availableCitiesMultipliers.find(
                (cityMultiplier) => cityMultiplier.id == action.multiplierId
            )!

            return {
                ...state,
                cityMultiplier: cityMultiplier
            }

        case 'set-location-multiplier':
            const locationMultiplier = availableLocationMultipliers.find(
                (locationMultiplier) => locationMultiplier.id == action.multiplierId
            )!

            return {
                ...state,
                locationMultiplier: locationMultiplier
            }

    }
}
export { type AppState, type AddTree, type AppAction, type SetDiameter, appRedcuer }