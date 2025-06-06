FROM node
WORKDIR /blockwise
COPY package.json .
RUN npm config set maxsockets 1
RUN npm install
RUN npm audit --production --audit-level=low
RUN npm audit --audit-level=critical

COPY . .
RUN npm run build

FROM node AS publish
WORKDIR /blockwise
COPY --from=0 /blockwise/package.json .
COPY --from=0 /blockwise/dist dist
RUN rm dist/*.test.js dist/*.test.d.ts dist/*.example.js dist/*.example.d.ts
ENTRYPOINT ["/bin/bash"]

FROM nginx
COPY --from=0 blockwise/docs /usr/share/nginx/html
