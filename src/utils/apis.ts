import config from '../../config.json';
import axios from 'axios';

export const getReadme = async () => {
  const { data } = await axios.get(config.readmeUrl);
  console.log(data);
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
    const { data } = await axios.get(`https://wttr.in/${city}?ATm`);
    return data;
  } catch (error) {
    return error;
  }
};
