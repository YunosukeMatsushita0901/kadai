const profile = {
    firstName: 'yunosuke',
    familyName: 'matu',
    age: '21',
    hobby: '野球観戦',
    major: 'history',

}


const keys = Object.keys(profile);

for (let i = 0; i < keys.length; i = i + 1) {
    const key = keys[i];
    const text = '私の' + key + 'は' + profile[key] + 'です。'
    console.log(text);
}
