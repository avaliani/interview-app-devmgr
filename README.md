# interview-app-devmgr - interview question about enhancing a device manager


## Getting Started

To get you started you can simply clone the interview-app-devmgr repository and install the dependencies:

### Prerequisites

You need git to clone the interview-app-devmgr repository. You can get it from
[http://git-scm.com/](http://git-scm.com/).

We also use a number of node.js tools to initialize and test interview-app-devmgr. You must have node.js and
its package manager (npm) installed.  You can get them from [http://nodejs.org/](http://nodejs.org/).

### Clone interview-app-devmgr

Clone the interview-app-devmgr repository using [git][git]:

```
git clone https://github.com/avaliani/interview-app-devmgr.git
cd interview-app-devmgr
```

### Install Dependencies

We have two kinds of dependencies in this project: tools and angular framework code.  The tools help
us manage and test the application.

* We get the tools we depend upon via `npm`, the [node package manager][npm].
* We get the angular code via `bower`, a [client-side code package manager][bower].

We have preconfigured `npm` to automatically run `bower` so we can simply do:

```
npm install
```

Behind the scenes this will also call `bower install`.  You should find that you have two new
folders in your project.

* `node_modules` - contains the npm packages for the tools we need
* `app/bower_components` - contains the angular framework files

*Note that the `bower_components` folder would normally be installed in the root folder but
interview-app-devmgr changes this location through the `.bowerrc` file.  Putting it in the src folder makes
it easier to serve the files by a webserver.*

### Run the Application

We have preconfigured the project with a simple development web server.  The simplest way to start
this server is:

```
npm start
```

Now browse to the app at `http://localhost:8000`.

### Notes

This repo is a modification of the [angular seed repo](https://github.com/angular/interview-app-devmgr).

Since we use this repo for asking interview questions, please do not publish question solutions based on this repo. Instead please modify your clone locally and send us your solution as a zip file via email, drop box, drive, etc. Thank you.

Copyright Nyansa 2014

[git]: http://git-scm.com/
[bower]: http://bower.io
[npm]: https://www.npmjs.org/
[node]: http://nodejs.org
[protractor]: https://github.com/angular/protractor
[jasmine]: http://jasmine.github.io
[karma]: http://karma-runner.github.io
[travis]: https://travis-ci.org/
[http-server]: https://github.com/nodeapps/http-server
