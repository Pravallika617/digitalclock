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
                echo 'Building Docker Image using CLI...'
                bat 'docker build -t digitalclock:latest .'
            }
        }

        stage('Docker Run') {
            steps {
                echo 'Running Docker Container using CLI...'
                bat '''
                    docker stop digitalclock || echo "No container to stop"
                    docker rm digitalclock || echo "No container to remove"
                    docker run -d --name digitalclock -p 8080:80 digitalclock:latest
                '''
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
