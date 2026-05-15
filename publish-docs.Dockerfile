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

FROM node
WORKDIR /
RUN git clone -b pages https://codeberg.org/ferdodo/blockwise.git
WORKDIR /blockwise
COPY --from=0 blockwise/docs /blockwise
RUN git add .
RUN echo 'read -p "Enter email: " email' >> /root/.bashrc
RUN echo 'git config --global user.email "$email"' >> /root/.bashrc
RUN echo 'read -p "Enter full name: " fullname' >> /root/.bashrc
RUN echo 'git config --global user.email "$fullname"' >> /root/.bashrc
RUN echo 'git commit -m "Deploying to pages"' >> /root/.bashrc
RUN echo 'git push origin pages' >> /root/.bashrc
RUN echo 'echo "Successully deployed docs to codeberg !"' >> /root/.bashrc
RUN echo 'exit 0' >> /root/.bashrc
ENTRYPOINT ["/bin/bash"]
