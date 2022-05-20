var cat = {
    legs: 4,
    name: "Гармония",
    color: "Черепаховый"
};
var kitten = Object.create(cat)
alert(kitten.name)
alert(kitten.legs)
alert(kitten.color)