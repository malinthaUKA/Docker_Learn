# base image
FROM node:20-alpine

# working directory - app eke thamay container eka run wenne (yt) , it is the directory inside the container where commands will be executed during the build process and runtime. , create a directory called app
WORKDIR /app  

# copy package.json 
COPY package.json .

# install dependencies
RUN npm install
# memagin package.json wala dependancies working directory ekata/container ekata install karagnna puluwan

# copy the files (<source> - docker file eka thiyena thena idan balanna one(docker file ekath ekkane project eke files thiyenne, etakota ethana thamy awashya files thiyenne/ The path of the file or directory on the host machine.) , <destination>: The path inside the Docker image where the file or directory should be copied.)
# COPY . /app - mehema liyagattata destination eka wenne workdir eke thiyena /app ekata newey, because api dan working directory eka athule inne enam app(woking dir) eka thula, ema nisa /app/app kiyana directory eka thamy hadenne (app kiyana working dir athule app kiyala destination dir ekak hadenne),  namuth apita awashya working dir eka thulata copy karagnna e wgema dn api working dir eka thula inne (api dan inne destination eke), ema nisa COPY . . 
COPY . .

# run the app )
# CMD ["node", "index.js"] 
# above command is equal to - node index.js

CMD [ "npm", "start" ]