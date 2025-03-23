pipeline {
    agent any
    environment {
        API_URL = credentials('api-url')
    }
    stages{
        stage("Pull"){
            steps{
                echo "Pulling github repository"  
                sh "pwsh --version"
                sh "pwsh pwd"
                sh "pwsh ls"
            }
        }
    }
}