FROM cypress/included:4.1.0

WORKDIR /
COPY ./cypress  ./cypress
COPY  ./cypress.json  ./cypress.json
COPY  ./cypress/support/index.js   ./cypress/support/index.js 
RUN npm install -D cypress-xpath
CMD ["capital"]