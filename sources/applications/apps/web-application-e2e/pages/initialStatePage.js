const I = actor();

module.exports = {
  url: `${process.env.APPLICATION_URL}/demo-heroes`,
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
