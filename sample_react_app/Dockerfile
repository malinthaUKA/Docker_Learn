# Use the base image from Docker Hub
FROM node:20-alpine

# Set the working directory (me app directory ekata tamay api project eka copy karagnne)
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./
# (above) package* kiyanne e wachanen patan ganna siyalu file kiyana eka, WORKDIR /app kiyana line eka dunnama api hithanna one api dan app folder eka thulata awilla kiyala

# Install the dependencies (api package.json ekata thiyena dependencies tika install karanawa)
RUN npm install 
# (above) api localy nam mema package.json ekata thiyena dependencies tika install karanawa, e wagema api mehideeth karanna one

# copy the rest of the application files to the app
COPY . .

# dan api container eka expose karaganna one, 
# me container eka kiyanne ape lap eka athule thiyena thawath lap ekak wage, namuth api meka run karagnne main environment eke idan, main eke thiyena localhost use karala
# e nisa api run wena port eka specify karanna one(main environment ekata container eken dena port eka access karanna puluwan wenna one, enam me port eka api eliyata expose karanna one, ewita tmy eliye main computer ekata app eka access karanna puluwan wenne)
EXPOSE 5173

# api ihatha port eka expose karapu nisa apita e port eka use karala dan app eka run karaganna puluwan
CMD [ "npm", "run", "dev" ] 
