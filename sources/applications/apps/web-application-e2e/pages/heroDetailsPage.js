const I = actor();

module.exports = {
  url: `${process.env.APPLICATION_URL}/demo-heroes/detail`,
  rootElement: {
    id: 'heroDetailsPage'
  },
  heroNameInput: {
    id: 'heroNameInput'
  },
  saveButton: {
    id: 'heroSaveButton'
  },
  backButton: {
    id: 'heroBackButton'
  },

  heroDetailPageWithId(id) {
    return `${this.url}/${id}`;
  }
};
