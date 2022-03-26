"use strict";
// // lesson 10
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// let revenue: number = 1000;
// let bonus: number = 500;
// let c: string = 'sdf';
// let d: boolean = true;
// let res: number = revenue + bonus;
// // lesson 11
// function getFullName(firstName: string, surName: string): string {
// 	return `${firstName} ${surName}`
// }
// const getFullNameArrow = (firstName: string, surName: string): string => {
// 	return `${firstName} ${surName}`
// }
// // lesson 12
// function getFullName2(userEntity: { firstName: string, surName: string }): string {
// 	return `${userEntity.firstName} ${userEntity.surName}`
// }
// const user = {
// 	firstName: 'Fox',
// 	surName: 'Great',
// 	city: 'Kiev',
// 	year: 23,
// 	skils: {
// 		dev: true,
// 		devops: false
// 	}
// }
// // lesson 13(practise)
// let info: {
// 	officeId: number;
// 	isOpened: boolean;
// 	contacts: {
// 		phone: string;
// 		email: string;
// 		address: {
// 			city: string;
// 		}
// 	}
// } = {
// 	"officeId": 45,
// 	"isOpened": false,
// 	"contacts": {
// 		"phone": "+79100000000",
// 		"email": "my@email.ru",
// 		"address": {
// 			"city": "Москва"
// 		}
// 	}
// }
// lesson 14,15
// const skills: (number | string | boolean)[] = [1, 'DevOps', false, 1, true];
// const id = skills[0];
// const skillsName = skills[1];
// for (const skill of skills) {
// 	console.log(skill.toString());
// }
// const res = skills
// 	.filter(s => s !== 'DevOps')
// 	.map((skill, index) => {
// 		console.log(`${index} + ${skill}`);
// 	})
// lesson 16
// const arr: readonly [number, string] = [1, 'Dev'];
// arr[0] = 2
// console.log(arr)
// lesson 17
// const enum StatusCode {
// 	SUCCESS = 1,
// 	IN_PROCESS,
// 	FAILED
// }
// const res2 = StatusCode.SUCCESS
// const res = {
// 	message: 'Success offer',
// 	statusCode: StatusCode.SUCCESS
// }
// // 1 - success
// // 2 - in process
// // 3 - denide
// if (res.statusCode === StatusCode.SUCCESS) {
// 	console.log(' status - success')
// }
// function action(status: StatusCode) {
// }
// action(StatusCode.SUCCESS)
// action(1)
// lesson 18
var QuestStatus;
(function (QuestStatus) {
    QuestStatus["published"] = "published";
    QuestStatus["draft"] = "draft";
    QuestStatus["deleted"] = "deleted";
})(QuestStatus || (QuestStatus = {}));
// enum TagStatus {
// 	popular = 'popular',
// 	new = 'new',
// }
function getFaqs(req) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield fetch('/faqs', {
            method: 'POST',
            body: JSON.stringify(req)
        });
        const data = yield res.json();
        return data;
    });
}
