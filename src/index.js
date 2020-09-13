
// You should implement your task here.

module.exports = function towelSort(matrix) {

	if(!matrix) {
		return [];
	}

	return matrix.map((item, idx) => {
		return (idx + 1) % 2 == 0 ? item.reverse() : item;
	}).flat();
}