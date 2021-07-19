FROM node:16

# Create app directory
WORKDIR /Users/gwu/VisualCode/docker

#Copy the dependencies file
COPY ./package.json ./

#Install dependencies
RUN npm install 

#Copy remaining files
COPY ./ ./

#Default command
CMD ["npm","start"]