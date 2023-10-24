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
Hi, I am Eakudompong Chanoknan. 
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
export const summary = (): Promise<string> => {
  return Promise.resolve(`
           ▄▓▓▓▓▓▓▓▓▓▓▓▓▓▓▄                 <img src="../../public/id-card-svgrepo-com.svg" alt="id card" style="height: 30px;  display: inline-block;"> summary
        ▄▓▓▀ ▄▓▓▀▓▓▓▀▓▓▄ ▀▀▓▓▄              ---------------------------
      ▓▓▀  ▄▓▀   ▐▓▓  ▀▓▓    ▓▓▄            <img src="../../public/terminal-svgrepo-com.svg" alt="terminal" style="height: 25px;  display: inline-block; "> ABOUT
    ▄▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓           <img src="../../public/user-avatar-profile-svgrepo-com.svg" alt="avatar" style="height: 20px; display: inline-block;"> ${config.name}
   ▓▓     ▓▓▓    ▐▓▓    ▐▓▓     ▓▓          <img src="../../public/report-svgrepo-com (1).svg" alt="report" style="height: 25px;  display: inline-block;"> <a href="${config.resume_url}" target="_blank" style="text-decoration: underline;">resume</a>
▐▓▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▓       <img src="../../public/world-o-svgrepo-com.svg" alt="world" style="height: 20px;  display: inline-block;"> <a href="${config.repo}" target="_blank" style="text-decoration: underline;">Github repo</a>
▐▓                                 ▐▓       ---------------------------
▐▓         > C O N N E C T         ▐▓       <img src="../../public/at-sign-svgrepo-com.svg" alt="world" style="height: 30px;  display: inline-block;"> CONTACT 
▐▓                                 ▐▓       <img src="../../public/mail-svgrepo-com (2).svg" alt="world" style="height: 30px; display: inline-block;"> <a href="mailto:${config.email}" target="_blank" style="text-decoration: underline;">${config.email}</a>
▐▓▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▓       <img src="../../public/github-svgrepo-com (1).svg" alt="github" style="height: 30px;  display: inline-block;"> <a href="https://github.com/${config.social.github}" target="_blank" style="text-decoration: underline;">github.com/${config.social.github}</a>
   ▓▓      ▐▓▓    ▓▓    ▐▓▓     ▓▓          <img src="../../public/linkedin-svgrepo-com.svg" alt="linkedin" style="height: 30px;  display: inline-block;"> <a href="https://linkedin.com/in/$" target="_blank" style="text-decoration: underline;" >linkedin.com/in/$</a>
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓           <img src="../../public/Wantedly_Mark_Wht.svg" alt="linkedin" style="height: 25px;  display: inline-block;"> <a href="https://linkedin.com/in/$" target="_blank" style="text-decoration: underline;" >linkedin.com/in/$</a>
      ▓▓▓   ▐▓▓   ▓▓   ▓▓▓   ▓▓▀            ---------------------------
        ▀▓▓▄▄ ▀▓▓▄▓▓▄▓▓▓▄▄▓▓▀               
            ▀▓▓▓▓▓▓▓▓▓▓▓▀▀                  

`);
};
// export const summary = (): string =>{
//   return`<div class="summary">
 
//   <img src="../../public/id-card-solid.svg" alt="id card" style="height: 30px;  display: inline-block;"> summary
//   -----------
//   <img src="../../public/terminal.svg" alt="terminal" style="height: 25px; width: 30px; display: inline-block; line-height: 2;"> ABOUT
//   <img src="../../public/person-svgrepo-com.svg" alt="avatar" style="height: 25px; width: 30px;  display: inline-block; line-height: 2;"> ${config.name}
//   <img src="../../public/report-svgrepo-com.svg" alt="report" style="height: 25px; width: 30px; display: inline-block; line-height: 2;"> <a href="${config.resume_url}" target="_blank">resume</a>
//   <img src="../../public/world-svgrepo-com.svg" alt="world" style="height: 25px; width: 30px; display: inline-block; line-height: 2;"> <a href="${config.repo}" target="_blank">Github repo</a>
//   -----------
//   <img src="../../public/at.svg" alt="world" style="height: 30px; display: inline-block; line-height: 2;"> CONTACT
//   <img src="../../public/email-1-svgrepo-com.svg" alt="world" style="height: 30px; display: inline-block; line-height: 2;"> <a href="mailto:${config.email}" target="_blank">${config.email}</a>
//   <img src="../../public/github.svg" alt="world" style="height: 30px; display: inline-block;" line-height: 2;> <a href="https://github.com/${config.social.github}" target="_blank">github.com/${config.social.github}</a>
//   <img src="../../public/linkedin-in.svg" alt="world" style="height: 25px; width: 25px; display: inline-block; line-height: 2;"> <a href="https://linkedin.com/in/$" target="_blank">linkedin.com/in/$</a>
// </div>
// `;
// }

// api Commands

export const readme = (): Promise<string> => {
  const result = apis.getReadme();
  return result;
};

export const projects = (): Promise<string> => {
  return Promise.resolve(apis.getProject())
    .then(data => {
      const projectInfo = data.map((d: { name: string, html_url: string }) => ` <a href="${d.html_url}" style="text-decoration: underline;" target="_blank">${d.name}</a>`).join('<br>');
      return `<p>Here are all the Repositories in my GitHub!</p>${projectInfo}`;
    })
    .catch(error => {
      throw error;
    });
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