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
