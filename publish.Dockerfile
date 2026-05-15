FROM node
WORKDIR /blockwise
COPY package.json .
RUN npm install
RUN npm audit --production --audit-level=low
RUN npm audit --audit-level=critical
COPY . .
RUN git init 
RUN git remote add origin https://codeberg.org/ferdodo/blockwise.git
RUN npm run build
RUN rm dist/*.test.js dist/*.test.d.ts dist/*.example.js dist/*.example.d.ts
RUN echo 'echo "\nPublish the package to npm:\n - npm login\n - npm publish\n"' >> /root/.bashrc
ENTRYPOINT ["/bin/bash"]
