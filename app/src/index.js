import {Person} from "./person";

export default class MedicalExamination {
    constructor() {
    }

    /**
     * 成人かどうか
     * @returns {boolean}
     */
    isAdult() {
        const person = new Person();

        return person.getAge() >= 20;
    }

    /**
     * 利用中（受付した）人達
     * @returns {string[]}
     */
    getNumberOfPeople() {
        return ["山田", "田中", "佐藤"];
    }

    /**
     * BMI測定
     * @param height
     * @param weight
     * @returns {number}
     */
    checkBMI(height, weight) {
        return weight / height ** 2;
    }

    /**
     * 肥満指数取得（世界保健機関(WHO)の判定基準）
     * @param bmi
     * @returns {number}
     */
    getObesityIndex(bmi) {
        if (bmi < 16) return -3; // 痩せすぎ

        if (bmi < 17) return -2; // 痩せ

        if (bmi < 18.5) return -1; // 痩せぎみ

        if (bmi < 25) return 0;　// 普通体重

        if (bmi < 30) return 0.5; // 前肥満

        if (bmi < 35) return 1; // 肥満(1度)

        if (bmi < 40) return 2; // 肥満(2度)

        if (bmi >= 40) return 3; // 肥満(3度)
    }

    /**
     * 問題：personのBMI指数が普通体重以下か判定処理を作成
     * @returns {boolean}
     */
    isBMIBelowNormal() {

    }
}
