/* eslint-disable no-irregular-whitespace */
import config from '../../config.json';
import * as apis from './apis';

export const banner = (): string => {
  return `
███████╗ ██████╗               █████╗  ██████╗ ██████╗ ██╗  ██╗
██╔════╝██╔════╝              ██╔══██╗██╔════╝ ╚════██╗██║  ██║
█████╗  ██║         █████╗    ╚██████║███████╗  █████╔╝███████║
██╔══╝  ██║         ╚════╝     ╚═══██║██╔═══██╗██╔═══╝ ╚════██║
███████╗╚██████╗               █████╔╝╚██████╔╝███████╗     ██║
╚══════╝ ╚═════╝               ╚════╝  ╚═════╝ ╚══════╝     ╚═╝
                                                                 

Type 'help' to see the list of available commands.
Type 'summary' to display summary.
Type 'gui' or click <a href="https://portfolio-ec-9624.vercel.app/" target="_blank" style="text-decoration: underline;">here</a> for a gui version.`;
}; //current ANSI Shadow , old : DOS Rebel

export const about = (): string => {
  return `
Hi, I am Eakudompong Chanoknan. 
Welcome to my website!
More about me:
'summary' - short summary.
'resume' - my latest resume.
'readme' - my github readme.
`;
};

//Contact

export const gui = (): string => {
  window.open(`https://portfolio-ec-9624.vercel.app/`);
  return `Opening GUI-site...`;
};
export const github = (): string => {
  window.open(`https://www.github.com/${config.social.github}`);
  return `Opening gitHub...`;
};

export const wantedly = (): string => {
  window.open(`https://www.wantedly.com/id/${config.social.wantedly}`);
  return `Opening Wantedly...`;
};

export const linkedin = (): string => {
  window.open(`https://www.linkedin.com/in/${config.social.linkedin}`);
  return `Opening Linkedin...`;
};

export const email = (): string => {
  window.open(`mailto:${config.email}`);
  return `${config.email}`;
};

export const resume = (): string => {
  window.open(`${config.resume_url}`);
  return 'Opening resume...';
};

// export const rirekisho = (): string => {
//   window.open(`${config.resume_jp_url}`);
//   return 'Opening japanese resume...';
// };

export const repo = (): string => {
  window.open(config.repo);
  return `Opening this project repository`;
};

//summary
export const summary = (): Promise<string> => {
  return Promise.resolve(`
           ▄▓▓▓▓▓▓▓▓▓▓▓▓▓▓▄                 <img src="../../assets/svgs/id-card-svgrepo-com.svg" alt="id card" style="height: 30px;  display: inline-block;"> summary
        ▄▓▓▀ ▄▓▓▀▓▓▓▀▓▓▄ ▀▀▓▓▄              -------------------------------------------------
      ▓▓▀  ▄▓▀   ▐▓▓  ▀▓▓    ▓▓▄            <img src="../../assets/svgs/terminal-svgrepo-com.svg" alt="terminal" style="height: 25px;  display: inline-block; "> ABOUT
    ▄▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓           <img src="../../assets/svgs/user-avatar-profile-svgrepo-com.svg" alt="avatar" style="height: 20px; display: inline-block;"> ${config.name}
   ▓▓     ▓▓▓    ▐▓▓    ▐▓▓     ▓▓          <img src="../../assets/svgs/report-svgrepo-com (1).svg" alt="report" style="height: 25px;  display: inline-block;"> <a href="${config.resume_url}" target="_blank" style="text-decoration: underline;">resume</a>
▐▓▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▓       <img src="../../assets/svgs/world-o-svgrepo-com.svg" alt="world" style="height: 20px;  display: inline-block;"> <a href="${config.repo}" target="_blank" style="text-decoration: underline;">Github repo</a>
▐▓                                 ▐▓       -------------------------------------------------
▐▓         > C O N N E C T         ▐▓       <img src="../../assets/svgs/at-sign-svgrepo-com.svg" alt="at" style="height: 30px;  display: inline-block;"> CONTACT 
▐▓                                 ▐▓       <img src="../../assets/svgs/mail-svgrepo-com (2).svg" alt="mail" style="height: 30px; display: inline-block;"> <a href="mailto:${config.email}" target="_blank" style="text-decoration: underline;">${config.email}</a>
▐▓▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▓       <img src="../../assets/svgs/github-svgrepo-com (1).svg" alt="github" style="height: 30px;  display: inline-block;"> <a href="https://github.com/${config.social.github}" target="_blank" style="text-decoration: underline;">github.com/${config.social.github}</a>
   ▓▓      ▐▓▓    ▓▓    ▐▓▓     ▓▓          <img src="../../assets/svgs/linkedin-svgrepo-com.svg" alt="linkedin" style="height: 30px;  display: inline-block;"> <a href="https://linkedin.com/in/${config.social.linkedin}" target="_blank" style="text-decoration: underline;" >linkedin.com/in/${config.social.linkedin}</a>
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓           <img src="../../assets/svgs/Wantedly_Mark_Wht.svg" alt="wantedly" style="height: 25px;  display: inline-block;"> <a href="https://www.wantedly.com/id/${config.social.wantedly}" target="_blank" style="text-decoration: underline;" >wantedly.com/id/${config.social.wantedly}</a>
      ▓▓▓   ▐▓▓   ▓▓   ▓▓▓   ▓▓▀            -------------------------------------------------
        ▀▓▓▄▄ ▀▓▓▄▓▓▄▓▓▓▄▄▓▓▀               
            ▀▓▓▓▓▓▓▓▓▓▓▓▀▀                  

`);
};

