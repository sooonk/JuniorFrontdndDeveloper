const makeSound = function (name, lastname) {
    console.log(this.sound + ' ' + name + ' ' + lastname)
}

const cat = {
    name: 'Fluffy',
    sound: 'Miauuu',
    makeSound: makeSound
}

makeSound.apply(cat, ['Mateusz', 'Choma'])
makeSound.call(cat, 'Mateusz', 'Choma')

makeSound.apply({ sound: 'Wooff' }, ['Mateusz', 'Choma'])
makeSound.call({ sound: 'Wooff' }, 'Mateusz', 'Choma')

makeSound('Mateusz', 'Choma')
cat.makeSound('Mateusz', 'Choma')

const bindedToCatMakeSound = makeSound.bind(cat)
bindedToCatMakeSound('Mateusz', 'Choma')