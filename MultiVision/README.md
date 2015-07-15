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
### Step #2: Initial setup for client-side using the bower
```bash
 sudo npm install -g bower --save-dev
 mkdir public
 mkdir server
 vi .bowerrc
 bower init
 bower install query --save
 bower install toastr --save # client-side notification
 bower install angular angular-resource angular-route --save
 bower install bootstrap --save
 # Now bower.json file has dependencies.
 vi bower.json
```

### Step #3: Mongodb setup
```bash
npm install mongoose --save
```

### Step #4: Creating Mongodb data
```bash
$ mongo
> use multivision
switched to db multivision
> db.messages.insert({message: 'Hello Mongo'})
> show collections
messages
system.indexes
>
```

## References
* Video author: https://github.com/joeeames/
