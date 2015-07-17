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
### Step #5: Deploying to Heroku

#### Change listening port
#### Signup Mongolab
#### Setup mongodb in the mongolab
- Create 'multivision' database in https://mongolab.com/create
- Create DB user in https://mongolab.com/databases/multivision150717#users
- Create data in shell
```bash
$  mongo ds047632.mongolab.com:47632/multivision150717 -u <user> -p <password>
> db.messages.insert({message: 'Hello from MongoLab'})
> show collections
messages
system.indexes
> 
```
#### Modify parameter address in mongoose.connect()
```js
if (env == 'development') {
  mongoose.connect('mongodb://localhost/multivision');
} else {
  mongoose.connect('mongodb://multivisionuser:multivisionpw@ds047632.mongolab.com:47632/multivision150717');
}
```

#### Pushing to Heroku
```bash
$ heroku create  # create heroku app
$ git remote -v   # show git remotes
$ heroku apps
=== My Apps
shielded-garden-2494
$ heroku config:set NODE_ENV=production --app shielded-garden-2494
$ heroku buildpacks:set https://github.com/heroku/heroku-buildpack-nodejs --app shielded-garden-2494
$ git push heroku master
$ heroku ps:scale web=1 --app shielded-garden-2494

#### General Heroku Troubleshooting
$ heroku logs --app shielded-garden-2494

#### Managing Heroku Keys
$ ssh-keygen
$ heroku keys:add


## References
* Video author: https://github.com/joeeames/
