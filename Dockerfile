FROM node:14.16.0

ENV BASE_URL='https://jsonplaceholder.typicode.com/'

WORKDIR /home/jsonplaceholder-tests
USER root 

ADD src /home/jsonplaceholder-tests/src
ADD tests /home/jsonplaceholder-tests/tests
ADD jest.config.js /home/jsonplaceholder-tests/jest.config.js
ADD tsconfig.json /home/jsonplaceholder-tests/tsconfig.json
ADD package.json /home/jsonplaceholder-tests/package.json
ADD package-lock.json /home/jsonplaceholder-tests/package-lock.json

RUN npm i

CMD ["npm", "test"]
