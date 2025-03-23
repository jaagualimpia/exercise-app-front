pipeline {
    agent any
    environment {
        API_URL = credentials('api-url')
    }
    stages{
        stage("Pull"){
            steps{
                echo "Pulling github repository"  
                pwsh "pwsh --version"
                pwsh "pwd"
                pwsh "ls"
            }
        }
    }
}