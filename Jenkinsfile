pipeline{
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

                // bat """
                
                // SET "path=C:\ruta\al\directorio"  # Cambia esta ruta a la ubicación del archivo o directorio que deseas eliminar
                // SET "filename=nombre_del_archivo.txt"  # Cambia este nombre al archivo que deseas eliminar

                // IF EXIST "%path%\%filename%" (
                //     DEL /S /Q "%path%\%filename%"
                //     ECHO Archivo eliminado: %path%\%filename%
                // ) ELSE (
                //     ECHO El archivo no existe: %path%\%filename%
                // )

                // """
            }
        // }
        // stage("Build"){
        //     steps{
        //         echo "Running ${env.BUILD_ID} on ${env.JENKINS_URL}"  
        //         echo "Verifying build number: ${env.BUILD_NUMBER}"  

        //         bat "cd C:\\Users\\USUARIO\\Desktop\\proyectos\\Python\\aplicacion para entrenamiento\\exercise_app"
        //         bat "docker build -t jenkins/exercise-api:${BUILD_NUMBER} ."
        //     }
        // }
        // stage("Deploy"){
        //     steps{
        //         bat "echo 'Ha quedado listo'"
        //     }
        // }
    }
}