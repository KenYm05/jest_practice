import {default as MedicalExamination} from "../src/index";
import {Person} from "../src/person";

test('利用人数が3人であるか', () => {
    const medical_examination = new MedicalExamination();
    expect(medical_examination.getNumberOfPeople()).toHaveLength(3);
});

test('年齢が20歳であるか', () => {
    const medical_examination = new MedicalExamination();
    expect(medical_examination.isAdult()).toBeTruthy();
});

test('利用者の中に佐藤がいるか', () => {
    const medical_examination = new MedicalExamination();
    const expected = ["佐藤"];
    expect(medical_examination.getNumberOfPeople()).toEqual(expect.arrayContaining(expected));
});

test('利用者の中に佐藤がいるか', () => {
    const medical_examination = new MedicalExamination();
    const expected = ["佐藤"];
    expect(medical_examination.getNumberOfPeople()).toEqual(expect.arrayContaining(expected));
});

test('BMIを測定し、指数が普通体重以下が返ってくることを確認', () => {

});