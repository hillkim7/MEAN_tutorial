# First application using MEAN stack .
This code is following tutorial video titled 'PluralSight Building AngularJS and Node.js Apps with the MEAN Stack'.

## Procedure

### Step #1: Initial setup for server-side using the npm
```bash
mkdir MultiVision
git init
vi .gitignore
npm init
git add -A
git commit -m 'npm init'
```
### Step #1: Initial setup for client-side using the bower
```bash
 sudo npm install -g bower --save-dev
 mkdir public
 mkdir server
 vi .bowerrc
 bower init
 bower install query --save
 bower install toastr --save # client-side notification
 bower install angular angular-resource angular-route --save
 # Now bower.json file has dependencies.
 vi bower.json
```
## References
* Video author: https://github.com/joeeames/
