exports.getEightBansalPuzzle = (req, res, next) => {
  res.render('puzzle', {
    pageTitle: 'Eight Bansal Puzzle',
    path: '/eight-bansal-puzzle'
  });
}

exports.getBansalRex = (req, res, next) => {
  res.render('bansalRex', {
    pageTitle: 'Bansal Rex',
    path: '/bansal-rex'
  });
}

exports.getBirthdayCard = (req, res, next) => {
    res.render('birthdayCard', {
        pageTitle: 'Birthday Card',
        path: '/birthday-card'
    });
}

exports.getIndex = (req, res, next) => {
    res.render('index', {
        pageTitle: 'Home',
        path: '/'
    });
}