export function createPaginationMethod() {
	return function(query = {}, offset = 0, limit = 500) {
		try{
			offset = parseInt(offset);
		}catch(err){
			offset = 0;
		}
		try{
			limit = parseInt(limit);
		}catch(err){
			limit = 500;
		}
		let Model = this;
		return new Promise((resolve, reject) => {
			Model.paginate(query, {
				offset: offset,
				limit: limit
			}, function(err, result) {
				// result.docs
				// result.total
				// result.limit - 10
				// result.offset - 20
				if (err) return reject(err);
				resolve(result);
			});
		})
	}
}