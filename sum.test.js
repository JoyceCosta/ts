// const { isExportDeclaration } = require('typescript');
// const sum = require('./sum');

// test('adds 1 + 2 to equal 3', () => {
//   expect(sum(1, 2)).toBe(3);
// });

// test('object assignment', () => {
//   const data = {one: 1};
//   data['two'] = 2;
//   expect(data).toEqual({one: 1, two: 2});
// });

// // test("null", () => {
// // 	const n = null;
// // 	expect(n).toBeNull();
// // 	expect(n).toBeDefined();
// // 	expect(n).not.toBeUndefined();
// // 	expect(n).not.toBeTruthy();
// // 	expect(n).toBeFalsy();
// // });

// // test("zero", () => {
// // 	const z = 0;
// // 	expect(z).not.toBeNull();
// // 	expect(z).toBeDefined();
// // 	expect(z).not.toBeUndefined();
// // 	expect(z).not.toBeTruthy();
// // 	expect(z).toBeFalsy();
// // });

// test('there is no I in team', () => {
//   expect('team').not.toMatch(/I/);
// });

// test("the data is peanut butter", () => {
// 	return fetchData().then((data) => {
// 		expect(data).toBe("peanut butter");
// 	});
// });

// test('pra logar tem que ter senha', () => {
//    const users = {
//   username: 'Joyce',
//   senha: 134
//    }
//   expect(users).toContain(senha);
// })

test('tem que ter nome', () => {
  const person = {
		name: "Joyce",
		age: 30,
		hobbies: ["ler", "series"],
  };
  expect(person.name).toBe('Joyce');
});