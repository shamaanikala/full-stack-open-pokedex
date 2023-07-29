# Full Stack open - Part 11 - Introduction CI/CD

## Exercise 1

After so much JavaScript and other modern tools I decided to look at a scenario with IBM Mainframe running software written in COBOL.
I have pretty much zero knowledge about IBM Mainframes and my COBOL experience isn't much more than a _Hello World!_ application.

IBM has its own COBOL-variant:
https://www.ibm.com/products/cobol-compiler-family
and I suppose it is the one used by this setup.

The IBM website is full of resources and therefore I shall try to supplement this text with links to the website with relevant information.

### Linting

#### Does COBOL need linting?

The COBOL syntax itself forces certain style rules.
Therefore one could argue that linting tool isn't that necessary.
[The IBM COBOL programming guide](https://www.ibm.com/docs/en/cobol-zos/6.4?topic=guide-preface) could help with the style.

As a side note (not counting this to the 200-300 words) there is a relevant quote from Stack Overflow Blog post [Linters aren’t in your way. They’re on your side](https://stackoverflow.blog/2020/07/20/linters-arent-in-your-way-theyre-on-your-side/) has a following [comment](https://stackoverflow.blog/2020/07/20/linters-arent-in-your-way-theyre-on-your-side/#comment-1992536) by a user named _Fyerd_:

> I LOATHE lint.
>
> Coding in a new python project using gitlab CI/CD environment. Having spent a good part of my career working on Cobol programs it just boggles my mind that the creators of lint apparently want to take modern, elegant programming languages and push them back to the Cobolesque era of obsessing about minutiae like line lengths, numbers of lines in a module, the (gasp!) presence or absence of a “trailing newline” at the end of a file, or other completely, utterly idiotic trivialities.  
> ...

### Building

COBOL is a compiled language.
Building step includes compiling the source code and linking.

[IBM resources for more information](https://www.ibm.com/docs/en/cobol-zos/6.4?topic=guide-compiling-debugging-your-program) .

### Testing

IBM has a help resource [Unit testing a COBOL program with test data](https://www.ibm.com/docs/en/developer-for-zos/9.1.1?topic=applications-unit-testing-cobol-program-test-data).

### CI Setup

The IBM claims to offer many [CI/CD related tools](https://www.ibm.com/cloud/continuous-delivery)

and offers [resources on _Continuous Integration_](https://www.ibm.com/topics/continuous-integration?mhsrc=ibmsearch_a&mhq=continuous%20integration) .

As the IBM mainframe is a modern computing environment many of the tools and utilities that run in modern environment should be usable with the setup.
And if the CI/CD pipeline is robust enough, it shouldn't be picky about from what kind of source the build was built.

### Self-hosted or cloud?

The IBM Mainframe website advertises the [hybrid cloud solution](https://www.ibm.com/z/hybrid-cloud), so either one should be possible.
