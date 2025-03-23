pipeline {
    agent any
    environment {
        API_URL = credentials('api-url')
    }
    stages{
        stage("Pull"){
            steps{
                bat "dir"
            }
        }
    }
}