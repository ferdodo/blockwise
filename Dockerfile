FROM node
WORKDIR /blockwise
COPY package.json .
COPY npm-shrinkwrap.json .
RUN npm config set maxsockets 1
RUN npm install
RUN npm audit --audit-level=moderate

COPY . .
RUN npm run build

FROM nginx
COPY --from=0 blockwise/docs /usr/share/nginx/html
