// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< SCENARIOS >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

const createScenario = (id1, id2, id3, state) => {
    return {
        id1,
        boxState1: state,
        id2,
        boxState2: state,
        id3,
        boxState3: state
    };
};

// Define all cell combinations
const allCellCombinations = [
    ["cell1", "cell2", "cell3"],
    ["cell4", "cell5", "cell6"],
    ["cell7", "cell8", "cell9"],
    ["cell1", "cell4", "cell7"],
    ["cell2", "cell5", "cell8"],
    ["cell3", "cell6", "cell9"],
    ["cell1", "cell5", "cell9"],
    ["cell3", "cell5", "cell7"]
];

// Generate scenarios for both ZERO and CROSS
export const ZERO_Success_Scenarios = allCellCombinations.map(cells => createScenario(cells[0], cells[1], cells[2], "zero"));
export const CROSS_Success_Scenarios = allCellCombinations.map(cells => createScenario(cells[0], cells[1], cells[2], "cross"));
export const ZERO_Success_Scenarios_Live = allCellCombinations.map(cells => createScenario(cells[0], cells[1], cells[2], "none"));
export const CROSS_Success_Scenarios_Live = allCellCombinations.map(cells => createScenario(cells[0], cells[1], cells[2], "none"));
