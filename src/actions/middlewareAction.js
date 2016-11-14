export const countDownAsync = (time) => {
    return(dispatch) => {
        while(parseInt(time) != 0 ){
            time--;
            setInterval(() => dispatch(countDown(time)), 1000)
        }
    }
}
