const defaultStore = {
  collapsed: false
}

const reducer = (state = defaultStore, action) => {
    switch (action.type) {
      case 'MENUFOLD':
        return { collapsed: !state.collapsed };
      default:
        return state
    }
}

export default reducer