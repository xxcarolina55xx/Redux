export const selectUser = (user) => {
    console.log("as selecionado: ", user.first);
    return {
        type: 'USER_SELECTED',
        payload: user
    }
};
