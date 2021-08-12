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
# build the container
docker build . -t sample-app
# Launch the container in interactive mode
docker run -it -p 8080:80 sample-app
# Launch the container in interactive mode, bypassing the start script
docker run -it -p 8080:80 sample-app sh
# security scan of the image
trivy image --ignore-unfixed sample-app
```

## development tools

[Trivy](https://aquasecurity.github.io/trivy/v0.18.0/installation/) to scan docker for vulnerabilities.

```sh
brew install aquasecurity/trivy/trivy
```
