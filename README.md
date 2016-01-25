# Week 03 Self-Assessment

## Guidelines

- Self-assessments are meant to give you an idea of how well you understand--or can figure out--the material that you covered recently.
- You **must** submit a pull request for all self-assessments (guidelines below). Give yourself a few minutes to do this at the end of the time allotted for the assessment.
- What you see is what you get--most of the time we don't include outside libraries
- TIP: Don't take too much time writing tests that are not required, instead use your Chrome Console for a quick and easy way to test your code.


## Grading Outline

- [ attempted ] backbone-pond-view
- [ complete ] chat-client-fixme

## Self-Grading Process

After you complete each prompt, assign a grade to each item in the above Grading Outline, using this [Grading Scale](https://github.com/makersquare/student-wiki/wiki/Self-Assessments). Note your grade by editing **this file** (`README.md`), and writing your grade next to the corresponding item in the Grading Outline above. Please use the exact terms shown in the [Grading Scale](https://github.com/makersquare/student-wiki/wiki/Self-Assessments) document; do not modify or improvise them.

## Javascript Syntax Check

The file `syntaxalyze.html` is included. Open it in your browser and then drag your solution files onto the page to perform a syntax check. Fix any errors listed, then repeat the check. In order to re-check your file, you must **drag the solution file into syntaxalyze after each edit** &mdash; refreshing the page will not work. You may need to perform these steps multiple times until all the errors are fixed.

## Submitting Solutions

**VERY IMPORTANT: Before submitting your solutions, find and fix all syntax errors**

Solutions are submitted via [Pull Request](https://help.github.com/articles/using-pull-requests). Follow these steps:

1. From **your fork**, select `Pull Requests` and then create a `New pull request`.
2. STOP. *Before* you `Click to create a pull request for this comparison` you must **adjust the target branch** (aka `base branch`) to be your username. Once chagned, the pull-request heading should look like this:

  > makersquare:username ... username:master

3. Copy and **paste the completed Grading Outline into the comment block** of your Pull Request.
4. Click `Send pull request`

---

## Backbone
Complete the `pondView.js` file to create a Backbone view with the following features:

* [ ] Display a table row for each item.
* [ ] Display two columns, the name of the fish and the image for the fish. (The `image` attribute is the source URL.)
* [ ] Set up event bindings in the view such that when you change a model’s `name` attribute using `set`, the UI reflects the new name. (*NOTE* You don't need to have a UI to easily allow for name chaning. Just set up the event bindings such that it would happen. If you'd like to be able to test whether it's working, the pondView and myPond variables are available to you in the console).


## Chat Client
This repository is a chat-client built by a pair of alumni from the March '13 class. They (mostly) completed their HTML/CSS user interface, but neglected to implement a couple of features. Mostly things need to be dealt with in their `setup.js` file. Go ahead and redeem the slackers by adding at least 3/4 of the features below.

This is an exercise in reading code, so expect to spend most of your time figuring out where to make changes.

**Note!** Please make comments above your changes so we can easily find them!

* [ ] Make sent messages appear in the provided chat log immediately after the server accepts it, rather than waiting for a refresh
* [ ] Clicking 'Submit' won't actually refresh messages right now. Figure out why, and fix that!
* [ ] Create an update mechanism that's timed
* [ ] Clear out the message submit area after you submit a message.


The content of the console output of your `beautiful.coffee` file does not need to precisely match the output of `ugly.js`. After completing the minimum requirements for all assignments, feel free to show off. Can we pair seniors and juniors randomly? Can we refactor to look more CoffeeScripty? It’s up to you.
