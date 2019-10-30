const day = parseInt(process.argv[2])

if (day % 3 === 0) {
    console.log('あなたは慎重な性格です')
} else {
    console.log('不明')
} else if (day % 3 === 2) {
    console.log('あなたは勇敢な性格です')
}