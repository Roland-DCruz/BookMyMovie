let movies_data = [];


const fetchData = () => {
  return fetch("https://api.tvmaze.com/search/shows?q=all")
    .then(response => response.json())
    .then(data => {
      movies_data = data;
      console.log("1: ", movies_data); 
      return movies_data;
    })
    .catch(error => {
      console.error(error);
    });
};


export default fetchData;
