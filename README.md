# Ci-Visibility For Javascript-Jest
 
## Compatibility 
Jest >= 24.8.0

Only jsdom (in package jest-environment-jsdom) and node (in package jest-environment-node) are supported as test environments. Custom environments like @jest-runner/electron/environment in jest-electron-runner are not supported.

Only jest-circus and jest-jasmine2 are supported as testRunner.

## Prerequisites
 [Install the Datadog Agent to collect tests data](https://docs.datadoghq.com/continuous_integration/setup_tests/agent/?tab=azurepipelines)

 <br/>

[Install the Javascript tracer](https://github.com/DataDog/dd-trace-js) 

Command:
```
yarn add --dev dd-trace
```
## How to Use:
Run NPM Install command
```
npm install 
```

Install jest globally to use it
```
npm install -g jest-cli
```
Run npm test command below
```
DD_ENV=ci npm test  
```

## Results:
Should be shown in datadog ci after a couple of minutes:
https://app.datadoghq.com/ci/test-runs?index=citest&start=1632627253983&end=1632630853983&paused=false

Working example output:
![image](/test.jpg)

## Documentation
https://docs.datadoghq.com/continuous_integration/setup_tests/javascript/?tab=jest 