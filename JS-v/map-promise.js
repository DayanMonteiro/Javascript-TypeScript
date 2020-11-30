// ex 01
;(async function() {
    const promiseFunction = async (element) => {
        return new Promise((resolve, reject) => {
            return resolve(`${element} - promise`)
        })
    }

    const itemMapped = promiseFunction('x')
    console.log(await itemMapped) // x - promise
})()

// ex 02

const items = ['a', 'b', 'c', 'd']

;(async function() {
    const promiseFunction = async (element) => {
        return new Promise((resolve, reject) => {
            return resolve(`${element} - promise`)
        })
    }

    const itemsMappedPromises = items.map(promiseFunction)

    const itemsMapped = await Promise.all(itemsMappedPromises)

    console.log(itemsMapped)
})()

/*
[ 'a - promise', 'b - promise', 'c - promise', 'd - promise' ]
*/



