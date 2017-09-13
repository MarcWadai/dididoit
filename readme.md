# Superpms Mobile

This is the mobile part of the project.
We are going to use hybride technologie with webpack module bundler=> Ionic.

### Installation
  - `npm install -g cordova ionic`
  - then in the root repo run npm install

### Run the application
Visualize on webpage :
- `npm run ionic:serve` or `ionic serve` ( by default the env is set to dev otherwise you need to declare `--prod` )
Visualize on native simulator (need to have a mac and xcode installed for emulate native ios and JAVA for android) :
```
- $ionic cordova emulate ios
- $ ionic cordova emulate ios -lc
- $ ionic cordova emulate android --livereload -cs
```
Other solutions is to directly go to platform folder and you can then find the source generated for each platform
You can then launch them with your favorite IDE (Xcode, Android studio, Eclipse etc)

### Build the application
 - `npm run build`

### Unit test
 - We are using karma and jasmine
 - `npm run test`
 - TODO

### Structure of the application
- src/ => source code
- config/ => separate dev and prod envirnonment variables
- www/ => build files
- platforms => different platform specific code, auto generated
