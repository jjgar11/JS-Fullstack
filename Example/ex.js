const t = [1,-1,3]
console.log(t)

t.push(5)
console.log(t.length)
console.log(t[1])

t.forEach(value => {
	console.log(value)
})

const t2 = t.concat(5)
console.log(t)
console.log(t2)

const m2 = t.map(value => value*2)
console.log(m2)

const [first, second, ...rest] = m2
console.log(first)
console.log(second)
console.log(rest)


// Objectos

const obj1 = {
	name: 'Juan Garcia',
	age: '21',
	education: 'Bachelor',
}

const obj2 = {
	name: 'Full Stack web application development',
	level: 'intermediate studies',
	size: 5,
}

const obj3 = {
	name: {
		first: 'Sara',
		last: 'Ospina',
	},
	grades: [4, 4.5, 3.5, 5],
	department: 'Electrical and Electronic Engineer',
} 

console.log(obj1.name)
const fieldName = 'age'
console.log(obj1[fieldName])

obj1.address = 'Bogota'
obj1['psswd'] = 1234
console.log(JSON.stringify(obj1))

console.log(obj3.name)


// Funciones 

const sum = (p1, p2) => {
	console.log(p1)
	console.log(p2)
	return p1+p2
}

function product(a, b) {
	return a*b
}

const average = function(a, b) {
	return (a+b)/2
}


const result = [sum(2, 5)]
result.push(product(2, 5))
result.push(average(2, 5))
console.log(result)

