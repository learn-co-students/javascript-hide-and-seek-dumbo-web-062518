
function getFirstSelector(selector){
	return document.querySelector(selector)
}

function nestedTarget(){
	return document.querySelector('#nested .target')
}

function deepestChild(){
	let selector = document.getElementById('grand-node')
	while (selector.children.length){
		selector = selector.children[0]
	}
	return selector

}

function increaseRankBy(n){
	document.querySelectorAll('.ranked-list li').forEach(li => {
		let liText = Number(li.innerHTML)
		li.innerHTML = liText + n
	})
}