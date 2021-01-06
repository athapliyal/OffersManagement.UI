
export const loginService = async (username: string, password: string) => {
    // simulate backend request
    var request = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('done');
        }, 500)
    })

    return request;
}