// export const summary = (): string => {
//   return `

//              ,----------------,              ,---------,
//         ,-----------------------,          ,"        ,"|     <img src="../../public/id-card-svgrepo-com.svg" alt="id card" style="height: 30px;  display: inline-block;"> summary
//       ,"                      ,"|        ,"        ,"  |
//      +-----------------------+  |      ,"        ,"    |
//      |  .-----------------.  |  |     +---------+      |
//      |  |                 |  |  |     | -==----'|      |
//      |  |  $rm -R         |  |  |     |         |      |
//      |  |                 |  |  |/----| ---=    |      |
//      |  |                 |  |  |   ,/|==== ooo |      ;
//      |  |                 |  |  |  // |(((( [33]|    ,"
//      |  \`-----------------'  |," .;'| |((((     |  ,"
//      +-----------------------+  ;;  | |         |,"
//         /_)______________(_/  //'   | +---------+
//    ___________________________/___  ,
//   /  oooooooooooooooo  .o.  oooo /,   ,"-----------
//  / ==ooooooooooooooo==.o.  ooo= //   , --{)B     ,"
// /_==__==========__==_ooo__ooo=_/'   /___________,"
// -------------------------------'

// `;
// };

// api Commands

export const readme = (): Promise<string> => {
  const result = Promise.resolve(apis.getReadme()).then((data) => {
    console.log(data);
    return data;
  });
  return result;
};

export const projects = (): Promise<string> => {
  return Promise.resolve(apis.get_repo())
    .then((data) => {
      console.log(data);
      const projectInfo = data
        .map(
          (d: { name: string; url: string }) =>
            ` <a href="${d.url}" style="text-decoration: underline;" target="_blank">${d.name}</a>`,
        )
        .join('<br>');
      return `<p>Here are pinned projects on my GitHub!</p>${projectInfo}
      <p>For more porjects type 'github' or click <a href="https://github.com/EC-9624/" target="_blank" style="text-decoration: underline;">here</a></p>`;
    })
    .catch((error) => {
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
  const commands: { [key: string]: string } = {
    banner: 'Display the banner.',
    about: 'About me.',
    github: 'Open GitHub.',
    wantedly: 'Open Wantedly.',
    linkedin: 'Open LinkedIn.',
    email: 'Display email address.',
    resume: 'Open resume.',
    //rirekisho: 'Open Japanese resume .',
    repo: 'Display GitHub repository information.',
    summary: 'Display a summary.',
    readme: 'Display Github readme.',
    projects: 'Get projects information.',
    weather: 'Get weather information for a city. Usage: weather [city]',
    help: 'Display list of available commands.',
    gui: 'Open to gui version of this site',
  };

  let commandList = '\nHi there! here are all available commands:\n\n';

  for (const command in commands) {
    commandList += `${command}: ${commands[command]}\n`;
  }

  return `
${commandList}
[tab]: trigger completion.
[ctrl+l]/clear: clear terminal.
Type 'summary' to display summary.
`;
};
