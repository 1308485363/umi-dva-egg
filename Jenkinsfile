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
                sh 'sudo docker run -d --net=host --name umi-dva-egg -v /var/lib/docker/volumes/jenkins-data/_data/workspace/umi-dva-egg:/usr/src/umi-dva-egg node/koa-server' 
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
