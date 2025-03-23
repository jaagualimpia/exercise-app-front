pipeline{
    agent any
    environment {
        API_URL = credentials('api-url')
    }
    stages{
        stage("Build"){
            steps{
                echo "Running ${env.BUILD_ID} on ${env.JENKINS_URL}"  
                echo "Verifying build number: ${env.BUILD_NUMBER}"  

                sh "cd C:\\Users\\USUARIO\\Desktop\\proyectos\\Python\\aplicacion para entrenamiento\\exercise_app"
                sh "docker build -t jenkins/exercise-api:${BUILD_NUMBER}"
            }
        }
        stage("Deploy"){
            steps{
                sh "echo 'Ha quedado listo'"
            }
        }
    }
}