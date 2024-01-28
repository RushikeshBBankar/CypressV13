FROM cypress/included:latest
WORKDIR /app
COPY . /app
RUN npm install
RUN npx cypress verify
CMD [ "npx","cypress", "run" ]