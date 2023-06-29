export const userLoginReducer = (state = {}, action) => {
    switch (action.type) {
        case "USER_LOGIN_REQUEST":
            return { loading: true, }
        case "USER_LOGIN_SUCCESS":
            return { loading: false, userInfo: action.payload }
        case "USER_LOGIN_FAIL":
            return { loading: false, error: action.payload }
        case "USER_LOGOUT":
            return {}
        default:
            return state
    }
};

export const userRegisteReducer = (state = {}, action) => {
    switch (action.type) {
        case "USER_REGISTER_REQUEST":
            return { loading: true, }
        case "USER_REGISTER_SUCCESS":
            return { loading: false, userInfo: action.payload }
        case "USER_REGISTER_FAIL":
            return { loading: false, error: action.payload }

        default:
            return state
    }
};

export const userDetailsReducer = (state = { user: {} }, action) => {
    switch (action.type) {
        case "USER_DETAILSE_REQUEST":
            return { ...state, loading: true, }
        case "USER_DETAILSE_SUCCESS":
            return { loading: false, user: action.payload }
        case "USER_DETAILSE_FAIL":
            return { loading: false, error: action.payload }
            case "USER_DETAILSE_RESET":
                return {user: {} }
        default:
            return state
    }
};

export const userupdateProfileReducer = (state = {}, action) => {
    switch (action.type) {
        case "USER_UPDATE_PROFILE_REQUEST":
            return { loading: true, }
        case "USER_UPDATE_PROFILE_SUCCESS":
            return { loading: false, success: true, userInfo: action.payload }
        case "USER_UPDATE_PROFILE_FAIL":
            return { loading: false, error: action.payload }

        default:
            return state
    }
};