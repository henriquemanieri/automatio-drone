
FROM cypress/internal:cy-0.19.2
WORKDIR /app

COPY cypress.json ./
COPY cypress ./cypress
