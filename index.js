
function getFirstSelector(selector){
	return document.querySelector(selector)
}

function nestedTarget(){
	return document.querySelector('#nested .target')
}

// function deepestChild(){
// 	let selector = document.getElementById('grand-node')
// 	// selector = selector.children[0]
// 	console.log("selector!!!!!!!!!!", selector)
// 	// console.log("selector children", selector.children)
// 	// console.log("first child", selector.children[0])
// 	// console.log("children length", selector.children.length)
// 	// console.log("grandchild", selector.children[0][0])
// 	if (!!selector.children.length){
// 		return selector
// 	}
// 	while (selector.children.length){
// 		selector = selector.children[0]
// 	}
// 	return selector

// }

function deepestChild(){
	let selector = document.getElementById('grand-node')
	while (selector.children.length){
		selector = selector.children[0]
	}
	return selector

}

// function deepestChild() {
//   let node = document.getElementById('grand-node')
//   let nextNode = node.children[0]

//   while (nextNode) {
//     node = nextNode
//     nextNode = node.children[0]
//   }

//   return node
// }


function increaseRankBy(n){
	document.querySelectorAll('.ranked-list li').forEach(li => {
		let liText = Number(li.innerHTML)
		li.innerHTML = liText + n
	})
}