FROM node:16.14.2-slim@sha256:45ba6f2ca2ff66a83c9aea9b34b249219fe8c90174c310d9c906c5a99964e7ad

RUN apt-get update && apt-get install -y dumb-init && rm -rf /var/lib/apt/lists/*

ENV NODE_ENV production
USER node
WORKDIR /usr/src/app

COPY --chown=node:node package*.json /usr/src/app
RUN npm ci --only=production

COPY --chown=node:node . /usr/src/app
CMD ["dumb-init", "node", "src/index.js"]
