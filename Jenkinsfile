pipeline {
    agent any

    stages {
        stage('Clone Repository') {
            steps {
                git 'https://github.com/Pravallika617/digitalclock.git'
            }
        }

        stage('Build') {
            steps {
                echo 'Building the Digital Clock Website...'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Website build completed! You can open index.html to view the clock.'
            }
        }
    }
}
