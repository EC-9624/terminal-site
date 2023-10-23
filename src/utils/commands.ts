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

export const rirekisho = (): string => {
  return 'Opening japanese resume...';
};

export const repo = (): string => {
  return `repo...`;
};

//summary 
// export const summary = (): Promise<string> => {
//   return Promise.resolve(`
//            ▄▓▓▓▓▓▓▓▓▓▓▓▓▓▓▄                 summary
//         ▄▓▓▀ ▄▓▓▀▓▓▓▀▓▓▄ ▀▀▓▓▄              -----------
//       ▓▓▀  ▄▓▀   ▐▓▓  ▀▓▓    ▓▓▄            💻 ABOUT
//     ▄▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓           👤 ${config.name}
//    ▓▓     ▓▓▓    ▐▓▓    ▐▓▓     ▓▓          📰 <u><a href="${config.resume_url}" target="_blank">resume</a></u>
// ▐▓▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▓       🌐 <u><a href="${config.repo}" target="_blank">Github repo</a></u>
// ▐▓                                 ▐▓       -----------
// ▐▓         > C O N N E C T         ▐▓       @  CONTACT 
// ▐▓                                 ▐▓       📧 <u><a href="mailto:${config.email}" target="_blank">${config.email}</a></u>
// ▐▓▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▓         <u><a href="https://github.com/${config.social.github}" target="_blank">github.com/${config.social.github}</a></u>
//    ▓▓      ▐▓▓    ▓▓    ▐▓▓     ▓▓            <u><a href="https://linkedin.com/in/$" target="_blank">linkedin.com/in/$</a></u>
//     ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓           -----------
//       ▓▓▓   ▐▓▓   ▓▓   ▓▓▓   ▓▓▀            
//         ▀▓▓▄▄ ▀▓▓▄▓▓▄▓▓▓▄▄▓▓▀               
//             ▀▓▓▓▓▓▓▓▓▓▓▓▀▀                  

// `);
// };
export const summary = (): string =>{
  return`<div class="summary">
  <img src="../../public/id-card-solid.svg" alt="Your SVG Image" style="height: 30px; display: inline-block;"> summary
  
  <hr>
  <h3>💻 ABOUT</h3>
  <p>👤 ${config.name}</p>
  <p>📰 <u><a href="${config.resume_url}" target="_blank">resume</a></u></p>
  <p>🌐 <u><a href="${config.repo}" target="_blank">Github repo</a></u></p>
  <hr>
  <h3>@ CONTACT</h3>
  <p>📧 <u><a href="mailto:${config.email}" target="_blank">${config.email}</a></u></p>
  <p>  <u><a href="https://github.com/${config.social.github}" target="_blank">github.com/${config.social.github}</a></u></p>
  <p>  <u><a href="https://linkedin.com/in/$" target="_blank">linkedin.com/in/$</a></u></p>
</div>
`;
}

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
    banner:'Display the banner.',
    about:'About me.',
    github:'Open GitHub.',
    wantedly:'Open Wantedly.',
    linkedin:'Open LinkedIn.',
    email:'Display email address.',
    resume:'Open resume.',
    resume_jp:'Open Japanese resume .',
    repo:'Display GitHub repository information.',
    summary:'Display a summary.',
    readme:'Display Github readme.',
    projects:'Get projects information.',
    weather:'Get weather information for a city. Usage: weather [city]',
    help:'Display list of available commands.',
  } ;

  let commandList = '\nHi there! here are all available commands:\n\n';

  for (const command in commands) {
    commandList += `${command}: ${commands[command]}\n`;
  }

  return`
${commandList}
[tab]: trigger completion.
[ctrl+l]/clear: clear terminal.
Type 'summary' to display summary.
`
;
};