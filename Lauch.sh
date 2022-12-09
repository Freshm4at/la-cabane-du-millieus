#!/bin/bash

#Install dependancies
npm i
cd server
npm i

#build
cd ..
npm run build

#lauch
cd /build
serve -s build > /dev/null 2>&1 & 
cd ../server
npm start > /dev/null 2>&1 & 