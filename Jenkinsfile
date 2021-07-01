pipeline {
    agent {
        docker {
            image 'node:10-alpine' 
            args '-p 3000:3000' 
        }
    }
    stages {
        // stage('Build') { 
        //     steps {
        //         sh 'npm install' 
        //     }
        // }
        // stage('Test') { 
        //     steps {
        //         sh './jenkins/scripts/test.sh' 
        //     }
        // }
    }
}
