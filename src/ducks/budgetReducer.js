import axios from 'axios'

const initialState = {

  purchases: [],
  budgetLimit: null,
  loading: false
}
const REQUEST_BUDGET_DATA = 'REQUEST_BUDGET_DATA'

export function requestBudgetData() {
  let data = axios.get('/api/budget-data').then(res => res.data)
  return {

    type: REQUEST_BUDGET_DATA,
    payload: data
  }

}
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case `${REQUEST_BUDGET_DATA}_PENDING`:
    console.log('pending')
      return {
        ...state,
        loading: true
      }
    case `${REQUEST_BUDGET_DATA}_FULFILLED`:
    console.log('fulfilled')
      return {
        ...state,
        purchases: action.payload.purchases,
        budgetLimit: action.payload.budgetLimit,
        loading: false
      }

    case `${REQUEST_BUDGET_DATA}_REJECTED`:
      return {
        ...state,
        loading: false
      }
    default: return state
  }

}