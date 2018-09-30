#!/bin/bash
if [ $# -lt 1 ];
then
  echo "Please, pass the name of the branch"
  exit 1
fi
git init .
git config user.email "leogouv@gmail.com"
git config user.name "Leonardo de Albuquerque Gouveia"
git remote add origin https://github.com/leogouveia/udacity-react-1.git
git remote -v
git checkout -b $1
git add . 
git commit -m "Initial commit"
git push -u $1
