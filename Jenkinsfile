pipeline {
    stages {
        stage('Build') { 
            steps {
                sh 'docker run -d -e EGG_SERVER_ENV=prod -p 10341:10341 -v ~/logs/umi-dva-egg/  egg server' 
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
