# NPM Commands for Module mgt
Issue de :
https://www.tsmean.com/articles/how-to-write-a-typescript-library/


# npm init
Etape de création du package.json

''here's also one all-important flag in this package.json: You have to declare where to find the type declarations! This is done using "types": "dist/index.d.ts" Otherwise the consumer won't find your module!''

# npm pack
-- Commande de génération du .tgz à la bonne version si l'on veut faire un import local du package sans passer par npmjs
# npm version <>
npm version [<newversion> | major | minor | patch | premajor | preminor | prepatch | prerelease | from-git]

# Publish to npm
(Besoin d'avoir un compte sur npmjs.com)
avoir créé : npm adduser
To publish your first version to npm run:

>tsc

>npm publish

#### Rappel: on peut tagger un module
>npm publish --tag beta

    Commande de récupération :
    >npm install somepkg@beta

    (Cela n'impacte par la version @latest qui peut être la dernière officielle.)

------ L'ouput
npm notice === Tarball Details ===
npm notice name:          jobdone-rp
npm notice version:       1.0.9
npm notice package size:  19.2 kB
npm notice unpacked size: 98.2 kB
npm notice shasum:        0561df8b1b1f3ac1d4e18b7de1f52eb49714404e
npm notice integrity:     sha512-LZiCeDVrkygFh[...]jp8ys+G2TiEEA==
npm notice total files:   40
npm notice
+ jobdone-rp@1.0.9
-------


Now you're all set to go! Consume your library anywhere you want by running:

npm install --save jobdone-rp
ou
npm update --save jobdone-rp
------ L'ouput
>npm update --save jobdone-rp
+ jobdone-rp@1.0.9
updated 1 package and audited 3026 packages in 16.812s
found 8 vulnerabilities (2 low, 4 moderate, 2 high)
  run `npm audit fix` to fix them, or `npm audit` for details
-------



