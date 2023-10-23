/* eslint-disable no-irregular-whitespace */
import config from '../../config.json';
import * as apis from './apis';


export const banner = (): string =>{
  return`
███████╗ ██████╗               █████╗  ██████╗ ██████╗ ██╗  ██╗
██╔════╝██╔════╝              ██╔══██╗██╔════╝ ╚════██╗██║  ██║
█████╗  ██║         █████╗    ╚██████║███████╗  █████╔╝███████║
██╔══╝  ██║         ╚════╝     ╚═══██║██╔═══██╗██╔═══╝ ╚════██║
███████╗╚██████╗               █████╔╝╚██████╔╝███████╗     ██║
╚══════╝ ╚═════╝               ╚════╝  ╚═════╝ ╚══════╝     ╚═╝
                                                                 

Type 'help' to see the list of available commands.
Type 'sumfetch' to display summary.
Type 'repo' or click `;
} //current ANSI Shadow , old : DOS Rebel

export const about = (): string => {
  return `
Hi, I am EC-9624. 
Welcome to my website!
More about me:
  'sumfetch' - short summary.
  'resume' - my latest resume.
  'readme' - my github readme.
`;
};

//Contact
export const github = (): string => {
  return `Opening gitHub...`;
};

export const wantedly = (): string => {
  return `Opening Wantedly...`;
};

export const linkedin = (): string => {
  return `Opening Linkedin...`;
};

export const email = (): string => {
  return `email@email.com`;
};

export const resume = (): string => {
  return 'Opening resume...';
};

export const resume_jp = (): string => {
  return 'Opening resume_jp...';
};

export const repo = (): string => {
  return `repo...`;
};

//summary 
export const sumfetch = (): Promise<string> => {
  return Promise.resolve(`
           ▄▓▓▓▓▓▓▓▓▓▓▓▓▓▓▄                  sumfetch
        ▄▓▓▀ ▄▓▓▀▓▓▓▀▓▓▄ ▀▀▓▓▄              -----------
      ▓▓▀  ▄▓▀   ▐▓▓  ▀▓▓    ▓▓▄             ABOUT
    ▄▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓            ${config.name}
   ▓▓     ▓▓▓    ▐▓▓    ▐▓▓     ▓▓           <u><a href="${config.resume_url}" target="_blank">resume</a></u>
▐▓▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▓       爵 <u><a href="${config.repo}" target="_blank">Github repo</a></u>
▐▓                                 ▐▓       -----------
▐▓        > L I V E T E R M        ▐▓        CONTACT 
▐▓                                 ▐▓        <u><a href="mailto:${config.email}" target="_blank">${config.email}</a></u>
▐▓▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▓        <u><a href="https://github.com/${config.social.github}" target="_blank">github.com/${config.social.github}</a></u>
   ▓▓      ▐▓▓    ▓▓    ▐▓▓     ▓▓           <u><a href="https://linkedin.com/in/$" target="_blank">linkedin.com/in/$</a></u>
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓           -----------
      ▓▓▓   ▐▓▓   ▓▓   ▓▓▓   ▓▓▀            
        ▀▓▓▄▄ ▀▓▓▄▓▓▄▓▓▓▄▄▓▓▀               
            ▀▓▓▓▓▓▓▓▓▓▓▓▀▀                  

`);
};
// api Commands

export const readme = (): Promise<string> => {
  const result = apis.getReadme();
  return result;
};

export const projects = (): Promise<string> => {
  const result = apis.getProject();
  return result;
};

//weather

export const weather = async (args: string[]): Promise<string> => {
  const city = args.join('+');

  if (!city) {
    return 'Usage: weather [city]. Example: weather casablanca';
  }

  const result = await apis.getWeather(city);
  return result;
};

//help

export const help = (): string => {
  const commands : {[key : string] : string} = {
    banner: 'Display the banner.',
    about: 'Display information about you.',
    github: 'Open GitHub.',
    wantedly: 'Open Wantedly.',
    linkedin: 'Open LinkedIn.',
    email: 'Display your email address.',
    resume: 'Open your resume.',
    resume_jp: 'Open your Japanese resume.',
    repo: 'Display information about your GitHub repository.',
    sumfetch: 'Display a summary.',
    readme: 'Get the readme from your GitHub repository.',
    projects: 'Get information about your projects.',
    weather: 'Get weather information for a city. Usage: weather [city]',
    help: 'Display this list of available commands.',
  } ;

  let commandList = 'Hi there ! here are all available commands:\n\n';

  for (const command in commands) {
    commandList += `${command}: ${commands[command]}\n`;
  }

  return commandList;
};