pipeline{
    agent any
    tools {nodejs "my-nodejs-environ"}
    stages{
        stage("Build"){
            steps{
                nodejs("my-nodejs-environ") {
                    sh 'npm install'
                    sh 'npm run build'
                }
            }
        }
        stage("Start"){
            steps{
                nodejs("my-nodejs-environ") {
                    sh 'npm start'
                }
                echo "App started successfully"
            }
        }
    }
}