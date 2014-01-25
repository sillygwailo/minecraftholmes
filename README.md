Minecraft Holmes
==========

Read the backstory about this bot [on my notes page](http://notes.justagwailo.com/twitter/bots/minecraftholmes). TL;DR: it tweets video game titles + "Holmes", in the spirit of "Minecraft Holmes" jokes (Sherlock Holmes has a brother named Mycroft, and it sounds like the name of the popular video game Minecraft).

Requires [node](http://nodejs.org/) and [npm](http://npmjs.org/). You also need a Twitter App access token, consumer key, and associated secrets: https://dev.twitter.com/apps/new

Before running the program:

1. Add all the Twitter info to twitter.js
2. Install the following Node modules:
  * npm install xml2js
  * npm install twit
4. node minecraftholmes

Consider running the bot in the background with [forever](https://github.com/nodejitsu/forever) or [pm2](https://github.com/Unitech/pm2).
