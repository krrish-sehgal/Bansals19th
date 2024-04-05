exports.getEightBansalPuzzle = (req, res, next) => {
  res.render('eight-bansal-puzzle', {
    pageTitle: 'Eight Bansal Puzzle',
    path: '/eight-bansal-puzzle'
  });
}

exports.getBansalRex = (req, res, next) => {
  res.render('bansal-rex', {
    pageTitle: 'Bansal Rex',
    path: '/bansal-rex'
  });
}

exports.getBirthdayCard = (req, res, next) => {
    res.render('birthday-card', {
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