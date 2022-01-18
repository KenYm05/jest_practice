import {default as Hello} from '../src/index'

test('日本語で「こんにちは！」が返ってくるかテスト', () => {
    const hellow = new Hello();
    expect(hellow.sayHello()).toBe('こんにちは！');
});

test('英語で「Hellow!!」が返ってくるかテスト', () => {
    const hellow = new Hello();
    expect(hellow.sayHello()).toBe('Hellow!!');
});