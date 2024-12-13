## iris-unit-test-dashboard

A UI and API for testing CCDA documents against the IRIS XPath Utilities and C-CDA to SDA XSLT code base. 

## Contributors

Chi Nguyen-Rettig (LEAD North)

Shawntelle Madison-Coker (LEAD North)

## Inspiration
To create a user-friendly front-end to organize several testing utilities and methods used to facility CCD transform development

## What it does
Creates /csp/visualizer/service web app in IRIS with endpoints for XPath testing, XSLT testing, and CCD to SDA transform testing. 

<!--
It uses [swagger-ui](https://openexchange.intersystems.com/package/iris-web-swagger-ui) module to provide documentation and test environment for API.
-->

# Getting Started

## Installation with Docker 

## Prerequisites
Make sure you have [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) and [Docker desktop](https://www.docker.com/products/docker-desktop) installed.


Clone/git pull the repo into any local directory e.g. like it is shown below:

```bash
$ git clone git@github.com:LEADNorthLLC/iris-ccd-devtools.git/
```

Open the terminal in this directory and run:

```bash
$ docker-compose up -d --build
```

## Management portal: 

The management portal is available at: 
[Management portal](http://localhost:62773/csp/sys/UtilHome.csp)

```bash
Login: _system/SYS
```

## API URLs

To fetch the demonstration tests: localhost:62773/csp/unittest/service
To fetch the demonstration test results: localhost:62773/csp/unittest/service/results
To run all the tests Production: localhost:62773/csp/unittest/service/runtest

## How to Access the IRIS Terminal from Docker Terminal

Open Docker Terminal: 
```bash
docker exec -it iris-unit-test-dashboard-iris-1 bash
```

Then open IRIS terminal:
```bash
iris session IRIS
```

## Testing Dashboard UI:

The UI is served from a second container and is available after docker startup at: 

[Testing Dashboard URL](http://localhost:4000)



## REST APIs - TESTING

**Sample Data**
Sample C-CDAs from the [SyntheaMass](https://synthea.mitre.org/downloads) open-source data set have been included in the `testing/sample data` folder for unit testing. 


## Built with
Using VSCode and ObjectScript plugin, IRIS for Health Community Edition in Docker, IRIS openapi API, React.

## Collaboration 
Any collaboration is very welcome! Fork and send Pull requests!

## 

