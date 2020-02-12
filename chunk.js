*/
1. Create empty array to hold chunks called "chunked"
2. For each element in the "unchunked" array:
  Retreive the last element in "chunked"
  if last element does not exist, or if its length is equal to chunk size
    push a new chunk into "chunked" with the current element
  else add the current element into the chunk
/*

function chunk(array, size) {
  const chunked = [];
  
  for (let element of array) {
    const last = chunked[chunked.length - 1];
    if (!last || last.length === size) {
      chunked.push([element]);
    } else {
      last.push(element);
    }
  }
  return chunked;
}

// examples 
// chunk([1,2,3,4], 2);
// chunk([1,2,3,4,5], 2);
// chunk([1,2,3,4,5,6,7,8], 3);
// chunk([1,2,3,4,5], 4);
// chunk([1,2,3,4,5], 10);

function chunk2(array, size) {

}
