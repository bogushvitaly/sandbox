const I = actor();

module.exports = {
  url: `${process.env.WEB_APPLICATION_DEV_URL}/demo-heroes/dashboard`,
  rootElement: {
    id: 'dashboardPage'
  },
  topHeroes: {
    id: 'topHeroesGrid'
  },
  searchRootElement: {
    id: 'search-component'
  },
  searchInput: {
    id: 'search-box'
  },
  searchSearchHeroResult: {
    id: 'heroSearchResult'
  },

  heroButtonWithName(heroName) {
    return {
      id: `${heroName.replace(/ /g, '')}Button`
    };
  },
  searchHeroButtonWithName(heroName) {
    return {
      id: `${heroName.replace(/ /g, '')}SearchButton`
    };
  }
};
