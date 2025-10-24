pipeline {
    agent any

    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'main', url: 'https://github.com/Pravallika617/digitalclock.git'
            }
        }

        stage('Build') {
            steps {
                echo 'Building the Digital Clock Website...'
            }
        }

        stage('Docker Build') {
            steps {
                echo 'Building Docker Image...'
                script {
                    // Build the Docker image with a custom tag
                    dockerImage = docker.build("digitalclock:latest")
                }
            }
        }

        stage('Docker Run') {
            steps {
                echo 'Running Docker Container...'
                script {
                    // Stop and remove any existing container
                    sh 'docker stop digitalclock || true'
                    sh 'docker rm digitalclock || true'

                    // Run new container
                    sh 'docker run -d --name digitalclock -p 8080:80 digitalclock:latest'
                }
                echo 'Docker container is running at http://localhost:8080'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying website files to local folder...'
                bat '''
                    mkdir C:\\Deployment
                    copy index.html C:\\Deployment\\
                    copy style.css C:\\Deployment\\
                    copy script.js C:\\Deployment\\
                '''
                echo 'Deployment successful! Open C:\\Deployment\\index.html to view the website.'
            }
        }
    }
}
