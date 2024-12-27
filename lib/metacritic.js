/* eslint-disable prettier/prettier */ 
export async function getLatestGames() {
  const API_KEY = '366194060c214dabb153ad34c3d429dd';
  const LATEST_GAMES = `https://api.rawg.io/api/games?key=${API_KEY}&dates=2019-09-01,2019-09-30&platforms=18,1,7`;

  const rawData = await fetch(LATEST_GAMES);
  const json = await rawData.json();

  return json.results.map((item) => {
      const {
          slug,
          name: title,
          released: releaseDate,
          background_image: image,
          metacritic: score,
          description_raw: description,
      } = item;

      return {
          description,
          releaseDate,
          score,
          slug,
          title,
          image,
      };
  });
}

export async function getGameDetails(slug) {
  const API_KEY = '366194060c214dabb153ad34c3d429dd';
  const GAME_DETAILS = `https://api.rawg.io/api/games/${slug}?key=${API_KEY}`;

  const rawData = await fetch(GAME_DETAILS);
  const json = await rawData.json();

  const {
      name: title,
      description_raw: description,
      metacritic: score,
      background_image: img,
      ratings = [],
  } = json;

  const reviews = ratings.map((rating) => ({
      quote: rating.title,
      score: rating.percent,
  }));

  return {
      img,
      title,
      slug,
      description,
      score,
      reviews,
  };
}
