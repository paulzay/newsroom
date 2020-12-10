const articles = (state = [], action) => {
  switch (action.type) {
    case 'GET_ARTICLES':
      return action.payload.articles;
    default:
      return state;
  }
};

export default articles;
