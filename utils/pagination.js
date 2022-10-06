const fs = require('fs/promises');
const pagination = (array, page, limit) => {
  if (!page || !limit) {
    return array;
  }
  const dataPerPage = Math.ceil(array.length / limit);
  const startIndex = (page - 1) * dataPerPage;
  return array.slice(startIndex, startIndex + dataPerPage);
};

module.exports = pagination;
