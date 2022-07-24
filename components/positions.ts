function getOffset(el) {
	const rect = el.getBoundingClientRect()

	return {
		left: rect.left + window.scrollX,
		top: rect.top + window.scrollY,
		bottom: rect.bottom + window.scrollY,
		right: rect.right + window.scrollX,
	}
}

function checkPos() {
	const target = document.getElementById("target")
	const task = document.getElementById("task")
	const targetOffset = getOffset(target)
	const taskOffset = getOffset(task)

	if (
		targetOffset.top === taskOffset.top &&
		targetOffset.left === taskOffset.left &&
		targetOffset.right === taskOffset.right &&
		targetOffset.bottom === taskOffset.bottom
	) {
		return true
	}

	return false
}

export { checkPos }
