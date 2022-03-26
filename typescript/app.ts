// // lesson 10

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



enum QuestStatus {
	published = 'published',
	draft = 'draft',
	deleted = 'deleted'
}
// enum TagStatus {
// 	popular = 'popular',
// 	new = 'new',
// }

async function getFaqs(req: {
	topicId: number;
	status: QuestStatus;
}): Promise<{
	question: string;
	answer: string;
	tags: string[];
	likes: number;
	status: QuestStatus;
}[]> {
	const res = await fetch('/faqs', {
		method: 'POST',
		body: JSON.stringify(req)
	});
	const data = await res.json();
	return data;
}