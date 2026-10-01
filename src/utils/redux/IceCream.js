
const buyIceCreams = "BUY_ICECREAM";
const restockIceCreams = "RESTOCK_ICECREAME";

export function BUY_ICECREAM(q) {
    return {
        type: buyIceCreams,
        payloads: q || 1
    };
}

export function RESTOCK_ICECREAME() {
    return {
        type: restockIceCreams
    };
}

const initialIceCreams = {
    numOfIce: 50
};

export const IceCreamReducer = (state = initialIceCreams, action) => {
    switch (action.type) {
        case buyIceCreams: {
            if (action.payloads > state.numOfIce) {
                return state;
            }

            return {
                numOfIce: state.numOfIce - action.payloads
            };
        }

        case restockIceCreams:
            return {
                numOfIce: 50
            };

        default:
            return state;
    }
};