const I = actor();

module.exports = {
  url: `${process.env.APPLICATION_URL}/heroes/heroes`,
  rootElement: {
    id: 'heroesPage'
  },
  addHeroInput: {
    id: 'addHeroInput'
  },
  addButton: {
    id: 'addButton'
  },

  heroButtonWithName(heroName) {
    return {
      id: `${heroName.replace(/ /g, '')}Button`
    };
  },
  deleteButtonWithName(heroName) {
    return {
      id: `${heroName.replace(/ /g, '')}DeleteButton`
    };
  }
};
