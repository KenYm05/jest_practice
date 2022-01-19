import {Person} from "./person";

export default class MedicalExamination {
    constructor() {
    }

    isAdult() {
        const person = new Person();

        return person.getAge() >= 20;
    }

    getNumberOfPeople() {
        return ["山田", "田中", "佐藤"];
    }
}
