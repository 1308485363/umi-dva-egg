pipeline {
    agent {
        docker {
            image 'node:10-alpine' 
            args '-p 3000:3000' 
        }
    }
    stages {
        stage('checkout') {
            steps {
                git 'https://github.com/1308485363/umi-dva-egg'
            }
        }
    }
    stages {
        stage('Build') { 
            steps {
                sh 'npm install -g yarn' 
            }
            steps {
                sh 'yarn install --production' 
            }
        }
    }
}
