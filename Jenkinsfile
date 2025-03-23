pipeline {
    agent any
    environment {
        API_URL = credentials('api-url')
    }
    stages{
        stage("Build"){
            steps{
                bat "dir"
                bat "docker ps"
                bat "docker build -t jenkins/exercise-api:${BUILD_NUMBER} ."

            }
        }
    }
}