#!/bin/bash

# Recreate config file
rm -rf ./env-config.js
touch ./env-config.js

echo "---Creating env-config.js file for dynamic environment variables---"

ENV_FILE=.env

# only if there is no .env file, do we use the .env.example file provided as a template
if [ -f $ENV_FILE ]; then
  echo "env file $ENV_FILE exists."
else
  echo "env file $ENV_FILE does not exist. Using provided defaults"
  cp .env.example .env
fi

# Add assignment
echo "window._env_ = {" >> ./env-config.js

# Read each line in .env file
# Each line represents key=value pairs
while read -r line || [[ -n "$line" ]];
do
  # Split env variables by character `=`
  if printf '%s\n' "$line" | grep -q -e '='; then
    varname=$(printf '%s\n' "$line" | sed -e 's/=.*//')
    varvalue=$(printf '%s\n' "$line" | sed -e 's/^[^=]*=//')
  fi

  # Read value of current variable if exists as Environment variable
  value=$(printf '%s\n' "${!varname}")
  # Otherwise use value from .env file
  [[ -z $value ]] && value=${varvalue}

  # Append configuration property to JS file
  echo "  $varname: \"$value\"," >> ./env-config.js
done < .env

echo "}" >> ./env-config.js

echo "---Done---"

# Alternatively the below script can also be used to perform above function

##!/bin/sh

## line endings must be \n, not \r\n !

#echo "---Creating env-config.js file for dynamic environment variables---"

#ENV_FILE=.env
#
## only if there is no .env file, do we use the .env.example file provided as a template
#if [ -f $ENV_FILE ]; then
#  echo "env file $ENV_FILE exists."
#else
#  echo "env file $ENV_FILE does not exist. Using provided default"
#  cp .env.example .env
#fi

#echo "window._env_ = {" > ./env-config.js
#awk -F '=' '{ print $1 ": \"" (ENVIRON[$1] ? ENVIRON[$1] : $2) "\"," }' ./.env >> ./env-config.js
#echo "}" >> ./env-config.js

#echo "---Done---"
