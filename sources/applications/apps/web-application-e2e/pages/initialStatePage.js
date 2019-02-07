const I = actor();

module.exports = {
  url: `${process.env.WEB_APPLICATION_DEV_URL}/demo-heroes`,
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
