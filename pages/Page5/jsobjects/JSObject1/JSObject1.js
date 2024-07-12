export default {
	myVar1: [],
	myVar2: {},
	myFun1 () {
		//	write code here
		//	this.myVar1 = [1,2,3]
		// return moment().format("LLLL")
		setInterval(() => {
			showAlert("Hi", "info")
		}, 2500, "Int1")
	},
	async myFun2 () {
		//	use async-await or promises
		//	await storeValue('varName', 'hello world')
	}
}