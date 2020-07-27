// *** Pretty sure this is insanely inefficient but it works and it doesn't seem to cause any problems ***
export const generateGenreMasterList = (database) => {
  // Init masterlist
  let genresMasterList = [];

  //   Extra step to turn object of book objects into array of book objects so we can map it
  const books = Object.values(database);
  // Returns array of each book's array of genres
  let rawArray = books.map((book) => {
    return book.genres;
  });

  // merges the separate arrays into one big array full of duplicates
  const mergeArrays = (rawArray) => {
    let i;
    let mergedArray = [];
    for (i = 0; i < rawArray.length; i++) {
      mergedArray = mergedArray.concat(rawArray[i]);
    }
    return mergedArray;
  };

  // ES6 to create an array without any duplicate items
  const removeArrayDuplicates = (mergedArray) => {
    return Array.from(new Set(mergedArray));
  };

  // put it all together
  genresMasterList = removeArrayDuplicates(mergeArrays(rawArray)).sort();

  return genresMasterList;
};
