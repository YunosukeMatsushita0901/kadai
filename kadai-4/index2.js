setTimeout(
    () => {
        console.log('hello')
        setTimeout(
            () => {
                console.log('bye')
            },
            2000
        )
    },
    3000
)