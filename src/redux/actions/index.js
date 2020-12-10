const runFetch = async () => {
  const response = await fetch('https://newsapi.org/v2/everything?q=apple&from=2020-12-09&to=2020-12-09&sortBy=popularity&apiKey=8e0169866fd8431f90d7b47db1e32791');
  const payload = await response.json();
  return payload;
};

export const fetchData = () => dispatch => {
  runFetch().then(payload => {
    dispatch({
      type: 'GET_ARTICLES',
      payload,
    });
  });
};

export default fetchData;

