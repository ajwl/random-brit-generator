#!/bin/bash

BUCKET=random-brit-generator
BUILD_DIR=build

#import variables from .env 
USER_NAME=$(grep USER_NAME .env | cut -d '=' -f2)
ACCESS_KEY_ID=$(grep ACCESS_KEY_ID .env | cut -d '=' -f2)
SECRET_ACCESS_KEY=$(grep SECRET_ACCESS_KEY .env | cut -d '=' -f2)
REGION=$(grep REGION .env | cut -d '=' -f2)

echo "Connecting to AWS..."

aws configure --profile $USER_NAME
aws configure set aws_access_key_id $ACCESS_KEY_ID 
aws configure set aws_secret_access_key $SECRET_ACCESS_KEY
aws configure set region $REGION
 
echo "Uploading content..."

# #copy all files in build dir into the root directory located in my-s3-bucket 
aws s3 cp ${BUILD_DIR}/ s3://${BUCKET}/ --recursive