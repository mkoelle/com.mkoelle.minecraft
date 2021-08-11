# Welcome to your CDK TypeScript project!

This is a blank project for TypeScript development with CDK.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

- `npm run build`   compile typescript to js
- `npm run watch`   watch for changes and compile
- `npm run test`    perform the jest unit tests
- `cdk deploy`      deploy this stack to your default AWS account/region
- `cdk diff`        compare deployed stack with current state
- `cdk synth`       emits the synthesized CloudFormation template

``` sh
#---------
# sets env vars for the AWS CDK based on the provided profile
# Arguments:
#   profile name (defaults to AWS_PROFILE)
#---------
function cdk-set-profile {
  profile="${1:-AWS_PROFILE}" 
  accountNumber=$(aws sts get-caller-identity --profile ${profile} --output text --query="Account")
  export CDK_DEFAULT_ACCOUNT=${accountNumber}
  export CDK_DEFAULT_REGION="us-east-1"
}
```

## Launch the server locally

```sh
cd app
docker build . -t sample-app
docker run -it -p 8080:80 sample-app
```
