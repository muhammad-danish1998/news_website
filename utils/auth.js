export const saveJWT = (jwt) => {
    window.localStorage.setItem('jwt', jwt);
    console.log('SAVED JWT');
}

export const getJWT = () => {
    return window.localStorage.getItem('jwt');
}