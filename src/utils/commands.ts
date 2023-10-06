/* eslint-disable no-irregular-whitespace */
import config from '../../config.json';
export const banner = (): string => {
  return `
    
  ██████████   █████████              ████████   ████████   ████████  █████ █████ 
  ░░███░░░░░█  ███░░░░░███            ███░░░░███ ███░░░░███ ███░░░░███░░███ ░░███  
   ░███  █ ░  ███     ░░░            ░███   ░███░███   ░░░ ░░░    ░███ ░███  ░███ █
   ░██████   ░███          ██████████░░█████████░█████████    ███████  ░███████████
   ░███░░█   ░███         ░░░░░░░░░░  ░░░░░░░███░███░░░░███  ███░░░░   ░░░░░░░███░█
   ░███ ░   █░░███     ███            ███   ░███░███   ░███ ███      █       ░███░ 
   ██████████ ░░█████████            ░░████████ ░░████████ ░██████████       █████ 
  ░░░░░░░░░░   ░░░░░░░░░              ░░░░░░░░   ░░░░░░░░  ░░░░░░░░░░       ░░░░░  
                                                                                   
                                                                                                                                                            
  Type 'help' to see the list of available commands.
  Type 'sumfetch' to display summary.
  Type 'repo' or click  `;
}; //DOS Rebel

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
export const gitHub = (): string => {
  return `Opening gitHub...`;
};

export const wantedly = (): string => {
  return `Opening Wantedly...`;
};

export const linkedIn = (): string => {
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
▐▓▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▓        <u><a href="${config.resume_jp_url}" target="_blank">resume</a></u>
▐▓                                 ▐▓       爵 <u><a href="${config.repo}" target="_blank">Github repo</a></u>
▐▓                                 ▐▓       -----------
▐▓         Let's Connect!          ▐▓        CONTACT 
▐▓                                 ▐▓        <u><a href="mailto:${config.email}" target="_blank">${config.email}</a></u>
▐▓▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▓        <u><a href="https://github.com/${config.social.github}" target="_blank">github.com/${config.social.github}</a></u>
   ▓▓      ▐▓▓    ▓▓    ▐▓▓     ▓▓          
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓           -----------
      ▓▓▓   ▐▓▓   ▓▓   ▓▓▓   ▓▓▀            
        ▀▓▓▄▄ ▀▓▓▄▓▓▄▓▓▓▄▄▓▓▀               
            ▀▓▓▓▓▓▓▓▓▓▓▓▀▀                 

`);
};

// api
