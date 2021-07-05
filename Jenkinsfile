pipeline {
    agent {
        docker {
            image 'node:6-alpine'
            args '-p 3000:3000'
        }
    }
    stages {
        stage('Build') { 
            steps {
                sh 'docker run -d -e EGG_SERVER_ENV=prod -p 10341:10341 -v /root/logs/umi-dva-egg/:/root/logs umi-dva-egg' 
            }
        }
        // stage('Deliver') { 
        //     steps {
        //         sh './jenkins/deliver.sh'
        //         input message: 'Finished using the web site? (Click "Proceed" to continue)'
        //     }
        // }
    }
}
