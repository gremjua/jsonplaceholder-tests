jsonplaceholder-tests / [Exports](modules.md)

# jsonplaceholder-tests

API tests for https://jsonplaceholder.typicode.com/

## Quick Start

1. Clone this repository:
    ```sh
    git clone https://github.com/gremjua/jsonplaceholder-tests.git
    ```
1. Run the following Docker command to build the Docker image, run all tests and see results in the console:

    ```sh
    docker run -it $(docker build -q .)
    ```

    Run the following command instead if you wish to get an HTML and JUnit report at the end:

    ```sh
    docker run -v $(pwd)/reports:/home/jsonplaceholder-tests/reports -it $(docker build -q .)
    ```

    This will create a `reports` directory in the directory in which the command is executed.

## Development

This framework was developed with NodeJS, Typescript, Jest, and Supertest.

1. Install [NVM](https://github.com/nvm-sh/nvm). Then use NVM to get the supported Node version (v14.16.0) running:
    ```sh
    nvm use
    ```
    Or simply install the supported Node version [here](https://nodejs.org/dist/v14.16.0/).
1. Install dependencies by running:
    ```sh
    npm i
    ```

## Run Tests Locally

```sh
npm test
```

### Reports

After running with `npm test` reports will be generated in the `reports` directory:

-   `junit.xml`: JUnit report.
-   `jest_html_reporters.html`: HTML report.

## Modules

Go to [docs/modules.md](docs/modules.md) to see a list of the exported modules that can be used for developing tests. This documentation is generated with `Typedoc`.

## CI

A `static` analysis and a `tests` job are executed in CircleCI for every commit pushed to this repository.
Test reports are stored as artifacts for every execution of the `tests` job.

## Next Steps

The base is done, so we would need to continue adding more coverage, then negative scenarios. We could also try some contract testing.
