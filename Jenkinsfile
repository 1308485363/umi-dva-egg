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
                sh 'cd /var/jenkins_home/workspace/umi-dva-egg'
                sh 'docker build -t egg ./'
                sh 'docker stop umi-dva-egg'
                sh 'docker rm umi-dva-egg'
                sh 'docker run -d --net=host --name umi-dva-egg egg' 
                sh 'docker ps -a'
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
