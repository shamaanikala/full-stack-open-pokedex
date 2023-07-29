# Full Stack open - Part 11 - Introduction CI/CD

## Exercise 1

After so much JavaScript and other modern tools I decided to look at a scenario with IBM Mainframe running software written in COBOL.
I have pretty much zero knowledge about IBM Mainframes and my COBOL experience isn't much more than a _Hello World!_ application.

IBM has its own COBOL-variant:
https://www.ibm.com/products/cobol-compiler-family
and I suppose it is the one used by this setup.

The IBM website is full of resources and therefore I shall try to supplement this text with links to the website with relevant information.

If the amount of available resources on their website can serve as a metric, IBM is taking DevOps quite seriously:
https://www.ibm.com/devops .

### Linting

#### Does COBOL need linting?

COBOL has a certain kind of syntax that is both beautiful and horrible in my opinion.
The syntax itself forces certain style rules.
Therefore one could argue that linting tool isn't that necessary.

A quote from Stack Overflow Blog post [Linters aren’t in your way. They’re on your side](https://stackoverflow.blog/2020/07/20/linters-arent-in-your-way-theyre-on-your-side/) has a following [comment](https://stackoverflow.blog/2020/07/20/linters-arent-in-your-way-theyre-on-your-side/#comment-1992536) by a user named _Fyerd_:

> I LOATHE lint.
>
> Coding in a new python project using gitlab CI/CD environment. Having spent a good part of my career working on Cobol programs it just boggles my mind that the creators of lint apparently want to take modern, elegant programming languages and push them back to the Cobolesque era of obsessing about minutiae like line lengths, numbers of lines in a module, the (gasp!) presence or absence of a “trailing newline” at the end of a file, or other completely, utterly idiotic trivialities.  
> ...

#### IBM COBOL Programming guide

The programming guide at:  
https://www.ibm.com/docs/en/cobol-zos/6.4?topic=guide-preface

gives some resources that are maybe a bit related to linting.

#### Visual Studio Code extension and other tools

There are several results when searching "COBOL" within VSC, but they are not from IBM and therefore I'm not sure if they would work with IBM Mainframe setup.

https://marketplace.visualstudio.com/publishers/SonarSource
claims to have COBOL linting support but the it requires some initial setup to get it working, which I'm do not try now.

There are some StackOverflow questions about linters and COBOL:

- https://sqa.stackexchange.com/questions/22681/validate-quality-cobol-code-jenkins-sonarqube-sonarlint-and-rational-topaz

- https://stackoverflow.com/questions/34748528/does-sonarlint-work-on-rdz-for-cobol-code .

Also it seems that due to the nature of the programming language the existing linters are part of some certain package.

https://en.wikipedia.org/wiki/List_of_tools_for_static_code_analysis
has four items with COBOL: Kiuwan, SonarQube, Yasca and HCL Security AppScan.

### Building

COBOL is a compiled language.
Building step includes compiling the source code and linking.

I'll just leave a link to the IBM resources for more information:
https://www.ibm.com/docs/en/cobol-zos/6.4?topic=guide-compiling-debugging-your-program

### Testing

IBM has a help resource [Unit testing a COBOL program with test data](https://www.ibm.com/docs/en/developer-for-zos/9.1.1?topic=applications-unit-testing-cobol-program-test-data).

### CI Setup - are there even Jenkins and GitHub Actions available?

As the IBM mainframe is a modern computing environment many of the tools and utilities that run in modern environment should be usable with the setup.
And if the CI/CD pipeline is robust enough, it shouldn't be picky about from what kind of source the build was built.

There is a GitHub Action [Setup COBOL](https://github.com/marketplace/actions/setup-cobol) to setup GnuCOBOL within GitHub Actions workflow so it depends on the possible integration between GitHub and IBM services if one can create GitHUb Actions with IBM COBOL.

For Jenkins there are tutorials available (at least this with Java web application)
https://developer.ibm.com/tutorials/cicd-pipeline-with-jenkins-to-deploy-multi-arch-image-on-ocp-on-linuxone-and-x86/

### Self-hosted or cloud?

The IBM Mainframe website advertises the hybrid cloud solution: https://www.ibm.com/z/hybrid-cloud, so either one is at least possible.

https://www.ibm.com/cloud/continuous-delivery

### Closing words

The IBM resources advertise heavily on migrating the old COBOL legacy code to modern environment so in case of actually building a CI/CD pipeline for this it shouldn't be a problem.

The IBM claims to offer many CI/CD related tools:  
https://www.ibm.com/cloud/continuous-delivery

and offers resources on _Continuous Integration_:  
https://www.ibm.com/topics/continuous-integration?mhsrc=ibmsearch_a&mhq=continuous%20integration .
