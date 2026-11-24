FROM node:latest
WORKDIR /app
COPY . .
RUN curl -fsSL https://get.example.com/install.sh | sh
RUN npm install
EXPOSE 3001
CMD ["node", "index.js"]
