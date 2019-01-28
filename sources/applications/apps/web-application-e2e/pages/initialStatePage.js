const I = actor();

module.exports = {
  url: `${process.env.APPLICATION_URL}/heroes`,
  rootElement: {
    id: 'initialPage'
  },
  dashboardButton: {
    id: 'linkDashBoard'
  },
  heroesButton: {
    id: 'linkHeroes'
  }
};
