import config from '../../config.json';
import axios from 'axios';

export const getReadme = async () => {
  const { data } = await axios.get(config.readmeUrl);
  return data;
};

//TODO create interface
export const getProject = async () => {
  const { data } = await axios.get(
    `https://api.github.com/users/${config.social.github}/repos`,
  );

  return data;
};

export const getWeather = async (city: string) => {
  try {
    const { data } = await axios.get(`https://wttr.in/${city}?ATm&lang=en`);
    return data;
  } catch (error) {
    return error;
  }
};

export async function get_repo() {
  try {
    const response = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_GH_TOKEN}`, // Replace with your GitHub Personal Access Token
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `{
          user(login: "EC-9624") {
            pinnedItems(first: 6, types: REPOSITORY) {
              nodes {
                ... on RepositoryInfo  {
                  name
                  description
                  url
                  createdAt
                  updatedAt
                }
              }
            }
          }
        }`,
      }),
    });

    if (!response.ok) {
      throw new Error(
        `Failed to fetch data: ${response.status} - ${response.statusText}`,
      );
    }

    const data = await response.json();
    console.log(data.data.user.pinnedItems.nodes);
    return data.data.user.pinnedItems.nodes;
  } catch (err) {
    console.error(
      'It was not possible to get the pinned repositories from GitHub',
      err,
    );
  }
}
