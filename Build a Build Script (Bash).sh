#!/bin/bash 

echo "Welcome User!"

firstline=$(head -n 1 source/changelog.md)

read -a splitfirstline <<< $firstline

version=${splitfirstline[1]}
echo "You are building version:" $version

echo "Please press 1 to continue or 0 to exit"
read versioncontinue

if [ $versioncontinue -eq 1 ]
then
  echo "OK"
  for filename in source/*
  do
    echo $filename
  if [ "$filename" == "source/secretinfo.md" ]
  then 
    echo "This file will not be copied" $filename
  else
    echo "Copying" $filename
    cp $filename build/.
  fi
  done
else
  echo "Please come back when you are ready"
fi

cd build
echo "Build vesion $version contains:"
ls
cd ..