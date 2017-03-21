window.Seed = (function () {
  function generateVoteCount() {
    //Return random number to generate vote counts
    return Math.floor((Math.random() * 50) + 15);
  }

  const countries = [
    {
      id: 1,
      title: 'Norway',
      description: 'Norway shares a long eastern border with Sweden (1,619 km or 1,006 mi long). Norway is bordered by Finland and Russia to the north-east, and the Skagerrak Strait to the south, with Denmark on the other side. Norway has an extensive coastline, facing the North Atlantic Ocean and the Barents Sea.',
      url: 'https://en.wikipedia.org/wiki/Norway',
      votes: generateVoteCount(),
      submitterAvatarUrl: 'images/avatars/daniel.jpg',
      countryImageUrl: 'images/countries/no.png',
    },
    {
      id: 2,
      title: 'Sweden',
      description: ' Sweden is a sparsely populated country, characterised by its long coastline, extensive forests and numerous lakes. It is one of the world\'s northernmost countries.',
      url: 'https://en.wikipedia.org/wiki/Sweden',
      votes: generateVoteCount(),
      submitterAvatarUrl: 'images/avatars/kristy.png',
      countryImageUrl: 'images/countries/se.png',
    },
    {
      id: 3,
      title: 'Swizterland',
      description: 'Switzerland officially the Swiss Confederation, is a federal republic in Europe. It consists of 26 cantons, and the city of Bern is the seat of the federal authorities.',
      url: 'https://en.wikipedia.org/wiki/Switzerland',
      votes: generateVoteCount(),
      submitterAvatarUrl: 'images/avatars/helen.jpg',
      countryImageUrl: 'images/countries/ch.png',
    },
    {
      id: 4,
      title: 'Finland',
      description: 'Finland is bordered on the west by Sweden and the Gulf of Bothnia, on the north by Norway, on the east and southeast by Russia, on the south by the Gulf of Finland and on the south-west by the Baltic Sea.',
      url: 'https://en.wikipedia.org/wiki/Finland',
      votes: generateVoteCount(),
      submitterAvatarUrl: 'images/avatars/molly.png',
      countryImageUrl: 'images/countries/fi.png',
    },
  ];

  return { countries: countries };
}());
