# Stage 1: Build
FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# API key must be passed at build time — Vite bakes it into the bundle
ARG REACT_APP_YOUTUBE_API_KEY
ENV REACT_APP_YOUTUBE_API_KEY=$REACT_APP_YOUTUBE_API_KEY

RUN npm run build

# Stage 2: Serve with nginx
FROM nginx:alpine

COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
