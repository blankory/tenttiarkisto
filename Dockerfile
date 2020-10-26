FROM node:alpine AS tenttiarkisto-build
WORKDIR /app
COPY . .
RUN npm ci && npm run build

FROM nginx:alpine
COPY --from=tenttiarkisto-build /app/dist/tenttiarkisto /usr/share/nginx/html
EXPOSE 80