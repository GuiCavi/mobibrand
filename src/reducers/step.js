// The types of actions that you can dispatch to modify the state of the store
export const types = {
    CHANGE_STEP: 'CHANGE_STEP',
    NAME: 'NAME',
    STEP1: 'STEP1',
    STEP2: 'STEP2',
    STEP3: 'STEP3',
    STEP4: 'STEP4',
    STEP5: 'STEP5',
};

// Helper functions to dispatch actions, optionally with payloads
export const actionCreators = {

    changeStep: (step) => {
        return {type: types.CHANGE_STEP, payload: step};
    },
    name: (name) => {
        return {type: types.NAME, payload: name};
    },
    step1: (products) => {
        return {type: types.STEP1, payload: products};
    },
    step2: (email, phone, site, creci) => {
        return {type: types.STEP2, payload: {email, phone, site, creci}};
    },
    step3: (logo, primaryColor, secundaryColor) => {
        return {type: types.STEP3, payload: {logo, primaryColor, secundaryColor}};
    },
    step4: (model) => {
        return {type: types.STEP4, payload: model}
    },
};

// Initial state of the store
const initialState = {
    step: null,
    name: null,
    phone: null,
    email: null,
    site: null,
    creci: null,
    products: [],
    logo: null,
    primaryColor: null,
    secundaryColor: null,
    model: null
};

export default function step(state = initialState, action) {
    const {type, payload} = action;
    switch (type) {
        case types.CHANGE_STEP: {
            return {
                ...state,
                step: payload
            };
        }
        case types.NAME: {
            return {
                ...state,
                name: payload
            };
        }
        case types.STEP1: {
            return {
                ...state,
                products: payload
            };
        }
        case types.STEP2: {
            return {
                ...state,
                email: payload.email,
                phone: payload.phone,
                site: payload.site,
                creci: payload.creci
            };
        }
        case types.STEP3: {
            return {
                ...state,
                logo: payload.logo,
                primaryColor: payload.primaryColor,
                secundaryColor: payload.secundaryColor
            };
        }
        case types.STEP4: {
            return {
                ...state,
                model: payload
            };
        }

        default: {
            return state;
        }
    }
};