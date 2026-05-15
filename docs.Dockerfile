FROM node
WORKDIR /blockwise
COPY package.json .
RUN npm install
RUN npm audit --production --audit-level=low
RUN npm audit --audit-level=critical
COPY . .
RUN git init 
RUN git remote add origin https://codeberg.org/ferdodo/blockwise.git
RUN npm run docs

FROM nginx
COPY --from=0 blockwise/docs /usr/share/nginx/html