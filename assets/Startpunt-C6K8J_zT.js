const e=`[Installeer de nodige tools](#nodejs--npm) | [Start je project op](#je-project-opstarten) | [Projectstructuur](#structuur-van-het-project) | [Visual Studio Code Extensions](#visual-studio-code-extensions)\r
\r
Je krijgt een starterspakket voor je project.\r
\r
## Node.js & npm\r
\r
Om aan je project te kunnen bouwen, heb je ook Node.js en npm nodig.\r
\r
**Belangrijk**: npm wordt altijd samen met Node.js geïnstalleerd.\r
Als je Node.js nog niet hebt, moet je dat eerst installeren.\r
\r
Open de **terminal** van je pc en voer volgende stappen uit:\r
\r
![Cmd](/images/cmd.png)\r
\r
##### 1. Controleer of Node.js al geïnstalleerd is\r
\r
\`\`\`shell\r
    node -v\r
\`\`\`\r
\r
##### 2. Controleer of npm als geïnstalleerd is\r
\r
\`\`\`shell\r
    npm -v\r
\`\`\`\r
\r
Zie je een versienummer?\r
=> Dan zijn Node.js en npm reeds geïnstalleerd op je systeem. (Je moet dus verder niet doen.)\r
\r
Krijg je een foutmelding?\r
=> Dan moet je Node.js nog installeren. (Volg de verdere stappen.)\r
\r
##### 3. Installeer Node.js\r
\r
- Windows (Winget):\r
\r
\`\`\`shell\r
    winget install OpenJS.NodeJS.LTS\r
\`\`\`\r
\r
- macOS (Homebrew)\r
\r
\`\`\`shell\r
    brew install node\r
\`\`\`\r
\r
- Linux (apt)\r
\r
\`\`\`shell\r
    sudo apt update\r
    sudo apt install nodejs npm\r
\`\`\`\r
\r
##### 4. Controleer opnieuw je versies\r
\r
\`\`\`shell\r
    node -v\r
    npm -v\r
\`\`\`\r
\r
## Vite\r
\r
Het project werd ge-scaffold met gebruik van [Vite](https://vite.dev/guide/), een supersnelle moderne build‑tool die je ontwikkelomgeving voor webprojecten start en bundelt met minimale wachttijd.\r
\r
Je hoeft hier verder niets mee te doen.\r
Onthoud gewoon dat dit een handige tool is wanneer je snel een omgeving wil opzetten voor een ander project.\r
\r
## Je project opstarten\r
\r
Nu je alle nodige tools geïnstalleerd hebt, kan je het project voor het eerst doen draaien.\r
\r
1. Open de map in Visual Studio Code\r
2. Klik bovenaan in het menu op **Terminal** > **New Terminal**\r
   ![New Terminal](/images/new-terminal.png)\r
3. Er verschijnt nu onderaan een Terminal\r
   ![Terminal](/images/terminal-open.png)\r
4. Als deze automatisch op \`powershell\` staat, open dan een nieuwe **Command Prompt**\r
   ![Terminal](/images/terminal-cmd.png)\r
5. Controleer dat je in de root folder (StudentenProject) zit en geef het commando \`npm ci\` in en druk op <kbd>Enter</kbd>.\r
   Dit commando zorgt ervoor dat alle nodige _packages_ worden geïnstalleerd, je hoeft dit enkel te doen wanneer je het project voor de eerste keer opstart.\r
   ![Terminal](/images/terminal-npmci.png)\r
6. Wanneer het vorige commando succesvol is afgerond, geef je een nieuw commando in: \`npm run dev\` <kbd>Enter</kbd>.\r
   Dit commando zorgt ervoor dat je omgeving wordt gebouwdt en te bekijken is in je browser op het adres dat wordt getoont.\r
   Druk met <kbd>CTRL</kbd> + linkermuisklik op de URL om naar de (lokale) site van je project te gaan.\r
   ![Terminal](/images/terminal-npmrundev.png)\r
7. Je krijgt nu de startpagina van het project te zien.\r
   ![Start](/images/startvite.png)\r
\r
Wanneer je dus in het vervolg het resultaat van je project wil bekijken, moet je het opstarten met het commando \`npm run dev\` via de terminal.\r
\r
## Structuur van het project\r
\r
Het starterspakket voorziet je van een nette mappenstructuur.\r
\r
![Mappenstructuur](/images/startpunt.png)\r
\r
We bespreken kort alle folders en files die je kan zien:\r
\r
- **StudentenProject**: root folder \r
    - **node_modules**: Deze map wordt automatisch aangemaakt wanneer je \`\`npm ci\`\` uitvoert.\r
  Ze bevat alle packages en dependencies die Vite en jouw project nodig hebben. **Je verandert hier zelf nooit iets!**\r
    - **public**: Bestanden in deze map worden onbewerkt gekopieerd naar de uiteindelijke build.\r
Gebruik dit voor statische bestanden zoals afbeeldingen, lettertypes of icons die je rechtstreeks wil kunnen aanspreken.\r
        - **images**: Hier kan je afbeeldingen plaatsen die niet door Vite verwerkt moeten worden en die publiek beschikbaar mogen zijn. \r
    - **src**: Dit is de belangrijkste map van je project. Hier staat alle code die jij zelf schrijft en die Vite verwerkt.\r
        - **pages**: Hier plaats je al je aparte HTML‑pagina’s: bv. about.html, contact.html, gallery.html,… Dit houdt je project overzichtelijk.\r
        - **scripts**: In deze map komen al je JavaScript‑bestanden. Denk aan index.js, interactieve elementen, functies, modules …\r
        - **styles**: Hier komen al je CSS‑bestanden te staan. Je kan werken met één grote stylesheet of meerdere kleinere, zoals layout.css, colors.css, navigation.css, …\r
    - **.gitignore**: Dit bestand vertelt Git (versiebeheer, wij gebruiken GitHub op dit te managen) welke mappen en bestanden het moet negeren. Zo komt bv. node_modules niet mee in je repo (want die map is veel te groot en wordt automatisch opnieuw aangemaakt).\r
    - **index.html**: Dit is de pagina die opent wanneer je de website start met Vite. Van hieruit kan je doorlinken naar extra pagina’s in /src/pages. Verplaats deze niet.\r
    - **package-lock.json**: Dit bestand bewaart exact welke versies van alle dependencies geïnstalleerd zijn. Het zorgt ervoor dat iedereen die jouw project installeert exact dezelfde versies krijgt.\r
    - **package.json**: Een heel belangrijk configuratiebestand. Hierin staan alle dependencies, scripts (zoals npm run dev) en projectinformatie.Vite wordt hier als dependency vermeld.\r
    \r
Het is van groot belang dat je **nooit** zelf iets wijzigt aan *.gitignore*, *package-lock.json* en *package.json*!\r
Hoe deze bestanden zijn opgebouwd en wat ze precies doen is leerstof die wordt besproken in Web3, je hoeft je hier dus helemaal nog niet mee bezig te houden. Het is voldoende om te weten dat ze van essentiëel belang zijn voor je project en je ze best met rust laat.\r
\r
## Visual Studio Code Extensions\r
\r
Het is handig om volgende extenties te installeren in Visual Studio Code:\r
- Prettier van prettier.io`;export{e as default};
