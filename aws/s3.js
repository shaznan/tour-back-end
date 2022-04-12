import aws from "aws-sdk";

//Need to get access to s3 bucket from backend first

const region = "ap-southeast-1";
const bucketname = "tour-image-upload-try";
const accessKeyId = process.env.ACCESS_KEY;
const secretAccessKey = process.env.SECRET_ACCESS_KEY;

const s3 = new aws.s3({
  region,
  accessKeyId,
  secretAccessKey,
  signatureVersion: 4,
});
