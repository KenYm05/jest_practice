import {Person} from '../src/person'

test('日本語で「こんにちは！」が返ってくるかテスト', () => {
    const person = new Person();
    expect(person.sayHello()).toBe('こんにちは！');
});

test('英語で「Hello!!」が返ってくるかテスト', () => {
    const person = new Person();
    expect(person.sayHello()).toBe('Hellow!!');
});

// test('年齢が20歳以上であるかのテスト', () => {
// });
//
// test('身長が170未満であるかのテスト', () => {
// });
//
// test('体重が60であるかのテスト', () => {
// });