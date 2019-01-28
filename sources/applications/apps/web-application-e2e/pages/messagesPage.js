const I = actor();

module.exports = {
  url: `${process.env.APPLICATION_URL}/heroes`,
  rootElement: {
    id: 'messagesPage'
  },
  clearButton: {
    id: 'clearButton'
  }
};
