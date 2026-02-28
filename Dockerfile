# STAGE 1: Build (Stable LTS Environment)
FROM node:22-alpine AS build
WORKDIR /app

# Cache dependencies
COPY package.json package-lock.json ./
RUN npm ci

# Copy source and build
COPY . .
# We use 'npx' to ensure we use the local project's CLI version
RUN npx ng build --configuration production

# Add this line to see the actual directory structure
RUN ls -R /app/dist

# STAGE 2: Run (Tiny Nginx Image)
FROM nginx:alpine
COPY nginx.conf /etc/nginx/nginx.conf

# IMPORTANT: Verify your project name in angular.json. 
# If 'ng new' used 'aintegrator', the path is usually:
# dist/aintegrator/browser
COPY --from=build /app/dist/aintegrator/browser /usr/share/nginx/html

EXPOSE 80