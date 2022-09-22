# Tenttiarkisto

Tenttiarkisto is simple web application to search and view old (information processing science) exams. You can find live version in [tentit.blanko.fi](https://tentit.blanko.fi) url.

Project uses simple approach for backend because it use static pdf files to store exams and json file to save details of courses. 

Exams are stored in directory `assets/exams` and metadata of courses are stored in `assets/courses.json`.

Commits to master in this repository are automatically tagged, and Docker image for **tenttiarkisto** is built. 

This is image tagged as `ghcr.io/blankory/tenttiarkisto:<tag>`

## Goals
Long term goals for project is to build actual back end api that allows users to add new exams to exam database. 

Short term goal is to make user interface and data models more useful.

## Prerequisites

- [nodejs](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/)
- [angular-cli](https://github.com/angular/angular-cli)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Quick setup

If you have docker installed, you use the dockerfile in repo to quickly build and test the project.
Run `docker build -t tenttiarkisto .` from the repo to build the docker image.
Run `docker run -it --rm -p 4200:80 tenttiarkisto` to run the project.
You can access the project in browser from `http://localhost:4200/`.

Mount with custom assets

`docker run --rm -p 4200:80 -v ${PWD}/courses.json:/usr/share/nginx/html/assets/courses.json -v ${PWD}/exams:/usr/share/nginx/html/assets/exams tenttiarkisto`

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
